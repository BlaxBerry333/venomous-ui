import { lazy, memo, Suspense } from 'react';

import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { Paper } from '@packages/common';
import {
  useEdgeConnection,
  useEdgeReConnection,
  useNodeCreate,
  useNodeMove,
  useWorkflowConfigs,
  useWorkflowInit,
} from '@packages/extra/workflow/hooks';
import { useThemeMode } from '@packages/helpers';
import { SupportedEdgeTypes } from '../Edges';
// import { WorkflowMiniMap } from '../Widgets';
import type { WorkflowPlaygroundComponentType } from './WorkflowPlayground.types';

const WorkflowMiniMap = lazy(() =>
  import('../Widgets').then((m) => ({ default: m.WorkflowMiniMap })),
);
const WorkflowUndoRedo = lazy(() =>
  import('../Widgets').then((m) => ({ default: m.WorkflowUndoRedo })),
);

const WorkflowPlayground: WorkflowPlaygroundComponentType = memo(
  ({ children, sx, originalElements, configs: originalConfigs, ...props }) => {
    const { themeMode } = useThemeMode();
    const configs = useWorkflowConfigs();

    const { onFinishedInit } = useWorkflowInit({
      originalElements,
      configs: originalConfigs,
    });

    const { onDrop, onDragOver } = useNodeCreate();
    const { onNodeMoveStart, onNodeMoveStop } = useNodeMove();
    const { isValidConnection, onConnect, onConnectEnd } = useEdgeConnection();
    const { onReconnect, onReconnectStart, onReconnectEnd } = useEdgeReConnection();

    return (
      <Paper isOutlined sx={{ overflow: 'hidden', ...sx }}>
        {/* prettier-ignore */}
        <ReactFlow
          className="VenomousUI-WorkflowPlayground"
          style={{ width: '100%', height: '100%' }}
          proOptions={{ hideAttribution: true }}
          colorMode={themeMode}
          onlyRenderVisibleElements                                        /** 仅渲染可见的元素 */
          connectionLineType={configs.styles.connectionLineType as any }   /** 连接中的 Edge 的种类 */  // eslint-disable-line @typescript-eslint/no-explicit-any
          connectionLineStyle={{ strokeWidth: configs.styles.edgeWidth }}  /** 连接中的 Edge 的样式 */
          defaultEdgeOptions={{
            type:configs.styles.edgeType,                                  /** Edge 的种类 */
            markerEnd: { type:configs.styles.edgeEndMarkerType } as any,   /** Edge 结束的标记 */  // eslint-disable-line @typescript-eslint/no-explicit-any 
          }}
          // ----------------------------------------------------------------------------------------------------
          defaultNodes={originalElements.nodes}                            /** Node 列表 ( 受控组件写法, 仅初始化时使用一次 ) */
          defaultEdges={originalElements.edges}                            /** Edge 列表 ( 受控组件写法, 仅初始化时使用一次 ) */
          elementsSelectable                                               /** Node 与 Edge 是否能被选中 */
          nodesConnectable                                                 /** Node 是否能被连接 */
          nodesDraggable                                                   /** Node 是否能被拖拽 */
          panOnDrag                                                        /** 是否可以拖拽整个 Canvas */
          panOnScroll={false}                                              /** 是否可以滚动整个 Canvas */
          zoomOnScroll                                                     /** 是否可以滚动缩放整个 Canvas */
          zoomOnPinch                                                      /** 是否可以二指捏合手势缩放整个 Canvas */
          nodesFocusable={false}                                           /** 是否可以使用 Tab 切换 Node  */
          edgesFocusable={false}                                           /** 是否可以使用 Tab 切换 Edge  */
          nodeDragThreshold={5}                                            /** Node 被拖拽了指定 px 之后才会真正在 Canvas 上移动，可防止失误移动 */
          connectionRadius={configs?.styles?.nodeWidth / 4}                /** Node 连接的 px 范围 */
          nodeTypes={props.nodeTypes}                                      /** 自定义 Node 组件 */
          edgeTypes={props.edgeTypes || SupportedEdgeTypes}                /** 自定义 Edge 组件 */
          snapToGrid={configs?.canvas?.isGridLayout}                       /** 是否开启网格对齐 */
          snapGrid={configs?.canvas?.gridLayoutGap}                        /** 画布的网格 */
          // ----------------------------------------------------------------------------------------------------
          {...props}
          // ----------------------------------------------------------------------------------------------------
          onInit={onFinishedInit}                                          /** Reactflow Instance 初始化完成时的回调 */
          isValidConnection={isValidConnection}                            /** 自定义连接前校验 */
          onConnect={onConnect}                                            /** 连接时的回调 */
          onConnectEnd={onConnectEnd}                                      /** 连接结束的回调 */
          onReconnectStart={onReconnectStart}                              /** 重新连接开始的回调 */
          onReconnect={onReconnect}                                        /** 重新连接成功的回调 */
          onReconnectEnd={onReconnectEnd}                                  /** 重新连接结束的回调 */
          onDragOver={onDragOver}                                          /** Node 被拖拽到画布上的回调 */
          onDrop={onDrop}                                                  /** Node 被拖拽到画布后的回调 */
          onNodeDragStart={onNodeMoveStart}                                /** Node 移动开始的回调 */
          onNodeDragStop={onNodeMoveStop}                                  /** Node 移动结束的回调 */
          // ----------------------------------------------------------------------------------------------------
          deleteKeyCode={null}                                             /** 默认删除键的 KeyCode */
        >
          {children}

          {/* MiniMap */}
          <Suspense>
            {configs.minimap.enabled && <WorkflowMiniMap />}
          </Suspense>
          
          {/* UndoRedo */}
          <Suspense>
            {configs.undoRedo.enabled && <WorkflowUndoRedo />}
          </Suspense>

        </ReactFlow>
      </Paper>
    );
  },
);

WorkflowPlayground.displayName = 'WorkflowPlayground';
export default WorkflowPlayground;
