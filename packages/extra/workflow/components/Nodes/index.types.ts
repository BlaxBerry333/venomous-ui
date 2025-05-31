import type { NamedExoticComponent } from 'react';

import type { PaperProps } from '@packages/common';
import type { WorkflowNodeComponentProps } from '@packages/extra/workflow/types';

export type WorkflowBaseNodeProps = WorkflowNodeComponentProps & {
  sx?: PaperProps['sx'];
  hideSourceHandler?: boolean;
  hideTargetHandler?: boolean;
};

export type WorkflowGroupNodeProps = Omit<
  WorkflowBaseNodeProps,
  'hideSourceHandler' | 'hideTargetHandler'
>;

export type WorkflowStartWithContextNodeProps = Omit<
  WorkflowBaseNodeProps,
  'hideSourceHandler' | 'hideTargetHandler'
> & {
  onlyOne?: boolean;
};

export type WorkflowBaseNodeComponentType = NamedExoticComponent<WorkflowBaseNodeProps>;
export type WorkflowGroupNodeComponentType = NamedExoticComponent<WorkflowGroupNodeProps>;
export type WorkflowStartWithContextNodeComponentType =
  NamedExoticComponent<WorkflowStartWithContextNodeProps>;
