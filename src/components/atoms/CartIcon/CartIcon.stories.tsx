import { Story, Meta } from '@storybook/react/types-6-0';

import { CartIcon, CartIconProps } from './CartIcon';

export default {
  title: 'Atoms/CartIcon',
  component: CartIcon,
  args: {
    quantity: 1,
  },
} as Meta<CartIconProps>;

export const Default: Story = args => <CartIcon {...args} />;
