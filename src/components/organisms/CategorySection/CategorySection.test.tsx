/* eslint-disable react/jsx-no-constructed-context-values */
import { Context as ResponsiveContext } from 'react-responsive';

import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { CategorySection } from './CategorySection';

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

describe('<CategorySection />', () => {
  it('should render the <CategorySection /> on the desktop', () => {
    const { container } = renderWithTheme(
      <ResponsiveContext.Provider value={{ width: 1170 }}>
        <CategorySection />
      </ResponsiveContext.Provider>,
    );

    // Arrange
    const title = screen.getByRole('heading', { name: 'Categorias' });
    const imageOne = screen.getByRole('img', { name: 'Acão e Aventura' });
    const imageTwo = screen.getByRole('img', { name: 'Terror' });
    const imageThree = screen.getByRole('img', { name: 'Jogos 4k' });

    // Assert
    expect(title).toBeInTheDocument();
    expect(imageOne).toHaveAttribute(
      'src',
      '/img/category/actionAdventure.png',
    );
    expect(imageTwo).toHaveAttribute('src', '/img/category/horror.png');
    expect(imageThree).toHaveAttribute('src', '/img/category/4k.png');

    expect(imageOne).toHaveAttribute('width', '608');
    expect(imageOne).toHaveAttribute('height', '568');

    expect(imageTwo).toHaveAttribute('width', '1029');
    expect(imageTwo).toHaveAttribute('height', '568');

    expect(imageThree).toHaveAttribute('width', '1656');
    expect(imageThree).toHaveAttribute('height', '787');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the <CategorySection /> on the mobile', () => {
    renderWithTheme(
      <ResponsiveContext.Provider value={{ width: 1169 }}>
        <CategorySection />
      </ResponsiveContext.Provider>,
    );

    // Arrange
    const imageOne = screen.getByRole('img', { name: 'Acão e Aventura' });
    const imageTwo = screen.getByRole('img', { name: 'Terror' });
    const imageThree = screen.getByRole('img', { name: 'Jogos 4k' });

    // Assert
    expect(imageOne).toHaveAttribute('width', '396');
    expect(imageOne).toHaveAttribute('height', '370');

    expect(imageTwo).toHaveAttribute('width', '396');
    expect(imageTwo).toHaveAttribute('height', '370');

    expect(imageThree).toHaveAttribute('width', '396');
    expect(imageThree).toHaveAttribute('height', '370');
  });
});
