import { TAccommodation } from '@/api/main/mainApiType';

export type TItemListProps = {
  data: TAccommodation[] | undefined;
  isLoading: boolean;
};
