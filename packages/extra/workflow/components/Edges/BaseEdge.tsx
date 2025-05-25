import { BaseEdge as XYFlowBaseEdge, getBezierPath as XYFlowGetBezierPath } from '@xyflow/react';
import { memo } from 'react';

import { useWorkflowConfigs } from '@packages/extra/workflow/hooks';
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
    style,
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
      <XYFlowBaseEdge
        id={edgeId}
        path={edgePath}
        className="VenomousUI-WorkflowBaseEdge"
        style={{
          ...style,
          strokeWidth: configs.styles.edgeWidth,
        }}
        markerEnd={markerEnd}
      />

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
