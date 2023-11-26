import React from 'react';
import styles from './signUp.module.scss';
// import '@styles/_normalize.scss'

function SignUpLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.frame}>{children}</main>;
}

export default SignUpLayout;
