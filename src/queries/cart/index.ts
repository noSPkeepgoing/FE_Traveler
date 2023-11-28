import { CART_API } from '@/api/cart';
import { TCartItem } from '@/api/cart/cartApiType';
import { Response } from '@/api/type';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const useGetCartItems = (
  options?: UseQueryOptions<
    AxiosResponse<Response<TCartItem[]>>,
    AxiosError,
    TCartItem[]
  >,
) => {
  return useQuery<
    AxiosResponse<Response<TCartItem[]>>,
    AxiosError,
    TCartItem[]
  >(['getCartItems'], () => CART_API.getCart(), { ...options });
};
