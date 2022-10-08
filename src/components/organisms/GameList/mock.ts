import { GameCardProps } from 'components/molecules/GameCard/GameCard';

const gameCardItems: GameCardProps[] = [
  {
    id: '1',
    name: 'God of War: Ragnarök',
    genres: ['Action-adventure '],
    developer: 'Santa Monica Games',
    releaseDate: new Date('2022'),
    image:
      'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
    price: 250.0,
    score: 5.0,
    platform: 'ps5',
    slug: 'god-of-war-ragnarok',
    primaryColor: '#9db4d0',
  },
  {
    id: '2',
    name: 'Star Wars Jedi: Fallen Order',
    genres: ['Action-adventure '],
    developer: 'EA',
    releaseDate: new Date('2019'),
    image:
      'https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/935a281a70ae21d54479c9c468145f7e.png',
    price: 100.0,
    score: 3.8,
    platform: 'xs',
    slug: 'star-wars-jedi-fallen-order',
    primaryColor: '#a8b6cb',
  },
  {
    id: '3',
    name: 'Cyberpunk 2077',
    genres: ['Action-adventure '],
    developer: 'CD PROJEKT RED',
    releaseDate: new Date('2020'),
    image:
      'https://whatifgaming.com/wp-content/uploads/2022/05/Neon-Aesthetic.jpg',
    price: 200.0,
    score: 1.8,
    platform: 'pc',
    slug: 'cyberpunk-2077',
    primaryColor: '#dabbde',
  },
  {
    id: '4',
    name: 'The Last of Us Part II',
    genres: ['Action-adventure '],
    developer: 'Naughty Dog',
    releaseDate: new Date('2020'),
    image:
      'https://www.jeuxvideo-live.com/wp-content/uploads/jvl/2022/07/le-multi-de-the-last-of-us-2-deevoile-quelques-secrets-de-conception-104207-large.jpg',
    price: 200.0,
    score: 5.0,
    platform: 'ps4',
    slug: 'the-last-of-us-part-ii',
    primaryColor: '#b2a7a5',
  },
  {
    id: '5',
    name: 'Elden Ring',
    genres: ['Action-adventure '],
    developer: 'BANDAI NAMCO Entertainment Inc',
    releaseDate: new Date('2022'),
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202110/2000/aGhopp3MHppi7kooGE2Dtt8C.png',
    price: 250.0,
    score: 4.8,
    platform: 'ps5',
    slug: 'elden-ring',
    primaryColor: '#aeb195',
  },
  {
    id: '6',
    name: 'Horizon Forbidden West',
    genres: ['Action-adventure '],
    developer: 'Santa Monica Games',
    releaseDate: new Date('2022'),
    image:
      'https://t.ctcdn.com.br/efyy2ADqd67kPvUfXBVJWMJiX_I=/1400x788/smart/filters:format(webp)/i499600.png',
    price: 250.0,
    score: 4.8,
    platform: 'ps5',
    slug: 'horizon-forbidden-west',
    primaryColor: '#aeb1d2',
  },
  {
    id: '7',
    name: "Marvel's Spider-Man",
    genres: ['Action-adventure '],
    developer: 'Insomniac Games',
    releaseDate: new Date('2018'),
    image:
      'https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/b0OfuUs4lHGWG4VNlHcXwL5a.jpg',
    price: 250.0,
    score: 4.7,
    platform: 'ps5',
    slug: 'marvels-spider-man',
    primaryColor: '#9ab3c5',
  },
  {
    id: '8',
    name: 'The Witcher 3',
    genres: ['Action-adventure '],
    developer: 'CD PROJEKT SA',
    releaseDate: new Date('2015'),
    image: 'https://e.snmc.io/lk/f/x/1508cc32995d91b6206ee1b1e82b9338/8329790',
    price: 150.0,
    score: 4.5,
    platform: 'one',
    slug: 'the-witcher-3-wild-hund',
    primaryColor: '#d1b2a3',
  },
];

export default gameCardItems;
