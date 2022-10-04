import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  position: relative;
`;

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding-top: ${theme.spacings.large};
    padding-bottom: ${theme.spacings.large};
    gap: 1rem;

    ${media.greaterThan('medium')`
      flex-direction: row;
    `}
  `}
`;

export const Svg = styled.svg`
  width: min(40rem, 80%);
  position: absolute;
  top: -0.1rem;
  left: 50%;
  transform: translate(-50%, 0px);

  #rotate {
    transform-origin: center center;
    animation: rotate 9s ease infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 1fr;
    gap: ${theme.spacings.big};
    margin-top: ${theme.spacings.medium};
    text-align: center;

    ${media.greaterThan('medium')`
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: initial;
      text-align: left ;
      gap: 0;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    line-height: ${theme.spacings.xxsmall};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.spacings.medium};
      margin-bottom: 0.4rem;
    `}
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    > img {
      display: block;
    }

    a {
      display: block;
      font-size: ${theme.font.sizes.xxsmall};
      line-height: ${theme.spacings.xxsmall};
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.secondary};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    a:hover {
      text-decoration: underline;
    }

    ${media.greaterThan('small')`
      a {
        font-size: ${theme.font.sizes.xsmall};
        line-height: ${theme.spacings.medium};
        margin-bottom: 0;
      }
    `}
  `}
`;

export const Payment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.medium};
    line-height: ${theme.spacings.medium};
    color: ${theme.colors.secondary};
    text-align: center;
  `}
`;
