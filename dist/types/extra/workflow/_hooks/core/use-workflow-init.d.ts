import type { WorkflowPlaygroundProps } from '@packages/extra/workflow/WorkflowPlayground/WorkflowPlayground.types';
export default function useWorkflowInit({ originalElements, configs, }: Pick<WorkflowPlaygroundProps, 'originalElements' | 'configs'>): {
    configsMemorized: {
        hotkeys: {
            enabled: boolean;
            keys: {
                copy: string;
                paste: string;
                delete: string;
                undo: string;
                redo: string;
            };
        };
        canvas: {
            gridLayoutGap: number[];
            minZoom: number;
            maxZoom: number;
            zoomDuration: number;
        };
        styles: {
            nodeWidth: number;
            nodeHeight: number;
            edgeWidth: number;
            edgeType: import("../..").WorkflowEdgeType;
            edgeEndMarkerType: import("../..").WorkflowEdgeEndMarkerType;
            connectionLineType: import("../..").WorkflowEdgeConnectionLineType;
        };
    };
};
