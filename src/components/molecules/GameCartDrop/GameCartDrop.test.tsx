import { renderWithTheme } from 'utils/tests/helpers';

import { fireEvent, screen } from '@testing-library/react';

import { GameCartDrop, GameCartDropProps } from './GameCartDrop';

const props: GameCartDropProps = {
  src: 'https://images.unsplash.com/photo-1662414590066-91c548626702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIxMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjMyOTQxNjQ&ixlib=rb-1.2.1&q=80&w=1080',
  genre: 'Action',
  title: 'The Witcher 3',
  developer: 'CD Projekt',
  price: 100,
};

describe('<GameCartDrop />', () => {
  it('should render the Image Game', () => {
    // Arrange
    const { container } = renderWithTheme(<GameCartDrop {...props} />);

    // Assert
    expect(screen.getByRole('img', { name: 'Image game' })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should change quantity', () => {
    renderWithTheme(<GameCartDrop {...props} />);

    // Arrange
    const less = screen.getByLabelText('Less to Cart');
    const more = screen.getByLabelText('Add to Cart');
    const cart = screen.getByLabelText('Quantity Cart');

    // Assert
    expect(less).toBeInTheDocument();
    expect(more).toBeInTheDocument();
    expect(cart).toBeInTheDocument();

    // Act
    fireEvent.click(more);
    expect(cart.textContent).toBe('2');

    fireEvent.click(less);
    expect(cart.textContent).toBe('1');
  });
});
