import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { GameCard, GameCardProps } from './GameCard';

const props: GameCardProps = {
  id: '1',
  name: 'God of War: Ragnarök',
  genres: ['Action-adventure'],
  developer: 'Santa Monica Games',
  releaseDate: new Date('11-09-2022'),
  image:
    'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
  price: 250,
  score: 5.0,
  platform: 'ps4',
  primaryColor: '#f00',
  slug: '',
};

type Image = { src: string; alt: string };

jest.mock('next/image', () => ({
  __esModule: true,
  default: (image: Image) => <img src={image.src} alt={image.alt} />,
}));

describe('<GameCard />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithTheme(<GameCard {...props} />);

    const title = screen.getByText(props.name);
    const genre = screen.getByText(props.genres.join(', '));
    const description = screen.getByText(
      `${props.developer}, ${new Date(props.releaseDate).getFullYear()}`,
    );
    const image = screen.getByRole('img', { name: props.name });

    // Assert
    expect(title).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.image);

    expect(container.firstChild).toMatchSnapshot();
  });
});
