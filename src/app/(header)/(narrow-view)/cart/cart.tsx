'use client';
import CartGroup from './_components/cart-group';
import CartItem from './_components/cart-item';
import CartFooter from './_components/cart-footer';
import useCart from '@/hooks/cart/useCart';
import Text from '@/components/atoms/text';
import styles from './cart.module.scss';
import SoldOutCartItem from './_components/cart-item/soldOutCartItem';
import { BsCart, BsCloudSlash } from 'react-icons/bs';
import Button from '@/components/atoms/button';
import useSelect from '@/hooks/cart/useSelect';
import Loader from '@/components/layouts/loader';

function Cart() {
  const { cartData, isLoading, isError, selectedItems } = useCart();
  const {
    selectAll,
    isAllSelected,
    handleSelectItem,
    isSelected,
    calculateTotalPrice,
    handleDeleteCartItems,
    handleReservation,
  } = useSelect();

  if (isLoading) <Loader />;

  if (isError)
    return (
      <section className={styles.container}>
        <BsCloudSlash size="100" />
        <Text fontSize="xl" fontWeight="semibold" color="blackAlpha100">
          알 수 없는 에러가 발생했습니다
        </Text>
        <Button href="/main" variant="text">
          <Text fontSize="xs" fontWeight="normal" color="primary">
            홈 화면으로 이동하기
          </Text>
        </Button>
      </section>
    );

  if (cartData?.length === 0) {
    return (
      <section className={styles.container}>
        <BsCart size="100" />
        <Text fontSize="lg" fontWeight="semibold" color="blackAlpha100">
          장바구니에 담긴 상품이 없습니다
        </Text>
      </section>
    );
  }

  return (
    <>
      <CartGroup
        selectAll={selectAll}
        isAllSelected={isAllSelected}
        handleDeleteCartItems={handleDeleteCartItems}
        selectedItems={selectedItems}>
        {cartData?.map((item) =>
          item.accommodation_sold_out ? (
            <SoldOutCartItem
              data={item}
              handleDeleteCartItems={handleDeleteCartItems}
              key={item.cart_id}
            />
          ) : (
            <CartItem
              key={item.cart_id}
              data={item}
              handleDeleteCartItems={handleDeleteCartItems}
              handleSelectItem={handleSelectItem}
              isSelected={isSelected}
            />
          ),
        )}
      </CartGroup>
      <CartFooter
        totalPrice={calculateTotalPrice()}
        selectedItemsLength={selectedItems.length}
        handleReservation={handleReservation}
      />
    </>
  );
}

export default Cart;
