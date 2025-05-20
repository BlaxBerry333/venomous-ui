import { useEffect, useMemo } from 'react';

import {
  WORKFLOW_CONFIGS,
  type IWorkflowConfigsContextValue,
} from '@packages/extra/workflow/_helpers/workflow-configs';
import type { WorkflowPlaygroundProps } from '@packages/extra/workflow/WorkflowPlayground/WorkflowPlayground.types';
import useOriginalElementsStore from '../stores/use-original-elements-store';

export default function useWorkflowInit({
  originalElements,
  configs,
}: Pick<WorkflowPlaygroundProps, 'originalElements' | 'configs'>) {
  const { setNodes, setEdges } = useOriginalElementsStore();
  useEffect(() => {
    if (originalElements) {
      setNodes(originalElements.nodes);
      setEdges(originalElements.edges);
    }
  }, [originalElements, setNodes, setEdges]);

  const configsMemorized = useMemo<IWorkflowConfigsContextValue>(() => {
    return {
      hotkeys: {
        ...WORKFLOW_CONFIGS.hotkeys,
        ...configs?.hotkeys,
      },
      canvas: {
        ...WORKFLOW_CONFIGS.canvas,
        ...configs?.canvas,
      },
      styles: {
        ...WORKFLOW_CONFIGS.styles,
        ...configs?.styles,
      },
    } as IWorkflowConfigsContextValue;
  }, [configs]);

  return {
    configsMemorized,
  };
}
