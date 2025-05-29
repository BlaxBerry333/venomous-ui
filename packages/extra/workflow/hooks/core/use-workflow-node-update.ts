import { useCallback } from 'react';

import {
  WorkflowNodeTypeDefault,
  type WorkflowEdge,
  type WorkflowNode,
} from '@packages/extra/workflow/types';
import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowNodeUpdate<N extends WorkflowNode, E extends WorkflowEdge>() {
  const { updateNode, updateNodeData, setNodes, getNodes, getInternalNode } = useWorkflowInstance<
    N,
    E
  >();

  /**
   * 更新指定 Node
   */
  const updateSpecificNode = useCallback(
    (id: string, node: Partial<N>) => {
      updateNode(id, node, {
        replace: false,
      });
    },
    [updateNode],
  );

  /**
   * 更新指定 Node.data
   */
  const updateSpecificNodeData = useCallback(
    (id: string, nodeData: Partial<N['data']>) => {
      updateNodeData(id, nodeData, {
        replace: false,
      });
    },
    [updateNodeData],
  );

  /**
   * 更新指定 Node.data.formValue
   */
  const updateSpecificNodeFormValue = useCallback(
    (id: string, formValue: N['data']['formValue']) => {
      updateSpecificNodeData(id, { formValue });
    },
    [updateSpecificNodeData],
  );

  /**
   * 在 Node 被拖拽至 GroupNode 范围内以及从其中移除时更新 Node
   */
  const updateNodeMovingAroundGroupNode = useCallback(
    (node: N) => {
      // 如果拖拽的是 GroupNode 时不处理，仅更新 position
      if (node.type === WorkflowNodeTypeDefault.Group) {
        return setNodes((nds) =>
          nds.map((n) =>
            n.id === node.id ? { ...n, parentId: undefined, position: node.position } : n,
          ),
        );
      }

      const internalNode = getInternalNode(node.id);
      if (!internalNode) {
        return;
      }

      const pointer = internalNode.internals.positionAbsolute;
      const targetGroup = getNodes().find(
        (n) =>
          n.type === WorkflowNodeTypeDefault.Group &&
          pointer.x >= n.position.x &&
          pointer.x <= n.position.x + (n.measured?.width ?? 0) &&
          pointer.y >= n.position.y &&
          pointer.y <= n.position.y + (n.measured?.height ?? 0),
      );

      // 如果拖拽的是普通 Node 且在 GroupNode 范围内
      if (targetGroup) {
        const newPosition = {
          x: pointer.x - targetGroup.position.x,
          y: pointer.y - targetGroup.position.y,
        };
        return setNodes((nds) =>
          nds.map((n) =>
            n.id === node.id ? { ...n, parentId: targetGroup.id, position: newPosition } : n,
          ),
        );
      }

      // 如果拖拽的是普通 Node 且不在 GroupNode 范围内
      setNodes((nds) =>
        nds.map((n) => (n.id === node.id ? { ...n, parentId: undefined, position: pointer } : n)),
      );
    },
    [getInternalNode, getNodes, setNodes],
  );

  return {
    updateSpecificNode,
    updateSpecificNodeData,
    updateSpecificNodeFormValue,
    updateNodeMovingAroundGroupNode,
  };
}
