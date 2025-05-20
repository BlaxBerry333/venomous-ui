import { type IsValidConnection as XYFlowIsValidConnection } from '@xyflow/react';
import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/_types/elements';
export default function useEdgeConnection<N extends WorkflowNode, E extends WorkflowEdge>(): {
    isValidConnection: XYFlowIsValidConnection;
};
