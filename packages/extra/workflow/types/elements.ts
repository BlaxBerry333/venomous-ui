import {
  type Edge as XYFlowEdge,
  type EdgeProps as XYFlowEdgeProps,
  type Node as XYFlowNode,
  type NodeProps as XYFlowNodeProps,
  ConnectionLineType as XYFlowConnectionLineType,
  MarkerType as XYFlowMarkerType,
} from '@xyflow/react';

export type WorkflowElements<
  N extends WorkflowNode = WorkflowNode,
  E extends WorkflowEdge = WorkflowEdge,
> = {
  nodes: Array<N>;
  edges: Array<E>;
};

/**
 * Node
 */
export type WorkflowNode<
  NodeType extends string = string,
  NodeFormValue extends WorkflowNodeFormValue = WorkflowNodeFormValue,
> = XYFlowNode<WorkflowNodeData<NodeFormValue>, NodeType>;

/**
 * Node Type ( Default )
 */
export enum WorkflowNodeTypeDefault {
  Base = 'Base',
  Group = 'Group',
}

/**
 * Node Data
 */
export type WorkflowNodeData<NodeFormValue extends WorkflowNodeFormValue = WorkflowNodeFormValue> =
  Partial<{
    formValue: NodeFormValue;
    isMultipleSourceHandler: boolean; // 是否允许多个源 Node
    isMultipleTargetHandler: boolean; // 是否允许多个目标 Node
    isInValid: boolean; // 是否无效
    isProtected: boolean; // 是否保护
    isFocus: boolean; // 是否聚焦
    isIntersecting: boolean; // 是否与其他 Node 相交
  }>;

/**
 * Node Form Value
 */
type WorkflowNodeFormValue = Record<string, any> | null; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * Node Component Props
 */
export type WorkflowNodeComponentProps<N extends WorkflowNode = WorkflowNode> =
  React.PropsWithChildren<XYFlowNodeProps<N>>;

/**
 * Node Component Map Type
 */
export type WorkflowNodeComponent<N extends WorkflowNode = WorkflowNode> = Record<
  NonNullable<N['type']>,
  React.NamedExoticComponent<WorkflowNodeComponentProps<N>>
>;

/**
 * Edge
 */
export type WorkflowEdge<EdgeType extends string = string> = XYFlowEdge<WorkflowEdgeData, EdgeType>;

/**
 * Edge Data
 */
export type WorkflowEdgeData = Record<string, unknown> &
  Partial<{
    isAnimated: boolean; // 是否启用动画
  }>;

/**
 * Edge Type ( Default )
 */
export enum WorkflowEdgeTypeDefault {
  Base = 'Base',
  DeleteLabel = 'DeleteLabel',
}

/**
 * Edge Component Type
 */
export type WorkflowEdgeComponentProps<E extends WorkflowEdge = WorkflowEdge> = XYFlowEdgeProps<E>;

/**
 * Edge Component Type
 */
export type WorkflowEdgeComponentType<E extends WorkflowEdge = WorkflowEdge> = Record<
  NonNullable<E['type']>,
  React.NamedExoticComponent<WorkflowEdgeComponentProps<E>>
>;

/**
 * Edge End Marker Type
 */
export enum WorkflowEdgeEndMarkerType {
  Arrow = XYFlowMarkerType.Arrow,
  ArrowClosed = XYFlowMarkerType.ArrowClosed,
}
/**
 * Edge Connection Line Type
 */
export enum WorkflowEdgeConnectionLineType {
  Bezier = XYFlowConnectionLineType.Bezier,
  SimpleBezier = XYFlowConnectionLineType.SimpleBezier,
  Step = XYFlowConnectionLineType.Step,
  SmoothStep = XYFlowConnectionLineType.SmoothStep,
  Straight = XYFlowConnectionLineType.Straight,
}
