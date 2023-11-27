import React from 'react';
import styles from './category.module.scss';
import Text from '@/components/atoms/text';
import { TCategory } from '../../mainType';

function Category({ item }: { item: TCategory }) {
  return (
    <div className={styles.category__item}>
      <Text fontSize="xs-2">{`#${item.name}`}</Text>
    </div>
  );
}

export default Category;
