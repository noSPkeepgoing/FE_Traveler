import { RESERVATION_API } from '@/api/reservation';
import { TReservationItems } from '@/api/reservation/reservationApiType';
import { Response } from '@/api/type';
import { UseMutationOptions, useMutation } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';

export const usePostReservation = (
  options?: UseMutationOptions<
    AxiosResponse<Response>,
    AxiosError,
    TReservationItems
  >,
) => {
  return useMutation<AxiosResponse<Response>, AxiosError, TReservationItems>(
    (params: TReservationItems) => RESERVATION_API.postReservation(params),
    { ...options },
  );
};
