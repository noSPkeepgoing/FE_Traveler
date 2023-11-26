import { TextProps } from './textType';
import './text.scss';

function Text({
  fontSize = 'xs',
  fontWeight = 'normal',
  color = 'primary',
  children,
}: TextProps) {
  const className = `Text ${fontSize} ${fontWeight} ${color}`;
  return <p className={className}>{children}</p>;
}

export default Text;
