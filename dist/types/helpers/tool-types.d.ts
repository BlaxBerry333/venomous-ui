export declare namespace ToolTypes {
    /**
     * Recursively makes all properties required in a type.
     *
     * @template T - The type to make required.
     * @returns {DeepRequired<T>} The required type.
     *
     * @example
     * type MyType = {
     *   a?: string;
     *   b?: {
     *     c?: number;
     *   };
     * };
     *
     * const obj: DeepRequired<MyType> = {
     *   a: 'hello',
     *   b: {
     *     c: 42,
     *   },
     * };
     }
     */
    type DeepRequired<T> = T extends Array<infer U> ? Array<DeepRequired<U>> : T extends object ? {
        [K in keyof T]-?: DeepRequired<T[K]>;
    } : T;
    /**
     * Recursively makes all properties optional in a type.
     *
     * @template T - The type to make optional.
     * @returns {DeepPartial<T>} The optional type.
     *
     * @example
     * type MyType = {
     *   a: string;
     *   b: {
     *     c: number;
     *   };
     * };
     *
     * const obj: DeepPartial<MyType> = { };
     */
    type DeepPartial<T> = {
        [P in keyof T]?: T[P] extends object ? T[P] extends (...args: unknown[]) => unknown ? T[P] : DeepPartial<T[P]> : T[P];
    };
}
