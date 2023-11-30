import React from 'react';
import ReservationListTitle from './_components/reservation-list-title/page';
import ReservationList from './reservationList';

function ReservationListPage() {
  return (
    <>
      <ReservationListTitle />
      <ReservationList />
    </>
  );
}

export default ReservationListPage;
