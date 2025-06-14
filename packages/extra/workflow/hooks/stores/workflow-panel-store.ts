import { useMemo } from 'react';
import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WorkflowNode } from '@packages/extra/workflow/types';
import useWorkflowInstance from '../core/use-workflow-instance';

const workflowPanelStore = create<{
  selectedNodeId: WorkflowNode['id'] | null;
  setSelectedNodeId: (selectedNodeId: WorkflowNode['id']) => void;
  clear: () => void;
}>()(
  devtools(
    (set) => ({
      selectedNodeId: null,
      setSelectedNodeId: (selectedNodeId) => set({ selectedNodeId }),
      clear: () => set({ selectedNodeId: null }),
    }),
    {
      name: 'VENOMOUS_UI__WORKFLOW_PANEL',
      store: 'VENOMOUS_UI__WORKFLOW_PANEL',
    },
  ),
);

export default function useWorkflowPanel() {
  const store = useStore(workflowPanelStore);
  const { selectedNodeId } = store;

  const { getNode } = useWorkflowInstance();
  const selectedNode = useMemo<WorkflowNode | undefined>(() => {
    if (!selectedNodeId) return void 0;
    return getNode(selectedNodeId);
  }, [selectedNodeId]);

  return {
    ...store,
    selectedNode,
  };
}
