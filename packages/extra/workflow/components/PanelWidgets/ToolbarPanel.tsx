import { memo, useMemo, type CSSProperties } from 'react';

import { Panel as XYFlowPanel } from '@xyflow/react';

import { Paper } from '@packages/common';
import type { WorkflowToolbarPanelComponentType } from './index.types';

const WorkflowToolbarPanel: WorkflowToolbarPanelComponentType = memo(
  ({ children, position, style, isPaper = true, isOutlinedPaper = true }) => {
    const positionStyle = useMemo<CSSProperties>(() => {
      switch (position) {
        case 'top-left':
          return { transform: 'translate(-8px, -8px)' };
        case 'top-right':
          return { transform: 'translate(8px, -8px)' };
        case 'bottom-left':
          return { transform: 'translate(-8px, 8px)' };
        case 'bottom-right':
          return { transform: 'translate(8px, 8px)' };
        default:
          return {};
      }
    }, [position]);

    return (
      <XYFlowPanel
        position={position}
        style={{
          ...positionStyle,
          ...style,
        }}
      >
        {isPaper && (
          <Paper
            isOutlined={isOutlinedPaper}
            sx={{ height: '100%', border: 1, borderColor: 'divider' }}
          >
            {children}
          </Paper>
        )}
        {!isPaper && children}
      </XYFlowPanel>
    );
  },
);

WorkflowToolbarPanel.displayName = 'WorkflowToolbar';
export default WorkflowToolbarPanel;
