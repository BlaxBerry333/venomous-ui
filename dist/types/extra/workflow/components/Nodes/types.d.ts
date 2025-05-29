import type { NamedExoticComponent } from 'react';
import type { PaperProps } from '@packages/common';
import type { WorkflowNodeComponentProps } from '@packages/extra/workflow/types';
export type WorkflowBaseNodeProps = WorkflowNodeComponentProps & {
    sx?: PaperProps['sx'];
    withoutHandlers?: boolean;
};
export type WorkflowBaseNodeComponentType = NamedExoticComponent<WorkflowBaseNodeProps>;
