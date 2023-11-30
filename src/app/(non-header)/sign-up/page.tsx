import React from 'react';
import Footer from '@/components/layouts/footer';
import SignUpLogo from './_components/signUpLogo';
import SignUpForm from './_components/signUpForm';

function SignUpPage() {
  return (
    <>
      <SignUpLogo />
      <SignUpForm />
      <Footer />
    </>
  );
}

export default SignUpPage;
