import { Story, Meta } from '@storybook/react/types-6-0';

import { HighlightGame, HighlightGameProps } from './HighlightGame';

export default {
  title: 'Molecules/HighlightGame',
  component: HighlightGame,
  args: {
    img: '/img/games/starWarsHighlight.png',
    gameLogo: '/img/games/highlightName/nameStarWars.png',
    gameLogoAlt: 'Logo Star Wars',
    alt: 'Star Wars',
    releaseYear: new Date(),
    genre: 'Action-adventure',
    developer: 'Respawn Entertainment',
    platform: ['pc', 'playstation', 'xbox'],
  },
} as Meta<HighlightGameProps>;

export const Default: Story<HighlightGameProps> = args => (
  <div style={{ width: '100%', height: '756px' }}>
    <HighlightGame {...args} />
  </div>
);
