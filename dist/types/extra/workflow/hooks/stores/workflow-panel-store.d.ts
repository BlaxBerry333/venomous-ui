import type { WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowPanel(): {
    selectedNodeId: WorkflowNode["id"] | null;
    setSelectedNodeId: (selectedNodeId: WorkflowNode["id"]) => void;
    clear: () => void;
};
