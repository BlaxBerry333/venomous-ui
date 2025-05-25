import { Panel } from '@xyflow/react';
import { memo, useEffect } from 'react';

import { Button } from '@packages/common';
import {
  useWorkflowActionsHistoryStates,
  useWorkflowActionsHistoryUndoRedo,
  useWorkflowInstance,
} from '@packages/extra/workflow/hooks';

const WorkflowUndoRedo = memo(() => {
  const { setNodes, setEdges } = useWorkflowInstance();
  const { undo, redo, canUndo, canRedo } = useWorkflowActionsHistoryUndoRedo();
  const { currentStates } = useWorkflowActionsHistoryStates();

  useEffect(() => {
    if (currentStates.action !== null) {
      setNodes(currentStates.elements.nodes);
      setEdges(currentStates.elements.edges);
    }
  }, [setNodes, setEdges, currentStates]);

  return (
    <Panel>
      <Button icon="mdi:undo" disabled={!canUndo} onClick={undo} />
      <Button icon="mdi:redo" disabled={!canRedo} onClick={redo} />
    </Panel>
  );
});

WorkflowUndoRedo.displayName = 'WorkflowUndoRedo';
export default WorkflowUndoRedo;
