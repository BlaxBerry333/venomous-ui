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
  NodeFormValue extends WorkflowNodeFormValue = WorkflowNodeFormValue,
  NodeType extends string = string,
> = XYFlowNode<WorkflowNodeData<NodeFormValue>, NodeType>;

/**
 * Node Data
 */
export type WorkflowNodeData<NodeFormValue extends WorkflowNodeFormValue = WorkflowNodeFormValue> =
  Partial<{
    formValue: NodeFormValue;
  }>;

/**
 * Node Form Value
 */
type WorkflowNodeFormValue = Record<string, any> | null; // eslint-disable-line @typescript-eslint/no-explicit-any

/**
 * Node Component Props
 */
export type WorkflowNodeComponentProps<N extends WorkflowNode = WorkflowNode> = XYFlowNodeProps<N>;

/**
 * Node Component Type
 */
export type WorkflowNodeComponentType<N extends WorkflowNode = WorkflowNode> = {
  [key in NonNullable<N['type']>]: React.NamedExoticComponent<WorkflowNodeComponentProps<N>>;
};

/**
 * Edge
 */
export type WorkflowEdge = XYFlowEdge<WorkflowEdgeData, WorkflowEdgeType>;

/**
 * Edge Data
 */
export type WorkflowEdgeData = Partial<{
  animated: boolean; // 是否启用动画
}>;

/**
 * Edge Type
 */
export enum WorkflowEdgeType {
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
  WorkflowEdgeType,
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
