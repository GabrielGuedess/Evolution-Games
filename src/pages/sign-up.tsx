import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { Auth } from 'templates/Auth/Auth';
import { steps } from 'templates/SignUpForm/mock';
import { SignUpForm } from 'templates/SignUpForm/SignUpForm';

export default function SignIn() {
  return (
    <Auth>
      <SignUpForm steps={steps} />
    </Auth>
  );
}

export const getServerSideProps: GetServerSideProps = async context => ({
  props: {
    session: await getSession(context),
  },
});
