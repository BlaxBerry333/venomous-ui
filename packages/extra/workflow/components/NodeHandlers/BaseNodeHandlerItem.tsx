import { memo } from 'react';

import { useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import WorkflowBaseNodeHandler from './BaseNodeHandler';
import type { BaseNodeHandlerItemComponentType } from './types';

const BaseNodeHandlerItem: BaseNodeHandlerItemComponentType = memo(
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

BaseNodeHandlerItem.displayName = 'BaseNodeHandlerItem';
export default BaseNodeHandlerItem;
