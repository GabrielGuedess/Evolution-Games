import { setStorageItem } from 'utils/localStorage';

import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import response from './mock';
import { useCart, CartProvider, CartProviderProps } from './useCart';

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear();
    global.fetch = jest.fn().mockImplementation(
      jest.fn((url: string) => {
        const splitUrl = url.split('/');
        const slug = splitUrl.at(-1);
        const game = response.find(g => g.slug === slug);
        return Promise.resolve({
          json: () => Promise.resolve(game),
        });
      }) as jest.Mock,
    );
  });

  afterEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it('should return items and its info if there are any in the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [
      { id: 'gta-6', quantity: 1 },
      { id: 'the-witcher-3', quantity: 1 },
    ]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.quantity).toBe(2);
    expect(result.current.total).toBe('R$500.00');
    expect(result.current.items).toEqual([
      {
        developer: 'Rockstar Games',
        genres: ['Action'],
        id: 'gta-6',
        platform: 'ps5',
        price: 400,
        quantity: 1,
        src: 'https://images.unsplash.com/photo-1660677727122-ba176d2484eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyNjIxMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjMyOTgwMzk&ixlib=rb-1.2.1&q=80&w=1080',
        title: 'GTA 6',
      },
      {
        developer: 'CD Projekt',
        genres: ['Action'],
        id: 'the-witcher-3',
        platform: 'ps4',
        price: 100,
        quantity: 1,
        src: 'https://images.unsplash.com/photo-1662414590066-91c548626702?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixslug=MnwyNjIxMDF8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjMyOTQxNjQ&ixlib=rb-1.2.1&q=80&w=1080',
        title: 'The Witcher 3',
      },
    ]);
  });

  it('should return true/false if the item is already in the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [{ id: 'gta-6', quantity: 1 }]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.isInCart('gta-6')).toBe(true);
    expect(result.current.isInCart('god-of-war-ragnarok')).toBe(false);
  });

  it('should add item in the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    // Act
    act(() => {
      result.current.addToCart({ id: 'gta-6', quantity: 1 });
    });

    await waitForNextUpdate();

    // Assert
    expect(result.current.quantity).toBe(1);
    expect(window.localStorage.getItem('@evolution_cartItems')).toBe(
      JSON.stringify([{ id: 'gta-6', quantity: 1 }]),
    );
  });

  it('should remove and item from the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [{ id: 'gta-6', quantity: 1 }]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Act
    act(() => {
      result.current.removeFromCart('gta-6');
    });

    // Assert
    expect(result.current.quantity).toBe(0);
    expect(window.localStorage.getItem('@evolution_cartItems')).toBe(
      JSON.stringify([]),
    );
  });

  it('should clear the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [{ id: 'gta-6', quantity: 1 }]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Act
    act(() => {
      result.current.clearCart();
    });

    // Assert
    expect(result.current.quantity).toBe(0);
    expect(window.localStorage.getItem('@evolution_cartItems')).toBe(
      JSON.stringify([]),
    );
  });

  it('should increase the amount of a game in the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [{ id: 'gta-6', quantity: 1 }]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Act
    act(() => {
      result.current.setQuantity('gta-6', 2);
    });

    // Assert
    expect(result.current.quantity).toBe(1);
    expect(window.localStorage.getItem('@evolution_cartItems')).toBe(
      JSON.stringify([{ id: 'gta-6', quantity: 2 }]),
    );
  });

  it('should exceed the amount of one game in the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [{ id: 'gta-6', quantity: 10 }]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Act
    act(() => {
      result.current.setQuantity('gta-6', 10 + 1);
    });

    // Assert
    expect(result.current.quantity).toBe(1);
    expect(window.localStorage.getItem('@evolution_cartItems')).toBe(
      JSON.stringify([{ id: 'gta-6', quantity: 10 }]),
    );
  });

  it('should change the quantity of a game that does not exist in the cart', async () => {
    // Arrange
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    );

    setStorageItem('cartItems', [{ id: 'gta-6', quantity: 1 }]);

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper,
    });

    await waitForNextUpdate();

    // Act
    act(() => {
      result.current.setQuantity('the-witcher-3', 1 + 1);
    });

    // Assert
    expect(result.current.quantity).toBe(1);
    expect(window.localStorage.getItem('@evolution_cartItems')).toBe(
      JSON.stringify([{ id: 'gta-6', quantity: 1 }]),
    );
  });
});
