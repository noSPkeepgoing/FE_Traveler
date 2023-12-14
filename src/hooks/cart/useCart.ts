'use client';
import { TCartItem } from '@/api/cart/cartApiType';
import { useDeleteCartItems, useGetCartItems } from '@/queries/cart';
import { selectedItemState } from '@/recoil/selectedItem';
import { AxiosError } from 'axios';
import { useRecoilState } from 'recoil';
import Swal from 'sweetalert2';

/**
 * @description 장바구니 페이지 데이터를 다루는 컴포넌트입니다
 * 
 * @returns
 *   cartData,
    isLoading,
    isError,
    selectedItems,
    setSelectedItems,
    getNotSoldOutItems,
    deleteCartItems,
 */

function useCart() {
  const [selectedItems, setSelectedItems] = useRecoilState(selectedItemState);
  const getNotSoldOutItems = (cartData: TCartItem[]) => {
    return cartData.filter((item) => !item.accommodation_sold_out);
  };

  const {
    data: cartData,
    refetch: refetchCartData,
    isLoading,
    isError,
  } = useGetCartItems({
    select(data) {
      return data.data.data;
    },
    onSuccess(cartData) {
      setSelectedItems(getNotSoldOutItems(cartData));
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

  return {
    cartData,
    isLoading,
    isError,
    selectedItems,
    setSelectedItems,
    getNotSoldOutItems,
    deleteCartItems,
  };
}

export default useCart;
