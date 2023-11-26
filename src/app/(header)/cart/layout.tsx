import React from 'react';
import styles from './cart.module.scss';

function layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.frame}>{children}</main>;
}

export default layout;
