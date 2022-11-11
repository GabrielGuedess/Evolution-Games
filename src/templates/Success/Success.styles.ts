import { rgba } from 'polished';

import styled, { css, DefaultTheme, keyframes } from 'styled-components';

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

const scaleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.5);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const drawCircle = keyframes`
  0% {
    stroke-dashoffset: 15.1rem;
  }

  100% {
    stroke-dashoffset: 0;
  }
`;

const drawCheck = keyframes`
  0% {
    stroke-dashoffset: 3.6rem;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const pulse = (theme: DefaultTheme) => keyframes`
  0% {
    box-shadow: 0 0 0 0 ${rgba(theme.colors.primary, 0.4)};
  }
  70% {
    box-shadow: 0 0 0 1.5rem ${rgba(theme.colors.primary, 0)};
  }
  100% {
    box-shadow: 0 0 0 0 ${rgba(theme.colors.primary, 0)};
  }
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding: ${theme.spacings.xxlarge} 0 calc(${theme.spacings.xxlarge} * 3);
  `}
`;

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xlarge};
    text-align: center;
    animation: ${lights} 5s 750ms linear infinite;
  `}
`;

export const CheckMark = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.medium};
  `}
`;

export const SuccessIcon = styled.svg`
  ${({ theme }) => css`
    border-radius: 50%;
    stroke-dasharray: 15.1rem 15.1rem;
    stroke: ${theme.colors.primary};
    animation: 1s ease-out 0s 1 both ${scaleAnimation},
      ${pulse(theme)} 2s infinite;

    path {
      fill: ${theme.colors.primary};
      opacity: 0;
      animation: 0.3s linear 0.9s both ${fadeIn};
    }

    circle {
      stroke: ${theme.colors.white};
      animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ${drawCircle},
        0.3s linear 0.9s 1 both ${fadeOut};
    }

    polyline {
      stroke: ${theme.colors.white};
      fill: transparent;
      animation: 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ${drawCheck};
    }
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    max-width: 60rem;
    margin: auto;
  `}
`;
