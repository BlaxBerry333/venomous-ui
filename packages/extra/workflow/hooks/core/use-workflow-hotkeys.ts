import { useHotkeys } from 'react-hotkeys-hook';
import { useWorkflowActionsHistoryUndoRedo } from '../stores/workflow-actions-history-store';
import useWorkflowConfigs from '../stores/workflow-configs-store';
import useWorkflowElementsCopyPasteCut from './use-workflow-elements-copy-paste-cut';

export default function useCanvasHotkeys() {
  const configs = useWorkflowConfigs();

  const { undo, redo, canUndo, canRedo } = useWorkflowActionsHistoryUndoRedo();

  const { copySelectedElements, pastCopiedElement, cutSelectedElements } =
    useWorkflowElementsCopyPasteCut();

  useHotkeys(
    configs.hotkeys.keys.copy,
    () => copySelectedElements(),
    { enabled: true, preventDefault: true },
    [copySelectedElements],
  );

  useHotkeys(
    configs.hotkeys.keys.paste,
    () => pastCopiedElement(),
    { enabled: true, preventDefault: true },
    [pastCopiedElement],
  );

  useHotkeys(
    configs.hotkeys.keys.cut,
    () => cutSelectedElements(),
    { enabled: true, preventDefault: true },
    [cutSelectedElements],
  );

  useHotkeys(
    configs.hotkeys.keys.undo,
    () => {
      if (canUndo) undo();
    },
    { enabled: canUndo, preventDefault: true },
    [undo, canUndo],
  );

  useHotkeys(
    configs.hotkeys.keys.redo,
    () => {
      if (canRedo) redo();
    },
    { enabled: true, preventDefault: true },
    [redo, canRedo],
  );
}
