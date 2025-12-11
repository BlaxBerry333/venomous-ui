import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { COMPONENT_NAMES } from "@/core/constants";

import CssReset from "./CssReset";

describe("CssReset", () => {
  it("renders without crashing", () => {
    const { container } = render(<CssReset />);
    expect(container).toBeDefined();
  });

  it("renders null (no visible output)", () => {
    const { container } = render(<CssReset />);
    expect(container.firstChild).toBeNull();
  });

  it("has correct displayName", () => {
    expect(CssReset.displayName).toBe(COMPONENT_NAMES.CssReset);
  });

  it("injects CSS into document head", () => {
    render(<CssReset />);
    const styleElement = document.querySelector(`style[data-${COMPONENT_NAMES.CssReset}]`);
    expect(styleElement).not.toBeNull();
  });
});
