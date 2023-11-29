import { MAIN_API } from '@/api/main';
import { useQuery } from '@tanstack/react-query';

export const useGetAccommodations = (category: number) => {
  return useQuery(
    ['getAccommodations'],
    () => MAIN_API.getAccommodations(category),
    {
      select: (data) => data.data,
    },
  );
};
