import { default as ExampleComponents, INodeType } from '../_examples';

const meta = {
  title: 'Extra/Workflow/components/WorkflowNodes',
  component: undefined,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
};

export default meta;

export const BaseNode = {
  name: 'BaseNode',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        nodes={[
          {
            id: '1',
            type: INodeType.BASE,
            position: { x: 200, y: 50 },
            data: { formValue: null },
          },
          {
            id: '2',
            type: INodeType.BASE,
            position: { x: 500, y: 50 },
            data: { formValue: null },
          },
        ]}
      />
    );
  },
};

export const GroupNode = {
  name: 'GroupNode',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        style={{ height: '600px' }}
        nodes={[
          {
            id: '1',
            type: INodeType.GROUP,
            position: { x: 50, y: 50 },
            data: { formValue: null },
          },
          {
            id: '2',
            type: INodeType.GROUP,
            position: { x: 500, y: 500 },
            data: { formValue: null },
          },
          {
            id: '3',
            type: INodeType.BASE,
            position: { x: 500, y: 50 },
            data: { formValue: null },
            // parentId: '1',
          },
          {
            id: '4',
            type: INodeType.BASE,
            position: { x: 600, y: 200 },
            data: { formValue: null },
            // parentId: '2',
          },
        ]}
      />
    );
  },
};

export const MultipleSourceNode = {
  name: 'MultipleSourceNode',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        nodes={[
          {
            id: '1',
            type: INodeType.MULTIPLE_SOURCE,
            position: { x: 200, y: 50 },
            data: { formValue: null },
          },
          {
            id: '2',
            type: INodeType.MULTIPLE_SOURCE,
            position: { x: 500, y: 50 },
            data: { formValue: null },
          },
        ]}
      />
    );
  },
};

export const MultipleTargetNode = {
  name: 'MultipleTargetNode',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        nodes={[
          {
            id: '1',
            type: INodeType.MULTIPLE_TARGET,
            position: { x: 200, y: 50 },
            data: { formValue: null },
          },
          {
            id: '2',
            type: INodeType.MULTIPLE_TARGET,
            position: { x: 500, y: 50 },
            data: { formValue: null },
          },
        ]}
      />
    );
  },
};
