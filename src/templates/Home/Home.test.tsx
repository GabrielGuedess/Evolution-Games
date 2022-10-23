import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { Home } from './Home';
import { gameCardItems } from './mock';

jest.mock('components/organisms/Navbar/Navbar', () => ({
  __esModule: true,
  Navbar: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Navbar">{children}</div>;
  },
}));

jest.mock('components/organisms/Slider/Slider', () => ({
  __esModule: true,
  Slider: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Slider">{children}</div>;
  },
}));

jest.mock('components/organisms/GameList/GameList', () => ({
  __esModule: true,
  GameList: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="GameList">{children}</div>;
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

describe('<Home />', () => {
  it('should render the Home correctly', () => {
    // Arrange
    const { container } = renderWithProviders(
      <Home gameList={gameCardItems} />,
    );

    // Assert
    expect(screen.getByTestId('Navbar')).toBeInTheDocument();
    expect(screen.getByTestId('Slider')).toBeInTheDocument();
    expect(screen.getByTestId('HighlightCarousel')).toBeInTheDocument();
    expect(screen.getAllByTestId('GameList')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
