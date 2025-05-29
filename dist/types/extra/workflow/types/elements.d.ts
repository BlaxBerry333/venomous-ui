import { type Edge as XYFlowEdge, type EdgeProps as XYFlowEdgeProps, type Node as XYFlowNode, type NodeProps as XYFlowNodeProps } from '@xyflow/react';
export type WorkflowElements<N extends WorkflowNode = WorkflowNode, E extends WorkflowEdge = WorkflowEdge> = {
    nodes: Array<N>;
    edges: Array<E>;
};
/**
 * Node
 */
export type WorkflowNode<NodeType extends string = string, NodeFormValue extends WorkflowNodeFormValue = WorkflowNodeFormValue> = XYFlowNode<WorkflowNodeData<NodeFormValue>, NodeType>;
/**
 * Node Type ( Default )
 */
export declare enum WorkflowNodeTypeDefault {
    Base = "Base",
    Group = "Group"
}
/**
 * Node Data
 */
export type WorkflowNodeData<NodeFormValue extends WorkflowNodeFormValue = WorkflowNodeFormValue> = Partial<{
    formValue: NodeFormValue;
    isMultipleSourceHandler: boolean;
    isMultipleTargetHandler: boolean;
    isInValid: boolean;
    isProtected: boolean;
    isFocus: boolean;
    isIntersecting: boolean;
}>;
/**
 * Node Form Value
 */
type WorkflowNodeFormValue = Record<string, any> | null;
/**
 * Node Component Props
 */
export type WorkflowNodeComponentProps<N extends WorkflowNode = WorkflowNode> = React.PropsWithChildren<XYFlowNodeProps<N>>;
/**
 * Node Component Map Type
 */
export type WorkflowNodeComponent<N extends WorkflowNode = WorkflowNode> = Record<NonNullable<N['type']>, React.NamedExoticComponent<WorkflowNodeComponentProps<N>>>;
/**
 * Edge
 */
export type WorkflowEdge<EdgeType extends string = string> = XYFlowEdge<WorkflowEdgeData, EdgeType>;
/**
 * Edge Data
 */
export type WorkflowEdgeData = Record<string, unknown> & Partial<{
    isAnimated: boolean;
}>;
/**
 * Edge Type ( Default )
 */
export declare enum WorkflowEdgeTypeDefault {
    Base = "Base",
    DeleteLabel = "DeleteLabel"
}
/**
 * Edge Component Type
 */
export type WorkflowEdgeComponentProps<E extends WorkflowEdge = WorkflowEdge> = XYFlowEdgeProps<E>;
/**
 * Edge Component Type
 */
export type WorkflowEdgeComponentType<E extends WorkflowEdge = WorkflowEdge> = Record<NonNullable<E['type']>, React.NamedExoticComponent<WorkflowEdgeComponentProps<E>>>;
/**
 * Edge End Marker Type
 */
export declare enum WorkflowEdgeEndMarkerType {
    Arrow = "arrow",
    ArrowClosed = "arrowclosed"
}
/**
 * Edge Connection Line Type
 */
export declare enum WorkflowEdgeConnectionLineType {
    Bezier = "default",
    SimpleBezier = "simplebezier",
    Step = "step",
    SmoothStep = "smoothstep",
    Straight = "straight"
}
export {};
