import Link from 'next/link';

import { useCallback, useEffect } from 'react';
import Particles from 'react-particles';

import { Engine, IOptions, RecursivePartial } from 'tsparticles-engine';
import { loadFireworksPreset } from 'tsparticles-preset-fireworks';

import { useCart } from 'hooks/useCart/useCart';

import { Base } from 'templates/Base/Base';

import Button from 'components/atoms/Button/Button';
import { Container } from 'components/atoms/Container/Container';

import * as S from './Success.styles';

export const Success = () => {
  const { clearCart } = useCart();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFireworksPreset(engine);
  }, []);

  const options: RecursivePartial<IOptions> = {
    preset: 'fireworks',
  };

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <>
      <Base hasColors hasMarginTop>
        <Container>
          <S.Wrapper>
            <S.Heading>Sua compra foi bem sucedida!</S.Heading>

            <S.CheckMark>
              <S.SuccessIcon
                xmlns="http://www.w3.org/2000/svg"
                width="70"
                height="70"
                viewBox="0 0 70 70"
              >
                <path d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z" />
                <circle
                  cx="35"
                  cy="35"
                  r="24"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <polyline strokeWidth="2" points="23 34 34 43 47 27" />
              </S.SuccessIcon>
            </S.CheckMark>

            <S.Text>
              Aguarde seus dados de pagamento por e-mail. Seu jogo com mais
              detalhes já está disponível na sua lista de pedidos
            </S.Text>

            <Link href="/profile/orders" passHref>
              <Button as="a" size="large">
                Lista de pedidos
              </Button>
            </Link>
          </S.Wrapper>
        </Container>
      </Base>

      <Particles
        init={particlesInit}
        options={options}
        style={{ zIndex: -1 }}
      />
    </>
  );
};
