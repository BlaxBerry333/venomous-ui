import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useWorkflowCanvasViewport<N extends WorkflowNode, E extends WorkflowEdge>(): {
    currentViewport: import("@xyflow/system").Viewport;
    increaseZoom: () => Promise<void>;
    decreaseZoom: () => Promise<void>;
    setZoom: (zoomLevelValue: number, immediate?: boolean) => Promise<void>;
    autoView: (immediate?: boolean) => Promise<void>;
};
