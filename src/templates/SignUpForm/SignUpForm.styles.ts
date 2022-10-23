import media from 'styled-media-query';

import styled, { css } from 'styled-components';

type CircleIndicatorsProps = {
  isActive: boolean;
  allowClick: boolean;
};

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    padding: 5rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25rem;
    z-index: ${theme.layers.base};

    > button {
      max-width: 39.4rem;

      span {
        padding: 0.9rem 0;
      }
    }
  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`
    position: absolute;
    inset: 4rem 0 auto 0;
    z-index: ${theme.layers.base};
  `}
`;

export const Relative = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
`;

export const WrapperIndicators = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5rem;

  ${media.greaterThan('medium')`
      gap: 6.5rem;
    `}
`;

export const CircleIndicators = styled.div<CircleIndicatorsProps>`
  ${({ theme, isActive, allowClick }) => css`
    width: 4rem;
    aspect-ratio: 1/1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${isActive ? theme.colors.primary : 'transparent'};
    box-shadow: ${isActive && theme.shadows.box};
    border: ${!isActive && `2px solid ${theme.colors.secondary}`};
    cursor: ${allowClick ? 'pointer' : 'not-allowed'};
  `}
`;

export const LineIndicator = styled.div`
  ${({ theme }) => css`
    position: absolute;
    left: 100%;
    top: 50%;
    width: calc(5rem + 0.2rem);
    height: 0.2rem;
    transform: translate(0, -50%);
    background: ${theme.colors.secondary};
    z-index: -1;

    ${media.greaterThan('medium')`
      width: calc(6.5rem + 0.2rem);
    `}
  `}
`;

export const NumberIndicator = styled.div`
  ${({ theme }) => css`
    font-size: 1.5rem;
    text-align: center;
    color: ${theme.colors.white};
  `}
`;

export const TitleIndicator = styled.div`
  width: 6rem;
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 6.2rem;
  left: 50%;
  transform: translate(-50%, -50%);
`;
