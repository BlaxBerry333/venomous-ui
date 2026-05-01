declare module '*.css';
declare module '*.scss';

declare module '*.css?inline' {
  const css: string;
  export default css;
}
declare module '*.scss?inline' {
  const css: string;
  export default css;
}
