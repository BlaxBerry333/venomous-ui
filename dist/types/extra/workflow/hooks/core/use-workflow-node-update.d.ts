import { type WorkflowEdge, type WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowNodeUpdate<N extends WorkflowNode, E extends WorkflowEdge>(): {
    updateSpecificNode: (id: string, node: Partial<N>) => void;
    updateSpecificNodeData: (id: string, nodeData: Partial<N["data"]>) => void;
    updateSpecificNodeFormValue: (id: string, formValue: N["data"]["formValue"]) => void;
    updateNodeMovingAroundGroupNode: (node: N) => void;
};
