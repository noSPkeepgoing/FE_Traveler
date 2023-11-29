'use client';
import CartGroup from './_components/cart-group';
import CartItem from './_components/cart-item';
import CartFooter from './_components/cart-footer';
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
    handleDeleteCartItems,
    handleReservation,
  } = useCart();

  if (isLoading) return <div>로딩중</div>;

  if (isError) return <div>에러</div>;

  return (
    <>
      <CartGroup
        selectAll={selectAll}
        isAllSelected={isAllSelected}
        handleDeleteCartItems={handleDeleteCartItems}
        selectedItems={selectedItems}>
        {cartData?.map((item) => (
          <CartItem
            key={item.cart_id}
            data={item}
            handleDeleteCartItems={handleDeleteCartItems}
            handleSelectItem={handleSelectItem}
            isSelected={isSelected}
          />
        ))}
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
