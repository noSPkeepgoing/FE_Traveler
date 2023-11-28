import React from 'react';
import styles from './layout.module.scss';

function Layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.frame}>{children}</main>;
}

export default Layout;
