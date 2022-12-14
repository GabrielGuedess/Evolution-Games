import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { useCart } from 'hooks/useCart/useCart';

import { Base } from 'templates/Base/Base';

import { Empty } from 'components/atoms/Empty/Empty';
import { Preloader } from 'components/atoms/Preloader/Preloader';
import { Title } from 'components/atoms/Title/Title';
import { GameCartDrop } from 'components/molecules/GameCartDrop/GameCartDrop';
import { HighlightCarousel } from 'components/organisms/HighlightCarousel/HighlightCarousel';
import { highlightMock } from 'components/organisms/HighlightCarousel/mock';
import { PaymentOptions } from 'components/organisms/PaymentOptions/PaymentOptions';

import * as S from './Cart.styles';

export const Cart = () => {
  const { items, isLoading } = useCart();

  const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_KEY}`);

  return (
    <Base hasColors hasMarginTop>
      <S.Wrapper>
        {!isLoading ? (
          items.length > 0 ? (
            <>
              <S.FirstColumn>
                <S.Heading>
                  <Title textAlign="left">Carrinho</Title>
                </S.Heading>
                {items.map(game => (
                  <GameCartDrop key={game.name} {...game} />
                ))}
              </S.FirstColumn>
              <S.SecondColumn>
                <S.Summary>
                  <Elements stripe={stripe}>
                    <PaymentOptions />
                  </Elements>
                </S.Summary>
              </S.SecondColumn>
            </>
          ) : (
            <S.EmptyBox>
              <Empty
                title="Nenhum jogo encontrado"
                description="Você não adicionou nenhum jogo a sua bolsa de compras."
              />
            </S.EmptyBox>
          )
        ) : (
          <Preloader />
        )}
      </S.Wrapper>
      <HighlightCarousel title="Novidades" data={highlightMock} />
    </Base>
  );
};
