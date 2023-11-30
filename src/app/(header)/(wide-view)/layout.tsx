import React from 'react';
import styles from './layout.module.scss';
import Header from '@/components/layouts/header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header border={false} />
      <main className={styles.frame}>{children}</main>
    </>
  );
}

export default Layout;
