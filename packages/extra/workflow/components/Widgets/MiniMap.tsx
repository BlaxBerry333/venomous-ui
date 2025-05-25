import { MiniMap as XYFlowMiniMap } from '@xyflow/react';
import { memo, useCallback, type NamedExoticComponent } from 'react';

import { useCanvasViewport, useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import type { WorkflowNode } from '@packages/extra/workflow/types';
import { useThemePalette } from '@packages/helpers';

const WorkflowMiniMap: NamedExoticComponent = memo(() => {
  const { themePalette } = useThemePalette();
  const { moveToSpecificNode } = useCanvasViewport();
  const configs = useWorkflowConfigs();

  const getNodeStrokeColor = useCallback(
    (node: WorkflowNode): string => {
      const nodeColor = configs.styles?.nodeColors?.[node.type!] || themePalette.main;
      return node.selected || node.data?.isFocus ? nodeColor : 'transparent';
    },
    [themePalette],
  );

  const getNodeColor = useCallback(
    (node: WorkflowNode): string => {
      return node.data?.isInValid ? themePalette.error : '#e2e2e2';
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
