import { getStorageItem, setStorageItem } from './index';

describe('setStorageItem()', () => {
  it('should add the item to localStorage', () => {
    setStorageItem('cartItems', [
      { id: 'gta-6', quantity: 1 },
      { id: 'the-witcher-3', quantity: 1 },
    ]);

    expect(getStorageItem('cartItems')).toEqual([
      { id: 'gta-6', quantity: 1 },
      { id: 'the-witcher-3', quantity: 1 },
    ]);
  });
});
