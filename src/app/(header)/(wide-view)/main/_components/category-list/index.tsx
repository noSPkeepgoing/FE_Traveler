import React from 'react';
import Category from '../category';
import { LOCATION } from '@/constants/main';
import styles from './categoryList.module.scss';
import { TCategoryItem } from '../category/categoryType';

function CategoryList() {
  return (
    <div className={styles.frame}>
      <div className={styles.category}>
        {LOCATION.map((item: TCategoryItem) => (
          <Category key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
