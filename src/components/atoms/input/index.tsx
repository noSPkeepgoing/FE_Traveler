import React, { useState } from 'react';
import classNames from 'classnames';
import { TInput } from './inputType';
import './input.scss';

function Input({ variant, type, placeholder, state, name, onChange }: TInput) {
  const inputPlaceholder = placeholder ?? '';

  const className = classNames('input', variant, state);

  return (
    <input
      className={className}
      type={type}
      placeholder={inputPlaceholder}
      name={name}
      onChange={onChange}
    />
  );
}

export default Input;
