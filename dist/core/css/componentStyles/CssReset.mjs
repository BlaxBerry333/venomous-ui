import { DESIGN_TOKENS as e } from "../../designs/index.mjs";
const o = `
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin and padding */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul, ol elements */
ul,
ol {
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: ${e.lineHeights.medium};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Set shorter line heights on headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: ${e.lineHeights.small};
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

/* Remove default button styles */
button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Improve text rendering */
body {
  text-rendering: optimizeSpeed;
}

/* Remove textarea resize handle */
textarea {
  resize: vertical;
}

/* Balance text wrapping on headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  text-wrap: balance;
}

/* Improve paragraph readability */
p {
  text-wrap: pretty;
}
`.trim();
export {
  o as CSS_RESET_CSS
};
