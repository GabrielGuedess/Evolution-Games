import { GetServerSideProps } from 'next';

import { protectedRoutes } from 'utils/protectedRoutes';

import { Favorites } from 'templates/Favorites/Favorites';

export default function FavoritePage() {
  return <Favorites />;
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
