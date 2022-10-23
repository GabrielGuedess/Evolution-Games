import {
  CartContext,
  CartContextDefaultValues,
  CartContextProps,
} from 'hooks/useCart/useCart';

import { render, RenderResult } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';

import theme from 'styles/theme';

type renderWithProvidersProps = {
  cartProviderProps?: CartContextProps;
};

export const renderWithProviders = (
  ui: React.ReactElement,
  {
    cartProviderProps = CartContextDefaultValues,
  }: renderWithProvidersProps = {},
): RenderResult =>
  render(
    <ThemeProvider theme={theme}>
      <CartContext.Provider value={cartProviderProps}>
        {ui}
      </CartContext.Provider>
    </ThemeProvider>,
  );
