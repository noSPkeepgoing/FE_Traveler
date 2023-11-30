import React from 'react';
import './checkbox.scss';
import { Tcheckbox } from './checkboxType';

function Checkbox({ onChange, isChecked, id, name }: Tcheckbox) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={isChecked}
      onChange={onChange}
      id={id}
      name={name}
    />
  );
}

export default Checkbox;
