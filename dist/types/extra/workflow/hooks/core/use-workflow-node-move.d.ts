import type { OnNodeDrag, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowNodeMove<N extends WorkflowNode>(): {
    onNodeMoveStart: OnNodeDrag<N>;
    onNodeMoveStop: OnNodeDrag<N>;
};
