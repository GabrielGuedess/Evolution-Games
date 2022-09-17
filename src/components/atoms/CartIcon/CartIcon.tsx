import * as AccessibleIcon from '@radix-ui/react-accessible-icon';
import { HandbagSimple } from 'phosphor-react';

import * as S from './CartIcon.styles';

export type CartIconProps = {
  quantity?: number;
};

export const CartIcon = ({ quantity }: CartIconProps) => (
  <S.Wrapper>
    <AccessibleIcon.Root label="Shopping Bag">
      <HandbagSimple size={24} aria-label="Cart Icon" />
    </AccessibleIcon.Root>

    {!!quantity && quantity > 0 && (
      <S.Badge role="img" aria-label="Cart Items">
        {quantity}
      </S.Badge>
    )}
  </S.Wrapper>
);
