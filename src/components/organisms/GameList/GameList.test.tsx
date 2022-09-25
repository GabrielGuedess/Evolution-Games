import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

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
  it('should render the heading', () => {
    const { container } = renderWithTheme(
      <GameList title="Bestsellers" data={gameCardItems} />,
    );

    expect(
      screen.getByRole('heading', { name: /Bestsellers/i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
