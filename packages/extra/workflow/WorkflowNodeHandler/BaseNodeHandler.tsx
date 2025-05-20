import { Handle as XYFlowHandle, Position as XYFlowPosition } from '@xyflow/react';
import { memo, useMemo } from 'react';

import type { WorkflowBaseNodeHandlerComponentType } from './types';

const WorkflowBaseNodeHandler: WorkflowBaseNodeHandlerComponentType = memo(
  ({ nodeId, handlerType, handlerPosition, style, onConnect }) => {
    const position = useMemo(() => {
      switch (handlerPosition) {
        case 'left':
          return XYFlowPosition.Left;
        case 'right':
          return XYFlowPosition.Right;
        case 'top':
          return XYFlowPosition.Top;
        case 'bottom':
          return XYFlowPosition.Bottom;
        default:
          return XYFlowPosition.Left;
      }
    }, [handlerPosition]);

    return (
      <XYFlowHandle
        type={handlerType}
        id={nodeId}
        position={position}
        style={style}
        onConnect={onConnect}
      />
    );
  },
);

WorkflowBaseNodeHandler.displayName = 'WorkflowBaseNodeHandler';
export default WorkflowBaseNodeHandler;
