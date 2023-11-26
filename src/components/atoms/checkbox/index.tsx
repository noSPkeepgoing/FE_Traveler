import React from 'react';
import './checkbox.scss';

function Checkbox({
  onChange,
  isChecked,
}: {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked?: boolean;
}) {
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
