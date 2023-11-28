import Checkbox from '@/components/atoms/checkbox';
import styles from './cartGroup.module.scss';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import { TcartGroup } from './cartGroupType';

function CartGroup({ children, selectAll, isAllSelected }: TcartGroup) {
  return (
    <>
      <div className={styles.selectContainer}>
        <div className={styles.allSelection}>
          <Checkbox onChange={selectAll} isChecked={isAllSelected()} />
          <Text fontSize="xs" fontWeight="normal">
            전체선택
          </Text>
        </div>
        <Button variant="text">
          <Text fontSize="xs" fontWeight="normal" color="highlight">
            선택 삭제
          </Text>
        </Button>
      </div>
      <section className={styles.cartContainer}>{children}</section>
    </>
  );
}

export default CartGroup;
