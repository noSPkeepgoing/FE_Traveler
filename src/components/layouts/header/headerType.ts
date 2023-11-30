export type THeader = {
  border: boolean;
};

export type TMessage = {
  message: string;
};

export type TData<T = TMessage> = {
  code: number;
  data: T;
};
