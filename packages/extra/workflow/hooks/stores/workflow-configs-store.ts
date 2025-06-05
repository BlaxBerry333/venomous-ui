import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import {
  WorkflowEdgeConnectionLineType,
  WorkflowEdgeEndMarkerType,
  WorkflowEdgeTypeDefault,
  type WorkflowToolbarPosition,
} from '@packages/extra/workflow/types';

export type WorkflowConfigs = {
  logger: (type: 'success' | 'error' | 'info', message: string) => void;
  hotkeys: {
    keys: {
      copy: string; // 复制
      paste: string; // 粘贴
      delete: string; // 删除
      cut: string; // 剪切
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
    edgeType: string; // Edge 类型
    edgeEndMarkerType: WorkflowEdgeEndMarkerType; // Edge End Marker 类型
    connectionLineType: WorkflowEdgeConnectionLineType; // Edge Connection 连接中的类型
    connectionPosition: {
      source: 'bottom' | 'left' | 'right'; // sourceHandle 在 Node 上的位置
      target: 'top' | 'left' | 'right'; // targetHandle 在 Node 上的位置
    };
  };
  minimap: {
    enabled: boolean; // 是否启用
    position: WorkflowToolbarPosition; // 位置
    width: number; // 宽度
  };
  undoRedo: {
    enabled: boolean; // 是否启用
    maxHistoryLength: number; // 最大历史记录长度
    position: WorkflowToolbarPosition; // 位置
    tooltips: { undo: string; redo: string; history: string }; // 提示标签
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
      logger: (type, message) => console.log(`${type}: ${message}`),
      hotkeys: {
        enabled: false,
        keys: {
          copy: 'mod+c',
          paste: 'mod+v',
          delete: 'delete',
          cut: 'mod+x',
          undo: 'mod+z',
          redo: 'mod+shift+z',
        },
      },
      canvas: {
        isGridLayout: false,
        gridLayoutGap: [20, 20] as [number, number],
        minZoom: 0.5, // 50%
        maxZoom: 2, // 200%
        zoomDuration: 200,
        zoomStep: 1,
      },
      styles: {
        nodeWidth: 250,
        nodeMinHeight: 100,
        nodeMaxHeight: 'auto',
        edgeWidth: 2,
        edgeType: WorkflowEdgeTypeDefault.DeleteLabel,
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
        width: 160,
      },
      undoRedo: {
        enabled: true,
        position: 'bottom-left',
        tooltips: { undo: 'Undo', redo: 'Redo', history: 'Undo/Redo History' },
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
