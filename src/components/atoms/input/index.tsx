import React, { useState } from 'react';
import classNames from 'classnames';
import { TInput } from './inputType';
import './input.scss';

function Input({ variant, placeholder }: TInput) {
  // If 'placeholder' is provided, use it; otherwise default to an empty string
  const inputPlaceholder = placeholder ?? '';

  const className = classNames('input', variant);

  return <input className={className} placeholder={inputPlaceholder} />;
}

export default Input;
