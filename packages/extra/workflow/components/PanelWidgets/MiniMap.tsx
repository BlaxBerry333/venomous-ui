import { memo, useCallback, useMemo, type CSSProperties, type NamedExoticComponent } from 'react';

import { MiniMap as XYFlowMiniMap } from '@xyflow/react';

import { useWorkflowConfigs, useWorkflowNodeJump } from '@packages/extra/workflow/hooks';
import type { WorkflowNode } from '@packages/extra/workflow/types';
import { useThemePalette } from '@packages/helpers';

const WorkflowMiniMap: NamedExoticComponent = memo(() => {
  const { themePalette } = useThemePalette();
  const { jumpToSpecificNode } = useWorkflowNodeJump();
  const configs = useWorkflowConfigs();

  const positionStyle = useMemo<CSSProperties>(() => {
    if (!configs.minimap?.position) return {};
    switch (configs.minimap?.position) {
      case 'top-left':
        return { transform: 'translate(-8px, 56px)' };
      case 'top-right':
        return { transform: 'translate(8px, 56px)' };
      case 'bottom-left':
        return { transform: 'translate(-8px, -56px)' };
      case 'bottom-right':
        return { transform: 'translate(8px, -56px)' };
      default:
        return {};
    }
  }, [configs.minimap?.position]);

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
        void jumpToSpecificNode(node.id, node.position);
      }}
      pannable
      zoomable
      zoomStep={configs.canvas?.zoomStep}
      style={{
        ...positionStyle,
        width: configs.minimap?.width,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    />
  );
});

WorkflowMiniMap.displayName = 'WorkflowMiniMap';
export default WorkflowMiniMap;
