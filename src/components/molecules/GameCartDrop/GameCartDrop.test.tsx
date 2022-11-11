import { renderWithProviders } from 'utils/tests/helpers';

import {
  CartContextDefaultValues,
  CartContextProps,
} from 'hooks/useCart/useCart';

import { fireEvent, screen } from '@testing-library/react';

import { GameCartDrop, GameCartDropProps } from './GameCartDrop';

const props: GameCartDropProps = {
  id: '1',
  platform: 'ps4',
  quantity: 2,
  src: 'https://images.unsplash.com/photo-1662414590066-91c548626702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIxMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjMyOTQxNjQ&ixlib=rb-1.2.1&q=80&w=1080',
  genres: ['Action'],
  title: 'The Witcher 3',
  developer: 'CD Projekt',
  price: 100,
};

describe('<GameCartDrop />', () => {
  it('should render the Image Game', () => {
    // Arrange
    const { container } = renderWithProviders(<GameCartDrop {...props} />);

    // Assert
    expect(screen.getByRole('img', { name: 'Image game' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change quantity', () => {
    const cartProviderProps: CartContextProps = {
      ...CartContextDefaultValues,
      removeFromCart: jest.fn(),
      setQuantity: jest.fn(),
    };

    renderWithProviders(<GameCartDrop {...props} />, { cartProviderProps });

    // Arrange
    const less = screen.getByLabelText('Less to Cart');
    const more = screen.getByLabelText('Add to Cart');
    const cart = screen.getByLabelText('Quantity Cart');

    // Act
    fireEvent.click(less);
    fireEvent.click(more);

    // Assert
    expect(less).toBeInTheDocument();
    expect(more).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
    expect(cartProviderProps.setQuantity).toHaveBeenCalledTimes(2);
  });

  it('should change quantity', () => {
    const cartProviderProps: CartContextProps = {
      ...CartContextDefaultValues,
      removeFromCart: jest.fn(),
    };

    renderWithProviders(<GameCartDrop {...props} />, { cartProviderProps });

    // Arrange
    const remove = screen.getByLabelText('Remove from Cart');

    // Act
    fireEvent.click(remove);

    // Assert
    expect(remove).toBeInTheDocument();
    expect(cartProviderProps.removeFromCart).toHaveBeenCalled();
  });
});
