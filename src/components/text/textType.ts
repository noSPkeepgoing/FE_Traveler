export interface TextProps {
  fontSize?: 'xs-5' | 'xs-4' | 'xs-3' | 'xs-2' | 'xs' | 'md' | 'xl' | 'xl-2';
  fontWeight?:
    | 'thin'
    | 'light'
    | 'normal'
    | 'medium'
    | 'semibold'
    | 'bold'
    | 'extrabold';
  color?:
    | 'primary'
    | 'gray400'
    | 'blackAlpha100'
    | 'sub'
    | 'red200'
    | 'gray200'
    | 'gray300'
    | 'red100'
    | 'green'
    | 'highlight'
    | 'black'
    | 'gray100'
    | 'blackAlpha200';
  children: ReactNode;
}
