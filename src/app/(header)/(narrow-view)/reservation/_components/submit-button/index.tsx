import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import React from 'react';
import styles from '../../reservation.module.scss';

function SubmitButton() {
  return (
    <div className={styles.parts}>
      <Button variant="default" size="xl" type="submit">
        <Text fontSize="xs" fontWeight="normal" color="white">
          결제하기
        </Text>
      </Button>
    </div>
  );
}

export default SubmitButton;
