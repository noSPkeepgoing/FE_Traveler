import axios from 'axios';
import React from 'react';
import Carousel from '../carousel';
import DetailTitle from '../detail-title/detailTitle';
import styles from './detailPage.module.scss';
import DetailDescription from '../detail-description/detailDescription';
import Reservation from '../reservation';
import { TParams,TProductId } from './paramsType';
import { ROOMS_API } from '@/api/rooms';

async function DetailPage({ params }: TParams ) {
  const data = await ROOMS_API.getProduct(params);
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
