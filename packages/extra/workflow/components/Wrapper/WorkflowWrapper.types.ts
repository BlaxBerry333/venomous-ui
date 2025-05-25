import type { NamedExoticComponent, ReactNode } from 'react';

export interface WorkflowWrapperProps {
  children?: ReactNode;
}

export type WorkflowWrapperComponentType = NamedExoticComponent<WorkflowWrapperProps>;
