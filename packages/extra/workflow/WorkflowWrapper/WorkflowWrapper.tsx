import { ReactFlowProvider } from '@xyflow/react';
import { memo } from 'react';

import type { WorkflowWrapperComponentType } from './WorkflowWrapper.types';

const WorkflowWrapper: WorkflowWrapperComponentType = memo(({ children }) => {
  return <ReactFlowProvider>{children}</ReactFlowProvider>;
});

WorkflowWrapper.displayName = 'WorkflowWrapper';
export default WorkflowWrapper;
