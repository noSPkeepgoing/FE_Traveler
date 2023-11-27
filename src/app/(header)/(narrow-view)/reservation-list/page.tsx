import React from 'react';
import ReservationListTitle from './_components/reservation-list-title/page';
import ReservationItem from './_components/reservation-item/page';
import styles from './reservationList.module.scss';

function ReservationListPage() {
  return (
    <>
      <ReservationListTitle />
      <section className={styles.reservationItemContainer}>
        <ReservationItem />
      </section>
    </>
  );
}

export default ReservationListPage;
