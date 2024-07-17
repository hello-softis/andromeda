module.exports = {
  stories: [
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../docs/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  framework: {
    name: '@storybook/react',
    options: {},
  },
  core: {
    builder: 'storybook-builder-vite',
  },
};
