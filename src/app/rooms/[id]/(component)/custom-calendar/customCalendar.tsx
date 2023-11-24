import React, { useState, ReactElement } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './customCalendar.module.scss';
import moment, { Moment } from 'moment';

interface CustomCalendarProps {
    onChange: (selectedDate: Date | Date[] | null) => void;
    value: Date;
    type: string;
  }

function CustomCalendar({
  onChange,
  value,
  type,
}: CustomCalendarProps): ReactElement {
  const [nowDate, setNowDate] = useState<string | null>('체크인');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const handleDateChange = (selectedDate: Date | Date[] | null) => {
    onChange(selectedDate);
    setIsOpen(false);
    if (selectedDate) {
      setNowDate(
        moment(selectedDate as Date | Moment).format('YYYY년 MM월 DD일'),
      );
    }
  };
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
      <div className={`${styles.CalendarWrapper} ${isOpen ? '' : styles.hide}`}>
        <Calendar onChange={handleDateChange} value={value}></Calendar>
      </div>
    </div>
  );
}

export default CustomCalendar;
