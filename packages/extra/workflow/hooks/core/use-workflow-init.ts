import { isEqual } from 'es-toolkit';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';

import type { WorkflowPlaygroundProps } from '@packages/extra/workflow/components/Playground/WorkflowPlayground.types';
import type { OnInit } from '@packages/extra/workflow/types';
import type { ToolTypes } from '@packages/helpers/tool-types';
import {
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowConfigs, { type WorkflowConfigs } from '../stores/workflow-configs-store';
import useWorkflowOriginalElements from '../stores/workflow-original-elements-store';

export default function useWorkflowInit({
  originalElements,
  configs: originalConfigs,
}: Pick<WorkflowPlaygroundProps, 'originalElements' | 'configs'>) {
  const { setHotkeys, setCanvas, setStyles, setMinimap, setUndoRedo } = useWorkflowConfigs();
  const { setNodes, setEdges } = useWorkflowOriginalElements();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  useLayoutEffect(() => {
    if (originalElements) {
      setNodes(originalElements.nodes);
      setEdges(originalElements.edges);
    }
  }, [originalElements, setNodes, setEdges]);

  /**
   * Reactflow Instance 初始化完成时的回调
   */
  const onFinishedInit: OnInit = useCallback(() => {
    updateActionsHistory(WorkflowAction.Init);
  }, [updateActionsHistory]);

  const prevConfigsRef = useRef<ToolTypes.DeepRequired<WorkflowConfigs>>(null);
  useEffect(() => {
    const configs = originalConfigs as ToolTypes.DeepRequired<WorkflowConfigs>;
    if (configs && !isEqual(configs, prevConfigsRef.current)) {
      if (configs.hotkeys) setHotkeys(configs.hotkeys);
      if (configs.canvas) setCanvas(configs.canvas as WorkflowConfigs['canvas']);
      if (configs.styles) setStyles(configs.styles);
      if (configs.minimap) setMinimap(configs.minimap);
      if (configs.undoRedo) setUndoRedo(configs.undoRedo);
      prevConfigsRef.current = configs;
    }
  }, [originalConfigs, setHotkeys, setCanvas, setStyles, setMinimap, setUndoRedo]);

  return {
    onFinishedInit,
  };
}
