import { rgba } from 'polished';
import media from 'styled-media-query';

import styled, { css } from 'styled-components';

type Color = {
  color: string;
};

export const Wrapper = styled.article`
  width: 100%;
  height: 22rem;
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  border-radius: 0.4rem;

  ${media.greaterThan('medium')`
    width: 29.1rem;
    height: 100%;
    border-radius: 0;
  `}
`;

export const GameImage = styled.div`
  ${({ theme }) => css`
    width: 100%;
    min-height: 37.8rem;
    position: relative;
    cursor: pointer;
    filter: blur(0.5px);

    ${media.greaterThan('medium')`
      filter: none;
      background-color: ${theme.colors.gameDetails};
    `}
  `}
`;

export const CircleBlur = styled.div<Color>`
  ${({ color }) => css`
    display: none;
    position: absolute;
    top: -120%;
    left: 0;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background-image: linear-gradient(180deg, ${color}, ${rgba(color, 0.2)});
    filter: blur(7rem);

    ${media.greaterThan('medium')`
      display: block;
    `}
  `}
`;

export const GameContent = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 2rem;
    position: absolute;
    gap: ${theme.spacings.xsmall};
    top: 0;
    background: linear-gradient(90deg, #010914 12.5%, rgba(4, 4, 12, 0.3) 100%);

    ${media.greaterThan('medium')`
      width: auto;
      min-height: 20.8rem;
      position: inherit;
      background-color: ${theme.colors.gameDetails};
      overflow: hidden;
    `}
  `}
`;

export const GameInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

export const Score = styled.div`
  margin-top: 1rem;
  position: relative;
`;

export const Percentage = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.regular};
    font-style: normal;
    line-height: ${theme.spacings.small};
    color: ${theme.colors.whiteText};
    text-shadow: 0 0 1rem ${rgba(theme.colors.white, 0.5)};
    position: absolute;
    top: 0.9rem;
    left: 1.1rem;
  `}
`;

export const BoxHighlight = styled.div`
  max-width: calc(100% - 4rem);
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.xxmedium};
    line-height: ${theme.spacings.medium};
    font-weight: ${theme.font.regular};
    color: ${theme.colors.whiteText};
    font-style: normal;
    margin-bottom: ${theme.spacings.small};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xbig};
    `}
  `}
`;

export const Genre = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    line-height: ${theme.spacings.xsmall};
    font-weight: ${theme.font.regular};
    font-style: normal;
    color: ${theme.colors.secondary};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
    `}
  `}
`;

export const Developer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxsmall};
    line-height: ${theme.spacings.xsmall};
    font-weight: ${theme.font.regular};
    font-style: normal;
    color: ${theme.colors.secondary};
    margin-top: 5px;

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xsmall};
    `}
  `}
`;

export const GameFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
    line-height: ${theme.spacings.small};
    font-style: normal;
    color: ${theme.colors.whiteText};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxmedium};
    `}
  `}
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
