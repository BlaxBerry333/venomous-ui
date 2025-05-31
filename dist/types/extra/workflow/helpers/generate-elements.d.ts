import type { WorkflowNode } from '../types';
export declare function generateNewNodeToStore<N extends WorkflowNode>({ id, type, data, ...others }: Partial<N>): void;
