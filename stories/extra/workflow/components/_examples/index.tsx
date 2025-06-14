import { memo, useCallback, type CSSProperties, type PropsWithChildren } from 'react';

import { Button, Card, Flex } from '@packages/common';
import {
  generateNewNodeToStore,
  useWorkflowConfigs,
  useWorkflowInstance,
  WorkflowBaseNode,
  WorkflowBaseNodeHandlerItem,
  WorkflowGroupNode,
  WorkflowNodeDataFormValuePanel,
  WorkflowNodeTypeDefault,
  WorkflowPlayground,
  WorkflowWrapper,
  type NodeDataFormValuePanelProps,
  type WorkflowNode,
  type WorkflowNodeComponent,
  type WorkflowNodeComponentProps,
} from '@packages/extra';

export enum INodeType {
  BASE = WorkflowNodeTypeDefault.Base,
  GROUP = WorkflowNodeTypeDefault.Group,
  MULTIPLE_SOURCE = 'MultipleSource',
  MULTIPLE_TARGET = 'MultipleTarget',
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type INode = WorkflowNode<INodeType, any>;

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
                style={{ transform: 'translateX(-16px)' }}
                handlerStyle={{ transform: 'translate(-11px, -6px)' }}
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
                style={{ transform: 'translateX(-16px)' }}
                handlerStyle={{ transform: 'translate(-23px, -6px)' }}
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

// eslint-disable-next-line react-refresh/only-export-components
const DraggableSiderBar = memo(() => {
  const configs = useWorkflowConfigs();
  const onDragToGenerateNewNode = useCallback(
    (event: React.DragEvent<HTMLDivElement>, nodeType: WorkflowNode['type']) => {
      event.dataTransfer.effectAllowed = 'move';
      generateNewNodeToStore({
        type: nodeType,
        data: {
          isInValid: nodeType === INodeType.GROUP ? false : true,
          formValue: null,
        },
      });
    },
    [],
  );
  return (
    <Flex row py={1}>
      {Object.keys(NodeComponents).map((nodeType) => (
        <div
          key={nodeType}
          draggable
          onDragStart={(event) => onDragToGenerateNewNode(event, nodeType)}
        >
          <Card
            sx={{
              cursor: 'grab',
              border: ({ palette }) =>
                `2px solid ${configs.styles.nodeColors?.[nodeType] || palette.primary.main}`,
            }}
          >{`${nodeType} Node`}</Card>
        </div>
      ))}
    </Flex>
  );
});

// eslint-disable-next-line react-refresh/only-export-components
const SaveButton = memo(() => {
  const { getNodes, getEdges } = useWorkflowInstance();
  return (
    <Button
      icon="ic:round-save"
      iconWidth={24}
      iconPosition="start"
      text="Save"
      onClick={() => {
        console.log({
          nodes: getNodes(),
          edges: getEdges(),
        });
      }}
    />
  );
});

// eslint-disable-next-line react-refresh/only-export-components
const NodePanel = memo<NodeDataFormValuePanelProps>(
  ({ position = 'bottom-right', style, ...props }) => {
    return (
      <WorkflowNodeDataFormValuePanel
        position={position}
        style={{
          height: 'calc(100% - 80px)',
          width: 300,
          ...style,
        }}
        {...props}
      />
    );
  },
);

export default {
  NodeComponents,
  PlaygroundComponent,
  DraggableSiderBar,
  SaveButton,
  NodePanel,
  BaseNodeComponent,
  MultipleSourceNodeComponent,
  MultipleTargetNodeComponent,
};
