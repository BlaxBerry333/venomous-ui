import { create, useStore } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { WorkflowNode } from '@packages/extra/workflow/types';

const workflowCreatedNodeStore = create<{
  node: null | Partial<WorkflowNode>;
  setNode: (node: Partial<WorkflowNode>) => void;
}>()(
  devtools(
    (set) => ({
      node: null,
      setNode: (node) => set({ node }),
    }),
    {
      name: 'VENOMOUS_UI__WORKFLOW_CREATED_NODE',
      store: 'VENOMOUS_UI__WORKFLOW_CREATED_NODE',
    },
  ),
);

export function getWorkflowCreatedNode(): WorkflowNode | null {
  return workflowCreatedNodeStore.getState().node as WorkflowNode | null;
}

export function setWorkflowCreatedNode(node: Partial<WorkflowNode>): void {
  workflowCreatedNodeStore.setState({ node });
}

export function clearWorkflowCreatedNode(): void {
  workflowCreatedNodeStore.setState({ node: null });
}

export default function useWorkflowCreatedNode() {
  return useStore(workflowCreatedNodeStore);
}
