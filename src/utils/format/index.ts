export const formatPrice = (price: number | bigint): string =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'BRL',
  }).format(price);
