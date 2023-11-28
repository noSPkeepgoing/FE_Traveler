import axios from 'axios';
import React from 'react';
import Carousel from '../carousel';
import DetailTitle from '../detail-title/detailTitle';
import styles from './detailPage.module.scss';
import DetailDescription from '../detail-description/detailDescription';
import Reservation from '../reservation';

async function getProduct() {
  // const res = await axios.get('https://api.gamsung.xyz/v1/accomodations/1', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     cache: 'no-store',
  //   },
  // });
  return ({
    "code" : 3001,
    "data" : {
        "accommodation_name" : "신라 호텔",
        "description" : "신라 호텔 입니다.",
        "address" : "상세주소",
        "limit_people" : 4,
        "accommodation_price" : 100000,
      "accommodation_img" : "https://cdn.discordapp.com/attachments/1174993798766546984/1176059765785370624/image.png?ex=656d7e02&is=655b0902&hm=9653d7a75fae6974278eff3ae6ac4e2379b9c62794934460b311af64138048e2&",
        "room_img" : [
                "https://cdn.discordapp.com/attachments/1174993798766546984/1176059765785370624/image.png?ex=656d7e02&is=655b0902&hm=9653d7a75fae6974278eff3ae6ac4e2379b9c62794934460b311af64138048e2&",
                "https://cdn.discordapp.com/attachments/1174993798766546984/1176059765785370624/image.png?ex=656d7e02&is=655b0902&hm=9653d7a75fae6974278eff3ae6ac4e2379b9c62794934460b311af64138048e2&",
                "https://cdn.discordapp.com/attachments/1174993798766546984/1176059765785370624/image.png?ex=656d7e02&is=655b0902&hm=9653d7a75fae6974278eff3ae6ac4e2379b9c62794934460b311af64138048e2&",
                "https://cdn.discordapp.com/attachments/1174993798766546984/1176059765785370624/image.png?ex=656d7e02&is=655b0902&hm=9653d7a75fae6974278eff3ae6ac4e2379b9c62794934460b311af64138048e2&",
                "https://cdn.discordapp.com/attachments/1174993798766546984/1176059765785370624/image.png?ex=656d7e02&is=655b0902&hm=9653d7a75fae6974278eff3ae6ac4e2379b9c62794934460b311af64138048e2&" 
        ]
    }
})
}

async function DetailPage() {
  const data = await getProduct();

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
        <Reservation price={data.data.accommodation_price} />
      </div>
    </>
  );
}

export default DetailPage;
