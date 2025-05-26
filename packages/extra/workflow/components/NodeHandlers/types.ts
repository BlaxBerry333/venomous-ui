import type { HandleProps as XYFlowHandleProps } from '@xyflow/react';
import type { NamedExoticComponent, PropsWithChildren } from 'react';

export type WorkflowBaseNodeHandlerProps = {
  id: string | null;
  handlerType: XYFlowHandleProps['type'];
  style?: React.CSSProperties;
  onConnect?: XYFlowHandleProps['onConnect'];
};

export type WorkflowBaseNodeHandlerItemComponentType = NamedExoticComponent<
  WorkflowBaseNodeHandlerProps &
    PropsWithChildren<{
      handlerStyle?: React.CSSProperties;
    }>
>;

export type WorkflowBaseNodeHandlerComponentType =
  NamedExoticComponent<WorkflowBaseNodeHandlerProps>;

export type WorkflowSourceNodeHandlerComponentType = NamedExoticComponent<
  Omit<WorkflowBaseNodeHandlerProps, 'handlerType'>
>;

export type WorkflowTargetNodeHandlerComponentType = NamedExoticComponent<
  Omit<WorkflowBaseNodeHandlerProps, 'handlerType'>
>;
