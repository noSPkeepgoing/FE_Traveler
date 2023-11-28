'use client';
import CartGroup from './cart-group';
import CartItem from './cart-item';
import CartFooter from './cart-footer';
import useCart from '@/hooks/cart/useCart';

function Cart() {
  const {
    cartData,
    isLoading,
    isError,
    selectAll,
    isAllSelected,
    handleSelectItem,
    isSelected,
    calculateTotalPrice,
    selectedItems,
  } = useCart();

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러</div>;

  return (
    <>
      <CartGroup selectAll={selectAll} isAllSelected={isAllSelected}>
        {cartData?.map((item) => (
          <CartItem
            key={item.cart_id}
            data={item}
            handleSelectItem={handleSelectItem}
            isSelected={isSelected}
          />
        ))}
      </CartGroup>
      <CartFooter
        totalPrice={calculateTotalPrice()}
        selectedItemsLength={selectedItems.length}
      />
    </>
  );
}

export default Cart;
