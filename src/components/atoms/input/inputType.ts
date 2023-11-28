export type TInput = {
  variant?: 'signUpShort' | 'login' | 'reservation';
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  invalid?: boolean;
};
