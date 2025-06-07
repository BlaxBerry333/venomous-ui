import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '@packages/common';
import {
  WorkflowEdgeTypeDefault,
  WorkflowPlayground,
  WorkflowToolbarPanel,
  WorkflowWrapper,
} from '@packages/extra';
import Examples, { INodeType, type INode } from '../_examples';

const meta = {
  title: 'Extra/Workflow/components/WorkflowPlayground',
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
        id: '1749132290000',
        type: INodeType.GROUP,
        position: { x: 600, y: 200 },
        data: { formValue: null },
      },
      {
        id: '1749132290001',
        type: INodeType.BASE,
        position: { x: 100, y: 100 },
        data: { formValue: null },
      },
      {
        id: '1749132290002',
        type: INodeType.BASE,
        position: { x: 0, y: 300 },
        data: { formValue: null },
      },
      {
        id: '1749132290003',
        type: INodeType.MULTIPLE_SOURCE,
        position: { x: 300, y: 300 },
        data: { formValue: null },
      },
      {
        id: '1749132290004',
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
        type: WorkflowEdgeTypeDefault.DeleteLabel,
      },
      {
        id: '3--2__4--2',
        source: '3',
        sourceHandle: '3--2',
        target: '4',
        targetHandle: '4--2',
        type: WorkflowEdgeTypeDefault.DeleteLabel,
      },
    ];

    return (
      <WorkflowWrapper>
        <WorkflowPlayground
          sx={{ width: '100%', height: '600px', p: 0 }}
          nodeTypes={Examples.NodeComponents}
          originalElements={{
            nodes: MOCK_NODES,
            edges: MOCK_EDGES,
          }}
          configs={{
            logger: (type: string, message: string) => {
              alert(`[${type}] ${message}`);
            },
            styles: {
              nodeWidth: 250,
              nodeMinHeight: 100,
              nodeMaxHeight: 'auto',
              nodeColors: {
                [INodeType.BASE]: '#ebdb34',
                [INodeType.MULTIPLE_SOURCE]: '#34aeeb',
                [INodeType.MULTIPLE_TARGET]: '#42f598',
              },
              edgeType: WorkflowEdgeTypeDefault.DeleteLabel,
              connectionPosition: {
                source: 'right',
                target: 'left',
              },
            },
            minimap: {
              enabled: true,
              position: 'bottom-left',
              width: 150,
            },
            undoRedo: {
              enabled: true,
              position: 'bottom-left',
              maxHistoryLength: 10,
              tooltips: {
                undo: 'Undo',
                redo: 'Redo',
                history: 'Undo/Redo History',
              },
            },
          }}
        >
          <WorkflowToolbarPanel position="top-left" isPaper={false}>
            <Text textColor="disabled" text="Sample Workflow" />
          </WorkflowToolbarPanel>
          <WorkflowToolbarPanel position="top-right">
            <Examples.SaveButton />
          </WorkflowToolbarPanel>
          <Examples.NodePanel position="bottom-right" />
        </WorkflowPlayground>

        <Examples.DraggableSiderBar />
      </WorkflowWrapper>
    );
  },
};
