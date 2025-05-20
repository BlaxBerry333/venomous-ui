import { memo } from 'react';

import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { useThemeMode } from '@packages/helpers';
import { WorkflowConfigContext } from '../_helpers/workflow-configs';
import { useEdgeConnection, useWorkflowInit } from '../_hooks';
import { SupportedEdgeTypes } from '../WorkflowEdges';
import type { WorkflowPlaygroundComponentType } from './WorkflowPlayground.types';

const WorkflowPlayground: WorkflowPlaygroundComponentType = memo(
  ({ style, originalElements, configs, ...props }) => {
    const { themeMode } = useThemeMode();

    const { configsMemorized } = useWorkflowInit({
      originalElements,
      configs,
    });

    const { isValidConnection } = useEdgeConnection();

    return (
      <WorkflowConfigContext value={configsMemorized}>
        {/* prettier-ignore */}
        <ReactFlow
          style={{ width: '100%', height: '100%', ...style }}
          proOptions={{ hideAttribution: true }}
          colorMode={themeMode}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          connectionLineType={configsMemorized.styles.connectionLineType as any }   /** 连接中的 Edge 的种类 */
          connectionLineStyle={{ strokeWidth: configsMemorized.styles.edgeWidth }}  /** 连接中的 Edge 的样式 */
          defaultEdgeOptions={{
            type:configsMemorized.styles.edgeType,                                  /** Edge 的种类 */
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            markerEnd: { type:configsMemorized.styles.edgeEndMarkerType } as any,   /** Edge 结束的标记 */
          }}
          // ----------------------------------------------------------------------------------------------------
          defaultNodes={originalElements.nodes}                               /** Node 列表 ( 受控组件写法, 仅初始化时使用一次 ) */
          defaultEdges={originalElements.edges}                               /** Edge 列表 ( 受控组件写法, 仅初始化时使用一次 ) */
          elementsSelectable                                                  /** Node 与 Edge 是否能被选中 */
          nodesConnectable                                                    /** Node 是否能被连接 */
          nodesDraggable                                                      /** Node 是否能被拖拽 */
          panOnDrag                                                           /** 是否可以拖拽整个 Canvas */
          panOnScroll={false}                                                 /** 是否可以滚动整个 Canvas */
          zoomOnScroll                                                        /** 是否可以滚动缩放整个 Canvas */
          zoomOnPinch                                                         /** 是否可以二指捏合手势缩放整个 Canvas */
          nodesFocusable={false}                                              /** 是否可以使用 Tab 切换 Node  */
          edgesFocusable={false}                                              /** 是否可以使用 Tab 切换 Edge  */
          nodeDragThreshold={5}                                               /** Node 被拖拽了指定 px 之后才会真正在 Canvas 上移动，可防止失误移动 */
          connectionRadius={configsMemorized?.styles?.nodeWidth / 4}          /** Node 连接的 px 范围 */
          // ----------------------------------------------------------------------------------------------------
          isValidConnection={isValidConnection}                               /** 自定义连接校验 */
          // ----------------------------------------------------------------------------------------------------
          nodeTypes={props.nodeTypes}
          edgeTypes={props.edgeTypes || SupportedEdgeTypes} 
          {...props}
        >
          {/* ... */}
        </ReactFlow>
      </WorkflowConfigContext>
    );
  },
);

WorkflowPlayground.displayName = 'WorkflowPlayground';
export default WorkflowPlayground;
