import media from 'styled-media-query';

import styled, { css, DefaultTheme, keyframes } from 'styled-components';

import { TitleProps } from './Title';

const lights = keyframes`
  0% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }

  30% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  40% {
    color: hsl(230, 100%, 95%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 90%, 0.5),
      -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
      0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
  }

  70% {
    color: hsl(230, 80%, 90%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.5),
      0 0 0.125em hsla(320, 100%, 60%, 0.5),
      0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
      -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
  }

  100% {
    color: hsl(230, 40%, 80%);
    text-shadow:
      0 0 1em hsla(320, 100%, 50%, 0.2),
      0 0 0.125em hsla(320, 100%, 60%, 0.3),
      1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
      -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
  }
`;

const titleModifiers = {
  animation: () => css`
    animation: ${lights} 5s 750ms linear infinite;
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.big};
  `,
};

export const Title = styled.h1<TitleProps>`
  ${({ theme, hasAnimation, textAlign, size }) => css`
    color: ${theme.colors.whiteText};
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.medium};
    text-align: ${textAlign};

    ${hasAnimation && titleModifiers.animation()}
    ${titleModifiers[size!](theme)}

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxbig};
    `}
  `}
`;
