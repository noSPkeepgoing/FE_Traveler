import React from 'react';
import styles from './cart.module.scss';

function CartLayout({ children }: { children: React.ReactNode }) {
  return <main className={styles.frame}>{children}</main>;
}

export default CartLayout;
