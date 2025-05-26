import { type OnReconnect } from '@xyflow/react';
import type { OnReconnectEnd, OnReconnectStart, WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowEdgeReConnection<N extends WorkflowNode, E extends WorkflowEdge>(): {
    onReconnect: OnReconnect;
    onReconnectStart: OnReconnectStart;
    onReconnectEnd: OnReconnectEnd;
};
