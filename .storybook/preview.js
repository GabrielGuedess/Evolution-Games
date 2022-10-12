import { RouterContext } from 'next/dist/shared/lib/router-context';

import { themes } from '@storybook/theming';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';

initialize({
  onUnhandledRequest: 'bypass',
});

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
  },
  darkMode: {
    dark: { ...themes.dark, appBg: '#2F2F2F' },
    light: { ...themes.normal, appBg: '#FFFFFF' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'Evolution-dark',
    values: [
      {
        name: 'Evolution-light',
        value: theme.colors.white,
      },
      {
        name: 'Evolution-dark',
        value: theme.colors.mainBg,
      },
    ],
  },
};

export const decorators = [
  mswDecorator,
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
