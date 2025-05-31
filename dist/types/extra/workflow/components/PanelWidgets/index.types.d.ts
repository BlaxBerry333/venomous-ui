import type { CSSProperties, NamedExoticComponent, PropsWithChildren } from 'react';
import type { WorkflowNode, WorkflowToolbarPosition } from '@packages/extra/workflow/types';
export type WorkflowToolbarPanelProps = PropsWithChildren<{
    position: WorkflowToolbarPosition;
    style?: CSSProperties;
    isPaper?: boolean;
    isOutlinedPaper?: boolean;
}>;
export type NodeDataFormValuePanelProps = Partial<Omit<WorkflowToolbarPanelProps, 'children'> & {
    renderContent?: (node: WorkflowNode) => React.ReactNode;
}>;
export type WorkflowToolbarPanelComponentType = NamedExoticComponent<WorkflowToolbarPanelProps>;
export type NodeDataFormValuePanelComponentType = NamedExoticComponent<NodeDataFormValuePanelProps>;
export type WorkflowUndoRedoComponentType = NamedExoticComponent;
export type WorkflowWorkflowToolbarPanelComponentType = NamedExoticComponent<WorkflowToolbarPanelProps>;
