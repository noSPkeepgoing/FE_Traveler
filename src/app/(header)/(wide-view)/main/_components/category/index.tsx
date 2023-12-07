import React from 'react';
import styles from './category.module.scss';
import Text from '@/components/atoms/text';
import { TCategoryProps } from './categoryType';

function Category({
  item,
  selectedCategoryNumber,
  handleSelect,
}: TCategoryProps) {
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
