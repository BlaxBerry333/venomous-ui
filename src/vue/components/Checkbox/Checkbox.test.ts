import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Checkbox from "./Checkbox.vue";

const classes = CSS_CLASSES.checkbox;

describe("Checkbox", () => {
  describe("rendering", () => {
    it("renders with default props", () => {
      render(Checkbox);
      const checkbox = screen.getByRole("checkbox");

      expect(checkbox).toBeInTheDocument();
      expect(checkbox).toHaveAttribute("type", "checkbox");
    });

    it("renders checkbox element", () => {
      render(Checkbox);
      expect(screen.getByRole("checkbox")).toBeInTheDocument();
    });

    it("renders label when provided", () => {
      render(Checkbox, { props: { label: "Accept terms" } });
      expect(screen.getByText("Accept terms")).toBeInTheDocument();
    });
  });

  describe("size prop", () => {
    it("applies sm size class", () => {
      render(Checkbox, { props: { size: "sm", label: "Small" } });
      expect(screen.getByText("Small").closest("label")).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(Checkbox, { props: { size: "md", label: "Medium" } });
      expect(screen.getByText("Medium").closest("label")).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(Checkbox, { props: { size: "lg", label: "Large" } });
      expect(screen.getByText("Large").closest("label")).toHaveClass(classes.sizes.lg);
    });
  });

  describe("checked prop", () => {
    it("is not checked by default", () => {
      render(Checkbox);
      expect(screen.getByRole("checkbox")).not.toBeChecked();
    });

    it("is checked when modelValue is true", () => {
      render(Checkbox, { props: { modelValue: true } });
      expect(screen.getByRole("checkbox")).toBeChecked();
    });

    it("applies checked class when checked", () => {
      render(Checkbox, { props: { modelValue: true, label: "Checked" } });
      expect(screen.getByText("Checked").closest("label")).toHaveClass(classes.states.checked);
    });

    it("evaluates isChecked from modelValue via nullish coalescing", () => {
      // isChecked = props.modelValue ?? props.checked
      // When modelValue is explicitly false, isChecked should be false
      render(Checkbox, { props: { modelValue: false } });
      expect(screen.getByRole("checkbox").closest("label")).not.toHaveClass(classes.states.checked);
    });

    it("falls back to checked prop when modelValue is not provided", async () => {
      // isChecked = props.modelValue ?? props.checked
      // Vue's boolean casting means modelValue (when absent) becomes false,
      // so the ?? right branch is not reachable in normal usage.
      // However, passing modelValue as undefined via setProps after initial mount
      // can exercise the fallback path.
      const wrapper = mount(Checkbox, {
        props: { modelValue: true, checked: true, label: "Fallback" },
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
      render(Checkbox);
      expect(screen.getByRole("checkbox")).not.toBeDisabled();
    });

    it("is disabled when disabled prop is true", () => {
      render(Checkbox, { props: { disabled: true, label: "Disabled" } });
      expect(screen.getByRole("checkbox")).toBeDisabled();
      expect(screen.getByText("Disabled").closest("label")).toHaveClass(classes.states.disabled);
    });
  });

  describe("custom icons", () => {
    it("renders in native mode by default", () => {
      render(Checkbox, { props: { label: "Native" } });
      expect(screen.getByText("Native").closest("label")).not.toHaveClass(classes.custom);
    });

    it("does not render control element in native mode", () => {
      render(Checkbox, { props: { label: "Native" } });
      expect(document.querySelector(`.${classes.control}`)).toBeNull();
    });

    it("renders in custom mode when icon slots provided", () => {
      render(Checkbox, {
        props: { label: "Custom" },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">✓</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });
      expect(screen.getByText("Custom").closest("label")).toHaveClass(classes.custom);
    });

    it("shows unchecked icon when not checked", () => {
      render(Checkbox, {
        slots: {
          checkedIcon: '<span data-testid="checked-icon">✓</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });
      expect(screen.getByTestId("unchecked-icon")).toBeInTheDocument();
    });

    it("shows checked icon when checked", () => {
      render(Checkbox, {
        props: { modelValue: true },
        slots: {
          checkedIcon: '<span data-testid="checked-icon">✓</span>',
          uncheckedIcon: '<span data-testid="unchecked-icon">○</span>',
        },
      });
      expect(screen.getByTestId("checked-icon")).toBeInTheDocument();
    });
  });

  describe("label slot", () => {
    it("renders slot content instead of label prop", () => {
      render(Checkbox, {
        slots: { default: '<span data-testid="slot-label">Custom label</span>' },
      });
      expect(screen.getByTestId("slot-label")).toBeInTheDocument();
    });

    it("does not render label element when no label prop or slot", () => {
      render(Checkbox);
      expect(document.querySelector(`.${classes.label}`)).toBeNull();
    });

    it("only renders input inside label when no label and no slot", () => {
      render(Checkbox);
      const label = screen.getByRole("checkbox").closest("label");
      // Should only contain the hidden input, no label span or control span
      expect(label?.querySelector(`.${classes.label}`)).toBeNull();
      expect(label?.querySelector(`.${classes.control}`)).toBeNull();
    });

    it("toggles label element based on label prop", async () => {
      // Exercise v-if="label || slots.default" both branches within same component
      const wrapper = mount(Checkbox, {
        props: { label: "Visible" },
      });
      // With label: label element exists
      expect(wrapper.find(`.${classes.label}`).exists()).toBe(true);

      // Remove label to exercise false branch
      await wrapper.setProps({ label: undefined });
      expect(wrapper.find(`.${classes.label}`).exists()).toBe(false);
      wrapper.unmount();
    });
  });

  describe("className prop", () => {
    it("applies custom className", () => {
      render(Checkbox, { props: { className: "custom-class", label: "Custom" } });
      expect(screen.getByText("Custom").closest("label")).toHaveClass("custom-class");
    });
  });

  describe("event handling", () => {
    it("emits change when clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Checkbox);

      await user.click(screen.getByRole("checkbox"));

      expect(emitted()).toHaveProperty("change");
      expect(emitted().change[0]).toEqual([true]);
    });

    it("emits update:modelValue when clicked", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Checkbox);

      await user.click(screen.getByRole("checkbox"));

      expect(emitted()).toHaveProperty("update:modelValue");
      expect(emitted()["update:modelValue"][0]).toEqual([true]);
    });

    it("does not emit when disabled", async () => {
      const user = userEvent.setup();
      const { emitted } = render(Checkbox, { props: { disabled: true } });

      await user.click(screen.getByRole("checkbox"));

      expect(emitted()).not.toHaveProperty("change");
    });
  });
});
