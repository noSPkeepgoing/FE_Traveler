import React from 'react';
import styles from './signInLogo.module.scss';
import Text from '@/components/atoms/text';

function SignInLogo() {
  return (
    <div className={styles.logo}>
      <Text color="black" fontSize="xl" fontWeight="thin">
        Traveler
      </Text>
    </div>
  );
}

export default SignInLogo;
