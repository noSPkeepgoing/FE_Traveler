export type Tbutton = {
  size?: 'lg' | 'xl' | 'md' | 'sm' | '';
  variant?: 'default' | 'text' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'Link';
  href?: string;
};
