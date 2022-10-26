import media from 'styled-media-query';

import styled, { css } from 'styled-components';

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

    ${media.greaterThan('huge')`
      background-position: center;
      grid-template-columns: 1fr 1fr;
    `}
  `}
`;

export const IconWrapper = styled.a`
  ${({ theme }) => css`
    display: block;
    z-index: ${theme.layers.alwaysOnTop};

    .arrow {
      position: absolute;
      color: ${theme.colors.whiteText};
      top: calc(100% / 20);
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
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SecondColumn = styled.div`
  ${({ theme }) => css`
    width: 100%;
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
