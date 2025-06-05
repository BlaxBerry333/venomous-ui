import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';

const workflowCopiedElementsStore = create<{
  nodes: WorkflowNode[];
  edges: WorkflowEdge[];
  setNodes: (nodes: WorkflowNode[]) => void;
  setEdges: (edges: WorkflowEdge[]) => void;
  clear: () => void;
}>()(
  devtools(
    (set) => ({
      nodes: [],
      edges: [],
      setNodes: (nodes) => set({ nodes }),
      setEdges: (edges) => set({ edges }),
      clear: () => set({ nodes: [], edges: [] }),
    }),
    {
      name: 'VENOMOUS_UI__WORKFLOW_COPIED_ELEMENTS',
      store: 'VENOMOUS_UI__WORKFLOW_COPIED_ELEMENTS',
    },
  ),
);

export default function useWorkflowCopiedElements() {
  return useStore(workflowCopiedElementsStore);
}
