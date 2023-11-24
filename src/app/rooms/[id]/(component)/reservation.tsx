'use client';
import React, { useState } from 'react';
import styles from './reservation.module.scss';
import Text from '@/components/text';
import 'react-calendar/dist/Calendar.css';
import CustomCalendar from './custom-calendar/customCalendar';
import Button from '@/components/button';
import { MdOutlineShoppingCart } from 'react-icons/md';


function Reservation({ price }: { price: string }) {
  const [value, onChange] = useState(new Date());
  const [valueSecond, onChangeSecond] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

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
            value={valueSecond}
            type="체크아웃"
          />
        </div>
        <div>
          <select
            className={styles.select}
            value={selectedOption}
            onChange={handleChange}>
            <option value="1">1명</option>
            <option value="2">2명</option>
            <option value="3">3명</option>
            <option value="4">4명</option>
          </select>
        </div>
      </div>
      <div className={styles.reservationButtonBox}>
        <Button variant="secondary">
          <div className={styles.shoppingCart}>
            <MdOutlineShoppingCart />
          </div>
        </Button>
        <Button variant="default" size="md">
          <Text color="white" fontSize="xs" fontWeight="semibold">
            예약하기
          </Text>
        </Button>
      </div>
      <div>
        <Text fontSize="xs-3" fontWeight="normal">
          예약 확정 전에는 요금이 청구되지 않습니다.
        </Text>
      </div>
    </div>
  );
}

export default Reservation;
