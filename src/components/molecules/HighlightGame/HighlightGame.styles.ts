import media from 'styled-media-query';

import styled, { css, keyframes } from 'styled-components';

const textWriting = keyframes`
  0% {
    background-position: -500%;
  }
  100% {
    background-position: 500%;
  }
`;

export const Wrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const WrapperHighlight = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const WrapperInfo = styled.div`
  position: absolute;
  inset: 0;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Info = styled.div`
  width: 60%;
  height: 100%;
  padding: 3rem 0;
  margin: 0 1.6rem 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  ${media.greaterThan('medium')`
    width: 33%;
    height: auto;
    margin: 0 10rem 0 0;
    justify-content: flex-start;
    gap: 5rem;
  `}
`;

export const Release = styled.p`
  ${({ theme }) => css`
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.4rem;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.white};

    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #fff);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: ${textWriting} 2.5s linear infinite;
    animation-delay: 2s;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);

    ${media.greaterThan('medium')`
      font-size: 2.4rem;
      line-height: 2.9rem;
    `}
  `}
`;

export const GenreDeveloper = styled.span`
  ${({ theme }) => css`
    font-size: 0.8rem;
    line-height: 0.8rem;
    color: ${theme.colors.secondary};

    ${media.greaterThan('medium')`
      font-size: 1.8rem;
      line-height: 2.2rem;
    `}
  `}
`;

export const Platforms = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
`;
