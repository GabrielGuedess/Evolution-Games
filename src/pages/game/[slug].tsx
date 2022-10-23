import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { apiEndPt } from 'constants/index';

import { Game, GameProps } from 'templates/Game/Game';

export default function Index(props: GameProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await fetch(`${apiEndPt}/api/games/${params?.slug}`);
  const game = await data.json();

  if (!game) {
    return { notFound: true };
  }

  return {
    props: game,
  };
};
