import { COMPONENT_NAMES, CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "../Checkbox";
import { Input } from "../Input";
import { Switch } from "../Switch";
import { Textarea } from "../Textarea";
import { FormField } from "./index";

const classes = CSS_CLASSES.formField;

describe("FormField", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders with default props", () => {
      render(
        <FormField label="Email">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByText("Email")).toBeInTheDocument();
      expect(screen.getByTestId("input")).toBeInTheDocument();
    });

    it("renders children", () => {
      render(
        <FormField label="Name">
          <Input placeholder="Enter name" />
        </FormField>,
      );

      expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
    });

    it("renders without label", () => {
      render(
        <FormField>
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input")).toBeInTheDocument();
      expect(screen.queryByRole("label")).not.toBeInTheDocument();
    });
  });

  // Label
  describe("label prop", () => {
    it("renders label text", () => {
      render(
        <FormField label="Username">
          <Input />
        </FormField>,
      );

      expect(screen.getByText("Username")).toBeInTheDocument();
    });

    it("renders label with htmlFor linked to input", () => {
      render(
        <FormField label="Email">
          <Input data-testid="input" />
        </FormField>,
      );

      const label = screen.getByText("Email");
      const input = screen.getByTestId("input");

      expect(label).toHaveAttribute("for", input.getAttribute("id"));
    });
  });

  // Required
  describe("required prop", () => {
    it("does not show required indicator by default", () => {
      render(
        <FormField label="Email">
          <Input />
        </FormField>,
      );

      expect(screen.queryByText("*")).not.toBeInTheDocument();
    });

    it("shows required indicator when required is true", () => {
      render(
        <FormField label="Email" required>
          <Input />
        </FormField>,
      );

      expect(screen.getByText("*")).toBeInTheDocument();
      expect(screen.getByText("*")).toHaveClass(classes.required);
    });
  });

  // Error message
  describe("error prop", () => {
    it("does not show error message by default", () => {
      render(
        <FormField label="Email">
          <Input />
        </FormField>,
      );

      expect(screen.queryByRole("alert")).not.toBeInTheDocument();
    });

    it("shows error message when error is provided", () => {
      render(
        <FormField label="Email" error="Invalid email address">
          <Input />
        </FormField>,
      );

      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
      expect(screen.getByRole("alert")).toBeInTheDocument();
    });

    it("applies error class when error is provided", () => {
      render(
        <FormField label="Email" error="Invalid email">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.states.error);
    });

    it("sets aria-describedby on input when error is provided", () => {
      render(
        <FormField label="Email" error="Invalid email">
          <Input data-testid="input" />
        </FormField>,
      );

      const input = screen.getByTestId("input");
      const errorId = input.getAttribute("aria-describedby");

      expect(errorId).toBeTruthy();
      expect(screen.getByRole("alert")).toHaveAttribute("id", errorId);
    });

    it("sets aria-invalid on input when error is provided", () => {
      render(
        <FormField label="Email" error="Invalid email">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input")).toHaveAttribute("aria-invalid", "true");
    });

    it("passes error prop to child Input component", () => {
      const inputClasses = CSS_CLASSES.input;
      render(
        <FormField label="Email" error="Invalid email">
          <Input data-testid="input" />
        </FormField>,
      );

      // The Input wrapper should have the error class
      const input = screen.getByTestId("input");
      const inputWrapper = input.closest(`.${inputClasses.wrapper}`);
      expect(inputWrapper).toHaveClass(inputClasses.states.error);
    });

    it("passes error prop to child Textarea component", () => {
      const textareaClasses = CSS_CLASSES.textarea;
      render(
        <FormField label="Bio" error="Bio is required">
          <Textarea data-testid="textarea" />
        </FormField>,
      );

      // The Textarea should have the error class
      const textarea = screen.getByTestId("textarea");
      expect(textarea).toHaveClass(textareaClasses.states.error);
    });
  });

  // Size prop
  describe("size prop", () => {
    it("applies sm size class", () => {
      render(
        <FormField label="Email" size="sm">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.sizes.sm);
    });

    it("applies md size class (default)", () => {
      render(
        <FormField label="Email" size="md">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.sizes.md);
    });

    it("applies lg size class", () => {
      render(
        <FormField label="Email" size="lg">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.sizes.lg);
    });
  });

  // Orientation prop
  describe("orientation prop", () => {
    it("applies vertical orientation class by default", () => {
      render(
        <FormField label="Email">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.orientations.vertical);
    });

    it("applies horizontal orientation class", () => {
      render(
        <FormField label="Email" orientation="horizontal">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.orientations.horizontal);
    });
  });

  // Control position prop
  describe("controlPosition prop", () => {
    it("does not apply control position class by default", () => {
      render(
        <FormField label="Remember me" orientation="horizontal">
          <Input data-testid="input" />
        </FormField>,
      );

      const root = screen.getByTestId("input").closest(`.${classes.root}`);
      expect(root).not.toHaveClass(classes.controlPositions.start);
      expect(root).not.toHaveClass(classes.controlPositions.end);
    });

    it("applies start control position class", () => {
      render(
        <FormField label="Remember me" orientation="horizontal" controlPosition="start">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.controlPositions.start);
    });

    it("applies end control position class", () => {
      render(
        <FormField label="Remember me" orientation="horizontal" controlPosition="end">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass(classes.controlPositions.end);
    });
  });

  // Auto ID injection
  describe("auto ID injection", () => {
    it("generates ID for child input when not provided", () => {
      render(
        <FormField label="Email">
          <Input data-testid="input" />
        </FormField>,
      );

      const input = screen.getByTestId("input");
      expect(input.getAttribute("id")).toBeTruthy();
    });

    it("preserves existing ID on child input", () => {
      render(
        <FormField label="Email">
          <Input id="my-custom-id" data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input")).toHaveAttribute("id", "my-custom-id");
    });

    it("links label to child input via htmlFor", () => {
      render(
        <FormField label="Email">
          <Input id="email-input" data-testid="input" />
        </FormField>,
      );

      expect(screen.getByText("Email")).toHaveAttribute("for", "email-input");
    });
  });

  // Custom className
  describe("className prop", () => {
    it("applies custom className", () => {
      render(
        <FormField label="Email" className="custom-class">
          <Input data-testid="input" />
        </FormField>,
      );

      expect(screen.getByTestId("input").closest(`.${classes.root}`)).toHaveClass("custom-class");
    });

    it("preserves default classes with custom className", () => {
      render(
        <FormField label="Email" className="custom-class">
          <Input data-testid="input" />
        </FormField>,
      );

      const root = screen.getByTestId("input").closest(`.${classes.root}`);
      expect(root).toHaveClass(classes.root);
      expect(root).toHaveClass("custom-class");
    });
  });

  // displayName
  describe("displayName", () => {
    it("has correct displayName", () => {
      expect(FormField.displayName).toBe(COMPONENT_NAMES.FormField);
    });
  });

  // Integration with form controls
  describe("integration with form controls", () => {
    it("works with Input component", () => {
      render(
        <FormField label="Email" error="Invalid">
          <Input type="email" data-testid="input" />
        </FormField>,
      );

      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("type", "email");
      expect(input).toHaveAttribute("aria-invalid", "true");
    });

    it("does not pass error prop to Checkbox", () => {
      render(
        <FormField label="Accept terms" error="You must accept">
          <Checkbox data-testid="checkbox" />
        </FormField>,
      );

      // Checkbox should not have error attribute on native input
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).not.toHaveAttribute("error");
    });

    it("does not pass error prop to Switch", () => {
      render(
        <FormField label="Enable notifications" error="Required">
          <Switch data-testid="switch" />
        </FormField>,
      );

      // Switch should not have error attribute on native input
      const switchInput = screen.getByTestId("switch");
      expect(switchInput).not.toHaveAttribute("error");
    });
  });

  // Tooltip
  describe("tooltip prop", () => {
    it("renders tooltip when both tooltip and tooltipIcon are provided", () => {
      render(
        <FormField label="Email" tooltip="Enter your email" tooltipIcon={<span data-testid="tip-icon">?</span>}>
          <Input />
        </FormField>,
      );

      expect(screen.getByTestId("tip-icon")).toBeInTheDocument();
      expect(screen.getByTestId("tip-icon").closest(`.${classes.tooltipTrigger}`)).toBeInTheDocument();
    });

    it("does not render tooltip when only tooltip is provided without tooltipIcon", () => {
      render(
        <FormField label="Email" tooltip="Enter your email">
          <Input />
        </FormField>,
      );

      expect(document.querySelector(`.${classes.tooltipTrigger}`)).toBeNull();
    });
  });

  // Non-element children
  describe("non-element children", () => {
    it("renders plain text children without cloning", () => {
      render(<FormField label="Field">plain text</FormField>);
      expect(screen.getByText("plain text")).toBeInTheDocument();
    });
  });
});
