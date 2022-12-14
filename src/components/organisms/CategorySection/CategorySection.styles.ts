import media from 'styled-media-query';

import { Container } from 'components/atoms/Container/Container';

import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  margin-top: 6rem;
  margin-bottom: 6rem;
`;

export const FirstColumn = styled(Container)`
  ${({ theme }) => css`
    height: 760px;
    max-height: 760px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: ${theme.spacings.xsmall};
    gap: 2rem;

    ${media.greaterThan('large')`
      height: 500px;
      max-height: initial;
      flex-direction: row;
    `}

    ${media.greaterThan('huge')`
      height: 570px;
      max-height: initial;
      margin-top: ${theme.spacings.large};
    `}
  `}
`;

export const SecondColumn = styled(Container)`
  height: 100%;
  max-height: 370px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  ${media.greaterThan('large')`
    width: auto;
    height: 650px;
    max-height: 650px;
  `}

  ${media.greaterThan('huge')`
    height: 787px;
    max-height: 787px;
  `}
`;

export const ActionImageCategory = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 396px;
    height: 370px;
    flex: 1;
    position: relative;

    .image-category {
      cursor: pointer;
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
      width: 100%;
      max-width: initial;
      height: 100%;
    `}
  `}
`;

export const TerrorImageCategory = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 396px;
    height: 370px;
    flex: 1;
    position: relative;

    .image-category {
      cursor: pointer;
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
      width: 100%;
      max-width: initial;
      height: 100%;
      flex: 1.69;
    `}
  `}
`;

export const QualityImageCategory = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 396px;
    height: 370px;
    position: relative;

    .image-category {
      cursor: pointer;
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
      width: 100%;
      max-width: initial;
      height: 100%;
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

export const ImageTitle = styled.strong`
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

export const ImageSubTitle = styled.strong`
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
