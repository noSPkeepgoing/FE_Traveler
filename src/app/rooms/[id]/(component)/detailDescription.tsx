import Text from '@/components/text';
import React from 'react';
import styles from './detailDescription.module.scss';

function DetailDescription({ adress, desc }: { adress: string; desc: string }) {
  console.log(desc, adress);
  return (
    <div className={styles.DetailDescription}>
      <div className={styles.adress}>
        <Text fontSize="md" fontWeight="semibold">
          {adress}
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
