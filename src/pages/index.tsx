import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import Game from 'types/game';

import { Home } from 'templates/Home/Home';

import { GameCardProps } from 'components/molecules/GameCard/GameCard';

export default function Index({ gameList }: { gameList: GameCardProps[] }) {
  return <Home gameList={gameList} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const gameList: Game[] = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/?page=1`)
  ).json();

  if (!gameList) {
    return { notFound: true };
  }

  return {
    props: {
      gameList,
      session: await getSession(context),
    },
  };
};
