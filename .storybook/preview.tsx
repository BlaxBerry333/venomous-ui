import React from 'react';

import type { Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {},
  globalTypes: {},
  initialGlobals: {},
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <Story />
        </React.Fragment>
      );
    },
  ],
};

export default preview;
