import React, { useState } from 'react';
import classNames from 'classnames';
import { TInput } from './inputType';
import styles from './input.module.scss';

function Input({ variant, type, placeholder, invalid }: TInput) {
  const inputPlaceholder = placeholder ?? '';

  const inputClasses = classNames('input', {
    [styles.invalid]: invalid,
    [styles.login]: variant === 'login',
    [styles.signUpShort]: variant === 'signUpShort',
    [styles.reservation]: variant === 'reservation',
  });

  return (
    <input
      className={inputClasses}
      type={type}
      placeholder={inputPlaceholder}
    />
  );
}

export default Input;
