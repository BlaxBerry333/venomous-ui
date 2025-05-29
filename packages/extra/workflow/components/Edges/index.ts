import {
  WorkflowEdgeTypeDefault,
  type WorkflowEdgeComponentType,
} from '@packages/extra/workflow/types/elements';

import { default as WorkflowBaseEdge } from './BaseEdge';
import { default as WorkflowDeleteLabelEdge } from './DeleteLabelEdge';

export { default as WorkflowBaseEdge } from './BaseEdge';
export { default as WorkflowDeleteLabelEdge } from './DeleteLabelEdge';
export type { WorkflowBaseEdgeProps } from './types';

export const SupportedEdgeTypes: WorkflowEdgeComponentType = {
  [WorkflowEdgeTypeDefault.Base]: WorkflowBaseEdge,
  [WorkflowEdgeTypeDefault.DeleteLabel]: WorkflowDeleteLabelEdge,
};
