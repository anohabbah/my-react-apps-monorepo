import { addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withLinks } from '@storybook/addon-links';

import '../src/styles.scss';

addDecorator(withKnobs);
addDecorator(withLinks);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
