'use client';
import React, { useState, useEffect } from 'react';
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
import { AxiosError } from 'axios';
import { RESPONSE_CODE } from 'src/constants/api';
import Swal from 'sweetalert2';
import {
  TReservation,
  TReservationForm,
  TReservationEvent,
  TCheckValue,
} from './reservationType';
import { Value } from '../custom-calendar/customCalendarType';
import { DAY_SECOND, ZERO } from '@/constants/rooms';

function Reservation({ price, params, data }: TReservation) {
  const currentDate = new Date();
  const nextDate = new Date(currentDate);
  nextDate.setDate(currentDate.getDate() + 1);
  nextDate.setHours(0, 0, 0, 0);
  const [value, onChange] = useState<Value>(currentDate);
  const [valueSecond, onChangeSecond] = useState<Value>(nextDate);
  const [selectedOption, setSelectedOption] = useState<number>(1);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [day, setDay] = useState(1);
  const [product, setProduct] = useRecoilState(productState);
  const router = useRouter();
  const [modalType, setModalType] = useState('');
  const handleChangeSelect = (event: TReservationEvent) => {
    setSelectedOption(Number(event.target.value));
  };
  function checkLogin() {
    const token = sessionStorage.getItem('accessToken');
    if (token === null) {
      Swal.fire({
        title: '로그인 후 이용하실수 있습니다.',
        icon: 'info',
        confirmButtonText: '확인',
      }).then((result)=>{
        if (result.isConfirmed){
          router.push('/sign-in');
        }
      });
      return false;
    }
    return true;
  }
  async function addCartItem() {
    if (day === ZERO) {
      Swal.fire({
        title: '체크인 날짜와 체크아웃 날짜를 확인해주세요',
        icon: 'info',
        confirmButtonText: '확인',
      });
      return;
    }
    const startDate = moment(value).format('YYYY-MM-DD');
    const endDate = moment(valueSecond).format('YYYY-MM-DD');
    try {
      const res = await ROOMS_API.checkReservation({
        startDate,
        endDate,
        id: params,
      });
    } catch (error: unknown) {
      Swal.fire({
        title: '예약이 불가능한날짜입니다. 날짜를 다시 선택해주세요',
        icon: 'info',
        confirmButtonText: '확인',
      });
      return;
    }
    const productData = {
      accommodation_id: Number(params),
      name: data.accommodation_name,
      address: data.address,
      start_date: startDate,
      end_date: endDate,
      people: selectedOption,
      cart_price: price * day,
      accommodation_img: data.accommodation_img,
    };
    try {
      await ROOMS_API.addCart(productData);
      setModalType('success');
      if (!modalOpen) {
        setModalOpen((prev) => !prev);
        setTimeout(() => {
          setModalOpen(false);
        }, 2500);
      }
    } catch (error: any) {
      if (error.response.status === 403) {
        setModalType('failure');
        setModalOpen((prev) => !prev);
        setTimeout(() => {
          setModalOpen(false);
        }, 2500);
        return;
      }
      setModalType('MAXCART');
      setModalOpen((prev) => !prev);
      setTimeout(() => {
        setModalOpen(false);
      }, 2500);
    }
  }
  function needAuth(callback: () => void) {
    if (checkLogin()) {
      callback();
    }
  }
  async function handleCartClick() {
    needAuth(addCartItem);
  }
  async function handleClickReservation({
    value,
    valueSecond,
    id,
    data,
    selectedOption,
  }: TReservationForm) {
    const token = sessionStorage.getItem('accessToken');
    needAuth(async () => {
      if (day === 0) {
        Swal.fire('체크인 날짜와 체크아웃 날짜를 확인해주세요');
        return;
      }
      const startDate = moment(value).format('YYYY-MM-DD');
      const endDate = moment(valueSecond).format('YYYY-MM-DD');
      try {
        const res = await ROOMS_API.checkReservation({
          startDate,
          endDate,
          id,
        });
        if (res.data.code === RESPONSE_CODE.AVAILABLE_DATE) {
          const productData = [
            {
              accommodation_name: data.accommodation_name,
              address: data.address,
              accommodation_price: price * day,
              accommodation_img: data.accommodation_img,
              start_date: startDate,
              end_date: endDate,
              accommodation_id: id,
              people_number: selectedOption,
              cart_id: 0,
            },
          ];
          setProduct(productData);
          router.push('/reservation');
        }
      } catch (error: AxiosError | unknown) {
        if (
          error instanceof AxiosError &&
          error.response?.data?.code === RESPONSE_CODE.UNAVAILABLE_DATE
        ) {
          Swal.fire('예약이 불가능한 날짜입니다. 다시 선택해주세요.');
        }
        Swal.fire('예약이 불가능한 날짜입니다. 다시 선택해주세요.');
      }
    });
  }
  function isNaturalNumber(value: TCheckValue) {
    return Number.isInteger(value) && value >= 0;
  }

  const calculatedDay = Math.floor(
    (Number(valueSecond) - Number(value)) / DAY_SECOND,
  );
  useEffect(() => {
    if (isNaturalNumber(calculatedDay)) {
      setDay(calculatedDay);
    }
  }, [calculatedDay]);

  useEffect(() => {
    if (value >= valueSecond) {
      const nextDate = new Date(value);
      nextDate.setDate(nextDate.getDate() + 1);
      onChangeSecond(nextDate);
    }
  }, [value, valueSecond]);

  return (
    <div className={styles.Reservation}>
      <div className={styles.dailyPriceBox}>
        <div className={styles.dailyPrice}>
          <Text
            fontSize="md"
            fontWeight="semibold">{`₩${price.toLocaleString()}`}</Text>
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
        <Button onClick={handleCartClick} variant="secondary">
          <div className={styles.shoppingCart}>
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
      <div>{modalOpen && <CartModal type={modalType} />}</div>
      <div>
        <div className={styles.amountBox}>
          <Text fontSize="xs-3" fontWeight="normal" color="primary">
            결제 예상 금액:
          </Text>
          <div className={styles.amount}>
            <Text fontSize="xs" fontWeight="semibold" color="highlight">{`₩${(
              price * day
            ).toLocaleString()}`}</Text>
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
