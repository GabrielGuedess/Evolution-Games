import styled, { css } from 'styled-components';

type ButtonProps = {
  direction: 'left' | 'right';
};

const wrapperModifiers = {
  left: () => css`
    border-radius: 5px 0 0 5px;
  `,

  right: () => css`
    transform: scaleX(-1);
    border-radius: 5px 0 0 5px;
  `,
};

export const Wrapper = styled.div`
  min-width: 6.4rem;
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, direction }) => css`
    width: 3.2rem;
    height: 3.2rem;
    border: 1px solid ${theme.colors.secondary};
    color: ${theme.colors.secondary};
    transition: color 0.3s linear, border-color 0.3s linear;

    svg {
      width: 0.7rem;
      height: 1.2rem;
    }

    ${!!direction && wrapperModifiers[direction]}

    :hover,
    :focus {
      cursor: pointer;
      color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }
  `}
`;
