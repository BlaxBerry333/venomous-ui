import { memo } from 'react';
import WorkflowBaseNodeHandler from './BaseNodeHandler';
import type { WorkflowSourceNodeHandlerComponentType } from './types';

const WorkflowSourceNodeHandler: WorkflowSourceNodeHandlerComponentType = memo((props) => {
  return <WorkflowBaseNodeHandler {...props} handlerType="source" />;
});

WorkflowSourceNodeHandler.displayName = 'WorkflowSourceNodeHandler';
export default WorkflowSourceNodeHandler;
