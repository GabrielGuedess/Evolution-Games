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
`;

export default GlobalStyles;
