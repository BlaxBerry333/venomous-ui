import { memo } from 'react';

import { BaseEdge as XYFlowBaseEdge, getBezierPath as XYFlowGetBezierPath } from '@xyflow/react';
import { useWorkflowConfigs } from '../_hooks';
import type { WorkflowBaseEdgeProps } from './types';

const WorkflowBaseEdge = memo<WorkflowBaseEdgeProps>(({ renderChildren, ...props }) => {
  const configs = useWorkflowConfigs();

  const {
    id: edgeId,
    data,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
    style = { strokeWidth: configs.styles.edgeWidth },
  } = props;

  const [edgePath, edgePathLabelX, edgePathLabelY, edgePathOffsetX, edgePathOffsetY] =
    XYFlowGetBezierPath({
      sourceX,
      sourceY,
      sourcePosition,
      targetX,
      targetY,
      targetPosition,
    });

  return (
    <>
      <XYFlowBaseEdge id={edgeId} path={edgePath} style={style} markerEnd={markerEnd} />

      {data?.animated && (
        <circle r={configs.styles.edgeWidth * 2} fill="#ff0073">
          <animateMotion dur="2s" repeatCount="indefinite" path={edgePath} />
        </circle>
      )}

      {renderChildren?.({
        ...props,
        edgePath,
        edgePathLabelX,
        edgePathLabelY,
        edgePathOffsetX,
        edgePathOffsetY,
      })}
    </>
  );
});

WorkflowBaseEdge.displayName = 'WorkflowBaseEdge';
export default WorkflowBaseEdge;
