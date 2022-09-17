import * as Popover from '@radix-ui/react-popover';

import { CartIcon } from 'components/atoms/CartIcon/CartIcon';
import {
  CartDropDown,
  CartDropDownProps,
} from 'components/molecules/CartDropDown/CartDropDown';

import * as S from './CartButton.styles';

export const CartButton = ({ items }: CartDropDownProps) => (
  <S.Wrapper>
    <Popover.Root>
      <Popover.Trigger>
        <CartIcon quantity={items.length} />
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <S.Content>
          <CartDropDown items={items} />
          <S.Arrow width={12} height={10} aria-label="Arrow" />
        </S.Content>
      </Popover.Portal>
    </Popover.Root>
  </S.Wrapper>
);
