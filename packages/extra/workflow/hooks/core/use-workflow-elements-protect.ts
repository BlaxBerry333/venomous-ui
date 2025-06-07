import { useCallback } from 'react';

import useWorkflowInstance from './use-workflow-instance';

export default function useWorkflowElementsProtect() {
  const { setNodes, setEdges } = useWorkflowInstance();

  /**
   * 画布上的 Nodes、Edges 不能进行任何操作
   */
  const lockElements: VoidFunction = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        draggable: false,
        selectable: false,
        connectable: false,
        deletable: false,
      })),
    );
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        selectable: false,
        reconnectable: false,
        focusable: false,
        editable: false,
        deletable: false,
      })),
    );
  }, [setNodes, setEdges]);

  /**
   * 画布上的 Nodes、Edges 可以进行任何操作
   */
  const unlockElements: VoidFunction = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        draggable: true,
        selectable: true,
        connectable: true,
        deletable: true,
      })),
    );
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        selectable: true,
        reconnectable: true,
        focusable: true,
        editable: true,
        deletable: true,
      })),
    );
  }, []);

  return {
    lockElements,
    unlockElements,
  };
}
