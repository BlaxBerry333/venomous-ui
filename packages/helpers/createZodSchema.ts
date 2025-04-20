import type { z } from 'zod';

/**
 * Create a Zod Schema based on a TypeScript data type already existing
 *
 * Through type inference, maintain consistency between the data structure created by `z.object()` and API parameters.
 * This avoids redundant data structure definitions between API parameters and forms, improving code readability.
 *
 * @example
 * ```ts
 * type APIParamsType = {
 *   username: string;
 *   password: string;
 * };
 *
 * const formSchemas = createZodSchema<APIParamsType>()(
 *   z.object({
 *     username: z.string().min(4, "Username must be at least 4 characters long"),
 *     password: z.string().min(4, "Password must be at least 4 characters long"),
 *   }),
 * );
 * ```
 */
export default function createZodSchema<T>() {
  return <SchemaType extends z.ZodType<T>>(schema: SchemaType) => schema;
}
