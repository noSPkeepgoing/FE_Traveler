import Text from '@/components/atoms/text';
import React from 'react';
import styles from './detailContents.module.scss';

function DetailContents({ text }: { text: string }) {
  return (
    <header className={styles.detailContents}>
      <Text fontSize="xs" fontWeight="semibold" color="primary">
        {text}
      </Text>
    </header>
  );
}

export default DetailContents;
