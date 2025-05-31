import { memo } from 'react';

import { Button } from '@packages/common';
import { useWorkflowInstance } from '@packages/extra/workflow/hooks';
import WorkflowToolbarPanel from './ToolbarPanel';
import type { WorkflowWorkflowToolbarPanelComponentType } from './index.types';

const WorkflowDevtool: WorkflowWorkflowToolbarPanelComponentType = memo(({ position, style }) => {
  const { getNodes, getEdges } = useWorkflowInstance();

  return (
    <WorkflowToolbarPanel position={position} style={style} isPaper={false}>
      <Button
        icon="hugeicons:tools"
        iconWidth={24}
        isSquare
        onClick={() => {
          console.log({
            nodes: getNodes(),
            edges: getEdges(),
          });
        }}
      />
    </WorkflowToolbarPanel>
  );
});

WorkflowDevtool.displayName = 'WorkflowDevtool';
export default WorkflowDevtool;
