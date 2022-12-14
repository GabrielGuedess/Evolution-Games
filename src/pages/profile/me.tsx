import { GetServerSideProps } from 'next';

import { protectedRoutes } from 'utils/protectedRoutes';

import { Profile } from 'templates/Profile/Profile';

export default function Orders() {
  return (
    <Profile>
      <h1>GG</h1>
    </Profile>
  );
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
