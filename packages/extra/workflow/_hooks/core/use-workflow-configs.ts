import {
  WorkflowConfigContext,
  type IWorkflowConfigsContextValue,
} from '@packages/extra/workflow/_helpers/workflow-configs';
import { use } from 'react';

export default function useWorkflowConfigs(): IWorkflowConfigsContextValue {
  const context = use(WorkflowConfigContext);

  if (!context) {
    throw new Error('Must be used within a <WorkflowConfigContext.Provider>');
  }

  return context;
}
