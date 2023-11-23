import styles from './header.module.scss';
import React from 'react';

function header() {
  const isOnline = true;
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.buttons}>
          {!isOnline ? (
            <>
              <a className={styles['buttons-child']} href="/sign-in">
                로그인
              </a>
              <a className={styles['buttons-child']} href="/sign-up">
                회원가입
              </a>
            </>
          ) : (
            <>
              <a className={styles['buttons-child']} href="/main">
                로그아웃
              </a>
              <a className={styles['buttons-child']} href="/reservation-list">
                장바구니
              </a>
              <a className={styles['buttons-child']} href="/reservation-check">
                주문내역
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default header;
