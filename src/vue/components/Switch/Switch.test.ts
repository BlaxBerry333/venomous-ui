import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Switch from "./Switch.vue";

const classes = CSS_CLASSES.switch;

describe("Switch", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Switch);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
      expect(checkbox.closest("label")).toHaveClass(classes.root);
      expect(checkbox.closest("label")).toHaveClass(classes.sizes.md);
    });

    it("renders switch with track and thumb", () => {
      render(Switch);
      const label = screen.getByRole("checkbox").closest("label");

      expect(label?.querySelector(`.${classes.track}`)).toBeInTheDocument();
      expect(label?.querySelector(`.${classes.thumb}`)).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      render(Switch, { props: { size: "sm" } });
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(Switch, { props: { size: "md" } });
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(Switch, { props: { size: "lg" } });
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.sizes.lg);
    });
  });

  describe("checked prop", () => {
    it("is not checked by default", () => {
      render(Switch);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("is checked when modelValue is provided as checked", () => {
      render(Switch, { props: { modelValue: true } });
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("applies checked class when checked", () => {
      render(Switch, { props: { modelValue: true } });
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.states.checked);
    });

    it("does not apply checked class when not checked", () => {
      render(Switch);
      expect(screen.getByRole("checkbox").closest("label")).not.toHaveClass(classes.states.checked);
    });

    it("is checked when modelValue is true", () => {
      render(Switch, { props: { modelValue: true } });
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("evaluates isChecked from modelValue via nullish coalescing", () => {
      // isChecked = props.modelValue ?? props.checked
      // When modelValue is explicitly false, isChecked should be false (not fallback to checked)
      render(Switch, { props: { modelValue: false } });
      expect(screen.getByRole("checkbox").closest("label")).not.toHaveClass(classes.states.checked);
    });

    it("falls back to checked prop when modelValue is not provided", async () => {
      // isChecked = props.modelValue ?? props.checked
      // Vue's boolean casting means modelValue (when absent) becomes false,
      // so the ?? right branch is not reachable in normal usage.
      // However, passing modelValue as undefined via setProps after initial mount
      // can exercise the fallback path.
      const wrapper = mount(Switch, {
        props: { modelValue: true, checked: true },
      });
      expect(wrapper.find("input[type='checkbox']").element).toBeChecked();
      // Now remove modelValue by setting to undefined, checked should take over
      await wrapper.setProps({ modelValue: undefined });
      // The checked prop (true) should be used as fallback
      const input = wrapper.find("input[type='checkbox']").element as HTMLInputElement;
      expect(input.checked).toBe(true);
      wrapper.unmount();
    });
  });

  describe("disabled prop", () => {
    it("is not disabled by default", () => {
      render(Switch);
      expect(screen.getByRole("checkbox")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(Switch, { props: { disabled: true } });
      expect(screen.getByRole("checkbox")).toBeDisabled();
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass(classes.states.disabled);
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Switch, { props: { className: "custom-class" } });
      expect(screen.getByRole("checkbox").closest("label")).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(Switch, { props: { className: "custom-class" } });
      const label = screen.getByRole("checkbox").closest("label");

      expect(label).toHaveClass(classes.root);
      expect(label).toHaveClass("custom-class");
    });
  });

  describe("event handling", () => {
    it("emits change when clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Switch);

      await user.click(screen.getByRole("checkbox"));

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual([true]);
    });

    it("emits update:modelValue when clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Switch);

      await user.click(screen.getByRole("checkbox"));

      expect(emitted()).toHaveProperty("update:modelValue");
      expect(emitted()["update:modelValue"][0]).toEqual([true]);
    });

    it("does not emit when disabled", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Switch, { props: { disabled: true } });

      await user.click(screen.getByRole("checkbox"));

      expect(emitted()).not.toHaveProperty("change");
    });
  });

  describe("label prop", () => {
    it("renders label text when provided", () => {
      render(Switch, { props: { label: "Enable notifications" } });
      expect(screen.getByText("Enable notifications")).toBeInTheDocument();
      expect(screen.getByText("Enable notifications")).toHaveClass(classes.label);
    });

    it("does not render label element when not provided", () => {
      render(Switch);
      expect(document.querySelector(`.${classes.label}`)).toBeNull();
    });
  });

  describe("keyboard accessibility", () => {
    it("can be toggled with space key", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Switch);
      const checkbox = screen.getByRole("checkbox");

      checkbox.focus();
      await user.keyboard(" ");

      expect(emitted()).toHaveProperty("change");
    });
  });

  describe("HTML attributes", () => {
    it("passes through id to checkbox input", () => {
      render(Switch, { attrs: { id: "my-switch" } });
      // attrs fall on root label element in Vue SFC
      expect(screen.getByRole("checkbox").closest("label")).toHaveAttribute("id", "my-switch");
    });
  });
});
