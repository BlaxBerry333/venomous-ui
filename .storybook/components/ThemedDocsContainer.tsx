import { DocsContainer, type DocsContainerProps } from "@storybook/blocks";
import { addons } from "@storybook/preview-api";
import { useEffect, useState } from "react";
import { DARK_MODE_EVENT_NAME } from "storybook-dark-mode";

import { storybookDarkTheme, storybookLightTheme } from "../manager";

/**
 * Custom DocsContainer that responds to dark mode changes
 * Also syncs dark class to html element for CSS variable switching
 */
export const ThemedDocsContainer = (props: DocsContainerProps) => {
  const [isDark, setIsDark] = useState(true); // default to dark

  useEffect(() => {
    const channel = addons.getChannel();
    channel.on(DARK_MODE_EVENT_NAME, setIsDark);
    return () => channel.off(DARK_MODE_EVENT_NAME, setIsDark);
  }, []);

  // Sync dark class to html element for CSS variable dark mode
  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [isDark]);

  return <DocsContainer {...props} theme={isDark ? storybookDarkTheme : storybookLightTheme} />;
};
