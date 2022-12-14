import Image from 'next/image';
import Link from 'next/link';

import { Trash } from 'phosphor-react';
import Game from 'types/game';

import { useCart } from 'hooks/useCart/useCart';

import { PlatformIcon } from 'components/atoms/PlatformIcon/PlatformIcon';

import * as S from './GameCartDrop.styles';

export type GameCartDropProps = {
  quantity: number;
} & Pick<
  Game,
  'id' | 'background' | 'genres' | 'name' | 'developers' | 'platforms' | 'price'
>;

export const GameCartDrop = ({
  id,
  background,
  genres,
  name,
  developers,
  quantity,
  platforms,
  price,
}: GameCartDropProps) => {
  const { removeFromCart, setQuantity } = useCart();

  return (
    <S.Wrapper>
      <S.GameInfoWrapper>
        <Link href={`game/${id}`}>
          <S.GameImageWrapper>
            <Image
              src={background}
              layout="fill"
              alt="Image game"
              objectFit="cover"
            />
          </S.GameImageWrapper>
        </Link>

        <S.InfoWrapper>
          <S.Genre>{genres.map(genre => genre.name).join(', ')}</S.Genre>
          <S.Title>{name}</S.Title>
          <S.Developer>
            {developers.map(developer => developer.name).join(' | ')}
          </S.Developer>

          {platforms.map(platform => (
            <PlatformIcon
              key={platform.slug}
              platform={platform.slug}
              hasTitle
              size="small"
            />
          ))}

          <S.BuyInfoWrapper>
            <S.Remove
              onClick={() => removeFromCart(id)}
              aria-label="Remove from Cart"
            >
              <Trash size={20} />
            </S.Remove>
            <S.ButtonQuantityWrapper>
              <S.ButtonQuantity
                disabled={quantity === 1}
                onClick={() => setQuantity(id, quantity - 1)}
                aria-label="Less to Cart"
              >
                {' '}
                -{' '}
              </S.ButtonQuantity>
              <S.Quantity aria-label="Quantity Cart">{quantity}</S.Quantity>
              <S.ButtonQuantity
                disabled={quantity === 10}
                onClick={() => setQuantity(id, quantity + 1)}
                aria-label="Add to Cart"
              >
                {' '}
                +{' '}
              </S.ButtonQuantity>
            </S.ButtonQuantityWrapper>
          </S.BuyInfoWrapper>
        </S.InfoWrapper>
        <S.Total>
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(price * quantity)}
        </S.Total>
      </S.GameInfoWrapper>
    </S.Wrapper>
  );
};
