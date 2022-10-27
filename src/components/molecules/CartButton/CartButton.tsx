import Link from 'next/link';

import { useCart } from 'hooks/useCart/useCart';

import { CartIcon } from 'components/atoms/CartIcon/CartIcon';

import * as S from './CartButton.styles';

export const CartButton = () => {
  const { quantity } = useCart();

  return (
    <Link href="/cart">
      <S.Wrapper>
        <CartIcon quantity={quantity} />
      </S.Wrapper>
    </Link>
  );
};
