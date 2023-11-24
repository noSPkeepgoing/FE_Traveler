import { TextProps } from './textType';
import './text.scss';

function Text({
  fontSize = '2xl',
  fontWeight = 'bold',
  color = 'black',
  children,
}: TextProps) {
  const className = `Text ${fontSize} ${fontWeight} ${color}`;
  return <p className={className}>{children}</p>;
}

export default Text;
