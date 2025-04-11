import MuiPaper from '@mui/material/Paper';
import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../packages/common';

const preview: Preview = {
  parameters: {},
  globalTypes: {},
  initialGlobals: {},
  decorators: [
    (Story) => {
      return (
        <React.Fragment>
          <ThemeProvider>
            <MuiPaper
              sx={{
                minHeight: '200px',
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Story />
            </MuiPaper>
          </ThemeProvider>
        </React.Fragment>
      );
    },
  ],
};

export default preview;
