import type { WorkflowEdge, WorkflowElements, WorkflowNode } from '@packages/extra/workflow/_types/elements';
export default function useElements<N extends WorkflowNode, E extends WorkflowEdge>(): {
    getElements: () => {
        nodes: {
            id: string;
            type: string | undefined;
            position: import("@xyflow/system").XYPosition;
            data: Partial<{
                formValue: Record<string, any> | null;
            }>;
        }[];
        edges: {
            id: string;
            type: import("@packages/extra/workflow/_types/elements").WorkflowEdgeType | undefined;
            source: string;
            target: string;
            sourceHandle: string | null | undefined;
            targetHandle: string | null | undefined;
        }[];
    };
    setElements: ({ nodes, edges }: WorkflowElements<N, E>) => void;
    resetElements: () => void;
};
