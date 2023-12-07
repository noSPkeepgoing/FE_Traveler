'use client';
import React from 'react';
import styles from './signUpLogo.module.scss';
import Text from '@/components/atoms/text';
import { useRouter } from 'next/navigation';

function SignUpLogo() {
  const router = useRouter();
  return (
    <div className={styles.logo}>
      <div className={styles.textBox} onClick={() => router.push('/main')}>
        <Text color="black" fontSize="xl" fontWeight="thin">
          Traveler
        </Text>
      </div>
    </div>
  );
}

export default SignUpLogo;
