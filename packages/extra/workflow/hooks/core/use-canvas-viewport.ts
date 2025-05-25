import type { XYPosition as XYFlowPosition } from '@xyflow/react';
import { useCallback } from 'react';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useCanvasViewport<N extends WorkflowNode, E extends WorkflowEdge>() {
  const configs = useWorkflowConfigs();
  const { zoomIn, zoomOut, zoomTo, getZoom, fitView, setCenter, setNodes, setEdges, updateNode } =
    useWorkflowInstance<N, E>();

  /**
   * 画布放大
   */
  const increaseZoom = useCallback(async () => {
    await zoomIn({ duration: configs.canvas.zoomDuration });
  }, [zoomIn]);

  /**
   * 画布缩小
   */
  const decreaseZoom = useCallback(async () => {
    await zoomOut({ duration: configs.canvas.zoomDuration });
  }, [zoomOut]);

  /**
   * 设置画布缩放值
   */
  const setZoom = useCallback(
    async (zoomLevelValue: number, immediate: boolean = true) => {
      await zoomTo(zoomLevelValue, {
        duration: immediate ? 0 : configs.canvas.zoomDuration,
      });
    },
    [zoomTo],
  );

  /**
   * 自动适配画布缩放值
   */
  const autoView = useCallback(
    async (immediate: boolean = true) => {
      await fitView({ duration: immediate ? 0 : configs.canvas.zoomDuration });
    },
    [fitView, configs],
  );

  /**
   * 移动画布到指定 Node
   */
  const moveToSpecificNode = useCallback(
    async (nodeId: string, { x, y }: XYFlowPosition) => {
      const zoom = getZoom();
      await setCenter(x + configs.styles.nodeWidth / 2, y + configs.styles.nodeMinHeight / 2, {
        duration: configs.canvas.zoomDuration,
        zoom,
      });
      setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
      setEdges((eds) => eds.map((e) => ({ ...e, selected: false })));
      updateNode(nodeId, { selected: true } as Partial<N>);
    },
    [configs, getZoom, setCenter, setNodes, setEdges, updateNode],
  );

  return {
    increaseZoom,
    decreaseZoom,
    setZoom,
    moveToSpecificNode,
    autoView,
  };
}
