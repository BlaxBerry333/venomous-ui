import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/_types/elements';
export default function useWorkflowOriginalElementsStore(): {
    nodes: WorkflowNode[];
    edges: WorkflowEdge[];
    setNodes: (nodes: WorkflowNode[]) => void;
    setEdges: (edges: WorkflowEdge[]) => void;
};
