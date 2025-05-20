import { memo, type CSSProperties } from 'react';

import { Paper } from '@packages/common';
import { useWorkflowConfigs } from '../_hooks';
import { WorkflowBaseNodeHandler } from '../WorkflowNodeHandler';
import type { WorkflowBaseNodeComponentType } from './types';

const commonNodeHandlerStyles: CSSProperties = {
  borderWidth: '6px',
  borderRadius: '50%',
  borderColor: '#BDBDBD',
  cursor: 'cell',
  zIndex: 2,
};

const WorkflowBaseNode: WorkflowBaseNodeComponentType = memo(({ children, ...props }) => {
  const nodeId = props.id;
  const isSelected = props.selected;

  const configs = useWorkflowConfigs();

  return (
    <Paper
      className="VenomousUI-WorkflowBaseNode"
      isOutlined
      sx={{
        p: '16px',
        width: configs.styles.nodeWidth,
        height: configs.styles.nodeHeight,
        minWidth: configs.styles.nodeWidth,
        minHeight: configs.styles.nodeHeight,
        maxWidth: configs.styles.nodeWidth,
        maxHeight: configs.styles.nodeHeight,
        position: 'relative',
        outline: ({ palette }) =>
          isSelected ? `${configs.styles.edgeWidth}px solid ${palette.primary.main}` : 'none',
        outlineOffset: `-${configs.styles.edgeWidth}px`,
        boxShadow: (theme) => (isSelected ? theme.shadows[4] : theme.shadows[1]),
        '&:hover': { boxShadow: (theme) => theme.shadows[4] },
      }}
    >
      {children}
      <WorkflowBaseNodeHandler
        nodeId={nodeId}
        handlerType="target"
        handlerPosition="left"
        style={commonNodeHandlerStyles}
      />{' '}
      <WorkflowBaseNodeHandler
        nodeId={nodeId}
        handlerType="source"
        handlerPosition="right"
        style={commonNodeHandlerStyles}
      />
    </Paper>
  );
});

WorkflowBaseNode.displayName = 'WorkflowBaseNode';
export default WorkflowBaseNode;
