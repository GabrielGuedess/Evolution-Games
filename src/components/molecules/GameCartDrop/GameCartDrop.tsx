import Image from 'next/image';

import { useState } from 'react';

import { Trash } from 'phosphor-react';

import * as S from './GameCartDrop.styles';

export type GameCartDropProps = {
  src: string;
  genre: string;
  title: string;
  developer: string;
  price: number;
};

export const GameCartDrop = ({
  src,
  genre,
  title,
  developer,
  price,
}: GameCartDropProps) => {
  const [quantityGames, setQuantityGames] = useState(1);

  function handleQuantity(type: 'less' | 'more') {
    if (type === 'less' && quantityGames > 1) {
      setQuantityGames(quantityGames - 1);
    }

    if (type === 'more' && quantityGames < 10) {
      setQuantityGames(quantityGames + 1);
    }
  }

  return (
    <S.Wrapper>
      <S.GameInfoWrapper>
        <S.GameImageWrapper>
          <Image src={src} layout="fill" alt="Image game" objectFit="cover" />
        </S.GameImageWrapper>

        <S.InfoWrapper>
          <S.Genre>{genre}</S.Genre>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.InfoWrapper>
      </S.GameInfoWrapper>

      <S.BuyInfoWrapper>
        <S.ButtonQuantityWrapper>
          <S.ButtonLess
            onClick={() => handleQuantity('less')}
            aria-label="Less to Cart"
          >
            {' '}
            -{' '}
          </S.ButtonLess>
          <S.Quantity aria-label="Quantity Cart">{quantityGames}</S.Quantity>
          <S.ButtonMore
            onClick={() => handleQuantity('more')}
            aria-label="Add to Cart"
          >
            {' '}
            +{' '}
          </S.ButtonMore>
        </S.ButtonQuantityWrapper>

        <S.Total>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price * quantityGames)}
        </S.Total>
      </S.BuyInfoWrapper>

      <S.GameOptions>
        <S.Options>
          <S.MoveToFavorites>Move To Favorites</S.MoveToFavorites>
          <S.Remove>
            <Trash size={20} />
            Remover
          </S.Remove>
        </S.Options>
      </S.GameOptions>
    </S.Wrapper>
  );
};
