import classNames from 'classnames';
import React from 'react';
import './checkbox.scss';

type TCheckbox = {
  variant?: 'default' | 'secondary';
};
function Checkbox({ variant = 'default' }: TCheckbox) {
  const className = classNames('checkbox', variant);
  return <input type="checkbox" className={className} id="checkbox" />;
}

export default Checkbox;
