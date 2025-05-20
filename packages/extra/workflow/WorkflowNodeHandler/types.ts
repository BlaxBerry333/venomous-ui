import type { HandleProps as XYFlowHandleProps } from '@xyflow/react';
import type { NamedExoticComponent } from 'react';
import type { WorkflowNode } from '../_types';

export type WorkflowBaseNodeHandlerProps = {
  nodeId: WorkflowNode['id'];
  handlerType: XYFlowHandleProps['type'];
  handlerPosition: 'top' | 'right' | 'bottom' | 'left';
  style?: React.CSSProperties;
  onConnect?: XYFlowHandleProps['onConnect'];
};

export type WorkflowBaseNodeHandlerComponentType =
  NamedExoticComponent<WorkflowBaseNodeHandlerProps>;
