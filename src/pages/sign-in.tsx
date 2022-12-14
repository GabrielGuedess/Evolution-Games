import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { Auth } from 'templates/Auth/Auth';

import { SignIn as SignInForm } from 'components/organisms/SignIn/SignIn';

export default function SignIn() {
  return (
    <Auth>
      <SignInForm />
    </Auth>
  );
}

export const getServerSideProps: GetServerSideProps = async context => ({
  props: {
    session: await getSession(context),
  },
});
