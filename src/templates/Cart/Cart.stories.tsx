import { Story, Meta } from '@storybook/react/types-6-0';
import {
  CartContext,
  CartContextDefaultValues,
  CartContextProps,
} from 'hooks/useCart/useCart';

import { Cart } from './Cart';
import items from './mock';

export default {
  title: 'Templates/Cart',
  component: Cart,
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

export const Empty: Story = () => <Cart />;

export const Populated: Story = () => {
  const cartProviderProps: CartContextProps = {
    ...CartContextDefaultValues,
    items,
    total: 'R$300,00',
  };

  return (
    <CartContext.Provider value={cartProviderProps}>
      <Cart />
    </CartContext.Provider>
  );
};
