import React from 'react';
import './checkbox.scss';
import { Tcheckbox } from './checkboxType';

function Checkbox({ onChange, isChecked }: Tcheckbox) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
  );
}

export default Checkbox;
