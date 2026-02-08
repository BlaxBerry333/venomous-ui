import { CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Breadcrumb from "./Breadcrumb.vue";
import BreadcrumbEllipsis from "./BreadcrumbEllipsis.vue";
import BreadcrumbItem from "./BreadcrumbItem.vue";

const classes = CSS_CLASSES.breadcrumb;

describe("Breadcrumb", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const nav = document.querySelector("nav");
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveClass(classes.root);
      expect(nav).toHaveAttribute("aria-label", "Breadcrumb");
    });

    it("renders ol list inside nav", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      expect(document.querySelector("ol")).toHaveClass(classes.list);
    });

    it("renders multiple items with separators", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Docs</BreadcrumbItem>
            <BreadcrumbItem>Guide</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      expect(screen.getByText("Home")).toBeInTheDocument();
      expect(screen.getByText("Docs")).toBeInTheDocument();
      expect(screen.getByText("Guide")).toBeInTheDocument();

      // 2 separators for 3 items
      const separators = document.querySelectorAll(`.${classes.separator}`);
      expect(separators).toHaveLength(2);
    });

    it("renders empty breadcrumb when no children provided", () => {
      render({
        components: { Breadcrumb },
        template: `<Breadcrumb />`,
      });

      const nav = document.querySelector("nav");
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveClass(classes.root);

      const separators = document.querySelectorAll(`.${classes.separator}`);
      expect(separators).toHaveLength(0);
    });
  });

  describe("separator prop", () => {
    it("uses / as default separator", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>A</BreadcrumbItem>
            <BreadcrumbItem>B</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const separator = document.querySelector(`.${classes.separator}`);
      expect(separator).toHaveTextContent("/");
    });

    it("uses custom string separator", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb separator=">">
            <BreadcrumbItem>A</BreadcrumbItem>
            <BreadcrumbItem>B</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const separator = document.querySelector(`.${classes.separator}`);
      expect(separator).toHaveTextContent(">");
    });

    it("uses custom separator slot", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <template #separator><span data-testid="custom-sep">→</span></template>
            <BreadcrumbItem>A</BreadcrumbItem>
            <BreadcrumbItem>B</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      expect(screen.getByTestId("custom-sep")).toBeInTheDocument();
    });

    it("separators have aria-hidden", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>A</BreadcrumbItem>
            <BreadcrumbItem>B</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const separatorLi = document.querySelector(`[aria-hidden="true"]`);
      expect(separatorLi).toBeInTheDocument();
    });
  });

  describe("BreadcrumbItem", () => {
    it("renders text as span when no href", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const text = document.querySelector(`.${classes.text}`);
      expect(text?.tagName).toBe("SPAN");
      expect(text).toHaveTextContent("Home");
    });

    it("renders link when href is provided", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem href="/home">Home</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const link = document.querySelector(`.${classes.link}`);
      expect(link?.tagName).toBe("A");
      expect(link).toHaveAttribute("href", "/home");
    });

    it("renders span with aria-current when isCurrentPage", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>Current</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const text = document.querySelector(`.${classes.textCurrent}`);
      expect(text).toBeInTheDocument();
      expect(text).toHaveAttribute("aria-current", "page");
    });

    it("renders span instead of link when isCurrentPage even with href", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem href="/page" isCurrentPage>Current</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      expect(document.querySelector("a")).toBeNull();
      expect(document.querySelector(`.${classes.text}`)).toBeInTheDocument();
    });

    it("renders disabled item as span with aria-disabled", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem href="/page" disabled>Disabled</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      expect(document.querySelector("a")).toBeNull();
      const text = document.querySelector(`.${classes.text}`);
      expect(text).toHaveAttribute("aria-disabled", "true");

      const li = document.querySelector(`.${classes.itemDisabled}`);
      expect(li).toBeInTheDocument();
    });
  });

  describe("BreadcrumbEllipsis", () => {
    it("renders ellipsis with default character", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem, BreadcrumbEllipsis },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbEllipsis />
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const ellipsis = document.querySelector(`.${classes.ellipsis}`);
      expect(ellipsis).toBeInTheDocument();
      expect(ellipsis).toHaveTextContent("…");
    });

    it("renders ellipsis with custom children", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem, BreadcrumbEllipsis },
        template: `
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbEllipsis>
              <span data-testid="custom-ellipsis">...</span>
            </BreadcrumbEllipsis>
            <BreadcrumbItem>Current</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      expect(screen.getByTestId("custom-ellipsis")).toBeInTheDocument();
    });

    it("ellipsis has presentation role", () => {
      render({
        components: { Breadcrumb, BreadcrumbEllipsis },
        template: `
          <Breadcrumb>
            <BreadcrumbEllipsis />
          </Breadcrumb>
        `,
      });

      const ellipsis = document.querySelector(`.${classes.ellipsis}`);
      expect(ellipsis).toHaveAttribute("role", "presentation");
    });
  });

  describe("className prop", () => {
    it("applies custom className to Breadcrumb", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb className="custom">
            <BreadcrumbItem>Home</BreadcrumbItem>
          </Breadcrumb>
        `,
      });

      const nav = document.querySelector("nav");
      expect(nav).toHaveClass("custom");
      expect(nav).toHaveClass(classes.root);
    });
  });

  describe("flattenChildren", () => {
    it("handles v-for generated items", () => {
      render({
        components: { Breadcrumb, BreadcrumbItem },
        template: `
          <Breadcrumb>
            <BreadcrumbItem v-for="item in items" :key="item">{{ item }}</BreadcrumbItem>
          </Breadcrumb>
        `,
        data() {
          return { items: ["A", "B", "C"] };
        },
      });

      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
      expect(screen.getByText("C")).toBeInTheDocument();

      // 2 separators for 3 items
      const separators = document.querySelectorAll(`.${classes.separator}`);
      expect(separators).toHaveLength(2);
    });
  });
});
