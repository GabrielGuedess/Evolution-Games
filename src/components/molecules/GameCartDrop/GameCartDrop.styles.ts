import media from 'styled-media-query';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    max-height: 40rem;
    display: flex;
    flex-direction: column;
    padding: 1.2rem 0;
    border-bottom: 1px solid ${theme.colors.whiteText};
  `}
`;

export const GameInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${media.greaterThan('small')`
    flex-direction: row;
  `}
`;

export const GameImageWrapper = styled.div`
  width: 100%;
  max-height: 22rem;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  ${media.greaterThan('small')`
    width: 32rem;
    max-height: 16rem;
  `}
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 0.8rem;
`;

export const Genre = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    margin: 0.8rem 0;

    ${media.greaterThan('small')`
      margin: 0 0 0.8rem 0;
    `}
  `}
`;

export const Title = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.whiteText};
    font-size: ${theme.font.sizes.medium};
    margin-bottom: 0.5rem;
  `}
`;

export const Developer = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.whiteText};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 1.8rem;
  `}
`;

export const BuyInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;

  ${media.greaterThan('small')`
    width: auto;
  `}
`;

export const ButtonQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  ${media.greaterThan('small')`
    margin-left: 12rem;
  `}
`;

export const ButtonQuantity = styled.button`
  ${({ theme }) => css`
    width: 2.5rem;
    height: 2.5rem;
    color: ${theme.colors.whiteText};
    background-color: ${theme.colors.primary};
    border-radius: 50%;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s linear;

    :is(:hover, :focus) {
      text-shadow: 0 0 2px ${theme.colors.white};
    }

    &:disabled,
    &:disabled:hover,
    &:disabled:focus {
      opacity: 0.8;
      text-shadow: none;
    }
  `}
`;

export const Quantity = styled.span`
  ${({ theme }) => css`
    width: 5rem;
    height: 5rem;
    color: ${theme.colors.whiteText};
    font-size: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Total = styled.strong`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.whiteText};
    align-self: center;

    ${media.greaterThan('small')`
      margin-left: auto;
    `}
  `}
`;

export const GameOptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Options = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
`;

export const Remove = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    font-size: 1.2rem;
    align-items: center;
  `}
`;
