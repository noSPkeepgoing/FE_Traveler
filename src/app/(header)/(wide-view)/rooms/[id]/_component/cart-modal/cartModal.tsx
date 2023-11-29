import styles from './cartModal.module.scss';
import React from 'react';
import { useRouter } from 'next/navigation';
import Text from '@/components/atoms/text';

function CartModal() {
  const router = useRouter();
  function handlePath(type: string): void {
    router.push(`/${type}`);
  }
  if (false) {
    return (
      <div className={styles.modal}>
        <p
          className={styles.modalDescLogin}
          onClick={() => {
            handlePath('sign-in');
          }}>
          로그인 하러가기
        </p>
      </div>
    );
  }
  if (true) {
    return (
      <div className={styles.modal}>
        <Text color="white" fontSize="xs-3">
          10개 이상 등록 불가합니다.
        </Text>
        <p
          className={styles.modalDesc}
          onClick={() => {
            handlePath('cart');
          }}>
          장바구니로 가기
        </p>
      </div>
    );
  }
  if (false) {
    return (
      <div className={styles.modal}>
        <Text color="white" fontSize="xs-3">
          장바구니 등록 되었습니다.
        </Text>
        <p
          className={styles.modalDesc}
          onClick={() => {
            handlePath('cart');
          }}>
          장바구니로 가기
        </p>
      </div>
    );
  }

  return (
    <div className={styles.modal}>
      <Text color="white" fontSize="xs-3">
        장바구니 에러
      </Text>
      <p
        className={styles.modalDesc}
        onClick={() => {
          handlePath('cart');
        }}>
        장바구니로 가기
      </p>
    </div>
  );
}

export default CartModal;
