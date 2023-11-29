export type TInput = {
  variant?: 'signShort' | 'signRegular' | 'reservation';
  state?: 'invalid' | '';
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  name?: string;
};
