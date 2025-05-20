import type { ReactNode } from 'react';
import type { WorkflowEdgeComponentProps } from '../_types/elements';
export type WorkflowBaseEdgeProps = WorkflowEdgeComponentProps & {
    renderChildren?: (props: WorkflowEdgeComponentProps & {
        edgePath: string;
        edgePathLabelX: number;
        edgePathLabelY: number;
        edgePathOffsetX: number;
        edgePathOffsetY: number;
    }) => ReactNode;
};
