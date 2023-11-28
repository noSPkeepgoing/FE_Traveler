import React from 'react';
import styles from './signUp.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.container}>{children}</main>;
}

export default Layout;
