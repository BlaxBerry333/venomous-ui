import type { WorkflowElements } from '@packages/extra/workflow/types';
export declare enum WorkflowAction {
    Init = "Init",
    Reset = "Reset",
    CanvasBlankClicked = "CanvasBlankClicked",
    SaveVersionChanged = "SaveVersionChanged",
    ElementsFileUploaded = "ElementsFileUploaded",
    ElementsFileDownloaded = "ElementsFileDownloaded",
    ElementsSelected = "ElementsSelected",
    ElementsDeleted = "ElementsDeleted",
    ElementsCopied = "ElementsCopied",
    ElementsPasted = "ElementsPasted",
    ElementsCut = "ElementsCut",
    NodeCreated = "NodeCreated",
    NodeDeleted = "NodeDeleted",
    NodesDeleted = "NodesDeleted",
    NodeMoved = "NodeMoved",
    NodeResized = "NodeResized",
    EdgeDeleted = "EdgeDeleted",
    EdgesDeleted = "EdgesDeleted",
    Connected = "Connected",
    ReConnected = "ReConnected"
}
export interface WorkflowActionHistory {
    action: null | WorkflowAction;
    timestamp: number;
    elements: WorkflowElements;
}
export declare function useWorkflowActionsHistoryStoreCleanup(): null;
export declare function useWorkflowActionsHistoryStates(): {
    currentStates: WorkflowActionHistory;
    pastStates: {
        action?: WorkflowAction | null | undefined;
        timestamp?: number | undefined;
        elements?: WorkflowElements | undefined;
    }[];
    futureStates: {
        action?: WorkflowAction | null | undefined;
        timestamp?: number | undefined;
        elements?: WorkflowElements | undefined;
    }[];
};
export declare function useWorkflowActionsHistoryUndoRedo(): {
    undo: VoidFunction;
    redo: VoidFunction;
    canUndo: boolean;
    canRedo: boolean;
};
export declare function useWorkflowActionsHistoryUpdate(): {
    updateActionsHistory: (action: WorkflowAction) => void;
};
