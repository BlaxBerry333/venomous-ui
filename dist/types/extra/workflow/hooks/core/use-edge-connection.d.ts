import type { IsValidConnection, OnConnect, OnConnectEnd, WorkflowEdge, WorkflowNode } from '@packages/extra/workflow/types';
export default function useEdgeConnection<N extends WorkflowNode, E extends WorkflowEdge>(): {
    isValidConnection: IsValidConnection;
    onConnect: OnConnect;
    onConnectEnd: OnConnectEnd;
};
