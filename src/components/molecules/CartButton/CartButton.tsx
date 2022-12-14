import { useSession } from 'next-auth/react';
import Link from 'next/link';

import { useCart } from 'hooks/useCart/useCart';

import { CartIcon } from 'components/atoms/CartIcon/CartIcon';

import * as S from './CartButton.styles';

export const CartButton = () => {
  const { quantity } = useCart();
  const { data: session } = useSession();

  return (
    <Link href={session?.user ? '/cart' : '/sign-in?callbackUrl=/cart'}>
      <S.Wrapper>
        <CartIcon quantity={quantity} />
      </S.Wrapper>
    </Link>
  );
};
