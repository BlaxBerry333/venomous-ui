import { memo } from 'react';

import { useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import WorkflowBaseNodeHandler from './BaseNodeHandler';
import type { WorkflowBaseNodeHandlerItemComponentType } from './types';

const WorkflowBaseNodeHandlerItem: WorkflowBaseNodeHandlerItemComponentType = memo(
  ({ children, style, handlerStyle, id, handlerType, ...props }) => {
    const configs = useWorkflowConfigs();

    return (
      <div
        style={{
          position: 'relative',
          width: configs.styles?.nodeWidth,
          padding: '4px 16px',
          ...style,
        }}
      >
        {children}
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
