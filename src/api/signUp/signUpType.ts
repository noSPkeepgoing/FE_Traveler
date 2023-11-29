export type TSignUpData = {
  email: string;
  password: string;
  name: string;
};

export type TResponse = {
  code: number;
  data: {
    message: string;
  };
};
