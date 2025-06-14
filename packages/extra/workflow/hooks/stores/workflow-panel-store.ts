import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WorkflowNode } from '@packages/extra/workflow/types';

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
  return useStore(workflowPanelStore);
}
