module.exports = {
  stories: ['../src/components/**/stories.tsx'],
  addons: [
    '@storybook/addon-interactions',
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    'storybook-addon-designs',
    'storybook-addon-next',
    'storybook-dark-mode',
  ],
  core: {
    builder: 'webpack5',
  },
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`);

    return config;
  },
};
