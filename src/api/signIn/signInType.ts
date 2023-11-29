export type TSignInData = {
  email: string;
  password: string;
};

export type TSignInResponseData = {
  access_token: string;
  refresh_token: string;
  name: string;
  email: string;
};
