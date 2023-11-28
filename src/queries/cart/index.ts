import { CART_API } from '@/api/cart';
import { Response, TCartItem } from '@/api/cart/type';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGetCartItems = (
  options?: UseQueryOptions<Response<TCartItem[]>, AxiosError>,
) => {
  return useQuery<Response<TCartItem[]>, AxiosError>(
    ['getCartItems'],
    async () => await CART_API.getCart(),
    { ...options },
  );
};
