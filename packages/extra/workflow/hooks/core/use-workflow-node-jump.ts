import { useCallback } from 'react';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowNodeJump<N extends WorkflowNode, E extends WorkflowEdge>() {
  const configs = useWorkflowConfigs();
  const { getZoom, setCenter, setNodes, setEdges, updateNode } = useWorkflowInstance<N, E>();

  /**
   * 移动画布到指定 Node
   */
  const jumpToSpecificNode = useCallback(
    async (nodeId: string, { x, y }: N['position']) => {
      const zoom = getZoom();
      await setCenter(x + configs.styles.nodeWidth / 2, y + configs.styles.nodeMinHeight / 2, {
        duration: configs.canvas.zoomDuration,
        zoom,
      });
      setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
      setEdges((eds) => eds.map((e) => ({ ...e, selected: false })));
      updateNode(nodeId, { selected: true } as Partial<N>);
    },
    [
      getZoom,
      setCenter,
      setNodes,
      setEdges,
      updateNode,
      configs.canvas.zoomDuration,
      configs.styles.nodeWidth,
      configs.styles.nodeMinHeight,
    ],
  );

  return {
    jumpToSpecificNode,
  };
}
