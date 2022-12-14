import styled, { keyframes, css } from 'styled-components';

const animationScroll = keyframes`
   0% {
    transform: translate(0, 0);
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  80% {
    transform: translate(0, 2rem);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

export const Wrapper = styled.button`
  ${({ theme }) => css`
    position: absolute;
    inset: auto auto 3rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    z-index: ${theme.layers.base};

    div {
      position: relative;
      width: 2rem;
      height: 4rem;
      border: 0.2rem solid ${theme.colors.white};
      border-radius: 5rem;

      :before {
        content: '';
        position: absolute;
        left: 50%;
        top: 0.6rem;
        width: 0.6rem;
        height: 0.6rem;
        margin-left: -0.3rem;
        background-color: ${theme.colors.white};
        border-radius: 100%;
        animation: ${animationScroll} 2s infinite;
      }
    }
  `}
`;
