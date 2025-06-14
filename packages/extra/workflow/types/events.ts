import type {
  Connection as XYFlowConnection,
  Edge as XYFlowEdge,
  FinalConnectionState as XYFlowFinalConnectionState,
  HandleType as XYFlowHandleType,
  Node as XYFlowNode,
  OnInit as XYFlowOnInit,
  OnNodeDrag as XYFlowOnNodeDrag,
  OnSelectionChangeFunc as XYFlowOnSelectionChangeFunc,
} from '@xyflow/react';

export type OnInit<
  N extends XYFlowNode = XYFlowNode,
  E extends XYFlowEdge = XYFlowEdge,
> = XYFlowOnInit<N, E>;

export type SetEdges<E extends XYFlowEdge> = (payload: E[] | ((edges: E[]) => E[])) => void;

export type Connection = XYFlowEdge | XYFlowConnection;

export type OnConnect = (connection: XYFlowConnection) => void;

export type IsValidConnection<E extends XYFlowEdge = XYFlowEdge> = (
  edge: E | Connection,
) => boolean;

export type OnConnectEnd = (
  event: MouseEvent | TouchEvent,
  connectionState: XYFlowFinalConnectionState,
) => void;

export type OnReconnectStart = (
  event: React.MouseEvent,
  edge: XYFlowEdge,
  handleType: XYFlowHandleType,
) => void;

export type OnReconnect = (oldEdge: XYFlowEdge, newConnection: XYFlowConnection) => void;

export type OnReconnectEnd = (
  event: MouseEvent | TouchEvent,
  edge: XYFlowEdge,
  handleType: XYFlowHandleType,
) => void;

export type OnNodeDrag<N extends XYFlowNode> = XYFlowOnNodeDrag<N>;

export type onSelectionChange<
  N extends XYFlowNode = XYFlowNode,
  E extends XYFlowEdge = XYFlowEdge,
> = XYFlowOnSelectionChangeFunc<N, E>;

export type OnSelectionEnd = (event: React.MouseEvent) => void;
