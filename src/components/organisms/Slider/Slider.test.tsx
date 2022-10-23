import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import sliderMock from './mock';
import { Slider } from './Slider';

jest.mock('swiper/css', jest.fn());
jest.mock('swiper/css/effect-fade', jest.fn());
jest.mock('swiper/css/pagination', jest.fn());

jest.mock('swiper', () => ({
  __esModule: true,
  Parallax: jest.fn(),
  Keyboard: jest.fn(),
  Autoplay: jest.fn(),
  EffectFade: jest.fn(),
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

describe('<Slider />', () => {
  it('should render the Swiper correctly', () => {
    // Arrange
    const { container } = renderWithProviders(<Slider slides={sliderMock} />);

    // Assert
    expect(screen.getByTestId('Swiper')).toBeInTheDocument();

    expect(screen.getAllByTestId('Swiper-Slide')).toHaveLength(
      sliderMock.length + 1,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
