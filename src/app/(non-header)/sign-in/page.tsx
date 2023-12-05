import React from 'react';
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
