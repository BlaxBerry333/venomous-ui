import { memo } from 'react';
import WorkflowBaseNodeHandler from './BaseNodeHandler';
import type { WorkflowTargetNodeHandlerComponentType } from './types';

const WorkflowTargetNodeHandler: WorkflowTargetNodeHandlerComponentType = memo((props) => {
  return <WorkflowBaseNodeHandler {...props} handlerType="target" />;
});

WorkflowTargetNodeHandler.displayName = 'WorkflowTargetNodeHandler';
export default WorkflowTargetNodeHandler;
