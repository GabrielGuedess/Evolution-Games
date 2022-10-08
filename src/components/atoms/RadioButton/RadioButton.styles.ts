import { rgba } from 'polished';

import styled, { css, keyframes } from 'styled-components';

const stretchAnimate = keyframes`
  0% {
    transform: scale(1,1)
  }
  28% {
    transform: scale(1.15,.85)
  }
  50% {
    transform: scale(.9,1.1)
  }
  100% {
    transform: scale(1,1)
  }
`;

export const Wrapper = styled.div``;

export const Radio = styled.input`
  ${({ theme }) => css`
    appearance: none;
    position: relative;
    height: 2rem;
    width: 2rem;
    outline: none;
    margin: 0;
    cursor: pointer;
    border: 0.2rem solid ${rgba('#717B8A', 0.5)};
    background: transparent;
    border-radius: 50%;
    display: grid;
    justify-self: end;
    justify-items: center;
    align-items: center;
    overflow: hidden;
    transition: border 0.5s ease;

    ::before,
    ::after {
      content: '';
      display: flex;
      justify-self: center;
      border-radius: 50%;
    }

    ::before {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${theme.colors.mainBg};
      z-index: 1;
      opacity: var(--opacity, 1);
    }

    ::after {
      position: relative;
      width: calc(100% / 2);
      height: calc(100% / 2);
      background: ${theme.colors.primary};
      top: var(--y, 100%);
      transition: top 0.5s cubic-bezier(0.48, 1.97, 0.5, 0.63);
    }

    :checked {
      border: 0.2rem solid ${theme.colors.primary};
      box-shadow: 0 0.5rem 1.5rem ${rgba(theme.colors.primary, 0.25)};

      ::after {
        --y: 0%;
        animation: ${stretchAnimate} 0.3s ease-out 0.17s;
      }

      ::before {
        --opacity: 0;
      }

      ~ input[type='radio'] {
        ::after {
          --y: -100%;
        }
      }
    }
    :not(:checked) {
      ::before {
        --opacity: 1;
        transition: opacity 0s linear 0.5s;
      }
    }
  `}
`;

export const WrapperInfos = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;

  span {
    text-transform: capitalize;
    font-size: 1.4rem;
  }
`;

export const Label = styled.label`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    gap: 2rem;
    width: 100%;
    height: 100%;
    padding: 0.375rem;
    position: relative;
    user-select: none;
    margin-bottom: 0.2rem;
    transition: background 0.15s linear;

    :is(:focus, :hover) {
      background: ${rgba(theme.colors.primary, 0.15)};
      border-radius: 0.375rem;
    }
  `}
`;
