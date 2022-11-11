import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { dehydrate, QueryClient } from 'react-query';

import {
  Explorer as ExplorerTemplate,
  ExplorerTemplateProps,
} from 'templates/Explorer/Explorer';

export default function Explorer(props: ExplorerTemplateProps) {
  return <ExplorerTemplate {...props} />;
}

export const getServerSideProps: GetServerSideProps = async context => {
  const filterCategories = {
    title: 'Genre',
    name: 'genre',
    type: 'checkbox',
    fields: [
      { title: 'Action-adventure', name: 'action-adventure' },
      { title: 'Adventure', name: 'adventure' },
      { title: 'Sports', name: 'sports' },
      { title: 'Puzzle', name: 'puzzle' },
      { title: 'Horror', name: 'horror' },
      { title: 'Platform', name: 'platform' },
      { title: 'Fantasy', name: 'fantasy' },
      { title: 'RPG', name: 'role-playing' },
      { title: 'JRPG', name: 'jrpg' },
      { title: 'Simulation', name: 'simulation' },
      { title: 'Strategy', name: 'strategy' },
      { title: 'Shooter', name: 'shooter' },
    ],
  };

  const filterYear = {
    title: 'Year',
    name: 'year',
    type: 'checkbox',
    fields: [
      { title: '1990 - 2000', name: '1990-2000' },
      { title: '2001 - 2005', name: '2001-2005' },
      { title: '2006 - 2011', name: '2006-2011' },
      { title: '2012 - 2017', name: '2012-2017' },
      { title: '2018 - Now', name: '2018-now' },
    ],
  };

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: [
      {
        title: 'Playstation 4',
        name: 'ps4',
      },
      {
        title: 'Playstation 5',
        name: 'ps5',
      },
      {
        title: 'Xbox One',
        name: 'one',
      },
      {
        title: 'Xbox Series X',
        name: 'xs',
      },
    ],
  };

  const filterFeedback = {
    title: 'Notas',
    name: 'feedback',
    type: 'checkbox',
    fields: [
      { title: 'From 5.0', name: 'from-5.0' },
      { title: 'From 4.0', name: 'from-4.0' },
    ],
  };

  const queryClient = new QueryClient();

  const fetchGames = async () => {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/?page=1`)
    ).json();

    return data;
  };

  await queryClient.prefetchQuery('games', () => fetchGames);

  return {
    props: {
      filterItems: [
        filterCategories,
        filterYear,
        filterPlatforms,
        filterFeedback,
      ],
      session: await getSession(context),
      dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      query: context.query,
    },
  };
};
