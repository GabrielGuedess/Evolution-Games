import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

export const CategoryGrid = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'a' 'b' 'c';
  align-items: center;
  justify-items: center;
  grid-row-gap: 2rem;

  .image-one {
    grid-area: a;
  }

  .image-two {
    grid-area: b;
  }

  .image-three {
    grid-area: c;
  }

  ${media.greaterThan('large')`
    grid-template-columns: 37% repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas: 'a b b' 'c c c';
    grid-column-gap: 2rem;
  `}
`;

export const ImageWrapper = styled.div`
  ${({ theme }) => css`
    max-width: 396px;
    max-height: 370px;
    position: relative;
    cursor: pointer;

    .image-category {
      transition: transform 0.5s ease;
    }

    &:hover {
      h4 {
        text-shadow: 0px 0px 3px ${theme.colors.white};
      }

      .image-category {
        transform: scale(1.2);
      }
    }

    ${media.greaterThan('large')`
      width: auto;
      height: auto;
      max-width: initial;
      max-height: initial;
    `}
  `}
`;

export const ImageHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 35px;
  right: 0;
  left: 0;
  z-index: 1;
`;

export const ImageTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.regular};
    font-style: normal;
    color: ${theme.colors.secondary};
    line-height: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xxsmall};
    text-align: center;

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xbig};
      margin-bottom: ${theme.spacings.small};
    `}
  `}
`;

export const ImageSubTitle = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxmedium};
    font-weight: ${theme.font.regular};
    font-style: normal;
    color: ${theme.colors.whiteText};
    text-align: center;

    ${media.greaterThan('large')`
      font-size: ${theme.font.sizes.xxbig};
    `}
  `}
`;
