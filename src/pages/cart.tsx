import { GetServerSideProps } from 'next';

import { protectedRoutes } from 'utils/protectedRoutes';

import { Cart } from 'templates/Cart/Cart';

export default function CartPage() {
  return <Cart />;
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
