import type { WorkflowPlaygroundProps } from '@packages/extra/workflow/components/Playground/WorkflowPlayground.types';
import type { OnInit } from '@packages/extra/workflow/types';
export default function useWorkflowInit({ configs: originalConfigs, }: Pick<WorkflowPlaygroundProps, 'configs'>): {
    onFinishedInit: OnInit;
};
