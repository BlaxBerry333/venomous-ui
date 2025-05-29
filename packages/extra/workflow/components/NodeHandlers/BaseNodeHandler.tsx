import { Handle as XYFlowHandle, Position as XYFlowPosition } from '@xyflow/react';
import { memo, useCallback, type CSSProperties } from 'react';

import { useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import type { WorkflowBaseNodeHandlerComponentType } from './types';

const commonNodeHandlerStyles: CSSProperties = {
  borderWidth: '6px',
  borderRadius: '50%',
  borderColor: '#BDBDBD',
  cursor: 'cell',
  zIndex: 2,
};

const WorkflowBaseNodeHandler: WorkflowBaseNodeHandlerComponentType = memo(
  ({ id, handlerType = 'source', handlerPosition, style, onConnect }) => {
    const configs = useWorkflowConfigs();

    const getHandlerPosition = useCallback(() => {
      const configPosition = configs.styles.connectionPosition[handlerType];
      const position = handlerPosition ?? configPosition;
      switch (position) {
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
    }, [handlerPosition, configs.styles.connectionPosition]);

    return (
      <XYFlowHandle
        type={handlerType}
        id={id}
        position={getHandlerPosition()}
        className="VenomousUI-WorkflowBaseNodeHandler"
        style={{ ...commonNodeHandlerStyles, ...style }}
        onConnect={onConnect}
      />
    );
  },
);

WorkflowBaseNodeHandler.displayName = 'WorkflowBaseNodeHandler';
export default WorkflowBaseNodeHandler;
