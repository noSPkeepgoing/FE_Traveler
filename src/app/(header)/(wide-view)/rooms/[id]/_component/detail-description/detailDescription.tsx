import Text from '@/components/atoms/text';
import React from 'react';
import styles from './detailDescription.module.scss';
import { TDetailDescription } from './detailDescriptionType';

function DetailDescription({ address, desc }: TDetailDescription) {
  return (
    <div className={styles.detailDescription}>
      <div className={styles.address}>
        <Text fontSize="md" fontWeight="semibold">
          {address}
        </Text>
      </div>
      <div className={styles.descTitle}>
        <Text fontSize="md" fontWeight="semibold">
          숙소 설명
        </Text>
      </div>
      <div>
        <Text fontSize="xs-2" fontWeight="normal">
          {desc}
        </Text>
      </div>
    </div>
  );
}

export default DetailDescription;
