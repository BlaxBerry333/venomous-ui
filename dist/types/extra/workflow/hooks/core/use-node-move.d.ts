import type { OnNodeDrag, WorkflowNode } from '@packages/extra/workflow/types';
export default function useNodeMove<N extends WorkflowNode>(): {
    onNodeMoveStart: OnNodeDrag<N>;
    onNodeMoveStop: OnNodeDrag<N>;
};
