import { TCategoryListProps } from '../category-list/categoryListType';

export type TCategory = { name: string; id: number };

export type TCategoryProps = TCategoryListProps & {
  item: TCategory;
};
