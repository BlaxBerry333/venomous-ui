import type { WorkflowNode } from '@packages/extra/workflow/types';
export declare function getWorkflowCreatedNode(): WorkflowNode | null;
export declare function setWorkflowCreatedNode(node: Partial<WorkflowNode>): void;
export declare function clearWorkflowCreatedNode(): void;
export default function useWorkflowCreatedNode(): {
    node: null | Partial<WorkflowNode>;
    setNode: (node: Partial<WorkflowNode>) => void;
};
