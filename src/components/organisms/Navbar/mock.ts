import { GameCartDropProps } from 'components/molecules/GameCartDrop/GameCartDrop';

export const cartItems: GameCartDropProps[] = [
  {
    id: 'the-witcher-3',
    src: '/img/games/theWitcher.jpg',
    genres: ['Action'],
    title: 'The Witcher 3',
    developer: 'CD Projekt',
    quantity: 1,
    platform: 'ps4',
    price: 100,
  },
  {
    id: 'gta-6',
    src: 'https://gmedia.playstation.com/is/image/SIEPDC/grand-theft-auto-5-hero-banner-desktop-01-ps5-en-04mar22?$2400px$',
    genres: ['Action'],
    title: 'GTA 6',
    developer: 'CD Projekt',
    quantity: 1,
    platform: 'ps4',
    price: 100,
  },
  {
    id: 'rainbow-six',
    src: 'https://image.api.playstation.com/vulcan/ap/rnd/202105/1919/6t4GYDWoLSZVeNjAJLTczMg8.jpg?w=1920',
    genres: ['Action'],
    title: 'Rainbow Six',
    developer: 'CD Projekt',
    quantity: 1,
    platform: 'ps4',
    price: 100,
  },
];
