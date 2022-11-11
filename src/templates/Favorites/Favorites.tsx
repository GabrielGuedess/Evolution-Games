import { useFavorite } from 'hooks/useFavorite/useFavorite';

import { Base } from 'templates/Base/Base';

import { Empty } from 'components/atoms/Empty/Empty';
import { Preloader } from 'components/atoms/Preloader/Preloader';
import { Title } from 'components/atoms/Title/Title';
import { GameCard } from 'components/molecules/GameCard/GameCard';

import * as S from './Favorites.styles';

export const Favorites = () => {
  const { items, isLoading } = useFavorite();

  return (
    <Base hasMarginTop hasColors>
      <S.Wrapper>
        {!isLoading ? (
          items.length > 0 ? (
            <>
              <Title textAlign="left" hasAnimation>
                Jogos Favoritos ❤️
              </Title>

              <S.Grid>
                {items.map(game => (
                  <GameCard key={game.id} {...game} />
                ))}
              </S.Grid>
            </>
          ) : (
            <Empty
              title="Sua lista de favoritos está vazia"
              description="Os jogos adicionados à sua lista de jogos favoritos aparecerão aqui"
              hasLink
            />
          )
        ) : (
          <Preloader />
        )}
      </S.Wrapper>
    </Base>
  );
};
