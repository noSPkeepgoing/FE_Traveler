import Text from '@/components/atoms/text';
import React from 'react';
import styles from './detailTitles.module.scss';

function DetailTitles({ text }: { text: string }) {
  return (
    <header className={styles.detailTitles}>
      <Text fontSize="sm" fontWeight="semibold" color="highlight">
        {text}
      </Text>
    </header>
  );
}

export default DetailTitles;
