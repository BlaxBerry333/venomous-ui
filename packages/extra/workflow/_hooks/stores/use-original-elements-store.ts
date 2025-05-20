import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/_types/elements';

const workflowOriginalElementsStore = create<{
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  setNodes: (nodes: WorkflowNode[]) => void;
  setEdges: (edges: WorkflowEdge[]) => void;
}>()(
  devtools(
    (set) => ({
      nodes: [],
      edges: [],
      setNodes: (nodes) => set({ nodes }),
      setEdges: (edges) => set({ edges }),
    }),
    {
      name: 'VENOMOUS_UI__WORKFLOW_ORIGINAL_ELEMENTS',
      store: 'VENOMOUS_UI__WORKFLOW_ORIGINAL_ELEMENTS',
    },
  ),
);

export default function useWorkflowOriginalElementsStore() {
  return useStore(workflowOriginalElementsStore);
}
