import { CSSProperties, ReactNode } from "react";

/**
 * Grid layout for previews
 */
interface StoryDocsGridProps {
  columns?: number;
  gap?: number;
  children: ReactNode;
}

export function StoryDocsGrid({ columns = 3, gap = 16, children }: StoryDocsGridProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `${gap}px`,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Flex layout for previews
 */
interface StoryDocsFlexProps {
  direction?: "row" | "column";
  gap?: number;
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  wrap?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

export function StoryDocsFlex({
  direction = "row",
  gap = 8,
  align = "center",
  justify = "flex-start",
  wrap = false,
  children,
  style,
}: StoryDocsFlexProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap: `${gap}px`,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap ? "wrap" : "nowrap",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Card container for groups
 */
interface StoryDocsCardProps {
  title?: string;
  children: ReactNode;
  style?: CSSProperties;
}

export function StoryDocsCard({ title, children, style }: StoryDocsCardProps) {
  return (
    <div
      className="sb-unstyled"
      style={{
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid var(--VENOMOUSUI-border-color, #e5e5e5)",
        backgroundColor: "var(--VENOMOUSUI-bg-secondary, #fafafa)",
        ...style,
      }}
    >
      {title && (
        <div
          style={{
            fontWeight: 600,
            marginBottom: "12px",
            fontSize: "14px",
            textAlign: "center",
          }}
        >
          {title}
        </div>
      )}
      {children}
    </div>
  );
}

/**
 * Color swatch preview
 */
interface ColorSwatchProps {
  color: string;
  name: string;
  showValue?: boolean;
  size?: number;
}

export function ColorSwatch({ color, name, showValue = true, size = 48 }: ColorSwatchProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderRadius: "8px",
          backgroundColor: color,
          marginBottom: "4px",
          border: "1px solid rgba(0,0,0,0.1)",
        }}
      />
      <div style={{ fontSize: "10px", opacity: 0.7 }}>{name}</div>
      {showValue && <div style={{ fontSize: "10px", fontFamily: "monospace" }}>{color}</div>}
    </div>
  );
}

/**
 * Color palette preview with light/main/dark variants
 */
interface ColorPaletteProps {
  name: string;
  colors: {
    light?: string;
    main: string;
    dark?: string;
    hover?: string;
    active?: string;
  };
}

export function ColorPalette({ name, colors }: ColorPaletteProps) {
  const variants = Object.entries(colors).filter(([_, v]) => v);
  return (
    <StoryDocsCard title={name}>
      <StoryDocsFlex gap={8} justify="center">
        {variants.map(([variant, color]) => (
          <ColorSwatch key={variant} color={color} name={variant} />
        ))}
      </StoryDocsFlex>
    </StoryDocsCard>
  );
}

/**
 * Spacing preview bar
 */
interface SpacingPreviewProps {
  name: string;
  value: string;
}

export function SpacingPreview({ name, value }: SpacingPreviewProps) {
  return (
    <StoryDocsFlex gap={16} align="center">
      <div style={{ width: "100px", fontFamily: "monospace", fontSize: "14px" }}>{name}</div>
      <div
        style={{
          width: value,
          height: "24px",
          backgroundColor: "var(--VENOMOUSUI-color-primary, #8b5cf6)",
          borderRadius: "4px",
          minWidth: "2px",
        }}
      />
      <div style={{ fontSize: "12px", fontFamily: "monospace", opacity: 0.7 }}>{value}</div>
    </StoryDocsFlex>
  );
}

/**
 * Border radius preview
 */
interface RadiusPreviewProps {
  name: string;
  value: string;
}

export function RadiusPreview({ name, value }: RadiusPreviewProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: "var(--VENOMOUSUI-color-primary, #8b5cf6)",
          borderRadius: value,
          margin: "0 auto 4px",
        }}
      />
      <div style={{ fontSize: "12px", fontWeight: 600 }}>{name}</div>
      <div style={{ fontSize: "10px", fontFamily: "monospace", opacity: 0.7 }}>{value}</div>
    </div>
  );
}

/**
 * Font size preview
 */
interface FontSizePreviewProps {
  name: string;
  value: string;
}

