import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { Game, GameProps } from 'templates/Game/Game';

export default function Index(props: GameProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const host = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';
  const data = await fetch(`${host}/api/games/${params?.slug}`);
  const game = await data.json();

  if (!game) {
    return { notFound: true };
  }

  return {
    props: game,
  };
};
