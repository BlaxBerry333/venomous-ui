import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it } from "vitest";
import Input from "./Input.vue";

const classes = CSS_CLASSES.input;

describe("Input", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      const { container } = render(Input);
      const input = container.querySelector(`.${classes.root}`) as HTMLInputElement;

      expect(input).toBeInTheDocument();
      expect(input.parentElement).toHaveClass(classes.wrapper);
      expect(input.parentElement).toHaveClass(classes.sizes.md);
    });

    it("renders input element", () => {
      render(Input, { props: { placeholder: "Enter text" } });
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });
  });

  describe("type prop", () => {
    it("renders text type by default", () => {
      const { container } = render(Input);
      const input = container.querySelector("input") as HTMLInputElement;
      expect(input).toHaveAttribute("type", "text");
    });

    it("renders password type", () => {
      const { container } = render(Input, { props: { type: "password" } });
      expect(container.querySelector("input")).toHaveAttribute("type", "password");
    });

    it("renders email type", () => {
      const { container } = render(Input, { props: { type: "email" } });
      expect(container.querySelector("input")).toHaveAttribute("type", "email");
    });

    it("renders number type", () => {
      const { container } = render(Input, { props: { type: "number" } });
      expect(container.querySelector("input")).toHaveAttribute("type", "number");
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      const { container } = render(Input, { props: { size: "sm" } });
      expect(container.querySelector(`.${classes.wrapper}`)).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      const { container } = render(Input, { props: { size: "md" } });
      expect(container.querySelector(`.${classes.wrapper}`)).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      const { container } = render(Input, { props: { size: "lg" } });
      expect(container.querySelector(`.${classes.wrapper}`)).toHaveClass(classes.sizes.lg);
    });
  });

  describe("prefix and suffix", () => {
    it("renders prefix slot", () => {
      const { container } = render(Input, {
        slots: { prefix: '<span data-testid="prefix">$</span>' },
      });
      expect(screen.getByTestId("prefix")).toBeInTheDocument();
      expect(container.querySelector(`.${classes.prefix}`)).toBeInTheDocument();
    });

    it("renders suffix slot", () => {
      const { container } = render(Input, {
        slots: { suffix: '<span data-testid="suffix">.00</span>' },
      });
      expect(screen.getByTestId("suffix")).toBeInTheDocument();
      expect(container.querySelector(`.${classes.suffix}`)).toBeInTheDocument();
    });

    it("renders both prefix and suffix", () => {
      render(Input, {
        slots: {
          prefix: '<span data-testid="prefix">$</span>',
          suffix: '<span data-testid="suffix">.00</span>',
        },
      });
      expect(screen.getByTestId("prefix")).toBeInTheDocument();
      expect(screen.getByTestId("suffix")).toBeInTheDocument();
    });
  });

  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      const { container } = render(Input);
      expect(container.querySelector("input")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      const { container } = render(Input, { props: { disabled: true } });
      expect(container.querySelector("input")).toBeDisabled();
      expect(container.querySelector(`.${classes.wrapper}`)).toHaveClass(classes.states.disabled);
    });
  });

  describe("readOnly prop", () => {
    it("is not readOnly by default", () => {
      const { container } = render(Input);
      expect(container.querySelector("input")).not.toHaveAttribute("readonly");
    });

    it("is readOnly when readOnly prop is true", () => {
      const { container } = render(Input, { props: { readOnly: true } });
      expect(container.querySelector("input")).toHaveAttribute("readonly");
    });
  });

  describe("error prop", () => {
    it("does not have error class by default", () => {
      const { container } = render(Input);
      expect(container.querySelector(`.${classes.wrapper}`)).not.toHaveClass(classes.states.error);
    });

    it("applies error class when error prop is true", () => {
      const { container } = render(Input, { props: { error: true } });
      expect(container.querySelector(`.${classes.wrapper}`)).toHaveClass(classes.states.error);
    });

    it("sets aria-invalid when error prop is true", () => {
      const { container } = render(Input, { props: { error: true } });
      expect(container.querySelector("input")).toHaveAttribute("aria-invalid", "true");
    });
  });

  describe("className prop", () => {
    it("applies custom className to wrapper", () => {
      const { container } = render(Input, { props: { className: "custom-class" } });
      expect(container.querySelector(`.${classes.wrapper}`)).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      const { container } = render(Input, { props: { className: "custom-class" } });
      const wrapper = container.querySelector(`.${classes.wrapper}`);

      expect(wrapper).toHaveClass(classes.wrapper);
      expect(wrapper).toHaveClass("custom-class");
    });
  });

  describe("event handling", () => {
    it("emits update:modelValue when value changes", async () => {
      const user = userEvent.setup();
      const { container, emitted } = render(Input);

      await user.type(container.querySelector("input")!, "hello");

      expect(emitted()).toHaveProperty("update:modelValue");
    });
  });

  describe("HTML attributes", () => {
    it("passes through placeholder attribute", () => {
      render(Input, { props: { placeholder: "Enter text" } });
      expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
    });
  });

  describe("prefix and suffix visibility", () => {
    it("does not render prefix element when no prefix slot", () => {
      const { container } = render(Input);
      expect(container.querySelector(`.${classes.prefix}`)).toBeNull();
    });

    it("does not render suffix element when no suffix slot", () => {
      const { container } = render(Input);
      expect(container.querySelector(`.${classes.suffix}`)).toBeNull();
    });

    it("renders only prefix without suffix", () => {
      const { container } = render(Input, {
        slots: { prefix: "<span>$</span>" },
      });
      expect(container.querySelector(`.${classes.prefix}`)).toBeInTheDocument();
      expect(container.querySelector(`.${classes.suffix}`)).toBeNull();
    });

    it("renders only suffix without prefix", () => {
      const { container } = render(Input, {
        slots: { suffix: "<span>.00</span>" },
      });
      expect(container.querySelector(`.${classes.prefix}`)).toBeNull();
      expect(container.querySelector(`.${classes.suffix}`)).toBeInTheDocument();
    });
  });
});
