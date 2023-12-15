import React, { useState } from 'react';
import classNames from 'classnames';
import { TInput } from './inputType';
import './input.scss';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Button from '../button';

function Input({
  variant,
  type,
  placeholder,
  state,
  name,
  onChange,
  id,
  usePwShowToggle,
}: TInput) {
  const [pwShowState, setPwShowState] = useState(false);
  const handleTogglePassword = () => {
    setPwShowState(!pwShowState);
  };

  const inputPlaceholder = placeholder ?? '';
  const className = classNames('input', variant, state);

  return (
    <div className="input-container">
      <input
        className={className}
        type={usePwShowToggle ? (pwShowState ? 'text' : 'password') : type}
        placeholder={inputPlaceholder}
        name={name}
        onChange={onChange}
        id={id}
      />
      {usePwShowToggle && (
        <span className="password-toggle">
          <Button
            onClick={() => {
              handleTogglePassword();
            }}
            variant="text"
            type="button"
            textDecoration="none">
            {pwShowState ? (
              <AiOutlineEye style={{ fontSize: '20px' }} />
            ) : (
              <AiOutlineEyeInvisible style={{ fontSize: '20px' }} />
            )}
          </Button>
        </span>
      )}
    </div>
  );
}

export default Input;
