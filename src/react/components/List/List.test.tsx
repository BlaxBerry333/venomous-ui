import { fireEvent, render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { LIST_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";

import { List } from "./index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

function RefTestWrapper({ onRef }: { onRef: (el: HTMLUListElement | null) => void }) {
  const ref = useRef<HTMLUListElement>(null);
  React.useEffect(() => {
    onRef(ref.current);
  }, [onRef]);
  return (
    <ThemeProvider>
      <List ref={ref}>
        <List.Item>Item 1</List.Item>
      </List>
    </ThemeProvider>
  );
}

describe("List", () => {
  describe("Basic Rendering", () => {
    it("renders list with items", () => {
      renderWithTheme(
        <List>
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
        </List>,
      );

      expect(screen.getByText("Item 1")).toBeInTheDocument();
      expect(screen.getByText("Item 2")).toBeInTheDocument();
    });

    it("applies root className", () => {
      renderWithTheme(
        <List data-testid="list">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass(LIST_CSS_CLASS_NAMES.root.className);
    });

    it("has correct displayName", () => {
      expect((List as React.FC).displayName).toBe("List");
    });

    it("forwards ref to root element", () => {
      let refElement: HTMLUListElement | null = null;
      render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
      expect(refElement).toBeInstanceOf(HTMLUListElement);
      expect(refElement).toHaveClass(LIST_CSS_CLASS_NAMES.root.className);
    });

    it("renders as ul by default", () => {
      renderWithTheme(
        <List data-testid="list">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list").tagName).toBe("UL");
    });
  });

  describe("Polymorphic as prop", () => {
    it("renders as ol when specified", () => {
      renderWithTheme(
        <List as="ol" data-testid="list">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list").tagName).toBe("OL");
    });

    it("renders as div when specified", () => {
      renderWithTheme(
        <List as="div" data-testid="list">
          <List.Item as="div">Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list").tagName).toBe("DIV");
    });
  });

  describe("Spacing", () => {
    it("applies spacing none className by default", () => {
      renderWithTheme(
        <List data-testid="list">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass(LIST_CSS_CLASS_NAMES.spacingNone.className);
    });

    it("applies spacing small className", () => {
      renderWithTheme(
        <List data-testid="list" spacing="small">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass(LIST_CSS_CLASS_NAMES.spacingSmall.className);
    });

    it("applies spacing medium className", () => {
      renderWithTheme(
        <List data-testid="list" spacing="medium">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass(LIST_CSS_CLASS_NAMES.spacingMedium.className);
    });

    it("applies spacing large className", () => {
      renderWithTheme(
        <List data-testid="list" spacing="large">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass(LIST_CSS_CLASS_NAMES.spacingLarge.className);
    });
  });

  describe("Divider", () => {
    it("applies divider className when enabled", () => {
      renderWithTheme(
        <List data-testid="list" divider>
          <List.Item>Item 1</List.Item>
          <List.Item>Item 2</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass(LIST_CSS_CLASS_NAMES.divider.className);
    });

    it("does not apply divider className by default", () => {
      renderWithTheme(
        <List data-testid="list">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).not.toHaveClass(LIST_CSS_CLASS_NAMES.divider.className);
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      renderWithTheme(
        <List data-testid="list" className="custom-list">
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list")).toHaveClass("custom-list");
    });

    it("supports style as theme callback function", () => {
      renderWithTheme(
        <List data-testid="list" style={(theme) => ({ padding: theme.spacing(4) })}>
          <List.Item>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("list").style.padding).toBeTruthy();
    });
  });
});

describe("List.Item", () => {
  describe("Basic Rendering", () => {
    it("renders item content", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item">Item content</List.Item>
        </List>,
      );

      expect(screen.getByText("Item content")).toBeInTheDocument();
    });

    it("applies item className", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item">Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveClass(LIST_CSS_CLASS_NAMES.item.className);
    });

    it("renders as li by default", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item">Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("item").tagName).toBe("LI");
    });

    it("renders as div when specified", () => {
      renderWithTheme(
        <List as="div">
          <List.Item as="div" data-testid="item">
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item").tagName).toBe("DIV");
    });
  });

  describe("Interactive State", () => {
    it("applies interactive className when onClick is provided", () => {
      const handleClick = vi.fn();
      renderWithTheme(
        <List>
          <List.Item data-testid="item" onClick={handleClick}>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveClass(LIST_CSS_CLASS_NAMES.itemInteractive.className);
    });

    it("calls onClick when clicked", () => {
      const handleClick = vi.fn();
      renderWithTheme(
        <List>
          <List.Item onClick={handleClick}>Item 1</List.Item>
        </List>,
      );

      fireEvent.click(screen.getByText("Item 1"));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("does not call onClick when disabled", () => {
      const handleClick = vi.fn();
      renderWithTheme(
        <List>
          <List.Item onClick={handleClick} disabled>
            Item 1
          </List.Item>
        </List>,
      );

      fireEvent.click(screen.getByText("Item 1"));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it("has tabIndex when interactive", () => {
      const handleClick = vi.fn();
      renderWithTheme(
        <List>
          <List.Item data-testid="item" onClick={handleClick}>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveAttribute("tabIndex", "0");
    });
  });

  describe("Selected State", () => {
    it("applies selected className when selected", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item" selected>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveClass(LIST_CSS_CLASS_NAMES.itemSelected.className);
    });

    it("sets aria-selected when selected", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item" selected>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveAttribute("aria-selected", "true");
    });
  });

  describe("Disabled State", () => {
    it("applies disabled className when disabled", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item" disabled>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveClass(LIST_CSS_CLASS_NAMES.itemDisabled.className);
    });

    it("sets aria-disabled when disabled", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item" disabled>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveAttribute("aria-disabled", "true");
    });

    it("does not apply interactive className when disabled with onClick", () => {
      const handleClick = vi.fn();
      renderWithTheme(
        <List>
          <List.Item data-testid="item" onClick={handleClick} disabled>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).not.toHaveClass(LIST_CSS_CLASS_NAMES.itemInteractive.className);
    });
  });

  describe("Start/End Elements", () => {
    it("renders StartElement", () => {
      renderWithTheme(
        <List>
          <List.Item StartElement={<span data-testid="start">★</span>}>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("start")).toBeInTheDocument();
    });

    it("renders EndElement", () => {
      renderWithTheme(
        <List>
          <List.Item EndElement={<span data-testid="end">→</span>}>Item 1</List.Item>
        </List>,
      );

      expect(screen.getByTestId("end")).toBeInTheDocument();
    });

    it("applies start element className", () => {
      renderWithTheme(
        <List>
          <List.Item StartElement={<span>★</span>}>Item 1</List.Item>
        </List>,
      );

      const startContainer = document.querySelector(`.${LIST_CSS_CLASS_NAMES.itemStartElement.className}`);
      expect(startContainer).toBeInTheDocument();
    });

    it("applies end element className", () => {
      renderWithTheme(
        <List>
          <List.Item EndElement={<span>→</span>}>Item 1</List.Item>
        </List>,
      );

      const endContainer = document.querySelector(`.${LIST_CSS_CLASS_NAMES.itemEndElement.className}`);
      expect(endContainer).toBeInTheDocument();
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item" className="custom-item">
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item")).toHaveClass("custom-item");
    });

    it("supports style as theme callback function", () => {
      renderWithTheme(
        <List>
          <List.Item data-testid="item" style={(theme) => ({ padding: theme.spacing(4) })}>
            Item 1
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("item").style.padding).toBeTruthy();
    });
  });
});

describe("List.ItemText", () => {
  describe("Basic Rendering", () => {
    it("renders primary text", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText primary="Primary text" />
          </List.Item>
        </List>,
      );

      expect(screen.getByText("Primary text")).toBeInTheDocument();
    });

    it("renders secondary text", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText primary="Primary" secondary="Secondary text" />
          </List.Item>
        </List>,
      );

      expect(screen.getByText("Secondary text")).toBeInTheDocument();
    });

    it("renders children as primary when primary is not provided", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText>Child content</List.ItemText>
          </List.Item>
        </List>,
      );

      expect(screen.getByText("Child content")).toBeInTheDocument();
    });

    it("applies itemText className", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText data-testid="text" primary="Text" />
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("text")).toHaveClass(LIST_CSS_CLASS_NAMES.itemText.className);
    });
  });

  describe("Text Styling", () => {
    it("applies primary text className", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText primary="Primary" />
          </List.Item>
        </List>,
      );

      const primaryText = document.querySelector(`.${LIST_CSS_CLASS_NAMES.itemTextPrimary.className}`);
      expect(primaryText).toBeInTheDocument();
      expect(primaryText).toHaveTextContent("Primary");
    });

    it("applies secondary text className", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText primary="Primary" secondary="Secondary" />
          </List.Item>
        </List>,
      );

      const secondaryText = document.querySelector(`.${LIST_CSS_CLASS_NAMES.itemTextSecondary.className}`);
      expect(secondaryText).toBeInTheDocument();
      expect(secondaryText).toHaveTextContent("Secondary");
    });
  });

  describe("Ellipsis", () => {
    it("applies ellipsis className when ellipsis is greater than 0", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText data-testid="text" primary="Long text" ellipsis={1} />
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("text")).toHaveClass(LIST_CSS_CLASS_NAMES.itemTextEllipsis.className);
    });

    it("does not apply ellipsis className when ellipsis is 0", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText data-testid="text" primary="Text" ellipsis={0} />
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("text")).not.toHaveClass(LIST_CSS_CLASS_NAMES.itemTextEllipsis.className);
    });

    it("renders with ellipsis prop without error", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText primary="Long text" ellipsis={2} />
          </List.Item>
        </List>,
      );

      const primaryText = document.querySelector(`.${LIST_CSS_CLASS_NAMES.itemTextPrimary.className}`);
      expect(primaryText).toBeInTheDocument();
      expect(primaryText).toHaveTextContent("Long text");
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText data-testid="text" className="custom-text" primary="Text" />
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("text")).toHaveClass("custom-text");
    });

    it("supports style as theme callback function", () => {
      renderWithTheme(
        <List>
          <List.Item>
            <List.ItemText data-testid="text" style={(theme) => ({ padding: theme.spacing(1) })} primary="Text" />
          </List.Item>
        </List>,
      );

      expect(screen.getByTestId("text").style.padding).toBeTruthy();
    });
  });
});
