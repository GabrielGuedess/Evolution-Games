import media from 'styled-media-query';

import styled, { css } from 'styled-components';

import { TitleProps } from './Title';

export const Title = styled.h1<TitleProps>`
  ${({ theme, textAlign }) => css`
    color: ${theme.colors.whiteText};
    font-size: ${theme.font.sizes.medium};
    font-family: ${theme.font.family.primary};
    font-weight: ${theme.font.medium};
    text-align: ${textAlign};

    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxbig};
    `}
  `}
`;
