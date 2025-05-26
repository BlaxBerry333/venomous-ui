import { useCallback } from 'react';

import { getRelevantEdgesByNode } from '@packages/extra/workflow/helpers';
import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowElementsDelete<
  N extends WorkflowNode,
  E extends WorkflowEdge,
>() {
  const configs = useWorkflowConfigs();
  const { getNodes, getEdges, setNodes, setEdges } = useWorkflowInstance<N, E>();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  /**
   * 删除指定的 Edge
   */
  const deleteEdge = useCallback(
    (edgeId: E['id']) => {
      setEdges((edges) => edges.filter((edge) => edge.id !== edgeId));
      updateActionsHistory(WorkflowAction.EdgeDeleted);
      configs.logger(WorkflowAction.EdgeDeleted);
    },
    [setEdges, updateActionsHistory, configs.logger],
  );

  /**
   * 删除选中的所有 Node
   */
  const _deleteSelectedNodes: VoidFunction = useCallback(() => {
    setNodes((nodes) => nodes.filter((node) => !node.selected));
  }, [setNodes]);

  /**
   * 删除选中的所有 Edge
   */
  const _deleteSelectedEdges: VoidFunction = useCallback(() => {
    setEdges((edges) => edges.filter((edge) => !edge.selected));
  }, [setEdges]);

  /**
   * 删除选中状态的所有 Node 的相关 Edge
   */
  const _deleteRelatedEdges: VoidFunction = useCallback(() => {
    const selectedNodes = getNodes().filter((n) => n.selected);
    const edgesToRemove: E[] = [];
    selectedNodes.forEach((node) => {
      const relatedEdges = getRelevantEdgesByNode<N, E>(getEdges(), node);
      edgesToRemove.push(...relatedEdges);
    });
    setEdges((eds) => eds.filter((e) => !edgesToRemove.find((r) => r.id === e.id)));
  }, [getEdges, getNodes, setEdges]);

  /**
   * 删除选中的所有 Node 和 Edge
   */
  const deleteSelectedElements: VoidFunction = useCallback(() => {
    const selectedNodes = getNodes().filter((n) => n.selected);
    const selectedEdges = getEdges().filter((e) => e.selected);
    const hasSelectedNodes: boolean = selectedNodes.length > 0;
    const hasSelectedEdges: boolean = selectedEdges.length > 0;

    /**
     * Delete Selected Elements
     */
    if (!hasSelectedNodes && !hasSelectedEdges) {
      return;
    }
    if (hasSelectedNodes) {
      _deleteSelectedNodes();
      _deleteRelatedEdges();
    }
    if (hasSelectedEdges) {
      _deleteSelectedEdges();
    }

    /**
     * Update Actions History
     */
    if (hasSelectedNodes && !hasSelectedEdges) {
      updateActionsHistory(
        selectedNodes.length === 1 ? WorkflowAction.NodeDeleted : WorkflowAction.NodesDeleted,
      );
      return;
    }
    if (hasSelectedEdges && !hasSelectedNodes) {
      updateActionsHistory(
        selectedEdges.length === 1 ? WorkflowAction.EdgeDeleted : WorkflowAction.EdgesDeleted,
      );
      return;
    }
    if (hasSelectedNodes && hasSelectedEdges) {
      updateActionsHistory(WorkflowAction.ElementsDeleted);
      return;
    }
  }, [
    getNodes,
    getEdges,
    _deleteSelectedNodes,
    _deleteSelectedEdges,
    _deleteRelatedEdges,
    updateActionsHistory,
  ]);

  return { deleteEdge, deleteSelectedElements };
}
