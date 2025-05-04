import type { Meta, StoryObj } from '@storybook/react';

import { Button, Card, Flex, Text, ThemeProvider } from '@packages/common';
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
        <Flex row gap={4}>
          <Flex>
            {allPaletteNames.map((color) => (
              <Card
                key={color}
                clickable
                onClick={() => setThemePaletteName(color)}
                sx={{
                  width: 100,
                  textAlign: 'center',
                  bgcolor: allPaletteMainColors[color],
                  color: '#fff',
                  py: '8px',
                }}
              >
                <Text bold text={color} />
              </Card>
            ))}
          </Flex>
          <Flex>
            {Object.entries(themePalette).map(([name, color]) => (
              <Flex row key={name}>
                <Card isOutlined sx={{ bgcolor: color }} />
                <Text isLabel text={`primary.${name}`} width={140} />
                <Text isLabel text={color} />
              </Flex>
            ))}
          </Flex>
        </Flex>
      </ThemeProvider>
    );
  },
};
