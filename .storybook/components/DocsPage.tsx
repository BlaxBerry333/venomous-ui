import { ArgTypes, Description, Heading, Stories, Subtitle, Title } from "@storybook/blocks";

/**
 * Custom Docs Page Template
 *
 * Structure:
 * - Title (component name)
 * - Subtitle (if any)
 * - Description (component description with basic usage code)
 * - Stories (all stories including Default)
 * - APIs (ArgTypes table at the end)
 *
 * Note: Primary/Canvas is intentionally omitted to avoid duplication
 * since Default story is already shown in the Stories section
 */
export const DocsPage = () => (
  <>
    <Title />
    <Subtitle />
    <Description />
    <Stories />
    <Heading>APIs</Heading>
    <ArgTypes />
  </>
);
