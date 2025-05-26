import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowOriginalElements(): {
    nodes: WorkflowNode[];
    edges: WorkflowEdge[];
    setNodes: (nodes: WorkflowNode[]) => void;
    setEdges: (edges: WorkflowEdge[]) => void;
};
