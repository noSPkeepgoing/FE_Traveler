import axios from 'axios';
import React from 'react';
import Carousel from '../carousel';
import DetailTitle from '../detail-title/detailTitle';
import styles from './detailPage.module.scss';
import DetailDescription from '../detail-description/detailDescription';
import Reservation from '../reservation';

async function getProduct() {
  const res = await axios.get('https://api.gamsung.xyz/v1/accomodations', {
    headers: {
      'Content-Type': 'application/json',
      cache: 'no-store',
    },
  });
  return res.data;
}

async function DetailPage() {
  const data = await getProduct();

  return (
    <>
      <div className={styles.title}>
        <DetailTitle title={data.data.accomodation_name} />
      </div>
      <div className={styles.carousel}>
        <Carousel imgs={data.data.room_img} />
      </div>
      <div className={styles.content}>
        <DetailDescription
          address={data.data.address}
          desc={data.data.description}
        />
        <Reservation price={data.data.accomodation_price} />
      </div>
    </>
  );
}

export default DetailPage;