export function FontSizePreview({ name, value }: FontSizePreviewProps) {
  return (
    <StoryDocsFlex gap={16} align="baseline">
      <div style={{ width: "100px", fontFamily: "monospace", fontSize: "12px" }}>{name}</div>
      <div style={{ fontSize: value }}>The quick brown fox</div>
      <div style={{ fontSize: "12px", fontFamily: "monospace", opacity: 0.7 }}>{value}</div>
    </StoryDocsFlex>
  );
}

/**
 * Font weight preview
 */
interface FontWeightPreviewProps {
  name: string;
  value: string | number;
}

export function FontWeightPreview({ name, value }: FontWeightPreviewProps) {
  return (
    <StoryDocsFlex gap={16} align="center">
      <div style={{ width: "120px", fontFamily: "monospace", fontSize: "12px" }}>{name}</div>
      <div style={{ fontWeight: value as number, fontSize: "16px" }}>The quick brown fox</div>
      <div style={{ fontSize: "12px", fontFamily: "monospace", opacity: 0.7 }}>{value}</div>
    </StoryDocsFlex>
  );
}

/**
 * Shadow preview
 */
interface ShadowPreviewProps {
  name: string;
  value: string;
}

export function ShadowPreview({ name, value }: ShadowPreviewProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: "80px",
          height: "80px",
          backgroundColor: "var(--VENOMOUSUI-bg-primary, #ffffff)",
          borderRadius: "8px",
          boxShadow: value,
          margin: "0 auto 8px",
        }}
      />
      <div style={{ fontSize: "12px", fontWeight: 600 }}>{name}</div>
    </div>
  );
}

/**
 * Section container with title
 */
interface StoryDocsSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function StoryDocsSection({ title, description, children }: StoryDocsSectionProps) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div style={{ marginBottom: "8px", fontWeight: 600, fontSize: "16px", color: "inherit" }}>{title}</div>
      {description && (
        <div style={{ fontSize: "14px", opacity: 0.7, marginBottom: "16px", color: "inherit" }}>{description}</div>
      )}
      {children}
    </div>
  );
}

/**
 * Mode container (light/dark)
 */
interface ModeContainerProps {
  mode: "light" | "dark";
  children: ReactNode;
}

export function ModeContainer({ mode, children }: ModeContainerProps) {
  const isLight = mode === "light";
  return (
    <div
      style={{
        padding: "24px",
        borderRadius: "8px",
        backgroundColor: isLight ? "#ffffff" : "#0a0a0a",
        border: isLight ? "1px solid #e0e0e0" : "none",
        marginBottom: "16px",
        color: isLight ? "#000000" : "#ffffff",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: 600,
          marginBottom: "16px",
        }}
      >
        {isLight ? "Light Mode" : "Dark Mode"}
      </div>
      {children}
    </div>
  );
}

/**
 * Table component for Storybook docs
 */
interface StoryDocsTableProps {
  headers: string[];
  rows: string[][];
}

export function StoryDocsTable({ headers, rows }: StoryDocsTableProps) {
  return (
    <div
      style={{
        overflowX: "auto",
        borderRadius: "8px",
        border: "1px solid var(--VENOMOUSUI-border-color, #e5e5e5)",
      }}
    >
      <table
        style={{
          width: "100%",
          margin: 0,
          borderCollapse: "collapse",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr
            style={{
              backgroundColor: "var(--VENOMOUSUI-bg-secondary, #fafafa)",
              borderBottom: "1px solid var(--VENOMOUSUI-border-color, #e5e5e5)",
            }}
          >
            {headers.map((header) => (
              <th
                key={header}
                style={{
                  padding: "12px 16px",
                  textAlign: "left",
                  fontWeight: 600,
                }}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={row.join("-")}
              style={{
                borderBottom: index < rows.length - 1 ? "1px solid var(--VENOMOUSUI-border-color, #e5e5e5)" : "none",
              }}
            >
              {row.map((cell) => (
                <td
                  key={cell}
                  style={{
                    padding: "10px 16px",
                    fontFamily: "monospace",
                    fontSize: "13px",
                  }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
