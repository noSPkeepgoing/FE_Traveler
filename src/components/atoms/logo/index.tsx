import React from 'react';
import styles from './signLogo.module.scss';
import Text from '@/components/atoms/text';
import Button from '../button';

function SignPageLogo() {
  return (
    <div className={styles.logo}>
      <Button variant="text" size="md" href="/main" textDecoration="none">
        <Text color="black" fontSize="xl" fontWeight="thin">
          Traveler
        </Text>
      </Button>
    </div>
  );
}

export default SignPageLogo;
