import React from 'react';
import Footer from '@/components/layouts/footer';
import SignInForm from './_components/signInForm';
import SignPageLogo from '@/components/atoms/logo';

function SignInPage() {
  return (
    <>
      <SignPageLogo />
      <SignInForm />
      <Footer />
    </>
  );
}

export default SignInPage;
