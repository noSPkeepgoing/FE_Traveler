import { TCartDeleteParams, TCartItem } from '@/api/cart/cartApiType';
import { THandleSelectItem } from '@/app/(header)/(narrow-view)/cart/cartType';
import { useDeleteCartItems, useGetCartItems } from '@/queries/cart';
import React, { useState } from 'react';

function useCart() {
  const [selectedItems, setSelectedItems] = useState<TCartItem[]>([]);

  const {
    data: cartData,
    refetch: refetchCartData,
    isLoading,
    isError,
  } = useGetCartItems({
    select(data) {
      return data.data.data;
    },
  });

  const { mutate: deleteCartItems } = useDeleteCartItems({
    onSuccess() {
      alert('상품이 삭제되었습니다.');
      refetchCartData();
    },
    onError(error) {
      alert(error.message);
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

  const handleDeleteCartItems = (params: TCartDeleteParams) => {
    if (params.cart_id.length === 0) {
      alert('삭제할 상품을 선택해주세요');
      return;
    }
    deleteCartItems(params);
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
    handleDeleteCartItems,
  };
}

export default useCart;
