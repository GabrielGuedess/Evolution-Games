import media from 'styled-media-query';

import styled, { css } from 'styled-components';

import { BaseTemplateProps } from './Base';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
  justify-content: space-between;
  z-index: 10;
`;

export const Content = styled.div<Pick<BaseTemplateProps, 'hasMarginTop'>>`
  ${({ hasMarginTop }) => css`
    margin-top: ${hasMarginTop ? '7.8rem' : 0};
    flex: 1 0 auto;

    ${media.greaterThan('medium')`
      margin-top: ${hasMarginTop ? '10.4rem' : 0};
    `}
  `}
`;

export const SectionFooter = styled.div`
  margin-top: 6rem;
`;

export const CircleBlurLeft = styled.div`
  position: absolute;
  inset: 0 auto auto 0;
  transform: translate(-50%, -50%);
  width: 55.2rem;
  aspect-ratio: 1/1;
  z-index: -1;
  border-radius: 50%;
  filter: blur(12.5rem);
  background: linear-gradient(
    180deg,
    rgba(118, 74, 241, 0.8),
    rgba(118, 74, 241, 0)
  );
`;

export const CircleBlurRight = styled.div`
  position: absolute;
  inset: 0 0 auto auto;
  transform: translate(50%, -50%);
  width: 55.2rem;
  aspect-ratio: 1/1;
  z-index: -1;
  border-radius: 50%;
  filter: blur(12.5rem);
  background: linear-gradient(
    180deg,
    rgba(118, 74, 241, 0.8),
    rgba(118, 74, 241, 0)
  );
`;
