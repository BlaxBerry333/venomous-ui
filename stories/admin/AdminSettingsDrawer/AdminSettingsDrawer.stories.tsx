import { AdminSettingsDrawer, AdminSettingsDrawerBlock } from '@packages/admin';
import { Text } from '@packages/common';
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta = {
  title: 'Admin Components/AdminSettingsDrawer',
  component: AdminSettingsDrawer,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    width: {
      description: 'Width',
      control: 'number',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '300' },
      },
    },
    title: {
      description: 'Title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Settings' },
      },
    },
    labelOfThemeMode: {
      description: 'Label of Theme Mode',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"ThemeMode"' },
      },
    },
    labelOfThemePalettes: {
      description: 'Label of Theme Palettes',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"ThemePalettes"' },
      },
    },
    onChangeThemeMode: {
      description: 'Will be called when theme mode is changed, default delay 20ms',
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
    onChangeThemePalette: {
      description: 'Will be called when theme palette is changed, default delay 20ms',
      table: {
        category: 'Events',
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    width: 300,
    title: 'Settings',
    labelOfThemeMode: 'ThemeMode',
    labelOfThemePalettes: 'ThemePalettes',
    onChangeThemeMode: () => {},
    onChangeThemePalette: () => {},
  },
} satisfies Meta<typeof AdminSettingsDrawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory(args) {
    const [alphabet, setAlphabet] = React.useState<string>();
    const alphabets: string[] = ['A', 'B', 'C'];

    return (
      <AdminSettingsDrawer
        {...args}
        onChangeThemeMode={() => alert('Theme Mode Changed')}
        onChangeThemePalette={() => alert('Theme Palette Changed')}
      >
        <p>Other Custom Content</p>
        <p>Other Custom Content</p>
        <p>Other Custom Content</p>
        <br />

        <Text text={'Alphabet'} isLabel />
        <AdminSettingsDrawerBlock
          items={alphabets}
          renderItem={(item) => <Text text={item} bold={item === alphabet} />}
          isItemSelected={(item) => item === alphabet}
          isItemDisabled={(item) => item === alphabet}
          onItemClick={async (item) => {
            setAlphabet(item);
            await new Promise((resolve) => setTimeout(resolve, 200));
            alert(item);
          }}
        />
      </AdminSettingsDrawer>
    );
  },
};
