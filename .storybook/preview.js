import { RouterContext } from 'next/dist/shared/lib/router-context';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

import { themes } from '@storybook/theming';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#2F2F2F' },
    light: { ...themes.normal, appBg: '#FFFFFF' },
  },
};

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
