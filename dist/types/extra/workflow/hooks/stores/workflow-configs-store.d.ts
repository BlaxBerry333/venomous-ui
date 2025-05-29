import { WorkflowEdgeConnectionLineType, WorkflowEdgeEndMarkerType } from '@packages/extra/workflow/types';
export type WorkflowConfigs = {
    logger: (type: 'success' | 'error' | 'info', message: string) => void;
    hotkeys: {
        keys: {
            copy: string;
            paste: string;
            delete: string;
            undo: string;
            redo: string;
        };
    };
    canvas: {
        isGridLayout: boolean;
        gridLayoutGap: [number, number];
        minZoom: number;
        maxZoom: number;
        zoomDuration: number;
        zoomStep: number;
    };
    styles: {
        nodeWidth: number;
        nodeMinHeight: number;
        nodeMaxHeight: number | 'auto';
        nodeColors: Record<string, string>;
        edgeWidth: number;
        edgeType: string;
        edgeEndMarkerType: WorkflowEdgeEndMarkerType;
        connectionLineType: WorkflowEdgeConnectionLineType;
        connectionPosition: {
            source: 'bottom' | 'left' | 'right';
            target: 'top' | 'left' | 'right';
        };
    };
    minimap: {
        enabled: boolean;
        position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    };
    undoRedo: {
        enabled: boolean;
        maxHistoryLength: number;
    };
};
export declare function _getWorkflowConfigsStoreStoreState(): WorkflowConfigs & {
    setHotkeys: (hotkeys: WorkflowConfigs["hotkeys"]) => void;
    setCanvas: (canvas: WorkflowConfigs["canvas"]) => void;
    setStyles: (styles: WorkflowConfigs["styles"]) => void;
    setMinimap: (minimap: WorkflowConfigs["minimap"]) => void;
    setUndoRedo: (undoRedo: WorkflowConfigs["undoRedo"]) => void;
};
export default function useWorkflowConfigs(): WorkflowConfigs & {
    setHotkeys: (hotkeys: WorkflowConfigs["hotkeys"]) => void;
    setCanvas: (canvas: WorkflowConfigs["canvas"]) => void;
    setStyles: (styles: WorkflowConfigs["styles"]) => void;
    setMinimap: (minimap: WorkflowConfigs["minimap"]) => void;
    setUndoRedo: (undoRedo: WorkflowConfigs["undoRedo"]) => void;
};
