import { PaymentIntent } from '@stripe/stripe-js';

type FetcherParams = {
  url: string;
  body: string;
  token: string;
};

type PaymentIntentParams = {
  items: string[];
  token: string;
};

type CreatePaymentIntentParams = {
  items: string[];
  paymentIntent?: PaymentIntent;
  token: string;
};

const fetcher = async ({ url, body, token }: FetcherParams) =>
  await (
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body,
    })
  ).json();

export const createPaymentIntent = async ({
  items,
  token,
}: PaymentIntentParams) =>
  await fetcher({
    url: '/order/payment-intent',
    body: JSON.stringify({ cart: items }),
    token,
  });

export const createPayment = async ({
  items,
  paymentIntent,
  token,
}: CreatePaymentIntentParams) =>
  await fetcher({
    url: '/orders',
    body: JSON.stringify({
      cart: items,
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method,
    }),
    token,
  });
