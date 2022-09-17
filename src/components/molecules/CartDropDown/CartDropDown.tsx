import { CloseButton } from 'components/atoms/CloseButton/CloseButton';
import {
  GameCartDrop,
  GameCartDropProps,
} from 'components/molecules/GameCartDrop/GameCartDrop';

import * as S from './CartDropDown.styles';

export type CartDropDownProps = {
  items: GameCartDropProps[];
};

export const CartDropDown = ({ items }: CartDropDownProps) => (
  <S.Wrapper>
    <CloseButton />

    <S.HeadingWrapper>
      <S.Heading>My Cart ({items.length})</S.Heading>

      <S.ViewAll href="/cart">View all</S.ViewAll>
    </S.HeadingWrapper>

    {items.map(game => (
      <GameCartDrop key={game.title} {...game} />
    ))}

    <S.TotalAllWrapper>
      <strong>Total</strong>
      <h2>
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(items.reduce((acc, cur) => cur.price + acc, 0))}
      </h2>
    </S.TotalAllWrapper>
  </S.Wrapper>
);
