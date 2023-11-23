import React, { useState } from 'react';
import styles from '@/components/input/input.module.scss';

function Input() {
  const [inputValue, setInputValue] = useState('로그인');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    if (inputValue === '로그인') {
      setInputValue('');
    }
  };

  return (
    <div>
      <input
        className={styles.inputStyle}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
      />
    </div>
  );
}

export default Input;
