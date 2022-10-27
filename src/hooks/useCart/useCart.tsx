import { useContext, createContext, useState, useEffect } from 'react';

import { apiEndPt } from 'constants/index';
import Game from 'types/game';
import { formatPrice } from 'utils/format';
import { getStorageItem, setStorageItem } from 'utils/localStorage';

import { GameCartDropProps as CartItem } from 'components/molecules/GameCartDrop/GameCartDrop';

const CART_KEY = 'cartItems';

export type CartStorageItem = {
  id: string;
  quantity: number;
};

export type CartContextProps = {
  items: CartItem[];
  quantity: number;
  total: string;
  clearCart: () => void;
  isInCart: (id: string) => boolean;
  removeFromCart: (id: string) => void;
  addToCart: (game: CartStorageItem) => void;
  setQuantity: (id: string, quantity: number) => void;
};

export const CartContextDefaultValues: CartContextProps = {
  items: [],
  quantity: 0,
  total: 'R$0.00',
  clearCart: () => {},
  isInCart: () => false,
  removeFromCart: () => {},
  addToCart: () => {},
  setQuantity: () => {},
};

export const CartContext = createContext<CartContextProps>(
  CartContextDefaultValues,
);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [gameItems, setGameItems] = useState<CartItem[]>([]);

  const fetchAPI = async (item: CartStorageItem): Promise<CartItem> => {
    const res = await fetch(`${apiEndPt}/api/games/${item.id}`);
    const data: Game = await res.json();
    return {
      id: data.slug!,
      developer: data.developer,
      genres: data.genres,
      platform: data.platform,
      price: data.price,
      quantity: item.quantity,
      src: data.background,
      title: data.name,
    };
  };

  const total = gameItems.reduce(
    (acc, game) => acc + game.price * game.quantity,
    0,
  );

  const cartMapper = (items: CartItem[]) =>
    items.map(({ id, quantity }) => ({ id, quantity }));

  const saveCart = (games: CartItem[]) => {
    setGameItems(games);
    setStorageItem(CART_KEY, cartMapper(games));
  };

  const setQuantity = (id: string, quantity: number) => {
    if (quantity < 0 || quantity > 10) return;
    const games = gameItems.map(game =>
      game.id === id ? { ...game, quantity } : game,
    );

    saveCart(games);
  };

  const isInCart = (id: string) => gameItems.map(g => g.id).includes(id);

  const addToCart = (game: CartStorageItem) => {
    fetchAPI(game).then(res => {
      saveCart([...gameItems, res]);
    });
  };

  const removeFromCart = (id: string) => {
    const newGameItems = gameItems.filter(game => game.id !== id);

    saveCart(newGameItems);
  };

  const clearCart = () => {
    saveCart([]);
  };

  useEffect(() => {
    const storage = getStorageItem(CART_KEY);

    const getGames = async (items: CartStorageItem[]): Promise<CartItem[]> => {
      if (!items) return [];
      const requests = [];

      for (const item of items) {
        requests.push(fetchAPI(item));
      }

      const res = await Promise.all(requests);
      return res;
    };

    getGames(storage).then(res => {
      setGameItems(res);
    });
  }, []);

  return (
    <CartContext.Provider
      value={{
        items: gameItems,
        total: formatPrice(total || 0),
        quantity: gameItems.length,
        isInCart,
        addToCart,
        setQuantity,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
