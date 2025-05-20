import type { ReactFlowProps } from '@xyflow/react';
import type { NamedExoticComponent, ReactNode } from 'react';
import type { WorkflowEdgeConnectionLineType, WorkflowEdgeEndMarkerType, WorkflowEdgeType, WorkflowElements } from '../_types/elements';
export interface WorkflowPlaygroundProps extends ReactFlowProps {
    children?: ReactNode;
    originalElements: WorkflowElements;
    configs?: WorkflowWrapperConfigs;
}
export type WorkflowWrapperConfigs = Partial<{
    hotkeys?: Partial<{
        enabled?: boolean;
        keys: {
            copy: string;
            paste: string;
            delete: string;
            undo: string;
            redo: string;
        };
    }>;
    canvas?: Partial<{
        gridLayoutGap?: [number, number];
        minZoom?: number;
        maxZoom?: number;
        zoomDuration?: number;
    }>;
    styles?: Partial<{
        nodeWidth?: number;
        nodeHeight?: number;
        edgeWidth?: number;
        edgeType?: WorkflowEdgeType;
        edgeEndMarkerType?: WorkflowEdgeEndMarkerType;
        connectionLineType?: WorkflowEdgeConnectionLineType;
    }>;
}>;
export type WorkflowPlaygroundComponentType = NamedExoticComponent<WorkflowPlaygroundProps>;
