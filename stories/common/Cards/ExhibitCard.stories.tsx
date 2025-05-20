import type { Meta, StoryObj } from '@storybook/react';

import {
  ExhibitCard,
  ExhibitCardActionButton,
  Icon,
  type ExhibitCardActionButtonProps,
} from '@packages/common';
import CardMeta from './Card.stories';

const { clickable: _, onClick: __, ...cardMetaArgTypes } = CardMeta.argTypes || {}; // eslint-disable-line @typescript-eslint/no-unused-vars
const { clickable: ___, onClick: ____, ...cardMetaArgs } = CardMeta.args || {}; // eslint-disable-line @typescript-eslint/no-unused-vars

const meta = {
  title: 'Common Components/Cards/ExhibitCard',
  component: ExhibitCard,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    ...cardMetaArgTypes,
    title: {
      description: 'Title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    subtitle: {
      description: 'Subtitle',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' },
      },
    },
    headerStartExtra: {
      description: 'Extra content at the start of the header',
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
    headerEndExtra: {
      description: 'Extra content at the end of the header',
      control: 'text',
      table: {
        type: { summary: 'React.ReactNode' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
  args: {
    ...cardMetaArgs,
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    headerStartExtra: '',
    headerEndExtra: '',
  },
} satisfies Meta<typeof ExhibitCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    const menuItems: ExhibitCardActionButtonProps['menuItems'] = [
      { label: 'Edit', icon: 'solar:pen-new-square-line-duotone', onClick: () => alert('Edit') },
      { label: 'Delete', icon: 'solar:close-square-line-duotone', onClick: () => alert('Delete') },
    ];

    return (
      <ExhibitCard
        title="Card Title"
        subtitle="Card Subtitle"
        headerStartExtra={<Icon icon="solar:box-minimalistic-bold-duotone" />}
        headerEndExtra={
          <ExhibitCardActionButton icon="solar:menu-dots-line-duotone" menuItems={menuItems} />
        }
      >
        <div>Card Content</div>
        <div>Card Content</div>
        <div>Card Content</div>
      </ExhibitCard>
    );
  },
};
