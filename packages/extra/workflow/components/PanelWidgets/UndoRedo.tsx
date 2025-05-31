import { memo, useEffect, useMemo, type CSSProperties } from 'react';

import { Button, Flex, Tooltip } from '@packages/common';
import {
  useWorkflowActionsHistoryStates,
  useWorkflowActionsHistoryUndoRedo,
  useWorkflowConfigs,
  useWorkflowInstance,
} from '@packages/extra/workflow/hooks';
import WorkflowToolbarPanel from './ToolbarPanel';
import type { WorkflowUndoRedoComponentType } from './index.types';

const WorkflowUndoRedo: WorkflowUndoRedoComponentType = memo(() => {
  const { setNodes, setEdges } = useWorkflowInstance();
  const { undo, redo, canUndo, canRedo } = useWorkflowActionsHistoryUndoRedo();
  const { currentStates } = useWorkflowActionsHistoryStates();
  const configs = useWorkflowConfigs();

  useEffect(() => {
    if (currentStates.action !== null) {
      setNodes(currentStates.elements.nodes);
      setEdges(currentStates.elements.edges);
    }
  }, [setNodes, setEdges, currentStates]);

  const positionStyle = useMemo<CSSProperties>(() => {
    const UndoRedoPosition = configs.undoRedo?.position;
    const isMiniMapEnabled = configs.minimap?.enabled;
    const MinMapWidth = configs.minimap?.width;
    if (!UndoRedoPosition) return {};
    switch (UndoRedoPosition) {
      case 'top-left':
        return { transform: `translate(${isMiniMapEnabled ? MinMapWidth : -8}px, -8px)` };
      case 'top-right':
        return { transform: `translate(${isMiniMapEnabled ? -MinMapWidth : 8}px, -8px)` };
      case 'bottom-left':
        return { transform: `translate(${isMiniMapEnabled ? MinMapWidth : -8}px, 8px)` };
      case 'bottom-right':
        return { transform: `translate(${isMiniMapEnabled ? -MinMapWidth : 8}px, 8px)` };
      default:
        return {};
    }
  }, [configs.undoRedo?.position, configs.minimap]);

  return (
    <WorkflowToolbarPanel position={configs.undoRedo?.position} style={positionStyle}>
      <Flex row gap={0.5}>
        <Tooltip tooltip={configs.undoRedo?.tooltips?.undo}>
          <span>
            <Button
              icon="solar:multiple-forward-left-bold-duotone"
              isSquare
              disabled={!canUndo}
              onClick={undo}
            />
          </span>
        </Tooltip>
        <Tooltip tooltip={configs.undoRedo?.tooltips?.redo}>
          <span>
            <Button
              icon="solar:multiple-forward-right-bold-duotone"
              isSquare
              disabled={!canRedo}
              onClick={redo}
            />
          </span>
        </Tooltip>

        {/* TODO: */}
        {/* <Tooltip tooltip={configs.undoRedo?.tooltips?.history}>
          <Button icon="solar:history-bold" isSquare disabled />
        </Tooltip> */}
      </Flex>
    </WorkflowToolbarPanel>
  );
});

WorkflowUndoRedo.displayName = 'WorkflowUndoRedo';
export default WorkflowUndoRedo;
