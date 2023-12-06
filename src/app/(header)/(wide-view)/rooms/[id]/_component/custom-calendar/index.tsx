import React, { useState, ReactElement, useEffect, useRef } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './customCalendar.module.scss';
import moment, { Moment } from 'moment';
import { TCustomCalendar } from './customCalendarType';

function CustomCalendar({
  onChange,
  value,
  valueSecond,
  type,
}: TCustomCalendar): ReactElement {
  const [nowDate, setNowDate] = useState<string | null>(type);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isFirst, setIsFirst] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  const handleDateChange = (
    value: Date,
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    onChange(value);
    setIsOpen(false);
    if (value) {
      setNowDate(moment(value as Date | Moment).format('YYYY년 MM월 DD일'));
    }
  };

  const tileDisabled = ({ date }: { date: Date }) => {
    if (date.toDateString() === value.toDateString()) {
      return true;
    }
    if (valueSecond) {
      return date < value;
    }
    return date < new Date();
  };
  useEffect(() => {
    if (valueSecond && isFirst) {
      setNowDate(
        moment(valueSecond as Date | Moment).format('YYYY년 MM월 DD일'),
      );
    }
    setIsFirst(true);
  }, [value, valueSecond]);

  useEffect(() => {
    window.addEventListener('click', (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const targetClassName = target.className;
      if (typeof targetClassName === 'object') {
        return;
      }
      if (target && targetClassName?.includes('react-calendar') || targetClassName?.includes('customCalendar_DropdownButton__b_Z_7')) {
        return;
      }
      setIsOpen(false);
    });
  }, []);
  return (
    <div className={styles.CalendarContainer}>
      <div
        className={`${styles.DropdownButton} ${
          type === '체크인' ? '' : styles.checkout
        }`}
        onClick={handleToggleCalendar}
        suppressHydrationWarning={true}>
        {nowDate}
      </div>
      <div
        ref={modalRef}
        className={`${styles.CalendarWrapper} ${isOpen ? '' : styles.hide}`}>
        <Calendar
          locale="en"
          onChange={(value, e) => {
            handleDateChange(value as Date, e);
          }}
          value={valueSecond ? valueSecond : value}
          tileDisabled={tileDisabled}
          formatDay={(locale, date) => moment(date).format('DD')}></Calendar>
      </div>
    </div>
  );
}

export default CustomCalendar;
