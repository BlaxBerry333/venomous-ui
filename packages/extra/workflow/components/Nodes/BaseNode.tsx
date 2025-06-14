import { memo, useCallback } from 'react';

import { Paper } from '@packages/common';
import { useWorkflowConfigs, useWorkflowPanel } from '@packages/extra/workflow/hooks';
import { WorkflowSourceNodeHandler, WorkflowTargetNodeHandler } from '../NodeHandlers';
import type { WorkflowBaseNodeComponentType } from './index.types';

const WorkflowBaseNode: WorkflowBaseNodeComponentType = memo(
  ({ children, sx, hideSourceHandler = false, hideTargetHandler = false, ...props }) => {
    const { id, selected, data: nodeData } = props;
    const isInValid = nodeData?.isInValid;

    const configs = useWorkflowConfigs();
    const { setSelectedNodeId } = useWorkflowPanel();
    const handleNodeClick: VoidFunction = useCallback(() => {
      setSelectedNodeId(id);
    }, [setSelectedNodeId, id]);

    return (
      <Paper
        className="VenomousUI-WorkflowBaseNode"
        isOutlined
        onClick={handleNodeClick}
        sx={{
          p: '16px',
          width: configs.styles.nodeWidth,
          minWidth: configs.styles.nodeWidth,
          maxHeight: configs.styles.nodeMaxHeight,
          minHeight: configs.styles.nodeMinHeight,
          maxWidth: configs.styles.nodeMaxHeight,
          position: 'relative',
          outline: ({ palette }) =>
            isInValid
              ? `${configs.styles.edgeWidth}px solid ${palette.error.main}`
              : selected
                ? `${configs.styles.edgeWidth}px solid ${palette.primary.main}`
                : 'none',
          outlineOffset: `-${configs.styles.edgeWidth}px`,
          boxShadow: (theme) => (selected ? theme.shadows[4] : theme.shadows[1]),
          '&:hover': { boxShadow: (theme) => theme.shadows[4] },
          ...sx,
        }}
      >
        {children}

        {!hideTargetHandler && !nodeData?.isMultipleTargetHandler && (
          <WorkflowTargetNodeHandler id={null} />
        )}
        {!hideSourceHandler && !nodeData?.isMultipleSourceHandler && (
          <WorkflowSourceNodeHandler id={null} />
        )}
      </Paper>
    );
  },
);

WorkflowBaseNode.displayName = 'WorkflowBaseNode';
export default WorkflowBaseNode;
