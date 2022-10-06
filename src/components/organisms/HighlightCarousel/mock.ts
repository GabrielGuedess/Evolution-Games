import { HighlightGameProps } from 'components/molecules/HighlightGame/HighlightGame';

export const highlightMock: HighlightGameProps[] = [
  {
    img: '/img/games/starWarsHighlight.png',
    gameLogo: '/img/games/highlightName/nameStarWars.png',
    gameLogoAlt: 'Logo Star Wars',
    alt: 'Star Wars',
    releaseYear: new Date(2019, 10, 10),
    genre: 'Action-adventure',
    developer: 'Respawn Entertainment',
    platform: ['pc', 'playstation', 'xbox'],
  },
  {
    img: '/img/games/r8.jpg',
    gameLogo: '/img/games/highlightName/nameR8.png',
    gameLogoAlt: 'Logo Star Wars',
    alt: 'Resident Evil 8',
    releaseYear: new Date('09-10-2022'),
    genre: 'Action-adventure',
    developer: 'Respawn Entertainment',
    platform: ['pc', 'playstation', 'xbox'],
  },
  {
    img: '/img/games/starWars.jpg',
    gameLogo: '/img/games/highlightName/nameStarWars.png',
    gameLogoAlt: 'Logo Star Wars 2',
    alt: 'Star Wars 2',
    releaseYear: new Date('09-10-2022'),
    genre: 'Action-adventure',
    developer: 'Respawn Entertainment',
    platform: ['pc', 'playstation', 'xbox'],
  },
  {
    img: '/img/games/theLastOfUs.jpg',
    gameLogo: '/img/games/highlightName/nameTheLastOfUs.png',
    gameLogoAlt: 'Logo The last Of Us',
    alt: 'The last Of Us',
    releaseYear: new Date('09-10-2022'),
    genre: 'Action-adventure',
    developer: 'Respawn Entertainment',
    platform: ['playstation'],
  },
];
