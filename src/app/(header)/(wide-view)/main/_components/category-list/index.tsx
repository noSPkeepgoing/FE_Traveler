import React from 'react';
import Category from '../category';
import { LOCATION } from '@/constants/main';
import styles from './categoryList.module.scss';
import { TCategory } from '../../mainType';

function CategoryList({
  isSelected,
  handleSelect,
}: {
  isSelected: number;
  handleSelect: (num: number) => void;
}) {
  return (
    <div className={styles.frame}>
      <div className={styles.category}>
        {LOCATION.map((item: TCategory) => (
          <Category
            key={item.num}
            item={item}
            isSelected={isSelected}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
