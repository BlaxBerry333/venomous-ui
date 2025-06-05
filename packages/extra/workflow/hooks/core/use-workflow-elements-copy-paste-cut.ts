import { useCallback, useRef } from 'react';

import { type WorkflowEdge, type WorkflowNode } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import useWorkflowCopiedElements from '../stores/workflow-copied-elements-store';
import useWorkflowSelectedElements from '../stores/workflow-selected-elements-store';
import useWorkflowElementsDelete from './use-workflow-elements-delete';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowElementsCopyPasteCut<
  N extends WorkflowNode,
  E extends WorkflowEdge,
>() {
  const configs = useWorkflowConfigs();
  const { getNodes, getEdges, setNodes, setEdges } = useWorkflowInstance<N, E>();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();
  const { deleteSelectedElements } = useWorkflowElementsDelete();
  const copiedElements = useWorkflowCopiedElements();
  const selectedElements = useWorkflowSelectedElements();

  const pasteCount = useRef<number>(0);

  /**
   * 复制选中的 Node 和 Edge
   */
  const copySelectedElements = useCallback(() => {
    pasteCount.current = 0;
    copiedElements.clear();
    const selectedNodes = selectedElements.nodes;
    const relatedEdges = selectedElements.edges;
    if (selectedNodes.length) {
      copiedElements.setNodes(selectedNodes);
    }
    if (relatedEdges.length) {
      copiedElements.setEdges(relatedEdges);
    }
  }, [getNodes, getEdges, setNodes, setEdges, copiedElements, selectedElements]);

  /**
   * 粘贴复制的 Node 和 Edge
   */
  const pastCopiedElement = useCallback(() => {
    const copiedNodes = copiedElements.nodes;
    const copiedEdges = copiedElements.edges;

    // 粘贴 Nodes
    if (copiedNodes.length) {
      setNodes((nds) => nds.map((n) => ({ ...n, selected: false })));
      const nodesToAppended = copiedNodes.map((n) => {
        return {
          ...n,
          id: `${n.id}-copied-${pasteCount.current + 1}`,
          position: {
            x: n.position.x + (configs.styles.nodeWidth / 2) * (pasteCount.current + 1),
            y: n.position.y - (configs.styles.nodeMinHeight / 2) * (pasteCount.current + 1),
          },
          selected: true,
          dragging: false,
          data: { ...n.data },
        };
      });
      setNodes((nds) => [...nds, ...nodesToAppended] as N[]);
    }

    // 粘贴 Edges
    if (copiedEdges.length) {
      setEdges((eds) => eds.map((e) => ({ ...e, selected: false })));
      const edgesToAppended = copiedEdges.map((e) => {
        return {
          ...e,
          id: `${e.id}-copied-${pasteCount.current + 1}`,
          selected: true,
          source: `${e.source}-copied-${pasteCount.current + 1}`,
          target: `${e.target}-copied-${pasteCount.current + 1}`,
          zIndex: 1,
        };
      });
      setEdges((eds) => eds.concat(edgesToAppended as E[]));
    }

    if (copiedNodes.length || copiedEdges.length) {
      pasteCount.current += 1;
      updateActionsHistory(WorkflowAction.ElementsPasted);
    }
  }, [
    getNodes,
    getEdges,
    setNodes,
    setEdges,
    copiedElements,
    selectedElements,
    configs,
    updateActionsHistory,
  ]);

  /**
   * 剪切选中的 Node 和 Edge
   */
  const cutSelectedElements = useCallback(() => {
    copySelectedElements();
    deleteSelectedElements();
  }, [copySelectedElements, deleteSelectedElements]);

  return {
    copySelectedElements,
    pastCopiedElement,
    cutSelectedElements,
  };
}
