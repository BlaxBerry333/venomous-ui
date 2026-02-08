import {
  ArgTypes,
  Description,
  DocsContext,
  Heading,
  PureArgsTable,
  Stories,
  Subtitle,
  Title,
} from "@storybook/blocks";
import type { FC } from "react";
import { Fragment, useContext } from "react";

interface ArgType {
  name?: string;
  description?: string;
  table?: {
    category?: string;
    disable?: boolean;
    type?: { summary?: string; detail?: string };
    defaultValue?: { summary?: string; detail?: string };
  };
}

interface SubComponentEntry {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: FC<any>;
  argTypes?: Record<string, ArgType>;
}

/**
 * Custom Docs Page Template
 *
 * Structure:
 * - Title (component name)
 * - Subtitle (if any)
 * - Description (component description with basic usage code)
 * - Stories (all stories including Default)
 * - APIs (ArgTypes table at the end)
 *   - For compound components, sub-component ArgTypes are rendered after the main component
 *
 * Note: Primary/Canvas is intentionally omitted to avoid duplication
 * since Default story is already shown in the Stories section
 */
export const DocsPage = () => {
  const context = useContext(DocsContext);
  const story = context.storyById();
  const subcomponents: SubComponentEntry[] | undefined = story?.parameters?.docs?.subcomponents;

  return (
    <>
      <Title />
      <Subtitle />
      <Description />

      <Stories />

      <Heading>APIs</Heading>
      <ArgTypes />
      {subcomponents?.map((sub) => (
        <Fragment key={sub.name}>
          <Heading>{sub.name}</Heading>
          {sub.component ? (
            <ArgTypes of={sub.component} />
          ) : sub.argTypes ? (
            <PureArgsTable rows={sub.argTypes} />
          ) : null}
        </Fragment>
      ))}
    </>
  );
};
