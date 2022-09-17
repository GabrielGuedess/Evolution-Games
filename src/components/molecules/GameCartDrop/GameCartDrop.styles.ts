import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: 1.2rem 0;
    border-bottom: 1px solid ${theme.colors.whiteText};
  `}
`;

export const GameInfoWrapper = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

export const GameImageWrapper = styled.div`
  width: 50%;
  aspect-ratio: 16/9;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.8rem;
`;

export const Genre = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    margin-bottom: 0.8rem;
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
    margin-bottom: 0.8rem;
  `}
`;

export const BuyInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: calc(25% - 5.5rem);
`;

export const ButtonLess = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    color: ${theme.colors.whiteText};
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.2s linear;

    :is(:hover, :focus) {
      color: ${theme.colors.primary};
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

export const ButtonMore = styled.button`
  ${({ theme }) => css`
    width: 3rem;
    height: 3rem;
    color: ${theme.colors.whiteText};
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: color 0.2s linear;

    :is(:hover, :focus) {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Total = styled.strong`
  ${({ theme }) => css`
    font-size: 1.6rem;
    color: ${theme.colors.whiteText};
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

export const MoveToFavorites = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.secondary};
    font-size: 1.2rem;
    font-weight: 500;
    cursor: pointer;
    transition: color 0.2s linear;
    padding: 0 2rem;
    border-right: 2px solid ${theme.colors.whiteText};

    :is(:hover, :focus) {
      color: ${theme.colors.primary};
    }
  `}
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
