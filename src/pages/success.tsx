import { GetServerSideProps } from 'next';

import { protectedRoutes } from 'utils/protectedRoutes';

import { Success } from 'templates/Success/Success';

export default function SuccessPage() {
  return <Success />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await protectedRoutes(context);

  if (!session) {
    return { props: {} };
  }

  return {
    props: {
      session,
    },
  };
};
