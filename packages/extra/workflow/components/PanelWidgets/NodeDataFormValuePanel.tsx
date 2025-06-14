import { memo, useMemo } from 'react';

import { useWorkflowInstance, useWorkflowPanel } from '@packages/extra/workflow/hooks';
import type { WorkflowNode } from '@packages/extra/workflow/types';
import WorkflowToolbarPanel from './ToolbarPanel';
import type { NodeDataFormValuePanelComponentType } from './index.types';

const NodeDataFormValuePanel: NodeDataFormValuePanelComponentType = memo(
  ({ position = 'bottom-right', style, renderContent }) => {
    const { getNode } = useWorkflowInstance();
    const { selectedNodeId } = useWorkflowPanel();
    const selectedNode = useMemo<WorkflowNode | undefined>(() => {
      if (!selectedNodeId) return void 0;
      return getNode(selectedNodeId);
    }, [selectedNodeId]);

    if (!selectedNodeId || !selectedNode?.data?.formValue) {
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
