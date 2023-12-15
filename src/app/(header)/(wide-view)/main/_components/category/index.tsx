import React from 'react';
import styles from './category.module.scss';
import Text from '@/components/atoms/text';
import { TCategory } from './categoryType';
import useCategory from '@/hooks/main/useCategory';

function Category({ item }: TCategory) {
  const { selectedCategoryNumber, handleSelectCategory } = useCategory();

  if (selectedCategoryNumber === item.id) {
    return (
      <div
        onClick={() => {
          handleSelectCategory(item.id);
        }}
        className={`${styles.categoryItem} ${styles.active}`}>
        <Text
          fontSize="xs-2"
          color="white"
          fontWeight="semibold">{`#${item.name}`}</Text>
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          handleSelectCategory(item.id);
        }}
        className={styles.categoryItem}>
        <Text fontSize="xs-2">{`#${item.name}`}</Text>
      </div>
    );
  }
}

export default Category;
