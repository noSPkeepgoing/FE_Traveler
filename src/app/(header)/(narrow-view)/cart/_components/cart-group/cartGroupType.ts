export type TCartGroup = {
  children: React.ReactNode;
  selectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAllSelected: () => boolean;
};
