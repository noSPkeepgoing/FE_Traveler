import classNames from 'classnames';
import './button.scss';
import { Tbutton } from './buttonType';
import Link from 'next/link';

function Button({
  size = 'lg',
  variant = 'default',
  children,
  onClick,
  disabled = false,
  type,
  href,
}: Tbutton) {
  const className = classNames('button', size, variant, { disabled });
  if (type === 'Link' && href)
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
