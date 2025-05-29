import type { ReactFlowProps as XYFlowReactFlowProps } from '@xyflow/react';
import type { NamedExoticComponent, ReactNode } from 'react';

import type { PaperProps } from '@packages/common';
import type { WorkflowConfigs } from '@packages/extra/workflow/hooks';
import type { WorkflowElements } from '@packages/extra/workflow/types';
import type { ToolTypes } from '@packages/helpers/tool-types';

export interface WorkflowPlaygroundProps extends XYFlowReactFlowProps {
  children?: ReactNode;
  sx?: PaperProps['sx'];

  workflowId?: string;

  originalElements: WorkflowElements;

  configs?: ToolTypes.DeepPartial<WorkflowConfigs>;
}

export type WorkflowPlaygroundComponentType = NamedExoticComponent<WorkflowPlaygroundProps>;
