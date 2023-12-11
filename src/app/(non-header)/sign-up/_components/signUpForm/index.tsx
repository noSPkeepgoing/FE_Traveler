'use client';

import React from 'react';
import styles from './signUpForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import { useSignUpForm } from '@/hooks/sign/useSignUpForm';

function SignUpForm() {
  const {
    email,
    setEmail,
    pw,
    setPw,
    pwCheck,
    setPwCheck,
    name,
    setName,
    isEmailValid,
    emailPass,
    emailMessage,
    passwordMessage,
    passwordCheckMessage,
    nameMessage,
    checkEmailValid,
    signUpHandler,
  } = useSignUpForm();

  return (
    <form onSubmit={signUpHandler}>
      <div className={styles.form}>
        <div className={styles.info}>
          <Text color="primary" fontSize="xl" fontWeight="medium">
            회원가입
          </Text>
        </div>
        <div className={styles.inputBox}>
          <div className={styles.inputContainer}>
            <Input
              variant="signShort"
              type="email"
              placeholder="이메일"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              state={emailMessage.error ? 'invalid' : ''}
              readOnly={emailPass}
            />
            <Button
              size="sm"
              type="button"
              onClick={checkEmailValid}
              disabled={isEmailValid}>
              <Text color="gray100" fontSize="xs-4" fontWeight="medium">
                {emailPass ? '사용가능' : '중복확인'}
              </Text>
            </Button>
          </div>
          <div className={styles.labelArea}>
            <label className={styles.label} htmlFor="email">
              <Text
                fontSize="xs-3"
                fontWeight="normal"
                color={emailMessage.error ? 'red100' : 'green'}>
                {emailMessage.message || ''}
              </Text>
            </label>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="password"
              placeholder="비밀번호"
              name="password"
              onChange={(e) => setPw(e.target.value)}
              state={passwordMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="password">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={passwordMessage.error ? 'red100' : 'green'}>
                  {passwordMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="password"
              placeholder="비밀번호 확인"
              name="passwordCheck"
              onChange={(e) => setPwCheck(e.target.value)}
              state={passwordCheckMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="passwordCheck">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={passwordCheckMessage.error ? 'red100' : 'green'}>
                  {passwordCheckMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="text"
              placeholder="이름"
              name="name"
              onChange={(e) => setName(e.target.value)}
              state={nameMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="name">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={nameMessage.error ? 'red100' : 'green'}>
                  {nameMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.confirm}>
          <Button
            size="lg"
            type="submit"
            disabled={!email || !pw || !pwCheck || !(name.length >= 2)}>
            <Text color="gray100" fontSize="xs-2" fontWeight="medium">
              가입하기
            </Text>
          </Button>
        </div>
        <div className={styles.signInBtn}>
          <Button type="button" variant="text" href="/sign-in">
            <Text fontSize="xs-3" fontWeight="bold">
              이미 회원이신가요??
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignUpForm;
