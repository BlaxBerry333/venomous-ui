import { type DragEventHandler } from 'react';
import { type WorkflowEdge, type WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowNodeCreate<N extends WorkflowNode, E extends WorkflowEdge>(): {
    onDragOver: DragEventHandler;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
};
