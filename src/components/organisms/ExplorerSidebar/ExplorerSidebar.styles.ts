import media from 'styled-media-query';

import styled, { css } from 'styled-components';

type ExplorerMobileProps = {
  isOpen: boolean;
};

export const WrapperContainer = styled.section<ExplorerMobileProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    z-index: ${theme.layers.alwaysOnTop};
    inset: 0;
    height: 100vh;
    padding: 3rem 2.4rem;
    background: ${theme.colors.gameDetails};
    overflow-y: auto;
    visibility: ${isOpen ? 'visible' : 'hidden'};
    pointer-events: ${isOpen ? 'all' : 'none'};

    ::-webkit-scrollbar {
      display: none;
    }

    ${media.greaterThan('medium')`
      position: relative;
      width: 40rem;
      height: fit-content;
      padding: 4rem 5rem;
      visibility: visible;
      pointer-events: all;
    `}
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    padding: 1rem 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.6rem;
    background: ${theme.colors.gameDetails};

    ${media.greaterThan('medium')`
      height: fit-content;
      padding: 0;
    `}
  `}
`;

export const WrapperCategory = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.strong`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: 500;
    text-transform: capitalize;
    color: ${theme.colors.white};
  `}
`;

export const WrapperRange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const WrapperOutput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const TrackPrice = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 0.3rem;
    background: ${theme.colors.white};
  `}
`;

export const ThumbPrice = styled.div`
  ${({ theme }) => css`
    width: 1.5rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: ${theme.colors.white};
    border: 2px solid ${theme.colors.primary};
    box-shadow: 0px 0px 0.5rem rgba(255, 255, 255, 0.25),
      0px 0px 0.8rem ${theme.colors.primary};
  `}
`;

export const Output = styled.output`
  ${({ theme }) => css`
    width: 50%;
    padding: 1rem 0;
    border: 0.1rem solid ${theme.colors.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${theme.font.sizes.small};
    font-weight: 500;
  `}
`;
