export type ErrorData = { message: string };

export type Response<T = ErrorData> = {
  code: number;
  data: T;
};
