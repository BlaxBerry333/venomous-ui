import { default as ExampleComponents, INodeType } from '../_examples';

const meta = {
  title: 'Extra/Workflow/components/WorkflowNodeDataFormValuePanel',
  component: undefined,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
};

export default meta;

export const Default = {
  name: 'Default',
  render: function RenderStory() {
    return (
      <ExampleComponents.PlaygroundComponent
        style={{
          height: 500,
        }}
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
            data: {
              formValue: {
                title: 'I have a title',
              },
            },
          },
        ]}
      >
        <ExampleComponents.NodePanel
          renderContent={(node) => (
            <>
              <p>Only show when the node selected has formValue</p>
              <p>#{node.id}</p>
              <pre>{JSON.stringify(node.data.formValue, null)}</pre>
            </>
          )}
        />
      </ExampleComponents.PlaygroundComponent>
    );
  },
};
