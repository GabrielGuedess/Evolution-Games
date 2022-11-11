import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Game, GameProps } from 'templates/Game/Game';

export default function Index(props: GameProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const game = await (
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/game/slug/${context.params?.slug}`,
    )
  ).json();

  if (!game) {
    return { notFound: true };
  }

  return {
    props: {
      ...game,
      session: await getSession(context),
    },
  };
};
