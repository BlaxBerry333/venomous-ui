import type { Meta, StoryObj } from '@storybook/react';

import {
  WorkflowDevtool,
  WorkflowEdgeType,
  WorkflowPlayground,
  WorkflowWrapper,
} from '@packages/extra';
import { INodeType, NodeComponents, type INode } from './_examples';

const meta = {
  title: 'Extra/workflow/components/WorkflowPlayground',
  component: WorkflowPlayground,
  parameters: { layout: 'centered' },
  tags: ['!autodocs', '!dev'],
  argTypes: {
    originalElements: {
      description: 'Original nodes and edges',
      control: false,
      table: {
        type: { summary: 'WorkflowElements' },
        defaultValue: { summary: 'undefined' },
      },
    },
    nodeTypes: {
      description:
        'A key-value object of the type of `Node` and the corresponding custom component memorized by `React.memo()`',
      control: false,
      table: {
        type: { summary: 'WorkflowNodeComponent' },
        defaultValue: { summary: 'undefined' },
      },
    },
    configs: {
      description: 'The configuration of the WorkflowPlayground',
      control: false,
      table: {
        type: { summary: 'WorkflowConfigs' },
        defaultValue: { summary: 'undefined' },
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
        type: INodeType.BASE,
        position: { x: 100, y: 100 },
        data: { formValue: null },
      },
      {
        id: '2',
        type: INodeType.BASE,
        position: { x: 0, y: 300 },
        data: { formValue: null },
      },
      {
        id: '3',
        type: INodeType.MULTIPLE_SOURCE,
        position: { x: 300, y: 300 },
        data: { formValue: null },
      },
      {
        id: '4',
        type: INodeType.MULTIPLE_TARGET,
        position: { x: 300, y: 500 },
        data: { formValue: null },
      },
    ];
    const MOCK_EDGES = [
      {
        id: '1__2',
        source: '1',
        target: '2',
        type: WorkflowEdgeType.DeleteLabel,
      },
      {
        id: '3--2__4--2',
        source: '3',
        sourceHandle: '3--2',
        target: '4',
        targetHandle: '4--2',
        type: WorkflowEdgeType.DeleteLabel,
      },
    ];

    return (
      <WorkflowWrapper>
        <WorkflowPlayground
          sx={{ width: '100%', height: '500px', p: 0 }}
          nodeTypes={NodeComponents}
          originalElements={{
            nodes: MOCK_NODES,
            edges: MOCK_EDGES,
          }}
          configs={{
            styles: {
              nodeWidth: 250,
              nodeMinHeight: 100,
              nodeMaxHeight: 'auto',
              nodeColors: {
                [INodeType.BASE]: '#ebdb34',
                [INodeType.MULTIPLE_SOURCE]: '#34aeeb',
                [INodeType.MULTIPLE_TARGET]: '#42f598',
              },
              edgeType: WorkflowEdgeType.DeleteLabel,
              connectionPosition: {
                source: 'right',
                target: 'left',
              },
            },
            minimap: {
              enabled: true,
              position: 'bottom-left',
            },
          }}
        >
          <WorkflowDevtool />
        </WorkflowPlayground>
      </WorkflowWrapper>
    );
  },
};
