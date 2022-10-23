import { GetServerSideProps } from 'next';

import { apiEndPt } from 'constants/index';
import Game from 'types/game';

import { Home } from 'templates/Home/Home';

import { GameCardProps } from 'components/molecules/GameCard/GameCard';

export default function Index({ gameList }: { gameList: GameCardProps[] }) {
  return <Home gameList={gameList} />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(`${apiEndPt}/api/games`);
  const data: { games: Game[] } = await res.json();

  if (!data) {
    return { notFound: true };
  }

  const { games } = data;

  const gameList = games.map(game => ({
    id: game.id,
    name: game.name,
    slug: game.slug,
    genres: game.genres,
    developer: game.developer,
    releaseDate: game.releaseDate,
    image: game.image,
    score: game.score,
    price: game.price,
    platform: game.platform,
    primaryColor: game.primaryColor,
  }));

  return {
    props: { gameList },
  };
};
