import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'light',

    // logo
    brandUrl: 'https://github.com/BlaxBerry333/venomous-ui',
    brandImage: 'logo.svg',
    brandTarget: '_blank',
  }),
});
