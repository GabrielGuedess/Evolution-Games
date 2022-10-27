import { useCart } from 'hooks/useCart/useCart';

import { Base } from 'templates/Base/Base';

import Button from 'components/atoms/Button/Button';
import { Empty } from 'components/atoms/Empty/Empty';
import { Title } from 'components/atoms/Title/Title';
import { GameCartDrop } from 'components/molecules/GameCartDrop/GameCartDrop';
import { HighlightCarousel } from 'components/organisms/HighlightCarousel/HighlightCarousel';
import { highlightMock } from 'components/organisms/HighlightCarousel/mock';

import * as S from './Cart.styles';

export const Cart = () => {
  const { items, total } = useCart();

  return (
    <Base hasColors hasMarginTop>
      <S.Wrapper>
        {items.length > 0 ? (
          <>
            <S.FirstColumn>
              <S.Heading>
                <Title textAlign="left">Carrinho</Title>
              </S.Heading>
              {items.map(game => (
                <GameCartDrop key={game.title} {...game} />
              ))}
            </S.FirstColumn>
            <S.SecondColumn>
              <S.Summary>
                <S.SummaryHeader>
                  <S.Total>Valor dos produtos:</S.Total>
                  <S.Total>{total}</S.Total>
                </S.SummaryHeader>
                <Button>Ir para o pagamento</Button>
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
        )}
      </S.Wrapper>
      <HighlightCarousel title="Novidades" data={highlightMock} />
    </Base>
  );
};
