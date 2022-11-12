import { GameCartDropProps } from 'components/molecules/GameCartDrop/GameCartDrop';

export const cartItems: GameCartDropProps[] = [
  {
    id: '1',
    name: 'God of War: Ragnarök',
    genres: [{ name: 'Action-adventure ', id: '1', slug: 'action-adventure' }],
    developers: [
      { id: '1', name: 'Santa Monica Games', slug: 'santa-monica-games' },
    ],
    background:
      'https://i.pinimg.com/originals/34/f8/e5/34f8e55845212171e8bb35edc5b08018.jpg',
    price: 250.0,
    platforms: [{ name: 'Plastation 5', slug: 'ps5', id: '1' }],
    quantity: 1,
  },
];
