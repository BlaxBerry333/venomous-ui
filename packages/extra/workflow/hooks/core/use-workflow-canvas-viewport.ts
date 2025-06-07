import { useViewport as XYFlowUseViewport } from '@xyflow/react';
import { useCallback, useMemo } from 'react';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowCanvasViewport<
  N extends WorkflowNode,
  E extends WorkflowEdge,
>() {
  const configs = useWorkflowConfigs();
  const { zoomIn, zoomOut, zoomTo, fitView } = useWorkflowInstance<N, E>();

  /**
   * 当前画布的缩放信息
   */
  const _currentViewport = XYFlowUseViewport();
  const currentViewport = useMemo(() => _currentViewport, [_currentViewport]);

  /**
   * 画布放大
   */
  const increaseZoom = useCallback(async () => {
    await zoomIn({ duration: configs.canvas.zoomDuration });
  }, [zoomIn, configs.canvas.zoomDuration]);

  /**
   * 画布缩小
   */
  const decreaseZoom = useCallback(async () => {
    await zoomOut({ duration: configs.canvas.zoomDuration });
  }, [zoomOut, configs.canvas.zoomDuration]);

  /**
   * 设置画布缩放值
   */
  const setZoom = useCallback(
    async (zoomLevelValue: number, immediate: boolean = true) => {
      await zoomTo(zoomLevelValue, {
        duration: immediate ? 0 : configs.canvas.zoomDuration,
      });
    },
    [zoomTo, configs.canvas.zoomDuration],
  );

  /**
   * 自动适配画布缩放值
   */
  const autoView = useCallback(
    async (immediate: boolean = true) => {
      await fitView({ duration: immediate ? 0 : configs.canvas.zoomDuration });
    },
    [fitView, configs.canvas.zoomDuration],
  );

  return {
    currentViewport,
    increaseZoom,
    decreaseZoom,
    setZoom,
    autoView,
  };
}
