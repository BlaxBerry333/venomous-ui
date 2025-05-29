import { temporal } from 'zundo';
import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WorkflowElements } from '@packages/extra/workflow/types';
import { debounce, isEqual } from 'es-toolkit';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import useWorkflowInstance from '../core/use-workflow-instance';
import { _getWorkflowConfigsStoreStoreState } from './workflow-configs-store';

export enum WorkflowAction {
  Init = 'Init',
  Reset = 'Reset',
  CanvasBlankClicked = 'CanvasBlankClicked',
  SaveVersionChanged = 'SaveVersionChanged',
  ElementsFileUploaded = 'ElementsFileUploaded',
  ElementsFileDownloaded = 'ElementsFileDownloaded',
  ElementsSelected = 'ElementsSelected',
  ElementsDeleted = 'ElementsDeleted',
  ElementsCopied = 'ElementsCopied',
  ElementsPasted = 'ElementsPasted',
  ElementsCut = 'ElementsCut',
  NodeCreated = 'NodeCreated',
  NodeDeleted = 'NodeDeleted',
  NodesDeleted = 'NodesDeleted',
  NodeMoved = 'NodeMoved',
  NodeResized = 'NodeResized',
  EdgeDeleted = 'EdgeDeleted',
  EdgesDeleted = 'EdgesDeleted',
  Connected = 'Connected',
  ReConnected = 'ReConnected',
}

export interface WorkflowActionHistory {
  action: null | WorkflowAction;
  timestamp: number;
  elements: WorkflowElements;
}

const INITIAL_WORKFLOW_ACTION_HISTORY: WorkflowActionHistory = {
  action: null,
  timestamp: Date.now(),
  elements: { nodes: [], edges: [] },
};

const workflowActionsHistoryStore = create<{
  actionsHistory: WorkflowActionHistory;
  updateActionsHistory: (actionsHistory: WorkflowActionHistory) => void;
  clearActionsHistory: () => void;
}>()(
  temporal(
    devtools(
      (set) => ({
        actionsHistory: INITIAL_WORKFLOW_ACTION_HISTORY,
        updateActionsHistory: (actionsHistory) => set({ actionsHistory }),
        clearActionsHistory: () => set({ actionsHistory: INITIAL_WORKFLOW_ACTION_HISTORY }),
      }),
      {
        name: 'VENOMOUS_UI__WORKFLOW_ACTIONS_HISTORY',
        store: 'VENOMOUS_UI__WORKFLOW_ACTIONS_HISTORY',
      },
    ),
    {
      limit: _getWorkflowConfigsStoreStoreState().undoRedo.maxHistoryLength,
      pastStates: [],
      futureStates: [],
      equality: (pastState, currentState) => isEqual(pastState, currentState),
    },
  ),
);

export function useWorkflowActionsHistoryStoreCleanup() {
  useEffect(() => {
    return () => {
      workflowActionsHistoryStore.getState().clearActionsHistory();
    };
  }, []);
  return null;
}

export function useWorkflowActionsHistoryStates() {
  const store = workflowActionsHistoryStore();
  const undoRedoStore = useStore(workflowActionsHistoryStore.temporal);

  const currentStates = useMemo(() => store.actionsHistory, [store.actionsHistory]);
  const pastStates = useMemo(
    () => undoRedoStore.pastStates.map(({ actionsHistory }) => ({ ...actionsHistory })),
    [undoRedoStore.pastStates],
  );
  const futureStates = useMemo(
    () => undoRedoStore.futureStates.map(({ actionsHistory }) => ({ ...actionsHistory })),
    [undoRedoStore.pastStates],
  );

  return {
    currentStates,
    pastStates,
    futureStates,
  };
}

export function useWorkflowActionsHistoryUndoRedo() {
  const store = useStore(workflowActionsHistoryStore);
  const undoRedoStore = useStore(workflowActionsHistoryStore.temporal);

  const undo = useCallback<VoidFunction>(() => undoRedoStore.undo(), [undoRedoStore.undo]);
  const redo = useCallback<VoidFunction>(() => undoRedoStore.redo(), [undoRedoStore.redo]);
  const canUndo =
    undoRedoStore.pastStates.length > 0 && store.actionsHistory.action !== WorkflowAction.Init;
  const canRedo = undoRedoStore.futureStates.length > 0;

  return {
    undo,
    redo,
    canUndo,
    canRedo,
  };
}

export function useWorkflowActionsHistoryUpdate() {
  const { getNodes, getEdges } = useWorkflowInstance();

  const store = useStore(workflowActionsHistoryStore);

  const _updateActionsHistoryRef = useRef(
    debounce((params: { action: WorkflowAction; forceUnselected: boolean }) => {
      store.updateActionsHistory({
        action: params.action,
        timestamp: Date.now(),
        elements: {
          nodes: getNodes().map((n) => ({
            ...n,
            selected: params.forceUnselected ? false : n.selected,
          })),
          edges: getEdges().map((e) => ({
            ...e,
            selected: params.forceUnselected ? false : e.selected,
          })),
        },
      });
    }, 200),
  );

  const updateActionsHistory = useCallback((action: WorkflowAction) => {
    switch (action) {
      case WorkflowAction.Init:
      case WorkflowAction.Reset:
      case WorkflowAction.CanvasBlankClicked:
      case WorkflowAction.SaveVersionChanged:
      case WorkflowAction.ElementsFileUploaded:
      case WorkflowAction.ElementsFileDownloaded:
      case WorkflowAction.ElementsSelected:
      case WorkflowAction.ElementsDeleted:
      case WorkflowAction.ElementsCopied:
      case WorkflowAction.ElementsPasted:
      case WorkflowAction.ElementsCut:
      case WorkflowAction.NodeCreated:
      case WorkflowAction.NodeDeleted:
      case WorkflowAction.NodeResized:
      case WorkflowAction.EdgeDeleted:
      case WorkflowAction.Connected:
      case WorkflowAction.ReConnected:
        _updateActionsHistoryRef.current({ action, forceUnselected: true });
        break;

      case WorkflowAction.NodeMoved:
        _updateActionsHistoryRef.current({ action, forceUnselected: false });
        break;

      default:
        break;
    }
  }, []);

  return {
    updateActionsHistory,
  };
}
