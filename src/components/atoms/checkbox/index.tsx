import React from 'react';
import './checkbox.scss';

function Checkbox({
  value,
  onChange,
  checkedValue,
}: {
  value?: number;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checkedValue?: boolean;
}) {
  return (
    <input
      type="checkbox"
      className="checkbox"
      checked={checkedValue}
      value={value}
      onChange={onChange}
    />
  );
}

export default Checkbox;
