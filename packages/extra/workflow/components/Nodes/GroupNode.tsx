import { NodeResizeControl as XYFlowNodeResizeControl } from '@xyflow/react';
import { memo, useMemo } from 'react';

import { Icon } from '@packages/common';
import { useWorkflowConfigs } from '@packages/extra';
import { getColors } from '@packages/helpers';
import WorkflowBaseNode from './BaseNode';
import type { WorkflowGroupNodeComponentType } from './index.types';

const WorkflowGroupNode: WorkflowGroupNodeComponentType = memo(({ children, sx, ...props }) => {
  const { selected, data: nodeData } = props;

  const configs = useWorkflowConfigs();
  const minWidth = useMemo(() => configs.styles.nodeWidth * 1.5, [configs.styles.nodeWidth]);
  const minHeight = useMemo(() => configs.styles.nodeMinHeight * 3, [configs.styles.nodeMinHeight]);

  return (
    <WorkflowBaseNode
      hideSourceHandler
      hideTargetHandler
      sx={{
        position: 'static',
        height: '100%',
        width: 'auto !important',
        minWidth,
        minHeight,
        backgroundColor: ({ palette }) =>
          nodeData.isIntersecting
            ? getColors(palette.primary.main).opacity
            : palette.mode === 'dark'
              ? `rgba(250,250,250,0.05)`
              : `rgba(0,0,0,0.05)`,
        ...sx,
      }}
      {...props}
    >
      {children}

      <XYFlowNodeResizeControl
        className="VenomousUI-WorkflowGroupNode-ResizeControl"
        style={{ display: selected ? 'flex' : 'none' }}
        minWidth={minWidth}
        minHeight={minHeight}
      >
        <Icon
          icon="fa:expand"
          width={24}
          color="primary"
          sx={{ transform: 'translate(-32px, -32px) rotate(90deg)' }}
        />
      </XYFlowNodeResizeControl>
    </WorkflowBaseNode>
  );
});

WorkflowGroupNode.displayName = 'WorkflowGroupNode';
export default WorkflowGroupNode;
