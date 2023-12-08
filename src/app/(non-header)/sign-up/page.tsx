import React from 'react';
import Footer from '@/components/layouts/footer';
import SignUpForm from './_components/signUpForm';
import SignPageLogo from '@/components/atoms/logo';

function SignUpPage() {
  return (
    <>
      <SignPageLogo />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUpPage;
