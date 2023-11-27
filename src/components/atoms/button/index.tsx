import classNames from 'classnames';
import './button.scss';
import { Tbutton } from './buttonType';

function Button({
  size = '',
  variant = 'default',
  children,
  onClick,
  disabled = false,
}: Tbutton) {
  const className = classNames('button', size, variant, { disabled });
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
