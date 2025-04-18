import type { Meta, StoryObj } from '@storybook/react';

import { Button, Flex, Text, ThemeProvider } from '@packages/common';
import { useThemeMode, useThemePalette } from '@packages/helpers';

const meta = {
  title: 'Common Components/ThemeProvider',
  component: ThemeProvider,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ThemeProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ThemeMode: Story = {
  name: 'ThemeMode',
  render: function RenderStory() {
    const { isDarkMode, themeMode, toggleThemeMode, setThemeMode } = useThemeMode();

    return (
      <ThemeProvider>
        <Flex>
          <Text text={themeMode} />
          <Button text={`change to ${isDarkMode ? 'Light' : 'Dark'}`} onClick={toggleThemeMode} />
          <Button
            text={`change to "Dark"`}
            disabled={isDarkMode}
            onClick={() => setThemeMode('dark')}
          />
          <Button
            text={`change to "Light"`}
            disabled={!isDarkMode}
            onClick={() => setThemeMode('light')}
          />
        </Flex>
      </ThemeProvider>
    );
  },
};

export const ThemePalette: Story = {
  name: 'ThemePalette',
  render: function RenderStory() {
    const { themePalette, setThemePaletteName, allPaletteNames, allPaletteMainColors } =
      useThemePalette();

    return (
      <ThemeProvider>
        <Flex gap={2}>
          <Flex row>
            {allPaletteNames.map((name) => (
              <Button
                key={name}
                text={name}
                // disabled={name === themePaletteName}
                onClick={() => setThemePaletteName(name)}
                sx={{ width: 100, backgroundColor: allPaletteMainColors[name] }}
              />
            ))}
          </Flex>
          <Flex>
            {Object.entries(themePalette).map(([name, color]) => (
              <Flex row key={name}>
                <Text isLabel text={''} bgcolor={color} width={50} height={20} border={1} />
                <Text isLabel text={`primary.${name}`} width={200} />
                <Text isLabel text={color} />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </ThemeProvider>
    );
  },
};
