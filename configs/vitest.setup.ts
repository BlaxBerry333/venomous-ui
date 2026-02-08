import "@testing-library/jest-dom";

// Import CSS variables (jsdom doesn't parse CSS, but keeps import for consistency)
// import "@/core/styles/variables/index.css";

// jsdom doesn't parse CSS custom properties from imported stylesheets
// We need to manually set them for tests
document.documentElement.style.setProperty("--VENOMOUSUI-duration-normal", "200");
document.documentElement.style.setProperty("--VENOMOUSUI-spacing-sm", "8");
