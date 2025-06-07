import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowNodeJump<N extends WorkflowNode, E extends WorkflowEdge>(): {
    jumpToSpecificNode: (nodeId: string, { x, y }: N["position"]) => Promise<void>;
};
