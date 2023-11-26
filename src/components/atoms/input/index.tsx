import React, { useState } from 'react';
import classNames from 'classnames';
import { TInput } from './inputType';
import './input.scss';

function Input({ variant = 'login' }: TInput) {
  const className = classNames('input', variant);
  let placeholder = variant === 'login' ? '이메일' : '홍길동';

  return <input className={className} placeholder={placeholder} />;
}

export default Input;
