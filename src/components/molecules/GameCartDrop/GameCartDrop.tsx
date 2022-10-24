import Image from 'next/image';
import Link from 'next/link';

import { useCart } from 'hooks/useCart/useCart';
import { Trash } from 'phosphor-react';

import {
  PlatformIcon,
  Platform,
} from 'components/atoms/PlatformIcon/PlatformIcon';

import * as S from './GameCartDrop.styles';

export type GameCartDropProps = {
  id: string;
  src: string;
  genres: string[];
  title: string;
  developer: string;
  quantity: number;
  platform: Platform;
  price: number;
};

export const GameCartDrop = ({
  id,
  src,
  genres,
  title,
  developer,
  quantity,
  platform,
  price,
}: GameCartDropProps) => {
  const { removeFromCart, setQuantity } = useCart();

  return (
    <S.Wrapper>
      <S.GameInfoWrapper>
        <Link href={`game/${id}`}>
          <S.GameImageWrapper>
            <Image src={src} layout="fill" alt="Image game" objectFit="cover" />
          </S.GameImageWrapper>
        </Link>

        <S.InfoWrapper>
          <S.Genre>{genres.join(', ')}</S.Genre>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
          <PlatformIcon platform={platform} hasTitle size="small" />

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
