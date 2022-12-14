import { renderWithProviders } from 'utils/tests/helpers';

import { screen } from '@testing-library/react';

import { HighlightGame, HighlightGameProps } from './HighlightGame';

const props: HighlightGameProps = {
  img: '/img/games/starWarsHighlight.png',
  gameLogo: '/img/games/highlightName/nameStarWars.png',
  gameLogoAlt: 'Logo Star Wars',
  alt: 'Star Wars',
  releaseYear: new Date('09-10-2022'),
  genre: 'Action-adventure',
  developer: 'Respawn Entertainment',
  platform: ['pc', 'playstation', 'xbox'],
};

describe('<HighlightGame />', () => {
  it('should render the heading', () => {
    // Arrange
    const { container } = renderWithProviders(<HighlightGame {...props} />);

    expect(screen.getByRole('img', { name: props.alt })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
