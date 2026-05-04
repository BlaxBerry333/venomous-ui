import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import {
  headlessStyledArgType,
  headlessStyledDefaultArgs,
  makeHeadlessStyledDecorator,
  playClick,
  type WithHeadlessStyledMode,
} from '../../../__shared__';
import { Button } from '@packages/react/components/Button';
import buttonCss from '@packages/styles/components/Button.scss?inline';

type Args = WithHeadlessStyledMode<React.ComponentProps<typeof Button>>;

const meta: Meta<Args> = {
  title: 'react/components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  args: {
    ...headlessStyledDefaultArgs,
    children: 'Button',
    loading: false,
    disabled: false,
    type: 'button',
    onClick: fn(),
  },
  argTypes: {
    __mode__: headlessStyledArgType,
    children: { table: { category: 'Props' } },
    loading: { table: { category: 'Props' } },
    disabled: { table: { category: 'Props' } },
    onClick: { table: { category: 'Props' } },
    type: {
      control: { type: 'inline-radio' },
      options: ['button', 'submit', 'reset'],
      table: { category: 'Props' },
    },
  },
  decorators: [makeHeadlessStyledDecorator(buttonCss, 'Button')],
};

export default meta;

export const Button_: StoryObj<Args> = {
  name: 'Button',
  play: playClick,
};

export const Headless: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: false },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button } from 'venomous-ui/react/components';

export default function App() {
  return (
    <Button onClick={() => console.log('clicked')}>Button</Button>
  );
}`,
      },
    },
  },
};

export const Styled: StoryObj<Args> = {
  tags: ['!dev'],
  args: { __mode__: true },
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `import { Button } from 'venomous-ui/react/components';
import 'venomous-ui/styles/components/Button.css';

export default function App() {
  return (
    <Button onClick={() => console.log('clicked')}>Button</Button>
  );
}`,
      },
    },
  },
};
