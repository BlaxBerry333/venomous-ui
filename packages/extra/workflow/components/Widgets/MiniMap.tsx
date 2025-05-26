import { MiniMap as XYFlowMiniMap } from '@xyflow/react';
import { memo, useCallback, type NamedExoticComponent } from 'react';

import { useWorkflowCanvasViewport, useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import type { WorkflowNode } from '@packages/extra/workflow/types';
import { useThemePalette } from '@packages/helpers';

const WorkflowMiniMap: NamedExoticComponent = memo(() => {
  const { themePalette } = useThemePalette();
  const { moveToSpecificNode } = useWorkflowCanvasViewport();
  const configs = useWorkflowConfigs();

  const getNodeStrokeColor = useCallback(
    (node: WorkflowNode): string => {
      const { type, selected, data } = node;
      const nodeColor = configs.styles?.nodeColors?.[type!] || themePalette.main;
      return selected || data?.isFocus ? nodeColor : 'transparent';
    },
    [themePalette, configs.styles?.nodeColors],
  );

  const getNodeColor = useCallback(
    (node: WorkflowNode): string => {
      const { data } = node;
      return data?.isInValid ? themePalette.error : '#e2e2e2';
    },
    [themePalette],
  );

  return (
    <XYFlowMiniMap
      className="VenomousUI-WorkflowMiniMap"
      position={configs.minimap?.position}
      nodeStrokeWidth={16}
      nodeStrokeColor={getNodeStrokeColor}
      nodeColor={getNodeColor}
      nodeBorderRadius={16}
      onNodeClick={(e, node) => {
        e.stopPropagation();
        void moveToSpecificNode(node.id, node.position);
      }}
      pannable
      zoomable
      zoomStep={configs.canvas?.zoomStep}
    />
  );
});

WorkflowMiniMap.displayName = 'WorkflowMiniMap';
export default WorkflowMiniMap;
