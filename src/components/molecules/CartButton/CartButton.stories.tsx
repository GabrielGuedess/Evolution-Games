import { Story, Meta } from '@storybook/react/types-6-0';

import { cartItems } from 'components/organisms/Navbar/mock';

import { CartButton } from './CartButton';

export default {
  title: 'Molecules/CartButton',
  component: CartButton,
  args: {
    items: cartItems,
  },
} as Meta;

export const Default: Story = () => <CartButton />;
