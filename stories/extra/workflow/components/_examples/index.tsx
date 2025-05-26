import { memo, type PropsWithChildren } from 'react';

import {
  WorkflowBaseNode,
  WorkflowBaseNodeHandlerItem,
  WorkflowPlayground,
  WorkflowWrapper,
  type WorkflowNode,
  type WorkflowNodeComponent,
  type WorkflowNodeComponentProps,
} from '@packages/extra';

export enum INodeType {
  BASE = 'BASE',
  MULTIPLE_SOURCE = 'MULTIPLE_SOURCE',
  MULTIPLE_TARGET = 'MULTIPLE_TARGET',
}

export type INode = WorkflowNode<INodeType, null>;

// eslint-disable-next-line react-refresh/only-export-components
const BaseNodeComponent = memo<WorkflowNodeComponentProps<INode>>((props) => {
  return <WorkflowBaseNode {...props}>BaseNode #{props.id}</WorkflowBaseNode>;
});

// eslint-disable-next-line react-refresh/only-export-components
const MultipleSourceNodeComponent = memo(
  ({ id: nodeId, data: nodeData, ...props }: WorkflowNodeComponentProps<INode>) => {
    const MOCK_ITEMS = Array(3).fill(0);
    return (
      <WorkflowBaseNode
        id={nodeId}
        data={{ ...nodeData, isMultipleSourceHandler: true }}
        {...props}
      >
        MultipleSourceNode #{nodeId}
        <div style={{ marginTop: 8 }}>
          {MOCK_ITEMS.map((_, index) => {
            const MOCKID = `${nodeId}--${index + 1}`;
            return (
              <WorkflowBaseNodeHandlerItem
                key={MOCKID}
                id={MOCKID}
                handlerType="source"
                handlerStyle={{ transform: 'translateX(-11px)' }}
              >
                {`#${MOCKID}`}
              </WorkflowBaseNodeHandlerItem>
            );
          })}
        </div>
      </WorkflowBaseNode>
    );
  },
);

// eslint-disable-next-line react-refresh/only-export-components
const MultipleTargetNodeComponent = memo(
  ({ id: nodeId, data: nodeData, ...props }: WorkflowNodeComponentProps<INode>) => {
    const MOCK_ITEMS = Array(3).fill(0);
    return (
      <WorkflowBaseNode
        id={nodeId}
        data={{ ...nodeData, isMultipleTargetHandler: true }}
        {...props}
      >
        MultipleTargetNode #{nodeId}
        <div style={{ marginTop: 8 }}>
          {MOCK_ITEMS.map((_, index) => {
            const MOCKID = `${nodeId}--${index + 1}`;
            return (
              <WorkflowBaseNodeHandlerItem
                key={MOCKID}
                id={MOCKID}
                handlerType="target"
                handlerStyle={{ transform: 'translateX(-22px)' }}
              >
                {`#${MOCKID}`}
              </WorkflowBaseNodeHandlerItem>
            );
          })}
        </div>
      </WorkflowBaseNode>
    );
  },
);

export const NodeComponents: WorkflowNodeComponent<INode> = {
  [INodeType.BASE]: BaseNodeComponent,
  [INodeType.MULTIPLE_SOURCE]: MultipleSourceNodeComponent,
  [INodeType.MULTIPLE_TARGET]: MultipleTargetNodeComponent,
};

// eslint-disable-next-line react-refresh/only-export-components
const PlaygroundComponent = memo((props: PropsWithChildren<{ node: INode }>) => {
  return (
    <WorkflowWrapper>
      <WorkflowPlayground
        sx={{ width: '100%', height: '250px', p: 0 }}
        nodeTypes={NodeComponents}
        originalElements={{
          nodes: [props.node],
          edges: [],
        }}
        configs={{
          minimap: {
            enabled: false,
          },
        }}
      >
        {props.children}
      </WorkflowPlayground>
    </WorkflowWrapper>
  );
});

export default {
  PlaygroundComponent,
  BaseNodeComponent,
  MultipleSourceNodeComponent,
  MultipleTargetNodeComponent,
};
