import { memo } from 'react';

import { Paper } from '@packages/common';
import { useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import { WorkflowSourceNodeHandler, WorkflowTargetNodeHandler } from '../NodeHandlers';
import type { WorkflowBaseNodeComponentType } from './types';

const WorkflowBaseNode: WorkflowBaseNodeComponentType = memo(
  ({ children, sx, withoutHandlers = false, ...props }) => {
    const { selected, data: nodeData } = props;

    const configs = useWorkflowConfigs();

    return (
      <Paper
        className="VenomousUI-WorkflowBaseNode"
        isOutlined
        sx={{
          p: '16px',
          width: configs.styles.nodeWidth,
          minWidth: configs.styles.nodeWidth,
          maxHeight: configs.styles.nodeMaxHeight,
          minHeight: configs.styles.nodeMinHeight,
          maxWidth: configs.styles.nodeMaxHeight,
          position: 'relative',
          outline: ({ palette }) =>
            selected ? `${configs.styles.edgeWidth}px solid ${palette.primary.main}` : 'none',
          outlineOffset: `-${configs.styles.edgeWidth}px`,
          boxShadow: (theme) => (selected ? theme.shadows[4] : theme.shadows[1]),
          '&:hover': { boxShadow: (theme) => theme.shadows[4] },
          ...sx,
        }}
      >
        {children}

        {!withoutHandlers && !nodeData?.isMultipleTargetHandler && (
          <WorkflowTargetNodeHandler id={null} />
        )}
        {!withoutHandlers && !nodeData?.isMultipleSourceHandler && (
          <WorkflowSourceNodeHandler id={null} />
        )}
      </Paper>
    );
  },
);

WorkflowBaseNode.displayName = 'WorkflowBaseNode';
export default WorkflowBaseNode;
