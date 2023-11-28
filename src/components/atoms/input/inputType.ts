export type TInput = {
  variant?: 'signUpShort' | 'login' | 'reservation' | 'invalid';
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
};
