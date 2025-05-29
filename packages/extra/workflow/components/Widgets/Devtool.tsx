import { Panel } from '@xyflow/react';
import { memo } from 'react';

import { Button } from '@packages/common';
import { useWorkflowInstance } from '@packages/extra/workflow/hooks';

const WorkflowDevtool = memo(() => {
  const { getNodes, getEdges } = useWorkflowInstance();

  return (
    <Panel position="top-right">
      <Button
        text="currentElements"
        onClick={() => {
          console.log({
            nodes: getNodes(),
            edges: getEdges(),
          });
        }}
      />
    </Panel>
  );
});

WorkflowDevtool.displayName = 'WorkflowDevtool';
export default WorkflowDevtool;
