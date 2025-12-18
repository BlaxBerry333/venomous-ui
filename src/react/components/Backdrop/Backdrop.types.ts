import type { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

import type { ITheme } from "@/core/theme";

export interface BackdropProps extends PropsWithChildren {
  /**
   * Whether the backdrop is visible.
   * Controls the visibility of the backdrop (controlled mode).
   */
  isOpen: boolean;

  /**
   * Callback fired when the backdrop is clicked.
   * Typically used to close the modal/drawer.
   * Note: Clicking on children does not trigger this callback.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;

  /**
   * Custom styles, supports object or theme callback function.
   */
  style?: CSSProperties | ((theme: ITheme) => CSSProperties);

  /**
   * Additional CSS class name.
   */
  className?: string;
}
