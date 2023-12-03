import React from 'react';
import styles from './loader.module.scss';
import { TLoader } from './loaderType';

function Loader({ size = 'lg' }: TLoader) {
  return (
    <div className={`${styles['loader']} ${styles[size]}`}>
      <div className={`${styles['spinner']} ${styles[size]}`}></div>
    </div>
  );
}

export default Loader;
