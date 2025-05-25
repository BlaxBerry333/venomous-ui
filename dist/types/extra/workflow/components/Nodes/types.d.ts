import type { WorkflowNodeComponentProps } from '@packages/extra/workflow/types';
import type { NamedExoticComponent, PropsWithChildren } from 'react';
export type WorkflowBaseNodeProps = PropsWithChildren<WorkflowNodeComponentProps>;
export type WorkflowBaseNodeComponentType = NamedExoticComponent<WorkflowBaseNodeProps>;
