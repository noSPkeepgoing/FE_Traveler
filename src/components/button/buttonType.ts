export type TButton = {
  size?: string;
  variant?: 'default' | 'text' | 'secondary';
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

