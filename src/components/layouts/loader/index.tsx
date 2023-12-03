import React from 'react';
import styles from './loader.module.scss';

function Loader({ size = 'lg' }) {
  return (
    <div className={`${styles['loader']} ${styles[size]}`}>
      <div className={`${styles['spinner']} ${styles[size]}`}></div>
    </div>
  );
}

export default Loader;
