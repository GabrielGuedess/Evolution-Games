import { useRouter } from 'next/router';

import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';

import * as Popover from '@radix-ui/react-popover';
import { CaretDown, FunnelSimple, List } from 'phosphor-react';
import { ParsedUrlQueryInput } from 'querystring';
import type Game from 'types/game';
import { parseQueryStringToFilter } from 'utils/filter';

import { Base } from 'templates/Base/Base';

import Button from 'components/atoms/Button/Button';
import { Empty } from 'components/atoms/Empty/Empty';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';
import { Preloader } from 'components/atoms/Preloader/Preloader';
import { RadioButton } from 'components/atoms/RadioButton/RadioButton';
import { GameCard } from 'components/molecules/GameCard/GameCard';
import {
  ExplorerSidebar,
  type ItemProps,
} from 'components/organisms/ExplorerSidebar/ExplorerSidebar';

import * as S from './Explorer.styles';

export type ExplorerTemplateProps = {
  filterItems: ItemProps[];
};

const fetchGames = async ({ pageParam = 1 }) => {
  const data = await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/?page=${pageParam}`)
  ).json();

  return data;
};

export const Explorer = ({ filterItems }: ExplorerTemplateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [secondaryFilter, setSecondaryFilter] = useState('Popularity');

  const { push, query } = useRouter();

  const { data, isFetching, isLoading, fetchNextPage, hasNextPage } =
    useInfiniteQuery<Game[]>('games', fetchGames, {
      getNextPageParam: (_, allPages) =>
        allPages.length < 2 && allPages.length + 1,
    });

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push(
      {
        pathname: '/explorer',
        query: items,
      },
      undefined,
      { scroll: false },
    );
  };

  const filterQuery = filterItems.map(item =>
    item.fields.filter(field =>
      Array.isArray(query[item.name])
        ? query[item.name]?.includes(field.name)
        : field.name === query[item.name],
    ),
  );

  return (
    <Base hasMarginTop hasColors>
      <S.Wrapper>
        <ExplorerSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems,
          })}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          items={filterItems}
          onFilter={handleFilter}
        />

        <S.WrapperContent>
          {data?.pages ? (
            <>
              <S.WrapperHeaderFilter>
                <MediaMatch greaterThan="medium">
                  <S.Filters>
                    {filterQuery[0].map(fieldFilter => (
                      <S.FilterTitle
                        key={fieldFilter.name}
                        aria-label={`active-filter: ${fieldFilter.name}`}
                      >
                        {fieldFilter.title}
                      </S.FilterTitle>
                    ))}
                  </S.Filters>
                </MediaMatch>

                <MediaMatch lessThan="medium">
                  <Button
                    size="large"
                    onClick={() => setIsOpen(!isOpen)}
                    icon={<FunnelSimple size={20} />}
                  >
                    Filtrar
                  </Button>
                </MediaMatch>

                <Popover.Root>
                  <S.WrapperFilterSecondary aria-label="Button Sort">
                    {secondaryFilter}
                    <List size={20} />
                  </S.WrapperFilterSecondary>
                  <Popover.Portal>
                    <S.ContentFilterSecondary align="center" sideOffset={8}>
                      <RadioButton
                        title="Popularity"
                        value="popularity"
                        name="filter-secondary"
                        defaultChecked={secondaryFilter === 'Popularity'}
                        onCheck={() => setSecondaryFilter('Popularity')}
                      />
                      <RadioButton
                        title="High to low"
                        value="high-to-low"
                        name="filter-secondary"
                        defaultChecked={secondaryFilter === 'High to low'}
                        onCheck={() => setSecondaryFilter('High to low')}
                      />
                      <RadioButton
                        title="Low to high"
                        value="low-to-high"
                        name="filter-secondary"
                        defaultChecked={secondaryFilter === 'Low to high'}
                        onCheck={() => setSecondaryFilter('Low to high')}
                      />
                      <S.Arrow />
                    </S.ContentFilterSecondary>
                  </Popover.Portal>
                </Popover.Root>
              </S.WrapperHeaderFilter>

              <S.Grid>
                {data?.pages.map(group =>
                  group.map(game => (
                    <GameCard
                      key={game.name}
                      id={game.id}
                      name={game.name}
                      slug={game.slug}
                      genres={game.genres}
                      developers={game.developers}
                      release_date={game.release_date}
                      image={game.image}
                      score={game.score}
                      price={game.price}
                      platforms={game.platforms}
                      primary_color={game.primary_color}
                    />
                  )),
                )}
              </S.Grid>

              {hasNextPage && (
                <S.More>
                  {isFetching ? (
                    <Preloader />
                  ) : (
                    <Button
                      onClick={() => fetchNextPage()}
                      minimal
                      icon={<CaretDown size={20} />}
                    >
                      Mostrar Mais
                    </Button>
                  )}
                </S.More>
              )}
            </>
          ) : isLoading ? (
            <Preloader />
          ) : (
            <Empty
              title="Nenhum resultado encontrado"
              description="Infelizmente não achamos nenhum resultado para a sua busca."
            />
          )}
        </S.WrapperContent>
      </S.Wrapper>
    </Base>
  );
};
