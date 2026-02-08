import { CSS_CLASSES } from "@/core/constants";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { describe, expect, it, vi } from "vitest";
import { Tabs, TabsList, TabsPanel, TabsTab } from "./index";

const classes = CSS_CLASSES.tabs;

describe("Tabs", () => {
  // Basic rendering
  describe("rendering", () => {
    it("renders tabs with correct structure", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toBeInTheDocument();
      expect(screen.getAllByRole("tab")).toHaveLength(2);
      // Include hidden panels
      expect(screen.getAllByRole("tabpanel", { hidden: true })).toHaveLength(2);
    });

    it("applies default classes", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.root);
      expect(root).toHaveClass(classes.orientations.horizontal);
      expect(root).toHaveClass(classes.variants.line);
    });

    it("applies custom className to root", () => {
      render(
        <Tabs defaultValue="tab1" className="custom-tabs">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass("custom-tabs");
    });
  });

  // Orientation
  describe("orientation", () => {
    it("applies horizontal orientation by default", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "horizontal");
    });

    it("applies vertical orientation when specified", () => {
      render(
        <Tabs defaultValue="tab1" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.orientations.vertical);
      expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
    });
  });

  // Variants
  describe("variants", () => {
    it.each(["line", "pill"] as const)("applies %s variant class", (variant) => {
      render(
        <Tabs defaultValue="tab1" variant={variant}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.variants[variant]);
    });
  });

  // Active state
  describe("active state", () => {
    it("shows active tab content by default", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();
    });

    it("applies active class to active tab", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);
      expect(tabs[1]).not.toHaveClass(classes.tabStates.active);
    });

    it("sets correct aria-selected attribute", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    });
  });

  // Click interaction
  describe("click interaction", () => {
    it("switches tabs on click", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      await user.click(tabs[1]);

      expect(tabs[0]).not.toHaveClass(classes.tabStates.active);
      expect(tabs[1]).toHaveClass(classes.tabStates.active);
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });

    it("calls onValueChange when tab is clicked", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      render(
        <Tabs defaultValue="tab1" onValueChange={onValueChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      await user.click(screen.getAllByRole("tab")[1]);
      expect(onValueChange).toHaveBeenCalledWith("tab2");
    });
  });

  // Disabled state
  describe("disabled state", () => {
    it("applies disabled class to disabled tab", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      expect(tabs[1]).toHaveClass(classes.tabStates.disabled);
      expect(tabs[1]).toBeDisabled();
    });

    it("does not switch to disabled tab on click", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      render(
        <Tabs defaultValue="tab1" onValueChange={onValueChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      await user.click(screen.getAllByRole("tab")[1]);
      expect(onValueChange).not.toHaveBeenCalled();
    });
  });

  // Keyboard navigation
  describe("keyboard navigation", () => {
    it("navigates tabs with arrow keys (horizontal)", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Content 3</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      // Arrow right moves to next tab
      await user.keyboard("{ArrowRight}");
      expect(tabs[1]).toHaveClass(classes.tabStates.active);

      // Arrow right again
      await user.keyboard("{ArrowRight}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);

      // Arrow right wraps to first
      await user.keyboard("{ArrowRight}");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);

      // Arrow left wraps to last
      await user.keyboard("{ArrowLeft}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });

    it("navigates tabs with arrow keys (vertical)", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1" orientation="vertical">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      // Arrow down moves to next tab
      await user.keyboard("{ArrowDown}");
      expect(tabs[1]).toHaveClass(classes.tabStates.active);

      // Arrow up moves to previous tab
      await user.keyboard("{ArrowUp}");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);
    });

    it("navigates to first/last with Home/End", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab2">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Content 3</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      tabs[1].focus();

      await user.keyboard("{Home}");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);

      await user.keyboard("{End}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });

    it("skips disabled tabs during navigation", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
            <Tabs.Tab value="tab3">Tab 3</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
          <Tabs.Panel value="tab3">Content 3</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      // Arrow right should skip disabled tab2 and go to tab3
      await user.keyboard("{ArrowRight}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });
  });

  // Controlled mode
  describe("controlled mode", () => {
    it("works with controlled value", async () => {
      const user = userEvent.setup();

      function ControlledTabs() {
        const [value, setValue] = useState("tab1");
        return (
          <>
            <button onClick={() => setValue("tab2")}>Go to Tab 2</button>
            <Tabs value={value} onValueChange={setValue}>
              <Tabs.List>
                <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
                <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
              <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
            </Tabs>
          </>
        );
      }

      render(<ControlledTabs />);

      expect(screen.getByText("Content 1")).toBeVisible();

      await user.click(screen.getByText("Go to Tab 2"));

      expect(screen.getByText("Content 2")).toBeVisible();
    });
  });

  // Unmount strategy
  describe("unmount strategy", () => {
    it("keeps all panels mounted with keepMounted (default)", () => {
      render(
        <Tabs defaultValue="tab1" unmountStrategy="keepMounted">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      // Both panels should be in DOM
      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });

    it("unmounts inactive panels with unmountOnHide strategy", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1" unmountStrategy="unmountOnHide">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      // Only active panel should be in DOM
      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.queryByText("Content 2")).not.toBeInTheDocument();

      // Click tab 2
      await user.click(screen.getAllByRole("tab")[1]);

      // Now only tab2 content should be in DOM
      expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });
  });

  // ARIA attributes
  describe("accessibility", () => {
    it("has correct ARIA attributes on tabs", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      const panels = screen.getAllByRole("tabpanel", { hidden: true });

      // Tab 1
      expect(tabs[0]).toHaveAttribute("aria-controls", "tabs-panel-tab1");
      expect(tabs[0]).toHaveAttribute("id", "tabs-tab-tab1");

      // Tab 2
      expect(tabs[1]).toHaveAttribute("aria-controls", "tabs-panel-tab2");
      expect(tabs[1]).toHaveAttribute("id", "tabs-tab-tab2");

      // Panel 1
      expect(panels[0]).toHaveAttribute("aria-labelledby", "tabs-tab-tab1");
      expect(panels[0]).toHaveAttribute("id", "tabs-panel-tab1");

      // Panel 2
      expect(panels[1]).toHaveAttribute("aria-labelledby", "tabs-tab-tab2");
      expect(panels[1]).toHaveAttribute("id", "tabs-panel-tab2");
    });

    it("uses roving tabindex", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveAttribute("tabindex", "0");
      expect(tabs[1]).toHaveAttribute("tabindex", "-1");
    });

    it("sets hidden attribute on inactive panels", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const panels = screen.getAllByRole("tabpanel", { hidden: true });
      expect(panels[0]).not.toHaveAttribute("hidden");
      expect(panels[1]).toHaveAttribute("hidden");
    });
  });

  // Context error
  describe("context error", () => {
    it("throws error when TabsTab is used outside Tabs", () => {
      // Suppress console.error for expected error
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      expect(() => {
        render(<TabsTab value="tab1">Tab 1</TabsTab>);
      }).toThrow("Tabs compound components must be used within a Tabs component");

      consoleSpy.mockRestore();
    });

    it("throws error when TabsList is used outside Tabs", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      expect(() => {
        render(
          <TabsList>
            <TabsTab value="tab1">Tab 1</TabsTab>
          </TabsList>,
        );
      }).toThrow("Tabs compound components must be used within a Tabs component");

      consoleSpy.mockRestore();
    });

    it("throws error when TabsPanel is used outside Tabs", () => {
      const consoleSpy = vi.spyOn(console, "error").mockImplementation(() => {});

      expect(() => {
        render(<TabsPanel value="tab1">Content</TabsPanel>);
      }).toThrow("Tabs compound components must be used within a Tabs component");

      consoleSpy.mockRestore();
    });
  });

  // Keyboard navigation edge cases
  describe("keyboard navigation edge cases", () => {
    it("handles all tabs disabled gracefully", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1" disabled>
              Tab 1
            </Tabs.Tab>
            <Tabs.Tab value="tab2" disabled>
              Tab 2
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      // Focus tab1 (even though disabled)
      tabs[0].focus();

      // Should not crash when pressing arrow keys with no enabled tabs
      await user.keyboard("{ArrowRight}");

      // No change since all tabs are disabled
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    });

    it("handles unrecognized key gracefully", async () => {
      const user = userEvent.setup();

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      // Press a random key
      await user.keyboard("a");

      // Tab 1 should still be active
      expect(tabs[0]).toHaveClass(classes.tabStates.active);
    });
  });

  // Ref forwarding
  describe("ref forwarding", () => {
    it("forwards ref to root element", () => {
      let tabsRef: HTMLDivElement | null = null;

      render(
        <Tabs
          defaultValue="tab1"
          ref={(el) => {
            tabsRef = el;
          }}
        >
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      expect(tabsRef).toBeInstanceOf(HTMLDivElement);
      expect(tabsRef).toHaveClass(classes.root);
    });

    it("forwards ref to TabsList", () => {
      let listRef: HTMLDivElement | null = null;

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List
            ref={(el) => {
              listRef = el;
            }}
          >
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      expect(listRef).toBeInstanceOf(HTMLDivElement);
      expect(listRef).toHaveClass(classes.list);
    });

    it("forwards ref to TabsTab", () => {
      let tabRef: HTMLButtonElement | null = null;

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab
              value="tab1"
              ref={(el) => {
                tabRef = el;
              }}
            >
              Tab 1
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      expect(tabRef).toBeInstanceOf(HTMLButtonElement);
      expect(tabRef).toHaveClass(classes.tab);
    });

    it("forwards ref to TabsPanel", () => {
      let panelRef: HTMLDivElement | null = null;

      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel
            value="tab1"
            ref={(el) => {
              panelRef = el;
            }}
          >
            Content
          </Tabs.Panel>
        </Tabs>,
      );

      expect(panelRef).toBeInstanceOf(HTMLDivElement);
      expect(panelRef).toHaveClass(classes.panel);
    });
  });

  // Custom className on sub-components
  describe("className on sub-components", () => {
    it("applies custom className to TabsList", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List className="custom-list">
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tablist")).toHaveClass("custom-list");
    });

    it("applies custom className to TabsTab", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1" className="custom-tab">
              Tab 1
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content</Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tab")).toHaveClass("custom-tab");
    });

    it("applies custom className to TabsPanel", () => {
      render(
        <Tabs defaultValue="tab1">
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1" className="custom-panel">
            Content
          </Tabs.Panel>
        </Tabs>,
      );

      expect(screen.getByRole("tabpanel")).toHaveClass("custom-panel");
    });
  });

  // Controlled mode edge cases
  describe("controlled mode edge cases", () => {
    it("does not update internal state when controlled", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      // Controlled mode: value prop is set, onValueChange must be used to change
      render(
        <Tabs value="tab1" onValueChange={onValueChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      // Click tab 2
      await user.click(screen.getAllByRole("tab")[1]);

      // onValueChange should be called
      expect(onValueChange).toHaveBeenCalledWith("tab2");

      // But since we don't update the controlled value, tab 1 should still be active
      expect(screen.getAllByRole("tab")[0]).toHaveClass(classes.tabStates.active);
    });
  });

  // Click on active tab
  describe("click on active tab", () => {
    it("calls onValueChange when clicking already active tab", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      render(
        <Tabs defaultValue="tab1" onValueChange={onValueChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
            <Tabs.Tab value="tab2">Tab 2</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
          <Tabs.Panel value="tab2">Content 2</Tabs.Panel>
        </Tabs>,
      );

      // Click the already active tab
      await user.click(screen.getAllByRole("tab")[0]);

      // onValueChange should be called even for active tab
      expect(onValueChange).toHaveBeenCalledWith("tab1");
    });
  });

  // Keyboard navigation same index
  describe("keyboard navigation same index", () => {
    it("does not change when pressing key results in same index", async () => {
      const user = userEvent.setup();
      const onValueChange = vi.fn();

      render(
        <Tabs defaultValue="tab1" onValueChange={onValueChange}>
          <Tabs.List>
            <Tabs.Tab value="tab1">Tab 1</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="tab1">Content 1</Tabs.Panel>
        </Tabs>,
      );

      const tab = screen.getByRole("tab");
      tab.focus();

      // With only one tab, pressing ArrowRight should result in same index (wrap around to 0)
      await user.keyboard("{ArrowRight}");

      // onValueChange should not be called because nextIndex === currentIndex
      expect(onValueChange).not.toHaveBeenCalled();
    });
  });
});
