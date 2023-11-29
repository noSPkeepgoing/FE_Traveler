export type TButton = {
  size?: 'lg' | 'xl' | 'md' | 'sm' | '';
  variant?: 'default' | 'text' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset' | 'Link';
  href?: string;
};
