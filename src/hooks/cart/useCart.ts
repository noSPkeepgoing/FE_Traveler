'use client';
import { TCartDeleteParams, TCartItem } from '@/api/cart/cartApiType';
import { THandleSelectItem } from '@/app/(header)/(narrow-view)/cart/cartType';
import { useDeleteCartItems, useGetCartItems } from '@/queries/cart';
import { productState } from '@/recoil/order';
import { TProduct } from '@/recoil/productType';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';

function useCart() {
  const [selectedItems, setSelectedItems] = useState<TCartItem[]>([]);
  const setProductState = useSetRecoilState(productState);
  const router = useRouter();

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
      Swal.fire('상품이 삭제되었습니다');
      refetchCartData();
    },
    onError(error) {
      if (error instanceof AxiosError) {
        Swal.fire('상품 삭제에 실패했습니다');
      }
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
    if (params.delete_id.length === 0) {
      Swal.fire('삭제할 상품을 선택해주세요');
      return;
    }
    Swal.fire({
      title: '상품을 삭제하시겠습니까?',
      showCancelButton: true,
      confirmButtonText: '삭제',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteCartItems(params);
        setSelectedItems([]);
      }
    });
  };

  const handleReservation = () => {
    const products: TProduct[] = selectedItems.map((item) => {
      const product = {
        accommodation_name: item.accommodation_name,
        accommodation_id: item.accommodation_id,
        accommodation_img: item.accommodation_img,
        accommodation_price: item.cart_price,
        start_date: item.start_date,
        end_date: item.end_date,
        people_number: item.people_number,
        address: item.address,
        cart_id: item.cart_id,
      };
      return product;
    });
    setProductState(products);
    router.push('/reservation');
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
    handleReservation,
  };
}

export default useCart;
