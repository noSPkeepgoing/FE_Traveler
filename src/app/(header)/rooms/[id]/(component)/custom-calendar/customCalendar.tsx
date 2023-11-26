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
  const [nowDate, setNowDate] = useState<string | null>(type);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
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
  const tileDisabled = ({ date }: { date: Date }) => {
    if (date.toDateString() === new Date().toDateString()) {
      return false;
    }
    return date < new Date();
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
        <Calendar
          locale="en"
          onChange={handleDateChange}
          value={value}
          tileDisabled={tileDisabled}
          formatDay={(locale, date) => moment(date).format('DD')}></Calendar>
      </div>
    </div>
  );
}

export default CustomCalendar;
