import type { ReactFlowProps } from '@xyflow/react';
import type { NamedExoticComponent, ReactNode } from 'react';
import type {
  WorkflowEdgeConnectionLineType,
  WorkflowEdgeEndMarkerType,
  WorkflowEdgeType,
  WorkflowElements,
} from '../_types/elements';

export interface WorkflowPlaygroundProps extends ReactFlowProps {
  children?: ReactNode;

  originalElements: WorkflowElements;

  configs?: WorkflowWrapperConfigs;
}

export type WorkflowWrapperConfigs = Partial<{
  hotkeys?: Partial<{
    enabled?: boolean; // 是否启用快捷键
    keys: {
      copy: string; // 复制
      paste: string; // 粘贴
      delete: string; // 删除
      undo: string; // 撤销
      redo: string; // 重做
    };
  }>;

  canvas?: Partial<{
    gridLayoutGap?: [number, number]; // 画布 Grid 布局间隔
    minZoom?: number; // 最小缩放比例
    maxZoom?: number; // 最大缩放比例
    zoomDuration?: number; // 缩放动画时长
  }>;

  styles?: Partial<{
    nodeWidth?: number; // Node 宽度
    nodeHeight?: number; // Node 高度
    edgeWidth?: number; // Edge 宽度
    edgeType?: WorkflowEdgeType; // Edge 类型
    edgeEndMarkerType?: WorkflowEdgeEndMarkerType; // Edge End Marker 类型
    connectionLineType?: WorkflowEdgeConnectionLineType; // Edge Connection 连接中的类型
  }>;
}>;

export type WorkflowPlaygroundComponentType = NamedExoticComponent<WorkflowPlaygroundProps>;
