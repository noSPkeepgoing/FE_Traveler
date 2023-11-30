import { TText } from './textType';
import './text.scss';

function Text({
  fontSize = 'xs',
  fontWeight = 'normal',
  color = 'primary',
  textDecoration = 'none',
  children,
}: TText) {
  const className = `Text ${fontSize} ${fontWeight} ${color} ${textDecoration}`;
  return <p className={className}>{children}</p>;
}

export default Text;
