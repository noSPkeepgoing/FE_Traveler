import React from 'react';
import styles from './signUpLogo.module.scss';
import Text from '@/components/atoms/text';

function SignUpLogo() {
  return (
    <div className={styles.logo}>
      <Text color="black" fontSize="xl" fontWeight="thin">
        Traveler
      </Text>
    </div>
  );
}

export default SignUpLogo;
