import { renderWithTheme } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { GameCard, GameCardProps } from './GameCard';

const props: GameCardProps = {
  id: '1',
  title: 'God of War: Ragnarök',
  genre: 'Action-adventure',
  developer: 'Santa Monica Games',
  year: '2022',
  img: 'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
  price: '$ 60.99',
  score: 5.0,
  platform: ['playstation'],
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

    const title = screen.getByRole('heading', { name: props.title });
    const genre = screen.getByText(props.genre);
    const description = screen.getByText(`${props.developer}, ${props.year}`);
    const image = screen.getByRole('img', { name: props.title });

    // Assert
    expect(title).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(image).toHaveAttribute('src', props.img);

    expect(container.firstChild).toMatchSnapshot();
  });
});
