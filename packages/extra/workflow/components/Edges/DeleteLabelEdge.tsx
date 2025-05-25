import { EdgeLabelRenderer as XYFlowEdgeLabelRenderer } from '@xyflow/react';
import { memo, useCallback } from 'react';

import { Button } from '@packages/common';
import { useElementsDelete } from '@packages/extra/workflow/hooks';
import WorkflowBaseEdge from './BaseEdge';
import type { WorkflowBaseEdgeProps } from './types';

const WorkflowDeleteLabelEdge = memo<WorkflowBaseEdgeProps>((props) => {
  const { id: edgeId, selected } = props;

  const { deleteEdge } = useElementsDelete();
  const handleClickDeleteLabel = useCallback(() => deleteEdge(edgeId), [edgeId, deleteEdge]);

  return (
    <WorkflowBaseEdge
      {...props}
      renderChildren={({ edgePathLabelX, edgePathLabelY }) => (
        <XYFlowEdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              pointerEvents: 'all',
              transformOrigin: 'center',
              transform: `translate(-50%, -50%) translate(${edgePathLabelX}px,${edgePathLabelY}px)`,
              display: selected ? 'flex' : 'none',
            }}
          >
            <Button
              isCircle
              isGhost
              icon="solar:close-circle-linear"
              color="error"
              onClick={handleClickDeleteLabel}
              sx={{
                '& svg': {
                  borderRadius: '50%',
                  backgroundColor: ({ palette }) => palette.background.paper,
                },
              }}
            />
          </div>
        </XYFlowEdgeLabelRenderer>
      )}
    />
  );
});

WorkflowDeleteLabelEdge.displayName = 'WorkflowDeleteLabelEdge';
export default WorkflowDeleteLabelEdge;
