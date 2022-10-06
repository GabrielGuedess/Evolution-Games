import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';

import { Game, GameProps } from 'templates/Game/Game';

export default function Index(props: GameProps) {
  const router = useRouter();

  if (router.isFallback) return null;

  return <Game {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'the-witcher-3-wild-hund' } },
      { params: { slug: 'god-of-war-ragnarok' } },
      { params: { slug: 'horizon-forbidden-west' } },
      { params: { slug: 'elden-ring' } },
      { params: { slug: 'star-wars-jedi-fallen-order' } },
      { params: { slug: 'marvels-spider-man' } },
      { params: { slug: 'the-last-of-us-part-ii' } },
      { params: { slug: 'cyberpunk-2077' } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const host = process.env.HOST || 'http://localhost:3000';
  const data = await fetch(`${host}/api/games/${params?.slug}`);
  const game = await data.json();

  if (!game) {
    return { notFound: true };
  }

  return {
    props: game,
  };
};
