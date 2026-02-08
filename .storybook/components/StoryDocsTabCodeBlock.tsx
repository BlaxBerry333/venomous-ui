import { Source } from "@storybook/blocks";
import { useState } from "react";
import { SupportedLanguage } from "storybook/internal/components";

interface DocsTabCodeBlockProps {
  source?: {
    dark?: boolean;
  };
  tabs: Array<{
    icon?: React.ReactNode;
    label: string;
    language: string;
    code: string;
  }>;
}

/**
 * Code block with tabs.
 *
 * Basically used in Storybook docs to replace the Storybook codeblock component <Source />.
 */
export default function StoryDocsTabCodeBlock({ source, tabs }: DocsTabCodeBlockProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (tabs.length === 0) {
    return null;
  }

  return (
    <div style={{ marginBottom: "1.5rem" }}>
      {/* Tab buttons */}
      <div style={{ display: "flex", gap: "0" }}>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            onClick={() => setActiveIndex(index)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "4px",
              padding: "8px 16px",
              border: "none",
              borderBottomWidth: "3px",
              borderBottomStyle: "solid",
              borderBottomColor: activeIndex === index ? undefined : "transparent",
              background: "transparent",
              color: "inherit",
              opacity: activeIndex === index ? 1 : 0.5,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code content */}
      <div style={{ marginTop: "-24px" }}>
        <Source
          language={tabs[activeIndex].language as SupportedLanguage}
          dark={source?.dark ?? true}
          code={tabs[activeIndex].code}
        />
      </div>
    </div>
  );
}
