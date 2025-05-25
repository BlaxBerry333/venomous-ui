import { Handle as XYFlowHandle, Position as XYFlowPosition } from '@xyflow/react';
import { memo, useMemo, type CSSProperties } from 'react';

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
  ({ id, handlerType = 'source', style, onConnect }) => {
    const configs = useWorkflowConfigs();

    const handlerPosition = configs.styles.connectionPosition[handlerType];

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
    }, [handlerPosition, handlerPosition]);

    return (
      <XYFlowHandle
        type={handlerType}
        id={id}
        position={position}
        className="VenomousUI-WorkflowBaseNodeHandler"
        style={{ ...commonNodeHandlerStyles, ...style }}
        onConnect={onConnect}
      />
    );
  },
);

WorkflowBaseNodeHandler.displayName = 'WorkflowBaseNodeHandler';
export default WorkflowBaseNodeHandler;
