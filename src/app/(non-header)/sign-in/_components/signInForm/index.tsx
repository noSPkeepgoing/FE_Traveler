'use client';
import React from 'react';
import styles from './signInForm.module.scss';
import Text from '@/components/atoms/text';
import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import { useSignInForm } from '@/hooks/sign/useSignInForm';

function SignInForm() {
  const { emailMessage, passwordMessage, handleSubmit } = useSignInForm();

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.form}>
        <div className={styles.info}>
          <Text color="primary" fontSize="xl" fontWeight="medium">
            로그인
          </Text>
        </div>
        <div className={styles.inputContainer}>
          <div className={styles.inputBox}>
            <Input
              variant="signRegular"
              type="email"
              placeholder="이메일"
              name="email"
              state={emailMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label className={styles.label} htmlFor="email">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={emailMessage.error ? 'red100' : 'black'}>
                  {emailMessage.message || ''}
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
              placeholder="비밀번호"
              name="password"
              state={passwordMessage.error ? 'invalid' : ''}
            />
            <div className={styles.labelArea}>
              <label htmlFor="password">
                <Text
                  fontSize="xs-3"
                  fontWeight="normal"
                  color={passwordMessage.error ? 'red100' : 'black'}>
                  {passwordMessage.message || ''}
                </Text>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.confirm}>
          <Button size="lg" type="submit">
            <Text color="gray100" fontSize="xs-2" fontWeight="medium">
              로그인
            </Text>
          </Button>
        </div>
        <div className={styles.signInBtn}>
          <Button type="button" variant="text" href="/sign-up">
            <Text fontSize="xs-3" fontWeight="bold">
              아직 회원이 아니신가요?
            </Text>
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SignInForm;
