import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  height: 100%;
`;

export const WrapperSlide = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    height: 100%;

    img {
      mask-image: linear-gradient(
        180deg,
        transparent 4%,
        ${theme.colors.white} 56%,
        transparent 100%
      );
    }
  `}
`;

export const HighlightName = styled(Container)`
  ${({ theme }) => css`
    position: absolute;
    inset: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    padding-top: 12rem;
    z-index: ${theme.layers.base};

    ${media.greaterThan('medium')`
      padding-top: 20rem;
    `}
  `}
`;
