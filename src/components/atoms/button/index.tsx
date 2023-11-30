import classNames from 'classnames';
import './button.scss';
import { TButton } from './buttonType';
import Link from 'next/link';

function Button({
  size = '',
  variant = 'default',
  children,
  onClick,
  disabled = false,
  type = 'button',
  href,
}: TButton) {
  const className = classNames('button', size, variant, { disabled });
  if (href)
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}>
      {children}
    </button>
  );
}

export default Button;
