import * as Popover from '@radix-ui/react-popover';
import { Story, Meta } from '@storybook/react/types-6-0';

import { cartItems } from 'components/organisms/Navbar/mock';

import { CartDropDownProps, CartDropDown } from './CartDropDown';

export default {
  title: 'Molecules/CartDropDown',
  component: CartDropDown,
  args: {
    items: cartItems,
  },
} as Meta<CartDropDownProps>;

export const Default: Story<CartDropDownProps> = args => (
  <Popover.Root>
    <CartDropDown {...args} />
  </Popover.Root>
);
