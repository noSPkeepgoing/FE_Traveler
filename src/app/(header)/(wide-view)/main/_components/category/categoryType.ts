import { TCategoryListProps } from '../category-list/categoryListType';

export type TCategory = { name: string; num: number };

export type TCategoryProps = TCategoryListProps & {
  item: TCategory;
};
