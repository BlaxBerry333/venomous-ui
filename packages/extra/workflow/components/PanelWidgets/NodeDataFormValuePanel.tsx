import { memo } from 'react';

import { useWorkflowPanel } from '@packages/extra/workflow/hooks';
import WorkflowToolbarPanel from './ToolbarPanel';
import type { NodeDataFormValuePanelComponentType } from './index.types';

const NodeDataFormValuePanel: NodeDataFormValuePanelComponentType = memo(
  ({ position = 'bottom-right', style, renderContent }) => {
    const { selectedNode } = useWorkflowPanel();

    if (!selectedNode?.data?.formValue) {
      return null;
    }
    return (
      <WorkflowToolbarPanel
        isPaper
        isOutlinedPaper={false}
        position={position}
        style={{
          height: 'calc(100% - 16px)',
          width: 300,
          ...style,
        }}
      >
        {renderContent?.(selectedNode)}
      </WorkflowToolbarPanel>
    );
  },
);

NodeDataFormValuePanel.displayName = 'NodeDataFormValuePanel';
export default NodeDataFormValuePanel;
