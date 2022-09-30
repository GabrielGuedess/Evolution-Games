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
    const { container } = renderWithTheme(<CategorySection />);

    // Arrange
    const title = screen.getByRole('heading', { name: 'Categorias' });
    const imageOne = screen.getByRole('img', { name: 'Ação e Aventura' });
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
    expect(container.firstChild).toMatchSnapshot();
  });
});
