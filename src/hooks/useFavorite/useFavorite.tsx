import { useSession } from 'next-auth/react';

import { useState, createContext, useContext, useEffect } from 'react';

import { GameCardProps } from 'components/molecules/GameCard/GameCard';

export type FavoriteContextData = {
  items: GameCardProps[];
  isInFavorite: (id: string) => boolean;
  addToFavorite: (id: string) => void;
  removeFromFavorite: (id: string) => void;
  isLoading: boolean;
};

export const FavoriteContextDefaultValues = {
  items: [],
  isInFavorite: () => false,
  addToFavorite: () => null,
  removeFromFavorite: () => null,
  isLoading: true,
};

export const FavoriteContext = createContext<FavoriteContextData>(
  FavoriteContextDefaultValues,
);

export type FavoriteProviderProps = {
  children: React.ReactNode;
};

const FavoriteProvider = ({ children }: FavoriteProviderProps) => {
  const { data: session, status } = useSession();
  const [favoriteItems, setFavoriteItems] = useState<GameCardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAPI = async (id: string, type: 'POST' | 'PUT') => {
    setIsLoading(true);

    const data: GameCardProps[] = await (
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/favorite`, {
        method: type,
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${session?.user.jwt}`,
        },
        body: JSON.stringify({
          game_id: id,
        }),
      })
    ).json();

    setIsLoading(false);
    setFavoriteItems(data);
  };

  useEffect(() => {
    setIsLoading(true);

    const myFavorites = async () => {
      if (status === 'authenticated') {
        setIsLoading(true);

        const data: GameCardProps[] = await (
          await fetch(`${process.env.NEXT_PUBLIC_API_URL}/game/favorite`, {
            headers: {
              'Content-type': 'application/json',
              Authorization: `Bearer ${session?.user.jwt}`,
            },
          })
        ).json();

        setIsLoading(false);

        setFavoriteItems(data);
      }
    };

    myFavorites();
  }, [session?.user.jwt, status]);

  const isInFavorite = (id: string) =>
    favoriteItems.some(game => game.id === id);

  const addToFavorite = (id: string) => fetchAPI(id, 'POST');

  const removeFromFavorite = (id: string) => fetchAPI(id, 'PUT');

  return (
    <FavoriteContext.Provider
      value={{
        items: favoriteItems,
        isInFavorite,
        addToFavorite,
        removeFromFavorite,
        isLoading,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

const useFavorite = () => useContext(FavoriteContext);

export { FavoriteProvider, useFavorite };
