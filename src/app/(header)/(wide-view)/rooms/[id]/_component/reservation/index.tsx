'use client';
import React, { useState } from 'react';
import styles from './reservation.module.scss';
import Text from '@/components/atoms/text';
import 'react-calendar/dist/Calendar.css';
import CustomCalendar from '../custom-calendar';
import Button from '@/components/atoms/button';
import { MdOutlineShoppingCart } from 'react-icons/md';
import CartModal from '../cart-modal/cartModal';
import { ROOMS_API } from '@/api/rooms';
import moment from 'moment';
import { productState } from '@/recoil/order';
import { useRecoilState } from 'recoil';
import { useRouter } from 'next/navigation';
import {
  TReservation,
  TReservationForm,
  TReservationEvent,
} from './reservationType';
import { Value } from '../custom-calendar/customCalendarType';
function Reservation({ price, params, data }: TReservation) {
  const [value, onChange] = useState<Value>(new Date());
  const [valueSecond, onChangeSecond] = useState<Value>(new Date());
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);
  const [day, setDay] = useState(0);
  const [product, setProduct] = useRecoilState(productState);
  const router = useRouter();
  const handleChangeSelect = (event: TReservationEvent) => {
    setSelectedOption(Number(event.target.value));
  };
  function handleCartClick() {
    if (!modalOpen) {
      setModalOpen((prev) => !prev);
      setTimeout(() => {
        setModalOpen(false);
      }, 2500);
    }
  }
  async function handleClickReservation({
    value,
    valueSecond,
    id,
    data,
    selectedOption,
  }: TReservationForm) {
    const startDate = moment(value).format('YYYY-MM-DD');
    const endDate = moment(valueSecond).format('YYYY-MM-DD');
    const res = await ROOMS_API.checkReservation({ startDate, endDate, id });
    if (res.data.code === 2001 && data) {
      const productData = {
        accommodation_name: data.accommodation_name,
        adress: data.address,
        accommodation_price: data.accommodation_price,
        accommodation_img: data.accommodation_img,
        start_date: startDate,
        end_date: endDate,
        accommodation_id: id,
        people: selectedOption,
      };
      setProduct(productData);
      router.push('/reservation');
    } else {
      alert('예약이 불가능한 날짜입니다. 다시 선택해주세요.');
    }
  }
  return (
    <div className={styles.Reservation}>
      <div className={styles.dailyPriceBox}>
        <div className={styles.dailyPrice}>
          <Text fontSize="md" fontWeight="semibold">{`₩${price}`}</Text>
        </div>
        <div className={styles.daily}>
          <Text fontSize="xs-2" fontWeight="normal">
            /박
          </Text>
        </div>
      </div>
      <div>
        <div className={styles.inputDate}>
          <CustomCalendar onChange={onChange} value={value} type="체크인" />
          <CustomCalendar
            onChange={onChangeSecond}
            value={value}
            valueSecond={valueSecond}
            type="체크아웃"
          />
        </div>
        <div>
          <select
            className={styles.select}
            value={selectedOption}
            onChange={handleChangeSelect}>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </div>
      </div>
      <div className={styles.reservationButtonBox}>
        <Button variant="secondary">
          <div className={styles.shoppingCart} onClick={handleCartClick}>
            <MdOutlineShoppingCart />
          </div>
        </Button>
        <Button
          variant="default"
          size="md"
          onClick={() => {
            handleClickReservation({
              value,
              valueSecond,
              id: params,
              data,
              selectedOption,
            });
          }}>
          <Text color="white" fontSize="xs" fontWeight="semibold">
            예약하기
          </Text>
        </Button>
      </div>
      <div>{modalOpen && <CartModal />}</div>
      <div>
        <div className={styles.amountBox}>
          <Text fontSize="xs-3" fontWeight="normal" color="primary">
            결제 예상 금액:
          </Text>
          <div className={styles.amount}>
            <Text
              fontSize="xs"
              fontWeight="semibold"
              color="highlight">{`₩${amount}`}</Text>
          </div>
          <div className={styles.day}>
            <Text
              fontSize="xs-2"
              fontWeight="normal"
              color="highlight">{`/${day}박`}</Text>
          </div>
        </div>
        <Text fontSize="xs-3" fontWeight="normal">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </Text>
      </div>
    </div>
  );
}

export default Reservation;
