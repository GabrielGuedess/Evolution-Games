import { renderWithTheme } from 'utils/tests/helpers';

import { screen, fireEvent } from '@testing-library/react';

import theme from 'styles/theme';

import { GameList } from './GameList';
import gameCardItems from './mock';

jest.mock('swiper', () => ({
  __esModule: true,
  A11y: jest.fn(),
  Scrollbar: jest.fn(),
  Navigation: jest.fn(),
  Pagination: jest.fn(),
}));

jest.mock('swiper/react', () => ({
  __esModule: true,
  Swiper: function Mock({ children }: { children: React.ReactNode }) {
    return (
      <div data-testid="Swiper">
        <div data-testid="Swiper-Slide">{children}</div>
      </div>
    );
  },

  SwiperSlide: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Swiper-Slide">{children}</div>;
  },
}));

describe('<GameList />', () => {
  it('should render the <GameList />', () => {
    const { container } = renderWithTheme(
      <GameList title="Bestsellers" data={gameCardItems} />,
    );

    expect(
      screen.getByRole('heading', { name: /Bestsellers/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should filter by Xbox games', () => {
    renderWithTheme(<GameList title="Bestsellers" data={gameCardItems} />);

    // Arrange
    const [icon] = screen.getAllByLabelText('Xbox Icon');

    // Act
    fireEvent.click(icon);

    // Assert
    expect(icon.parentElement).toHaveStyle({ color: theme.colors.primary });
    expect(screen.getAllByTestId('Swiper-Slide')).toHaveLength(4);
  });

  it('should filter by PlayStation exclusive games', () => {
    renderWithTheme(<GameList title="Bestsellers" data={gameCardItems} />);

    // Arrange
    const [icon] = screen.getAllByLabelText('PlayStation Icon');

    // Act
    fireEvent.click(icon);

    // Assert
    expect(icon.parentElement).toHaveStyle({ color: theme.colors.primary });
    expect(screen.getAllByTestId('Swiper-Slide')).toHaveLength(9);
  });

  it('should filter by PC exclusive games', () => {
    renderWithTheme(<GameList title="Bestsellers" data={gameCardItems} />);

    // Arrange
    const [icon] = screen.getAllByLabelText('PC Icon');

    // Act
    fireEvent.click(icon);

    // Assert
    expect(icon.parentElement).toHaveStyle({ color: theme.colors.primary });
    expect(screen.getAllByTestId('Swiper-Slide')).toHaveLength(5);
  });

  it('should render all games', () => {
    renderWithTheme(<GameList title="Bestsellers" data={gameCardItems} />);

    // Arrange
    const [icon] = screen.getAllByLabelText('All Platforms Icon');

    // Act
    fireEvent.click(icon);

    // Assert
    expect(icon.parentElement).toHaveStyle({ color: theme.colors.primary });
    expect(screen.getAllByTestId('Swiper-Slide')).toHaveLength(9);
  });
});
