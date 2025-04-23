import type { Meta, StoryObj } from '@storybook/react';

import { Flex, LazyImage } from '@packages/common';

const meta = {
  title: 'Common Components/Images/LazyImage',
  component: LazyImage,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
} satisfies Meta<typeof LazyImage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderLoading() {
    return (
      <Flex>
        <LazyImage
          src="https://raw.githubusercontent.com/BlaxBerry333/venomous-ui/962fa42bc6d3fc7ae799c44206d8289ead2f2f5b/public/favicon.svg"
          alt="logo"
          width={40}
          height={40}
        />
        <LazyImage src="https://sample-videos.com/img/background-2739196.jpg" width={100} />
      </Flex>
    );
  },
};
