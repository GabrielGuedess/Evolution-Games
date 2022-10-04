import { rgba } from 'polished';

import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    transition: color 0.3s;
  `}
`;

export const CheckboxWrapper = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.375rem;
  position: relative;
  user-select: none;
  margin-bottom: 0.2rem;
`;

export const Icon = styled.svg`
  ${({ theme }) => css`
    width: 2rem;
    height: 2rem;
    background: rgba(113, 123, 138, 0.5);
    border-radius: 0.2rem;

    rect {
      stroke: transparent;
      transition: stroke 0.3s;
    }

    .check-worm,
    .box-worm {
      stroke: ${theme.colors.white};
      filter: drop-shadow(0 0 1rem ${theme.colors.white});
      transition: stroke 0.3s,
        stroke-dashoffset 0.6s cubic-bezier(0.42, -0.2, 0.58, 1.2);
    }
  `}
`;

export const WrapperInfos = styled.div`
  display: flex;
  gap: 1rem;

  ::after {
    border-radius: 0.375rem;
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    z-index: -1;
    transition: background-color 0.15s linear;
  }
`;

export const Checkbox = styled.input`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 2rem;
    height: 2rem;
    appearance: none;
    cursor: pointer;
    margin: 0.375rem;

    :checked + ${Icon} {
      background-color: ${theme.colors.primary};
      box-shadow: 0 0.5rem 1.5rem ${rgba(theme.colors.primary, 0.25)};
    }

    :is(:focus, :hover) ~ ${WrapperInfos}:after {
      background-color: ${rgba(theme.colors.primary, 0.15)};
    }

    :is(:checked, :indeterminate) + ${Icon} .box-worm {
      stroke-dashoffset: -91;
    }

    :is(:checked, :indeterminate) + ${Icon} .check-worm {
      stroke-dashoffset: -6;
    }

    :indeterminate + ${Icon} .box-worm {
      stroke-dashoffset: -111.38;
    }

    :indeterminate + ${Icon} .check-worm {
      stroke-dashoffset: -26.38;
    }
  `}
`;
