import Image from 'next/image';

import media from 'styled-media-query';

import styled, { css, DefaultTheme, keyframes } from 'styled-components';

type IconValidEmailProps = {
  isValid: boolean;
};

type PhotoProps = {
  isActive: boolean;
};

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const iconValidEmailModifiers = {
  initial: (theme: DefaultTheme) => css`
    polyline,
    path {
      stroke-width: 1.6;
      stroke: ${theme.colors.white};
    }
    path {
      stroke-dasharray: 46;
      stroke-dashoffset: 150;
      transition: stroke-dasharray 0.6s ease 0s,
        stroke-dashoffset 0.8s ease 0.3s, stroke 0.3s ease 0.6s;
    }
    polyline {
      stroke-dashoffset: 0;
      transition: stroke-dashoffset 0.5s ease 0.6s, stroke 0.3s ease 0.6s;
    }
  `,

  finish: (theme: DefaultTheme) => css`
    polyline,
    path {
      stroke: ${theme.colors.white};
      stroke-width: 1.4;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: stroke 0.3s ease 0s;
    }

    path {
      stroke-dasharray: 64;
      stroke-dashoffset: 127;
      transition: stroke-dasharray 0.8s ease 0.8s,
        stroke-dashoffset 0.8s ease 0.5s;
    }

    polyline {
      stroke-dasharray: 18;
      stroke-dashoffset: 18;
      transition: stroke-dashoffset 0.5s ease 0s;
    }
  `,
};

export const Wrapper = styled.form`
  width: 100%;
  max-width: 40.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3.2rem;

  .animation-spinner {
    transition: none;
  }

  > button span {
    padding: 0.9rem 0;
  }
`;

export const WrapperPhoto = styled.div<PhotoProps>`
  ${({ theme, isActive }) => css`
    position: relative;
    width: 25rem;
    aspect-ratio: 1/1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid ${isActive ? theme.colors.primary : '#272530'};
    margin-bottom: 3.2rem;
    cursor: ${isActive ? 'auto' : 'pointer'};
    transition: 0.3s all;

    ${isActive &&
    css`
      ::before,
      ::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 50%;
        border-top: 0.5rem solid ${theme.colors.white};
        z-index: ${theme.layers.base};
        filter: drop-shadow(0 0 2px ${theme.colors.primary})
          drop-shadow(0 0 5px ${theme.colors.primary})
          drop-shadow(0 0 10px ${theme.colors.primary})
          drop-shadow(0 0 20px ${theme.colors.primary});
        animation: ${rotate} 5s infinite linear;
      }

      ::after {
        filter: drop-shadow(0 0 2px #f554ff) drop-shadow(0 0 5px #f554ff)
          drop-shadow(0 0 10px #f554ff) drop-shadow(0 0 20px #f554ff);
        animation-delay: -2.5s;
      }
    `}

    :is(:hover, :focus) {
      border: 2px solid ${theme.colors.primary};

      svg {
        color: ${!isActive && theme.colors.primary};
      }
    }
  `}
`;

export const ImageUser = styled(Image)`
  border-radius: 50%;
`;

export const ButtonCamera = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    position: absolute;
    inset: auto 0 0 auto;
    cursor: pointer;
    transition: 0.3s all;
    outline: none;

    :is(:hover, :focus) {
      color: ${theme.colors.primary};
    }
  `}
`;

export const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  ${media.greaterThan('medium')`
    gap: 1.6rem;
  `}
`;

export const IconValidEmail = styled.svg<IconValidEmailProps>`
  ${({ theme, isValid }) => css`
    width: 2rem;
    height: 2rem;
    fill: none;

    ${isValid
      ? iconValidEmailModifiers.initial(theme)
      : iconValidEmailModifiers.finish(theme)}
  `}
`;

export const WrapperIconPass = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;
