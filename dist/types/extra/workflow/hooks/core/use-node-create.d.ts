import { type DragEventHandler } from 'react';
import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useNodeCreate<N extends WorkflowNode, E extends WorkflowEdge>(): {
    onDragOver: DragEventHandler;
    onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
};
