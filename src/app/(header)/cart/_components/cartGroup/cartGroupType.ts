export type TcartGroup = {
  children: React.ReactNode;
  selectAll: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isAllSelected: () => boolean;
};
