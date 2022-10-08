import { renderWithTheme } from 'utils/tests/helpers';

import { screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Game } from './Game';
import { gameMock } from './mock';

type Image = { src: string; alt: string; width: number; height: number };

jest.mock('next/image', () => ({
  __esModule: true,
  default: (image: Image) => (
    <img
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
    />
  ),
}));

jest.mock('templates/Base/Base', () => ({
  __esModule: true,
  Base: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Base Mock">{children}</div>;
  },
}));

jest.mock('components/organisms/GameList/GameList', () => ({
  __esModule: true,
  GameList: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="GameList Mock">{children}</div>;
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

jest.mock('yet-another-react-lightbox', () => ({
  __esModule: true,
  default: function Mock({
    children,
    close,
  }: {
    children: React.ReactNode;
    close: () => void;
  }) {
    return (
      <div data-testid="Lightbox Mock">
        <button type="button" data-testid="close" onClick={close}>
          Close
        </button>
        {children}
      </div>
    );
  },
}));

jest.mock('yet-another-react-lightbox/plugins/fullscreen', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('yet-another-react-lightbox/plugins/thumbnails', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('yet-another-react-lightbox/plugins/zoom', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('swiper', () => ({
  __esModule: true,
  A11y: jest.fn(),
  Scrollbar: jest.fn(),
  Navigation: jest.fn(),
  Pagination: jest.fn(),
  Keyboard: jest.fn(),
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

jest.mock('yet-another-react-lightbox/styles.css', jest.fn());
jest.mock('yet-another-react-lightbox/plugins/thumbnails.css', jest.fn());

describe('<Game />', () => {
  it('should render components correctly', () => {
    // Arrange
    const { container } = renderWithTheme(<Game {...gameMock} />);

    // Assert
    expect(screen.getByTestId('Base Mock')).toBeInTheDocument();
    expect(screen.getAllByTestId('Swiper')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the lightbox on click in desktop', async () => {
    renderWithTheme(<Game {...gameMock} />);

    // Arrange
    const imageDesktop = screen.getAllByLabelText('Star Wars image gallery')[0];

    // Act
    await userEvent.click(imageDesktop);

    // Assert
    await waitFor(() => {
      expect(screen.getByTestId('Lightbox Mock')).toBeInTheDocument();
    });
  });

  it('should render the lightbox on click in mobile', async () => {
    renderWithTheme(<Game {...gameMock} />);

    // Arrange
    const imageMobile = screen.getAllByLabelText('Star Wars image gallery')[1];

    // Act
    await userEvent.click(imageMobile);

    // Assert
    await waitFor(() => {
      expect(screen.getByTestId('Lightbox Mock')).toBeInTheDocument();
    });
  });

  it('should close lightbox', async () => {
    renderWithTheme(<Game {...gameMock} />);

    // Arrange
    const imageDesktop = screen.getAllByLabelText('Star Wars image gallery')[0];

    // Act
    fireEvent.click(imageDesktop);
    fireEvent.click(screen.getByTestId('close'));

    // Assert
    expect(screen.queryByTestId('Lightbox Mock')).toBeNull();
  });
});
