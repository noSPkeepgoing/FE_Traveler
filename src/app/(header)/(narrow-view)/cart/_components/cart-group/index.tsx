import Checkbox from '@/components/atoms/checkbox';
import styles from './cartGroup.module.scss';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import { TCartGroup } from './cartGroupType';

function CartGroup({
  children,
  selectAll,
  isAllSelected,
  handleDeleteCartItems,
  selectedItems,
}: TCartGroup) {
  return (
    <>
      <div className={styles.selectContainer}>
        <div className={styles.allSelection}>
          <Checkbox onChange={selectAll} isChecked={isAllSelected()} />
          <Text fontSize="xs" fontWeight="normal">
            전체선택
          </Text>
        </div>
        <Button
          variant="text"
          onClick={() => {
            const cart_ids = selectedItems.map((item) => item.cart_id);
            handleDeleteCartItems({ delete_id: cart_ids });
          }}>
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
