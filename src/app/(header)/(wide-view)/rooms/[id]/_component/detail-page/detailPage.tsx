import axios from 'axios';
import React from 'react';
import Carousel from '../carousel';
import DetailTitle from '../detail-title/detailTitle';
import styles from './detailPage.module.scss';
import DetailDescription from '../detail-description/detailDescription';
import Reservation from '../reservation';
import { TParams } from './paramsType';

async function getProduct(params: number) {
  const res = await axios.get(
    `https://api.gamsung.xyz/v1/accommodations/${params}`,
    {
      headers: {
        'Content-Type': 'application/json',
        cache: 'no-store',
      },
    },
  );
  return res.data;
}

async function DetailPage({ params }: { params: number }) {
  const data = await getProduct(params);
  console.log(data);
  // console.log(data);

  return (
    <>
      <div className={styles.title}>
        <DetailTitle title={data.data.accommodation_name} />
      </div>
      <div className={styles.carousel}>
        <Carousel imgs={data.data.room_img} />
      </div>
      <div className={styles.content}>
        <DetailDescription
          address={data.data.address}
          desc={data.data.description}
        />
        <Reservation data={data.data} params={params} price={data.data.accommodation_price} />
      </div>
    </>
  );
}

export default DetailPage;
