import type { Meta, StoryObj } from '@storybook/react-vite';
import { Avatar } from '@packages/react/Avatar';
import { Badge } from '@packages/react/Badge';
import { Breadcrumb, BreadcrumbItem } from '@packages/react/Breadcrumb';
import { Button } from '@packages/react/Button';
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '@packages/react/Card';
import { Skeleton } from '@packages/react/Skeleton';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  argTypes: { variant: { control: 'select', options: ['outlined', 'elevated'] } },
  args: { variant: 'outlined' },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  render: (args) => (
    <Card {...args} style={{ width: 320 }}>
      <CardHeader>
        <CardTitle>Pro plan</CardTitle>
        <Badge variant="accent">Popular</Badge>
      </CardHeader>
      <CardBody>Unlimited projects, priority support and team roles.</CardBody>
      <CardFooter>
        <Button variant="secondary">Compare</Button>
        <Button>Upgrade</Button>
      </CardFooter>
    </Card>
  ),
};

export const Badges: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <Badge>Draft</Badge>
      <Badge variant="accent">New</Badge>
      <Badge variant="success">Passed</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="danger">Failed</Badge>
    </div>
  ),
};

export const Avatars: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <Avatar name="Ada Lovelace" size="sm" />
      <Avatar name="Grace Hopper" />
      <Avatar name="Broken Image" src="/does-not-exist.png" size="lg" />
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <Card style={{ width: 320 }} aria-busy="true" aria-label="Loading profile">
      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <Skeleton shape="circle" />
        <div style={{ flex: 1 }}>
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </div>
      </div>
      <Skeleton shape="rect" height={80} />
    </Card>
  ),
};

export const BreadcrumbTrail: Story = {
  render: () => (
    <Breadcrumb maxItems={3}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Docs</BreadcrumbItem>
      <BreadcrumbItem href="#">Components</BreadcrumbItem>
      <BreadcrumbItem href="#">Forms</BreadcrumbItem>
      <BreadcrumbItem current>Input</BreadcrumbItem>
    </Breadcrumb>
  ),
};
