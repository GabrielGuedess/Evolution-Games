import { Story, Meta } from '@storybook/react/types-6-0';

import { cartItems } from 'components/organisms/Navbar/mock';

import { CartDropDownProps } from '../CartDropDown/CartDropDown';
import { CartButton } from './CartButton';

export default {
  title: 'Molecules/CartButton',
  component: CartButton,
  args: {
    items: cartItems,
  },
} as Meta<CartDropDownProps>;

export const Default: Story<CartDropDownProps> = args => (
  <CartButton {...args} />
);
