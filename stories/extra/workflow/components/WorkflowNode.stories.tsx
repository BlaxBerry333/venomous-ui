import { default as ExampleComponents, INodeType } from './_examples';

const meta = {
  title: 'Extra/workflow/components/WorkflowNode',
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
        node={{
          id: '1',
          type: INodeType.BASE,
          position: { x: 200, y: 50 },
          data: { formValue: null },
        }}
      />
    );
  },
};

export const MultipleSourceNode = {
  name: 'MultipleSourceNode',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        node={{
          id: '1',
          type: INodeType.MULTIPLE_SOURCE,
          position: { x: 200, y: 50 },
          data: { formValue: null },
        }}
      />
    );
  },
};

export const MultipleTargetNode = {
  name: 'MultipleTargetNode',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        node={{
          id: '1',
          type: INodeType.MULTIPLE_TARGET,
          position: { x: 200, y: 50 },
          data: { formValue: null },
        }}
      />
    );
  },
};
