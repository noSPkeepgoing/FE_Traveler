import React from 'react';
import Category from '../category';
import { LOCATION } from '@/constants/main';
import styles from './categoryList.module.scss';
import { TCategory } from '../../mainType';

function CategoryList() {
  return (
    <div className={styles.frame}>
      <div className={styles.category}>
        {LOCATION.map((item: TCategory) => (
          <Category key={item.num} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
