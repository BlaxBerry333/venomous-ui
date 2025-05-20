// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace ToolTypes {
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
  export type DeepRequired<T> =
    T extends Array<infer U>
      ? Array<DeepRequired<U>>
      : T extends object
        ? { [K in keyof T]-?: DeepRequired<T[K]> }
        : T;
}
