'use client';
import { TCartDeleteParams } from '@/api/cart/cartApiType';
import { THandleSelectItem } from '@/app/(header)/(narrow-view)/cart/cartType';
import { productState } from '@/recoil/order';
import { TProduct } from '@/recoil/productType';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Swal from 'sweetalert2';
import useCart from './useCart';

/**
 * @description checkbox를 통해 장바구니를 선택하고 삭제하는 로직이 있는 컴포넌트입니다.
 * 
 * @returns
 *   selectAll,
    isAllSelected,
    handleSelectItem,
    isSelected,
    calculateTotalPrice,
    selectedItems,
    handleDeleteCartItems,
    handleReservation,
 */

function useSelect() {
  const setProductState = useSetRecoilState(productState);
  const router = useRouter();

  const {
    cartData,
    selectedItems,
    setSelectedItems,
    getNotSoldOutItems,
    deleteCartItems,
  } = useCart();

  useEffect(() => {
    if (cartData) setSelectedItems(getNotSoldOutItems(cartData));
  }, []);

  const selectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (cartData && event.currentTarget.checked) {
      /* 장바구니 최대 갯수가 10개로 제한되어 있어 filter 사용이 성능에 크게 미치지 않을거라고 판단됩니다 */
      setSelectedItems(getNotSoldOutItems(cartData));
    } else {
      setSelectedItems([]);
    }
  };

  const isAllSelected = () => {
    if (cartData) {
      const notSoldOutItems = getNotSoldOutItems(cartData);
      return selectedItems.length === notSoldOutItems.length;
    }
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
    selectAll,
    isAllSelected,
    handleSelectItem,
    isSelected,
    calculateTotalPrice,
    handleDeleteCartItems,
    handleReservation,
  };
}

export default useSelect;
