import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent, PaymentIntent } from '@stripe/stripe-js';
import { CircleNotch, WarningCircle } from 'phosphor-react';
import { createPayment, createPaymentIntent } from 'utils/stripe';

import { useCart } from 'hooks/useCart/useCart';

import Button from 'components/atoms/Button/Button';

import theme from 'styles/theme';

import * as S from './PaymentOptions.styles';

export const PaymentOptions = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState('');

  const { push } = useRouter();

  const stripe = useStripe();
  const elements = useElements();

  const { data: session } = useSession();

  const { items, total } = useCart();

  useEffect(() => {
    async function setPaymentMode() {
      if (items.length && session?.user) {
        const data = await createPaymentIntent({
          items: items.map(game => game.id),
          token: session.user.jwt,
        });

        if (data.error) {
          setErrorMessage(data.error);
          return;
        }

        setClientSecret(data.client_secret);
      }
    }

    setPaymentMode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = async (event: StripeCardElementChangeEvent) => {
    setErrorMessage(event.error ? event.error.message : '');
    setDisable(event.empty);
  };

  const saveOrder = async (paymentIntent?: PaymentIntent) => {
    const data = await createPayment({
      items: items.map(game => game.id),
      paymentIntent,
      token: session!.user.jwt,
    });

    return data;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    const { error, paymentIntent } = await stripe!.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: elements!.getElement(CardElement)!,
        },
      },
    );

    if (error) {
      setErrorMessage(`Payment failed: ${error.message}`);
      setLoading(false);
    } else {
      setErrorMessage(null);
      setLoading(false);

      saveOrder(paymentIntent);

      push('/success');
    }
  };

  return (
    <S.Wrapper onSubmit={handleSubmit}>
      <S.Body>
        <S.SummaryHeader>
          <S.Total>Valor dos produtos:</S.Total>
          <S.Total>{total}</S.Total>
        </S.SummaryHeader>

        <CardElement
          options={{
            hidePostalCode: true,
            style: {
              base: { fontSize: '16px', color: theme.colors.whiteText },
            },
          }}
          onChange={handleChange}
        />

        {errorMessage && (
          <S.ErrorMessage>
            <WarningCircle size={18} />
            <span>{errorMessage}</span>
          </S.ErrorMessage>
        )}
      </S.Body>

      <S.Footer>
        <Link href="/" passHref>
          <Button as="a" fullWidth minimal>
            Continuar comprando
          </Button>
        </Link>

        <Button
          type="submit"
          fullWidth
          disabled={disable || !!errorMessage}
          icon={
            loading ? (
              <CircleNotch size={24}>
                <animateTransform
                  attributeName="transform"
                  attributeType="XML"
                  type="rotate"
                  dur="0.6s"
                  from="0 0 0"
                  to="360 0 0"
                  repeatCount="indefinite"
                />
              </CircleNotch>
            ) : undefined
          }
        >
          {loading ? '' : 'Comprar'}
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};
