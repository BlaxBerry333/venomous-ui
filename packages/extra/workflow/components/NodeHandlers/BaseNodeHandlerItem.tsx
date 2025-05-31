import { memo } from 'react';

import Box from '@mui/material/Box';
import { useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import WorkflowBaseNodeHandler from './BaseNodeHandler';
import type { WorkflowBaseNodeHandlerItemComponentType } from './types';

const WorkflowBaseNodeHandlerItem: WorkflowBaseNodeHandlerItemComponentType = memo(
  ({ children, style, handlerStyle, id, handlerType, ...props }) => {
    const configs = useWorkflowConfigs();

    return (
      <div
        className="VenomousUI-WorkflowBaseNodeHandlerItem"
        style={{
          position: 'relative',
          width: configs.styles?.nodeWidth,
          ...style,
        }}
      >
        <Box sx={{ typography: 'body2', padding: '4px 16px' }}>{children}</Box>

        <WorkflowBaseNodeHandler
          id={id}
          handlerType={handlerType}
          style={handlerStyle}
          {...props}
        />
      </div>
    );
  },
);

WorkflowBaseNodeHandlerItem.displayName = 'WorkflowBaseNodeHandlerItem';
export default WorkflowBaseNodeHandlerItem;
