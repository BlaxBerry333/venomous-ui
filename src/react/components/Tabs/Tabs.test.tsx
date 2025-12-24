import { fireEvent, render, screen } from "@testing-library/react";
import React, { useRef } from "react";
import { describe, expect, it, vi } from "vitest";

import { COMPONENT_NAMES, TABS_CSS_CLASS_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";

import { Tabs } from "./index";

const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

function RefTestWrapper({ onRef }: { onRef: (el: HTMLDivElement | null) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    onRef(ref.current);
  }, [onRef]);
  return (
    <ThemeProvider>
      <Tabs ref={ref} defaultValue="tab1">
        <Tabs.List>
          <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
      </Tabs>
    </ThemeProvider>
  );
}

describe("Tabs", () => {
  describe("Basic Rendering", () => {
    it("renders tabs with list and panels", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toBeInTheDocument();
      expect(screen.getAllByRole("tab")).toHaveLength(2);
      expect(screen.getByText("Tab 1")).toBeInTheDocument();
      expect(screen.getByText("Tab 2")).toBeInTheDocument();
      expect(screen.getByText("Panel 1")).toBeInTheDocument();
    });

    it("applies root className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.root.className);
    });

    it("has correct displayName", () => {
      expect(Tabs.displayName).toBe(COMPONENT_NAMES.Tabs);
    });

    it("forwards ref to root element", () => {
      let refElement: HTMLDivElement | null = null;
      render(<RefTestWrapper onRef={(el) => (refElement = el)} />);
      expect(refElement).toBeInstanceOf(HTMLDivElement);
      expect(refElement).toHaveClass(TABS_CSS_CLASS_NAMES.root.className);
    });
  });

  describe("Uncontrolled Mode", () => {
    it("shows first tab panel by default when defaultValue is set", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByText("Panel 1")).toBeInTheDocument();
      expect(screen.queryByText("Panel 2")).not.toBeInTheDocument();
    });

    it("switches tabs when clicked", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      fireEvent.click(screen.getByText("Tab 2"));

      expect(screen.queryByText("Panel 1")).not.toBeInTheDocument();
      expect(screen.getByText("Panel 2")).toBeInTheDocument();
    });
  });

  describe("Controlled Mode", () => {
    it("respects controlled value", () => {
      renderWithTheme(
        <Tabs value="tab2">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.queryByText("Panel 1")).not.toBeInTheDocument();
      expect(screen.getByText("Panel 2")).toBeInTheDocument();
    });

    it("calls onChange when tab is clicked", () => {
      const handleChange = vi.fn();
      renderWithTheme(
        <Tabs value="tab1" onChange={handleChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      fireEvent.click(screen.getByText("Tab 2"));
      expect(handleChange).toHaveBeenCalledWith("tab2");
    });
  });

  describe("Variants", () => {
    it("applies underline variant className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" variant="underline">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.variantUnderline.className);
    });

    it("applies enclosed variant className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" variant="enclosed">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.variantEnclosed.className);
    });

    it("applies pills variant className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" variant="pills">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.variantPills.className);
    });
  });

  describe("Sizes", () => {
    it("applies small size className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" size="small">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.sizeSmall.className);
    });

    it("applies medium size className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" size="medium">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.sizeMedium.className);
    });

    it("applies large size className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" size="large">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.sizeLarge.className);
    });
  });

  describe("Orientation", () => {
    it("applies horizontal orientation className by default", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.horizontal.className);
    });

    it("applies vertical orientation className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.vertical.className);
    });

    it("sets aria-orientation on tablist", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
    });
  });

  describe("Full Width", () => {
    it("applies fullWidth className when enabled", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" fullWidth>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.fullWidth.className);
    });
  });

  describe("Disabled State", () => {
    it("applies disabled className to root when all tabs are disabled", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" disabled>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass(TABS_CSS_CLASS_NAMES.disabled.className);
    });

    it("does not call onChange when all tabs are disabled", () => {
      const handleChange = vi.fn();
      renderWithTheme(
        <Tabs defaultValue="tab1" onChange={handleChange} disabled>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      fireEvent.click(screen.getByText("Tab 2"));
      expect(handleChange).not.toHaveBeenCalled();
    });

    it("applies disabled className to individual tab", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      const disabledTab = screen.getByText("Tab 2");
      expect(disabledTab).toHaveClass(TABS_CSS_CLASS_NAMES.tabDisabled.className);
    });

    it("does not switch to disabled tab when clicked", () => {
      const handleChange = vi.fn();
      renderWithTheme(
        <Tabs defaultValue="tab1" onChange={handleChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      fireEvent.click(screen.getByText("Tab 2"));
      expect(handleChange).not.toHaveBeenCalled();
    });
  });

  describe("Tab Component", () => {
    it("applies active className to selected tab", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      const activeTab = screen.getByText("Tab 1");
      const inactiveTab = screen.getByText("Tab 2");

      expect(activeTab).toHaveClass(TABS_CSS_CLASS_NAMES.tabActive.className);
      expect(inactiveTab).not.toHaveClass(TABS_CSS_CLASS_NAMES.tabActive.className);
    });

    it("renders StartIcon", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1" StartIcon={<span data-testid="start-icon">★</span>}>
              Tab 1
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("start-icon")).toBeInTheDocument();
    });

    it("renders EndIcon", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1" EndIcon={<span data-testid="end-icon">→</span>}>
              Tab 1
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("end-icon")).toBeInTheDocument();
    });

    it("has correct ARIA attributes", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      const activeTab = screen.getByText("Tab 1");
      const inactiveTab = screen.getByText("Tab 2");

      expect(activeTab).toHaveAttribute("role", "tab");
      expect(activeTab).toHaveAttribute("aria-selected", "true");
      expect(activeTab).toHaveAttribute("tabIndex", "0");

      expect(inactiveTab).toHaveAttribute("aria-selected", "false");
      expect(inactiveTab).toHaveAttribute("tabIndex", "-1");
    });
  });

  describe("Panel Component", () => {
    it("shows active panel", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByText("Panel 1")).toBeInTheDocument();
      expect(screen.queryByText("Panel 2")).not.toBeInTheDocument();
    });

    it("keeps panel mounted when keepMounted is true", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2" keepMounted>
            Panel 2
          </Tabs.Panel>
        </Tabs>,
      );

      // Panel 2 should be in the DOM but hidden
      const panel2 = screen.getByText("Panel 2");
      expect(panel2).toBeInTheDocument();
      expect(panel2).toHaveAttribute("hidden");
    });

    it("has correct ARIA attributes", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1" id="test-tabs">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      const panel = screen.getByRole("tabpanel");
      expect(panel).toHaveAttribute("role", "tabpanel");
      expect(panel).toHaveAttribute("aria-labelledby", "test-tabs-tab-tab1");
      expect(panel).toHaveAttribute("id", "test-tabs-panel-tab1");
    });
  });

  describe("Keyboard Navigation", () => {
    it("navigates with arrow keys in horizontal mode", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Panel 3</Tabs.Panel>
        </Tabs>,
      );

      const tablist = screen.getByRole("tablist");
      const tab1 = screen.getByText("Tab 1");
      const tab2 = screen.getByText("Tab 2");

      tab1.focus();
      expect(document.activeElement).toBe(tab1);

      fireEvent.keyDown(tablist, { key: "ArrowRight" });
      expect(document.activeElement).toBe(tab2);
    });

    it("navigates with arrow keys in vertical mode", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      const tablist = screen.getByRole("tablist");
      const tab1 = screen.getByText("Tab 1");
      const tab2 = screen.getByText("Tab 2");

      tab1.focus();
      fireEvent.keyDown(tablist, { key: "ArrowDown" });
      expect(document.activeElement).toBe(tab2);
    });

    it("wraps around when navigating past last tab", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
        </Tabs>,
      );

      const tablist = screen.getByRole("tablist");
      const tab1 = screen.getByText("Tab 1");
      const tab2 = screen.getByText("Tab 2");

      tab2.focus();
      fireEvent.keyDown(tablist, { key: "ArrowRight" });
      expect(document.activeElement).toBe(tab1);
    });

    it("navigates to first tab with Home key", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Panel 3</Tabs.Panel>
        </Tabs>,
      );

      const tablist = screen.getByRole("tablist");
      const tab1 = screen.getByText("Tab 1");
      const tab3 = screen.getByText("Tab 3");

      tab3.focus();
      fireEvent.keyDown(tablist, { key: "Home" });
      expect(document.activeElement).toBe(tab1);
    });

    it("navigates to last tab with End key", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Panel 3</Tabs.Panel>
        </Tabs>,
      );

      const tablist = screen.getByRole("tablist");
      const tab1 = screen.getByText("Tab 1");
      const tab3 = screen.getByText("Tab 3");

      tab1.focus();
      fireEvent.keyDown(tablist, { key: "End" });
      expect(document.activeElement).toBe(tab3);
    });

    it("skips disabled tabs when navigating", () => {
      renderWithTheme(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Panel 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Panel 3</Tabs.Panel>
        </Tabs>,
      );

      const tablist = screen.getByRole("tablist");
      const tab1 = screen.getByText("Tab 1");
      const tab3 = screen.getByText("Tab 3");

      tab1.focus();
      fireEvent.keyDown(tablist, { key: "ArrowRight" });
      expect(document.activeElement).toBe(tab3);
    });
  });

  describe("Custom Styling", () => {
    it("applies custom className", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" className="custom-tabs">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs")).toHaveClass("custom-tabs");
    });

    it("supports style as theme callback function", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1" style={(theme) => ({ padding: theme.spacing(4) })}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByTestId("tabs").style.padding).toBeTruthy();
    });
  });

  describe("Default Values", () => {
    it("has correct default prop values", () => {
      renderWithTheme(
        <Tabs data-testid="tabs" defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Panel 1</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getByTestId("tabs");
      expect(tabs).toHaveClass(TABS_CSS_CLASS_NAMES.variantUnderline.className);
      expect(tabs).toHaveClass(TABS_CSS_CLASS_NAMES.sizeMedium.className);
      expect(tabs).toHaveClass(TABS_CSS_CLASS_NAMES.horizontal.className);
      expect(tabs).not.toHaveClass(TABS_CSS_CLASS_NAMES.fullWidth.className);
      expect(tabs).not.toHaveClass(TABS_CSS_CLASS_NAMES.disabled.className);
    });
  });
});
