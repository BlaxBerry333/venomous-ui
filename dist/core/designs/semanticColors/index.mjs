const F = {
  /**
   * Success - Green tones for positive actions, confirmations, completions
   */
  success: {
    light: "#81C784",
    // Green 300 - backgrounds, hover
    main: "#4CAF50",
    // Green 500 - primary
    dark: "#388E3C"
    // Green 700 - borders, active
  },
  /**
   * Error - Red tones for errors, destructive actions, alerts
   */
  error: {
    light: "#E57373",
    // Red 300
    main: "#F44336",
    // Red 500
    dark: "#D32F2F"
    // Red 700
  },
  /**
   * Warning - Amber/Orange tones for warnings, cautions, attention
   */
  warning: {
    light: "#FFD54F",
    // Amber 300
    main: "#FFC107",
    // Amber 500
    dark: "#FFA000"
    // Amber 700
  },
  /**
   * Info - Cyan/Blue tones for information, tips, neutral highlights
   */
  info: {
    light: "#4DD0E1",
    // Cyan 300
    main: "#00BCD4",
    // Cyan 500
    dark: "#0097A7"
    // Cyan 700
  }
};
export {
  F as SEMANTIC_COLORS
};
