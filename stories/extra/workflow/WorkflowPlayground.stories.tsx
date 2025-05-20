import type { Meta, StoryObj } from '@storybook/react';
import { memo } from 'react';

import { Paper } from '@packages/common';
import {
  WorkflowBaseNode,
  WorkflowEdgeType,
  WorkflowPlayground,
  WorkflowWrapper,
  type WorkflowNode,
  type WorkflowNodeComponentProps,
  type WorkflowNodeComponentType,
} from '@packages/extra';

const meta = {
  title: 'Extra Components/Workflow/WorkflowPlayground',
  component: WorkflowPlayground,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    originalElements: {
      description: 'Original nodes and edges',
      table: {
        type: { summary: 'WorkflowElements' },
        defaultValue: { summary: '{nodes: [], edges: []}' },
      },
    },
  },
  args: {
    originalElements: {
      nodes: [],
      edges: [],
    },
  },
} satisfies Meta<typeof WorkflowPlayground>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: function RenderStory() {
    const MOCK_NODES: INode[] = [
      {
        id: '1',
        type: INodeType.START,
        position: { x: 100, y: 100 },
        data: { formValue: null },
      },
      {
        id: '2',
        type: INodeType.TASK,
        position: { x: 200, y: 300 },
        data: { formValue: { title: 'Task', description: 'Task' } },
      },
    ];

    return (
      <WorkflowWrapper>
        <Paper isOutlined sx={{ width: '100%', height: '500px', p: 0 }}>
          <WorkflowPlayground
            nodeTypes={SupportedNodeTypes}
            originalElements={{
              nodes: MOCK_NODES,
              edges: [],
            }}
            configs={{
              styles: {
                edgeType: WorkflowEdgeType.DeleteLabel,
              },
            }}
          />
        </Paper>
      </WorkflowWrapper>
    );
  },
};

type IStartNodeFormValue = null;
type ITaskNodeFormValue = { title: string; description: string };
type INodeFormValue = IStartNodeFormValue | ITaskNodeFormValue;

enum INodeType {
  START = 'START',
  TASK = 'TASK',
}
type INode = WorkflowNode<INodeFormValue, INodeType>;

const StartNodeComponent = memo((props: WorkflowNodeComponentProps<INode>) => {
  return <WorkflowBaseNode {...props}>Start</WorkflowBaseNode>;
});

const TaskNodeComponent = memo((props: WorkflowNodeComponentProps<INode>) => {
  return <WorkflowBaseNode {...props}>Task Node xxxxxxxxxxx</WorkflowBaseNode>;
});

const SupportedNodeTypes: WorkflowNodeComponentType<INode> = {
  // ["placeholder"]: memo(() => null),
  [INodeType.START]: StartNodeComponent,
  [INodeType.TASK]: TaskNodeComponent,
};
