import media from 'styled-media-query';

import styled, { css, DefaultTheme } from 'styled-components';

type AlignBoxProps = {
  justifyContent?: 'space-between' | 'center';
};

type IconValidEmailProps = {
  isValid: boolean;
};

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

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url('/img/sign-in-background-image.png');
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 ${theme.spacings.xsmall};
    position: relative;

    .animation-spinner {
      transition: none;
    }

    ${media.greaterThan('huge')`
      background-position: center;
    `}
  `}
`;

export const IconWrapper = styled.a`
  ${({ theme }) => css`
    display: block;

    .arrow {
      position: absolute;
      color: ${theme.colors.whiteText};
      top: calc(100% / 10);
      left: 0.4rem;
    }

    ${media.greaterThan('medium')`
      display: none;
    `}
  `}
`;

export const FirstColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.greaterThan('huge')`
    width: 50%;
  `}
`;

export const SecondColumn = styled.div`
  ${({ theme }) => css`
    width: 50%;
    height: 100%;
    display: none;
    align-items: flex-end;
    justify-content: center;
    padding-bottom: ${theme.spacings.huge};

    ${media.greaterThan('huge')`
      display: flex;
    `}
  `}
`;

export const Form = styled.form`
  width: 100%;
  max-width: 40.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  > button span {
    padding: 0.9rem 0;
  }
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: 4rem;
    font-style: normal;
    font-weight: ${theme.font.regular};
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.whiteText};
    margin-bottom: ${theme.spacings.small};
  `}
`;

export const Subtitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
    font-style: normal;
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.secondary};
  `}
`;

export const InputBox = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: ${theme.spacings.big};
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

export const AlignBox = styled.div<AlignBoxProps>`
  ${({ theme, justifyContent = 'space-between' }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${justifyContent};
    margin: ${theme.spacings.small};
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.primary};
    text-decoration: none;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  `}
`;

export const NoAccount = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-style: normal;
    font-weight: ${theme.font.regular};
    color: ${theme.colors.secondary};
    margin-right: 0.6rem;
  `}
`;

export const GoBack = styled.a`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxmedium};
    font-style: italic;
    font-weight: 300;
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.whiteText};
    text-decoration: underline;
  `}
`;
