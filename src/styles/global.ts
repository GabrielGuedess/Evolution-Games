import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local(''),
          url('/fonts/inter-v12-latin-regular.woff2') format('woff2'),
    }
    @font-face {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 500;
      font-display: swap;
      src: local(''),
          url('/fonts/inter-v12-latin-500.woff2') format('woff2'),
    }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &:is(::before, ::after) {
      box-sizing: inherit;
    }
  }

  html {
    font-size: 62.5%;
  }

  body {
    ${({ theme }) => css`
      background: ${theme.colors.mainBg};
      font-family: ${theme.font.family.primary};
      color: ${theme.colors.whiteText};
    `}
  }

  ::-webkit-scrollbar-track,
  ::-webkit-scrollbar {
    ${({ theme }) => css`
      width: 1rem;
      background: ${theme.colors.mainBg};
    `}
  }

  ::-webkit-scrollbar-thumb {
    ${({ theme }) => css`
      border-radius: 1rem;
      background: linear-gradient(transparent, ${theme.colors.primary});
      transition: background 0.3 linear;
    `}
  }

  button {
    border: none;
    margin: 0;
    padding: 0;
    width: auto;
    overflow: visible;
    background: transparent;
    color: inherit;
    font: inherit;
    line-height: normal;
    font-size: 1.2rem;
  }
`;

export default GlobalStyles;
