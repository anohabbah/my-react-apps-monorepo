const rootMain = require('../../../.storybook/main');

// Use the following syntax to add addons!
rootMain.addons.push(
  ...[
    '@storybook/addon-links/register',
    '@storybook/addon-essentials',
  ],
);
rootMain.stories.push(
  ...['../src/app/**/*.stories.mdx', '../src/app/**/*.stories.@(js|jsx|ts|tsx)']
);

module.exports = rootMain;
