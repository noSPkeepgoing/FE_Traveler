import React from 'react';
import styles from './signUp.module.scss';
import '../../styles/_normalize.scss';

function layout({ children }: { children: React.ReactNode }) {
  return <main className={styles.frame}>{children}</main>;
}

export default layout;
