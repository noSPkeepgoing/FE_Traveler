import React from 'react';
import styles from './signIn.module.scss';
import Button from '@/components/atoms/button';
import Text from '@/components/atoms/text';
import Footer from '@/components/layouts/footer';
import SignInLogo from './_components/signInLogo';
import SignInForm from './_components/signInForm';


function SignInPage() {
  return (
    <>
      <SignInLogo />
      <SignInForm />
      <Footer />
    </>
  );
}

export default SignInPage;
