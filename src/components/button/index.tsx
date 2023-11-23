import classNames from 'classnames';
import './button.scss';
import { TButton } from './buttonType';

function Button({
  size = 'lg',
  variant = 'default',
  children,
  onClick,
  disabled = false,
}: TButton) {
  const className = classNames('button', size, variant, { disabled });
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

export default Button;
