import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import {
  WorkflowEdgeConnectionLineType,
  WorkflowEdgeEndMarkerType,
  WorkflowEdgeType,
} from '@packages/extra/workflow/types';

export type WorkflowConfigs = {
  logger: (message: string) => void;
  hotkeys: {
    keys: {
      copy: string; // 复制
      paste: string; // 粘贴
      delete: string; // 删除
      undo: string; // 撤销
      redo: string; // 重做
    };
  };
  canvas: {
    isGridLayout: boolean; // 是否启用 Grid 布局
    gridLayoutGap: [number, number]; // 画布 Grid 布局间隔
    minZoom: number; // 最小缩放比例
    maxZoom: number; // 最大缩放比例
    zoomDuration: number; // 缩放动画时长
    zoomStep: number; // 缩放步长
  };
  styles: {
    nodeWidth: number;
    nodeMinHeight: number;
    nodeMaxHeight: number | 'auto';
    nodeColors: Record<string, string>;
    edgeWidth: number;
    edgeType: WorkflowEdgeType; // Edge 类型
    edgeEndMarkerType: WorkflowEdgeEndMarkerType; // Edge End Marker 类型
    connectionLineType: WorkflowEdgeConnectionLineType; // Edge Connection 连接中的类型
    connectionPosition: {
      source: 'bottom' | 'top' | 'left' | 'right'; // sourceHandle 在 Node 上的位置
      target: 'bottom' | 'top' | 'left' | 'right'; // targetHandle 在 Node 上的位置
    };
  };
  minimap: {
    enabled: boolean; // 是否启用
    position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right'; // 位置
  };
  undoRedo: {
    enabled: boolean; // 是否启用
    maxHistoryLength: number; // 最大历史记录长度
  };
};

const workflowConfigsStore = create<
  WorkflowConfigs & {
    setHotkeys: (hotkeys: WorkflowConfigs['hotkeys']) => void;
    setCanvas: (canvas: WorkflowConfigs['canvas']) => void;
    setStyles: (styles: WorkflowConfigs['styles']) => void;
    setMinimap: (minimap: WorkflowConfigs['minimap']) => void;
    setUndoRedo: (undoRedo: WorkflowConfigs['undoRedo']) => void;
  }
>()(
  devtools(
    (set) => ({
      logger: (message: string) => console.log(message),
      hotkeys: {
        enabled: false,
        keys: {
          copy: 'ctrl+c',
          paste: 'ctrl+v',
          delete: 'delete',
          undo: 'ctrl+z',
          redo: 'ctrl+y',
        },
      },
      canvas: {
        isGridLayout: false,
        gridLayoutGap: [20, 20] as [number, number],
        minZoom: 0.5,
        maxZoom: 2,
        zoomDuration: 200,
        zoomStep: 1,
      },
      styles: {
        nodeWidth: 250,
        nodeMinHeight: 100,
        nodeMaxHeight: 'auto',
        edgeWidth: 2,
        edgeType: WorkflowEdgeType.Base,
        edgeEndMarkerType: WorkflowEdgeEndMarkerType.ArrowClosed,
        connectionLineType: WorkflowEdgeConnectionLineType.Bezier,
        connectionPosition: {
          source: 'right',
          target: 'left',
        },
      },
      minimap: {
        enabled: true,
        position: 'bottom-left',
      },
      undoRedo: {
        enabled: true,
        maxHistoryLength: 10,
      },
      setHotkeys: (hotkeys) => set((state) => ({ hotkeys: { ...state.hotkeys, ...hotkeys } })),
      setCanvas: (canvas) => set((state) => ({ canvas: { ...state.canvas, ...canvas } })),
      setStyles: (styles) => set((state) => ({ styles: { ...state.styles, ...styles } })),
      setMinimap: (minimap) => set((state) => ({ minimap: { ...state.minimap, ...minimap } })),
      setUndoRedo: (undoRedo) => set((state) => ({ undoRedo: { ...state.undoRedo, ...undoRedo } })),
    }),
    {
      name: 'VENOMOUS_UI__WORKFLOW_CONFIGS',
      store: 'VENOMOUS_UI__WORKFLOW_CONFIGS',
    },
  ),
);

export function _getWorkflowConfigsStoreStoreState() {
  return workflowConfigsStore.getState();
}

export default function useWorkflowConfigs() {
  return useStore(workflowConfigsStore);
}
