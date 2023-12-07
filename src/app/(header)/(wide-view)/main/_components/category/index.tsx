import React from 'react';
import styles from './category.module.scss';
import Text from '@/components/atoms/text';
import { TCategory } from './categoryType';
import useMain from '@/hooks/main/useMain';

function Category({ item }: TCategory) {
  const { selectedCategoryNumber, handleSelect } = useMain();

  const handleClick = () => {
    handleSelect(item.id);
  };

  if (selectedCategoryNumber === item.id) {
    return (
      <div
        onClick={handleClick}
        className={`${styles.categoryItem} ${styles.active}`}>
        <Text
          fontSize="xs-2"
          color="white"
          fontWeight="semibold">{`#${item.name}`}</Text>
      </div>
    );
  } else {
    return (
      <div onClick={handleClick} className={styles.categoryItem}>
        <Text fontSize="xs-2">{`#${item.name}`}</Text>
      </div>
    );
  }
}

export default Category;
