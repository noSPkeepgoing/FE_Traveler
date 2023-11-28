import React from 'react';
import Item from '../item';
import { TAccommodation } from '../../mainType';
import styles from './itemList.module.scss';

const ItemList = () => {
  return (
    <div className={styles.items}>
      {dummy.map((item: TAccommodation) => (
        <Item key={item.accommodation_id} data={item} />
      ))}
    </div>
  );
};

export default ItemList;

const dummy: TAccommodation[] = [
  {
    accommodation_id: 1,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 경기시',
    accommodation_price: 240000,
    accommodation_img:
      'https://i.pinimg.com/564x/d2/72/f1/d272f19d225f573487e2a2e323a60d49.jpg',
  },
  {
    accommodation_id: 6,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 고양시',
    accommodation_price: 360000,
    accommodation_img:
      'https://i.pinimg.com/564x/b9/45/fe/b945fe40d6319f970b4b55da1a84da23.jpg',
  },
  {
    accommodation_id: 7,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 8,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 0,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 9,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 10,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 11,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 12,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 경기시',
    accommodation_price: 240000,
    accommodation_img:
      'https://i.pinimg.com/564x/d2/72/f1/d272f19d225f573487e2a2e323a60d49.jpg',
  },
  {
    accommodation_id: 16,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 고양시',
    accommodation_price: 360000,
    accommodation_img:
      'https://i.pinimg.com/564x/b9/45/fe/b945fe40d6319f970b4b55da1a84da23.jpg',
  },
  {
    accommodation_id: 17,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 18,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 20,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 29,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 120,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
  {
    accommodation_id: 121,
    accommodation_name: '리거 로얄 라구니 괌 리조트',
    short_address: '경기도 수원시',
    accommodation_price: 40000,
    accommodation_img:
      'https://i.pinimg.com/736x/4e/9d/86/4e9d8645e1ad5146f7d1c441114cddce.jpg',
  },
];
