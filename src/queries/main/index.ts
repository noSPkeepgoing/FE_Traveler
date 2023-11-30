import { MAIN_API } from '@/api/main';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetAccommodations = (category: number) => {
  return useInfiniteQuery(
    ['getAccommodations'],
    ({ pageParam = 1 }) => MAIN_API.getAccommodations(category, pageParam),
    {
      getNextPageParam: ({
        data: {
          data: { page_number, total_page },
        },
      }) => {
        const nextPage = page_number + 1;
        return total_page > page_number ? nextPage : undefined;
      },
      select: (data) => ({
        pages: data.pages.flatMap((page) => page.data),
        pageParams: data.pageParams,
      }),
    },
  );
};
