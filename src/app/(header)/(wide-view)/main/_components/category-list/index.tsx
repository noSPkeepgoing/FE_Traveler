import React from 'react';
import Category from '../category';
import { LOCATION } from '@/constants/main';
import styles from './categoryList.module.scss';
import { TCategory } from '../category/categoryType';
import { TCategoryListProps } from './categoryListType';

function CategoryList({
  selectedCategoryNumber,
  handleSelect,
}: TCategoryListProps) {
  return (
    <div className={styles.frame}>
      <div className={styles.category}>
        {LOCATION.map((item: TCategory) => (
          <Category
            key={item.id}
            item={item}
            selectedCategoryNumber={selectedCategoryNumber}
            handleSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
