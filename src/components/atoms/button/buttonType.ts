export type TButton = {
  size?: 'lg' | 'xl' | 'md' | 'sm' | 'xs';
  variant?: 'default' | 'text' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  textDecoration?: 'none' | 'underline';
  textDecorationColor?: 'primary' | 'highlight';
  style?: any;
};
