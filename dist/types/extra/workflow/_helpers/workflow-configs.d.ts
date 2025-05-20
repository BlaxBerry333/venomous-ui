import type { ToolTypes } from '@packages/helpers/tool-types';
import { WorkflowEdgeConnectionLineType, WorkflowEdgeEndMarkerType, WorkflowEdgeType } from '../_types/elements';
import type { WorkflowWrapperConfigs } from '../WorkflowPlayground/WorkflowPlayground.types';
export type IWorkflowConfigsContextValue = ToolTypes.DeepRequired<WorkflowWrapperConfigs>;
export declare const WORKFLOW_CONFIGS: IWorkflowConfigsContextValue;
export declare const WorkflowConfigContext: import("react").Context<{
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
        edgeType: WorkflowEdgeType;
        edgeEndMarkerType: WorkflowEdgeEndMarkerType;
        connectionLineType: WorkflowEdgeConnectionLineType;
    };
}>;
