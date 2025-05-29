import { isEqual } from 'es-toolkit';
import { useCallback, useEffect, useRef } from 'react';

import type { WorkflowPlaygroundProps } from '@packages/extra/workflow/components/Playground/WorkflowPlayground.types';
import type { OnInit } from '@packages/extra/workflow/types';
import {
  useWorkflowActionsHistoryStoreCleanup,
  useWorkflowActionsHistoryUpdate,
  WorkflowAction,
} from '../stores/workflow-actions-history-store';
import useWorkflowConfigs, { type WorkflowConfigs } from '../stores/workflow-configs-store';

export default function useWorkflowInit({
  configs: originalConfigs,
}: Pick<WorkflowPlaygroundProps, 'configs'>) {
  const { setHotkeys, setCanvas, setStyles, setMinimap, setUndoRedo } = useWorkflowConfigs();
  const { updateActionsHistory } = useWorkflowActionsHistoryUpdate();

  /**
   * 清空 Workflow Actions History Store
   */
  useWorkflowActionsHistoryStoreCleanup();

  /**
   * Reactflow Instance 初始化完成时的回调
   */
  const onFinishedInit: OnInit = useCallback(() => {
    updateActionsHistory(WorkflowAction.Init);
  }, [updateActionsHistory]);

  /**
   * 初始化 Workflow Configs
   */
  const prevConfigsRef = useRef<WorkflowConfigs | null>(null);
  useEffect(() => {
    if (!originalConfigs || isEqual(originalConfigs, prevConfigsRef.current)) return;
    const { hotkeys, canvas, styles, minimap, undoRedo } = originalConfigs as WorkflowConfigs;
    if (hotkeys) setHotkeys(hotkeys);
    if (canvas) setCanvas(canvas);
    if (styles) setStyles(styles);
    if (minimap) setMinimap(minimap);
    if (undoRedo) setUndoRedo(undoRedo);
    prevConfigsRef.current = originalConfigs as WorkflowConfigs;
  }, [originalConfigs, setHotkeys, setCanvas, setStyles, setMinimap, setUndoRedo]);

  return {
    onFinishedInit,
  };
}
