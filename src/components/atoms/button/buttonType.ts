export type TButton = {
  size?: 'lg' | 'xl' | 'md' | 'sm' | '';
  variant?: 'default' | 'text' | 'secondary';
  children?: React.ReactNode;
  onClick?: (v: unknown) => unknown;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
};
