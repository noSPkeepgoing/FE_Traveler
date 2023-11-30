import { CART_API } from '@/api/cart';
import { TCartDeleteParams, TCartItem } from '@/api/cart/cartApiType';
import { Response } from '@/api/type';
import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
} from '@tanstack/react-query';
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

export const useDeleteCartItems = (
  options?: UseMutationOptions<
    AxiosResponse<Response>,
    AxiosError,
    TCartDeleteParams
  >,
) => {
  return useMutation<AxiosResponse<Response>, AxiosError, TCartDeleteParams>(
    (params: TCartDeleteParams) => CART_API.deleteCart(params),
    {
      ...options,
    },
  );
};
