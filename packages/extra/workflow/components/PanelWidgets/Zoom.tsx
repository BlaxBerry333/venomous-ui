import { memo, useMemo } from 'react';

import { Button, Flex, Text } from '@packages/common';
import { useWorkflowCanvasViewport, useWorkflowConfigs } from '@packages/extra/workflow/hooks';
import WorkflowToolbarPanel from './ToolbarPanel';
import type { WorkflowUndoRedoComponentType } from './index.types';

const WorkflowZoom: WorkflowUndoRedoComponentType = memo(() => {
  const { currentViewport, increaseZoom, decreaseZoom } = useWorkflowCanvasViewport();
  const configs = useWorkflowConfigs();

  const { zoom } = currentViewport;
  const zoomLevel = useMemo<string>(() => `${(zoom * 100).toFixed(0)}%`, [zoom]);
  const disableIncreaseZoom = useMemo<boolean>(
    () => zoom >= configs.canvas.maxZoom,
    [zoom, configs.canvas.maxZoom],
  );
  const disableDecreaseZoom = useMemo<boolean>(
    () => zoom <= configs.canvas.minZoom,
    [zoom, configs.canvas.minZoom],
  );

  return (
    <WorkflowToolbarPanel position={configs.minimap?.position} isPaper>
      <Flex row gap={0} width={configs.minimap?.width - 16} justifyContent="space-between">
        <Button
          icon="solar:magnifer-zoom-out-linear" // cspell:disable-line
          isSquare
          disabled={disableDecreaseZoom}
          onClick={decreaseZoom} // eslint-disable-line @typescript-eslint/no-misused-promises
        />

        <Text bold text={zoomLevel} sx={{ width: 100, textAlign: 'right', px: 1 }} />

        <Button
          icon="solar:magnifer-zoom-in-linear" // cspell:disable-line
          isSquare
          disabled={disableIncreaseZoom}
          onClick={increaseZoom} // eslint-disable-line @typescript-eslint/no-misused-promises
        />
      </Flex>
    </WorkflowToolbarPanel>
  );
});

WorkflowZoom.displayName = 'WorkflowZoom';
export default WorkflowZoom;
