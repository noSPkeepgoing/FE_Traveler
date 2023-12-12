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
  return (
    <div className={'textWrapper'}>
      <p className={className}>{children}</p>
    </div>
  );
}

export default Text;
