"use client";

import React from "react";

import { COMPONENT_NAMES } from "@/core/constants";
import { CSS_RESET_CSS } from "@/core/css";
import { useStyleInjection } from "@/react/hooks";

const CssReset = React.memo(() => {
  /**
   * inject component css
   */
  useStyleInjection(COMPONENT_NAMES.CssReset, CSS_RESET_CSS);

  return null;
});

CssReset.displayName = COMPONENT_NAMES.CssReset;

export default CssReset;
