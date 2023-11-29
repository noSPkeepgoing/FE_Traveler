import React, { useState, ReactElement, useEffect } from 'react';
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
  const [isFirst,setIsFirst] = useState(false);
  const handleToggleCalendar = () => {
    setIsOpen(!isOpen);
  };
  const handleDateChange = (value: Date, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    console.log(isFirst)
    if (valueSecond  && isFirst) {
      console.log('test')
      setNowDate(
        moment(valueSecond as Date | Moment).format('YYYY년 MM월 DD일'),
      );
    }
    setIsFirst(true);
  }, [value, valueSecond]);

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
          onChange={(value,e)=>{handleDateChange(value as Date,e)}}
          value={valueSecond ? valueSecond : value}
          tileDisabled={tileDisabled}
          formatDay={(locale, date) => moment(date).format('DD')}></Calendar>
      </div>
    </div>
  );
}

export default CustomCalendar;
