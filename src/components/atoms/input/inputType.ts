export type TInput = {
  variant?: 'signShort' | 'signRegular' | 'reservation';
  state?: 'invalid' | '';
  type?: 'text' | 'email' | 'password';
  onChange?: (e: any) => any;
  placeholder?: string;
  name?: string;
  id?: string;
  readOnly?: boolean;
};
