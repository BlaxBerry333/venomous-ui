import { createContext } from 'react';

import type { ToolTypes } from '@packages/helpers/tool-types';
import {
  WorkflowEdgeConnectionLineType,
  WorkflowEdgeEndMarkerType,
  WorkflowEdgeType,
} from '../_types/elements';
import type { WorkflowWrapperConfigs } from '../WorkflowPlayground/WorkflowPlayground.types';

export type IWorkflowConfigsContextValue = ToolTypes.DeepRequired<WorkflowWrapperConfigs>;

export const WORKFLOW_CONFIGS: IWorkflowConfigsContextValue = {
  hotkeys: {
    enabled: false,
    keys: {
      copy: 'ctrl+c',
      paste: 'ctrl+v',
      delete: 'delete',
      undo: 'ctrl+z',
      redo: 'ctrl+y',
    },
  },

  canvas: {
    gridLayoutGap: [20, 20] as [number, number],
    minZoom: 0.5,
    maxZoom: 2,
    zoomDuration: 200,
  },

  styles: {
    nodeWidth: 250,
    nodeHeight: 100,
    edgeWidth: 2,
    edgeType: WorkflowEdgeType.Base,
    edgeEndMarkerType: WorkflowEdgeEndMarkerType.ArrowClosed,
    connectionLineType: WorkflowEdgeConnectionLineType.Bezier,
  },
};

export const WorkflowConfigContext = createContext<IWorkflowConfigsContextValue>(WORKFLOW_CONFIGS);
