import { memo, type CSSProperties, type PropsWithChildren } from 'react';

import {
  WorkflowBaseNode,
  WorkflowBaseNodeHandlerItem,
  WorkflowGroupNode,
  WorkflowNodeTypeDefault,
  WorkflowPlayground,
  WorkflowWrapper,
  type WorkflowNode,
  type WorkflowNodeComponent,
  type WorkflowNodeComponentProps,
} from '@packages/extra';

export enum INodeType {
  BASE = WorkflowNodeTypeDefault.Base,
  GROUP = WorkflowNodeTypeDefault.Group,
  MULTIPLE_SOURCE = 'MULTIPLE_SOURCE',
  MULTIPLE_TARGET = 'MULTIPLE_TARGET',
}

export type INode = WorkflowNode<INodeType, null>;

// eslint-disable-next-line react-refresh/only-export-components
const BaseNodeComponent = memo<WorkflowNodeComponentProps<INode>>((props) => {
  return <WorkflowBaseNode {...props}>BaseNode #{props.id}</WorkflowBaseNode>;
});

// eslint-disable-next-line react-refresh/only-export-components
const GroupNodeComponent = memo<WorkflowNodeComponentProps<INode>>((props) => {
  return <WorkflowGroupNode {...props}>GroupNode #{props.id}</WorkflowGroupNode>;
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
                handlerPosition="right"
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
                handlerPosition="left"
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

const NodeComponents: WorkflowNodeComponent<INode> = {
  [INodeType.BASE]: BaseNodeComponent,
  [INodeType.GROUP]: GroupNodeComponent,
  [INodeType.MULTIPLE_SOURCE]: MultipleSourceNodeComponent,
  [INodeType.MULTIPLE_TARGET]: MultipleTargetNodeComponent,
};

// eslint-disable-next-line react-refresh/only-export-components
const PlaygroundComponent = memo<PropsWithChildren<{ nodes: INode[]; style?: CSSProperties }>>(
  (props) => {
    return (
      <WorkflowWrapper>
        <WorkflowPlayground
          sx={{ width: '100%', height: '250px', p: 0, ...props.style }}
          nodeTypes={NodeComponents}
          originalElements={{
            nodes: props.nodes,
            edges: [],
          }}
          configs={{
            logger: (type: string, message: string) => {
              alert(`[${type}] ${message}`);
            },
            minimap: { enabled: false },
            undoRedo: { enabled: false },
            styles: {
              // connectionPosition:{
              //   source: 'bottom',
              //   target: 'top',
              // }
            },
          }}
        >
          {props.children}
        </WorkflowPlayground>
      </WorkflowWrapper>
    );
  },
);

export default {
  NodeComponents,
  PlaygroundComponent,
  BaseNodeComponent,
  MultipleSourceNodeComponent,
  MultipleTargetNodeComponent,
};
