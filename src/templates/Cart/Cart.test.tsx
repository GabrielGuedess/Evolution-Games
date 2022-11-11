import { renderWithProviders } from 'utils/tests/helpers';

import {
  CartContextProps,
  CartContextDefaultValues,
} from 'hooks/useCart/useCart';

import { screen } from '@testing-library/react';

import { Cart } from './Cart';
import items from './mock';

jest.mock('templates/Base/Base', () => ({
  __esModule: true,
  Base: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>;
  },
}));

jest.mock('components/organisms/HighlightCarousel/HighlightCarousel', () => ({
  __esModule: true,
  HighlightCarousel: function Mock({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div data-testid="HighlightCarousel">{children}</div>;
  },
}));

describe('<Cart />', () => {
  it('should render <Cart /> without any items', () => {
    // Arrange
    const { container } = renderWithProviders(<Cart />);

    // Assert
    expect(screen.getByText('Nenhum jogo encontrado')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Você não adicionou nenhum jogo a sua bolsa de compras.',
      ),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render <Cart /> without any items', () => {
    // Arrange
    const cartProviderProps: CartContextProps = {
      ...CartContextDefaultValues,
      items,
    };

    renderWithProviders(<Cart />, { cartProviderProps });

    // Assert
    expect(screen.getByText('GTA 6')).toBeInTheDocument();
    expect(screen.getByText('The Witcher 3')).toBeInTheDocument();
    expect(screen.getByText('Rainbow Six')).toBeInTheDocument();
  });
});
