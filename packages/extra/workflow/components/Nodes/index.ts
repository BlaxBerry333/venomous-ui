import {
  WorkflowNodeTypeDefault,
  type WorkflowNodeComponent,
} from '@packages/extra/workflow/types/elements';
import { default as WorkflowBaseNode } from './BaseNode';
import { default as WorkflowGroupNode } from './GroupNode';

export type { WorkflowBaseNodeProps } from './index.types';

export { default as WorkflowBaseNode } from './BaseNode';
export { default as WorkflowGroupNode } from './GroupNode';

export const SupportedNodeTypes: WorkflowNodeComponent = {
  [WorkflowNodeTypeDefault.Base]: WorkflowBaseNode,
  [WorkflowNodeTypeDefault.Group]: WorkflowGroupNode,
};
