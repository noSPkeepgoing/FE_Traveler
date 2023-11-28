import { TCartItem } from '@/api/cart/cartApiType';
import { THandleSelectItem } from '@/app/(header)/(narrow-view)/cart/cartType';
import { useGetCartItems } from '@/queries/cart';
import React, { useState } from 'react';

function useCart() {
  const [selectedItems, setSelectedItems] = useState<TCartItem[]>([]);

  const {
    data: cartData,
    isLoading,
    isError,
  } = useGetCartItems({
    select(data) {
      return data.data.data;
    },
  });

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (cartData && event.currentTarget.checked) {
      setSelectedItems(cartData);
    } else {
      setSelectedItems([]);
    }
  };

  const isAllSelected = () => {
    if (cartData) return selectedItems.length === cartData.length;
    return false;
  };

  const handleSelectItem = ({ event, selectedItem }: THandleSelectItem) => {
    if (event.target.checked) {
      setSelectedItems((prev) => [...prev, selectedItem]);
    } else {
      setSelectedItems(
        selectedItems.filter((item) => item.cart_id !== selectedItem.cart_id),
      );
    }
  };

  const isSelected = (id: number) => {
    return selectedItems.filter((item) => item.cart_id === id).length !== 0;
  };

  const calculateTotalPrice = () => {
    return selectedItems.reduce(
      (totalPrice, items) => totalPrice + items.cart_price,
      0,
    );
  };

  return {
    cartData,
    isLoading,
    isError,
    selectAll,
    isAllSelected,
    handleSelectItem,
    isSelected,
    calculateTotalPrice,
    selectedItems,
  };
}

export default useCart;
