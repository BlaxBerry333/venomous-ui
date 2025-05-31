import { memo, useMemo } from 'react';

import { useWorkflowSelectedElements } from '@packages/extra/workflow/hooks';
import type { WorkflowNode } from '@packages/extra/workflow/types';
import WorkflowToolbarPanel from './ToolbarPanel';
import type { NodeDataFormValuePanelComponentType } from './index.types';

const NodeDataFormValuePanel: NodeDataFormValuePanelComponentType = memo(
  ({ position = 'bottom-right', style, renderContent }) => {
    const { nodes: selectedNodes } = useWorkflowSelectedElements();

    const selectedNode = useMemo<WorkflowNode | null>(() => {
      if (selectedNodes.length === 1) return selectedNodes[0];
      return null;
    }, [selectedNodes]);

    // 没有单一的 Node 被选中时不显示
    // 被选中的单一 Node 不含有 node.data.formaValue 时不显示
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
