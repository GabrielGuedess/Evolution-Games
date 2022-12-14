import Image from 'next/image';
import Link from 'next/link';

import { Logo } from 'components/atoms/Logo/Logo';
import MediaMatch from 'components/atoms/MediaMatch/MediaMatch';

import * as S from './Footer.styles';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Svg
        viewBox="0 0 400 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_1090_1560)">
          <path
            d="M212 13L400 13"
            stroke="url(#paint0_linear_1090_1560)"
            strokeWidth="0.936488"
          />
          <path
            id="rotate"
            stroke="#633BBC"
            strokeWidth="0.936488"
            d="M204.238 8.76217L212 13.0061L204.238 17.2378L199.994 25L195.75 17.2378L188 13.0061L195.75 8.76217L199.994 1L204.238 8.76217Z"
          />
          <path
            d="M188 13L4.76837e-07 13"
            stroke="url(#paint1_linear_1090_1560)"
            strokeWidth="0.936488"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1090_1560"
            x1="212"
            y1="13.5"
            x2="400.099"
            y2="13.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#633BBC" />
            <stop offset="1" stopColor="#633BBC" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1090_1560"
            x1="188"
            y1="12.5"
            x2="-0.0993122"
            y2="12.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#633BBC" />
            <stop offset="1" stopColor="#633BBC" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_1090_1560">
            <rect width="400" height="26" fill="white" />
          </clipPath>
        </defs>
      </S.Svg>
      <S.Wrapper>
        <Logo />
        <S.Content>
          <S.Column>
            <S.Title>Categorias</S.Title>
            <nav id="resources">
              <Link href="/">Aventura</Link>
              <Link href="/">Jogos em 4k</Link>
              <Link href="/">Terror</Link>
              <Link href="/">Clássicos</Link>
              <Link href="/">Corrida</Link>
              <Link href="/">RPG</Link>
            </nav>
          </S.Column>

          <S.Column>
            <S.Title>Sobre</S.Title>
            <nav id="resources">
              <Link href="/">Privacidade</Link>
              <Link href="/">Termos e Condições</Link>
              <Link href="/">Cookies</Link>
              <Link href="/">Copyright</Link>
            </nav>
          </S.Column>

          <S.Column>
            <S.Title>Destaques</S.Title>
            <nav id="resources">
              <Link href="/">Promoções</Link>
              <Link href="/">FAQ</Link>
              <Link href="/">Pré-venda</Link>
            </nav>
          </S.Column>

          <S.Column>
            <S.Title>Siga a Evolution</S.Title>
            <nav aria-labelledby="social-media">
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.instagram.com"
              >
                Instagram
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.facebook.com"
              >
                Facebook
              </a>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.youtube.com"
              >
                YouTube
              </a>
            </nav>

            <MediaMatch greaterThan="medium">
              <S.Title>Meios de Pagamento</S.Title>
              <S.Payment>
                <Image
                  width={71}
                  height={46}
                  src="/img/visa.png"
                  alt="Selo do Brasil"
                />
                <Image
                  width={36}
                  height={23}
                  src="/img/mastercard.png"
                  alt="Selo do Brasil"
                />
              </S.Payment>
            </MediaMatch>
          </S.Column>
        </S.Content>

        <MediaMatch lessThan="medium">
          <S.Title>Meios de Pagamento</S.Title>
          <S.Payment>
            <Image
              width={71}
              height={46}
              src="/img/visa.png"
              alt="Selo do Brasil"
            />
            <Image
              width={36}
              height={23}
              src="/img/mastercard.png"
              alt="Selo do Brasil"
            />
          </S.Payment>
        </MediaMatch>

        <Image
          width={72}
          height={26}
          src="/img/brazilStamp.png"
          alt="Bandeira do Brasil"
        />
      </S.Wrapper>
      <S.Copyright>
        Copyright ©{currentYear} Evolution. Todos os direitos reservados
      </S.Copyright>
    </S.Footer>
  );
};
