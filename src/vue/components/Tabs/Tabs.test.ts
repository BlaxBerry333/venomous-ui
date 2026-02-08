import { CSS_CLASSES } from "@/core/constants";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";
import { describe, expect, it, vi } from "vitest";
import { ref } from "vue";
import Tabs from "./Tabs.vue";
import TabsList from "./TabsList.vue";
import TabsPanel from "./TabsPanel.vue";
import TabsTab from "./TabsTab.vue";

const classes = CSS_CLASSES.tabs;

const defaultTemplate = {
  components: { Tabs, TabsList, TabsTab, TabsPanel },
};

describe("Tabs", () => {
  describe("rendering", () => {
    it("renders tabs with correct structure", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByRole("tablist")).toBeInTheDocument();
      expect(screen.getAllByRole("tab")).toHaveLength(2);
      expect(screen.getAllByRole("tabpanel", { hidden: true })).toHaveLength(2);
    });

    it("applies default classes", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.root);
      expect(root).toHaveClass(classes.orientations.horizontal);
      expect(root).toHaveClass(classes.variants.line);
    });

    it("applies custom className to root", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" className="custom-tabs">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass("custom-tabs");
    });
  });

  describe("orientation", () => {
    it("applies horizontal orientation by default", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "horizontal");
    });

    it("applies vertical orientation when specified", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" orientation="vertical">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.orientations.vertical);
      expect(screen.getByRole("tablist")).toHaveAttribute("aria-orientation", "vertical");
    });
  });

  describe("variants", () => {
    it("applies line variant by default", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList><TabsTab value="tab1">Tab 1</TabsTab></TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.variants.line);
    });

    it("applies pill variant", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" variant="pill">
            <TabsList><TabsTab value="tab1">Tab 1</TabsTab></TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      const root = screen.getByRole("tablist").parentElement;
      expect(root).toHaveClass(classes.variants.pill);
    });
  });

  describe("active state", () => {
    it("shows active tab content by default", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByText("Content 1")).toBeVisible();
      expect(screen.getByText("Content 2")).not.toBeVisible();
    });

    it("applies active class to active tab", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);
      expect(tabs[1]).not.toHaveClass(classes.tabStates.active);
    });

    it("sets correct aria-selected attribute", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
      expect(tabs[1]).toHaveAttribute("aria-selected", "false");
    });
  });

  describe("click interaction", () => {
    it("switches tabs on click", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      await user.click(tabs[1]);

      expect(tabs[0]).not.toHaveClass(classes.tabStates.active);
      expect(tabs[1]).toHaveClass(classes.tabStates.active);
      expect(screen.getByText("Content 1")).not.toBeVisible();
      expect(screen.getByText("Content 2")).toBeVisible();
    });

    it("updates internal value in uncontrolled mode on tab click", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      await user.click(screen.getAllByRole("tab")[1]);
      expect(screen.getByText("Content 2")).toBeVisible();
      expect(screen.getByText("Content 1")).not.toBeVisible();
    });

    it("emits update:value when tab is clicked", async () => {
      const user = userEvent.setup();
      const onUpdateValue = vi.fn();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" @update:value="onUpdateValue">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
        setup() {
          return { onUpdateValue };
        },
      });

      await user.click(screen.getAllByRole("tab")[1]);
      expect(onUpdateValue).toHaveBeenCalledWith("tab2");
    });
  });

  describe("disabled state", () => {
    it("applies disabled class to disabled tab", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2" disabled>Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      expect(tabs[1]).toHaveClass(classes.tabStates.disabled);
      expect(tabs[1]).toBeDisabled();
    });

    it("does not switch to disabled tab on click", async () => {
      const user = userEvent.setup();
      const onUpdateValue = vi.fn();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" @update:value="onUpdateValue">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2" disabled>Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
        setup() {
          return { onUpdateValue };
        },
      });

      await user.click(screen.getAllByRole("tab")[1]);
      expect(onUpdateValue).not.toHaveBeenCalled();
    });

    it("updates disabled state dynamically", async () => {
      const isDisabled = ref(false);
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2" :disabled="isDisabled">Tab 2</TabsTab>
              <TabsTab value="tab3">Tab 3</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
            <TabsPanel value="tab3">Content 3</TabsPanel>
          </Tabs>
        `,
        setup() {
          return { isDisabled };
        },
      });

      const tabs = screen.getAllByRole("tab");

      // Tab 2 is NOT disabled, should navigate to it
      tabs[0].focus();
      await user.keyboard("{ArrowRight}");
      expect(tabs[1]).toHaveClass(classes.tabStates.active);

      // Now disable tab 2
      isDisabled.value = true;
      await new Promise((r) => setTimeout(r, 0));

      // Navigate from tab1 — should skip tab2 and go to tab3
      tabs[0].focus();
      // Go back to tab1 first
      await user.click(tabs[0]);
      await user.keyboard("{ArrowRight}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });
  });

  describe("keyboard navigation", () => {
    it("navigates tabs with arrow keys (horizontal)", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
              <TabsTab value="tab3">Tab 3</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
            <TabsPanel value="tab3">Content 3</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      await user.keyboard("{ArrowRight}");
      expect(tabs[1]).toHaveClass(classes.tabStates.active);

      await user.keyboard("{ArrowRight}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);

      // Wrap around
      await user.keyboard("{ArrowRight}");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);

      // Left wraps to last
      await user.keyboard("{ArrowLeft}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });

    it("navigates tabs with arrow keys (vertical)", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" orientation="vertical">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      await user.keyboard("{ArrowDown}");
      expect(tabs[1]).toHaveClass(classes.tabStates.active);

      await user.keyboard("{ArrowUp}");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);
    });

    it("navigates to first/last with Home/End", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab2">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
              <TabsTab value="tab3">Tab 3</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
            <TabsPanel value="tab3">Content 3</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      tabs[1].focus();

      await user.keyboard("{Home}");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);

      await user.keyboard("{End}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });

    it("skips disabled tabs during navigation", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2" disabled>Tab 2</TabsTab>
              <TabsTab value="tab3">Tab 3</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
            <TabsPanel value="tab3">Content 3</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      await user.keyboard("{ArrowRight}");
      expect(tabs[2]).toHaveClass(classes.tabStates.active);
    });

    it("does not navigate when all tabs are disabled", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1" disabled>Tab 1</TabsTab>
              <TabsTab value="tab2" disabled>Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tablist = screen.getByRole("tablist");
      tablist.focus();
      await user.keyboard("{ArrowRight}");

      // Should still show tab1 (no navigation happened)
      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    });

    it("does not change value when only one tab is enabled and already selected", async () => {
      const onUpdateValue = vi.fn();
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" @update:value="onUpdateValue">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2" disabled>Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
        setup() {
          return { onUpdateValue };
        },
      });

      screen.getAllByRole("tab")[0].focus();
      await user.keyboard("{ArrowRight}");

      // Only one enabled tab, nextIndex wraps to same index → no change
      expect(onUpdateValue).not.toHaveBeenCalled();
    });

    it("ignores non-navigation keys", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      tabs[0].focus();

      await user.keyboard("a");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);
    });
  });

  describe("unmount strategy", () => {
    it("keeps all panels mounted with keepMounted (default)", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" unmountStrategy="keepMounted">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });

    it("unmounts inactive panels with unmountOnHide strategy", async () => {
      const user = userEvent.setup();
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1" unmountStrategy="unmountOnHide">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByText("Content 1")).toBeInTheDocument();
      expect(screen.queryByText("Content 2")).not.toBeInTheDocument();

      await user.click(screen.getAllByRole("tab")[1]);

      expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
      expect(screen.getByText("Content 2")).toBeInTheDocument();
    });
  });

  describe("accessibility", () => {
    it("has correct ARIA attributes on tabs", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      const panels = screen.getAllByRole("tabpanel", { hidden: true });

      expect(tabs[0]).toHaveAttribute("aria-controls", "tabs-panel-tab1");
      expect(tabs[0]).toHaveAttribute("id", "tabs-tab-tab1");
      expect(tabs[1]).toHaveAttribute("aria-controls", "tabs-panel-tab2");
      expect(tabs[1]).toHaveAttribute("id", "tabs-tab-tab2");

      expect(panels[0]).toHaveAttribute("aria-labelledby", "tabs-tab-tab1");
      expect(panels[0]).toHaveAttribute("id", "tabs-panel-tab1");
      expect(panels[1]).toHaveAttribute("aria-labelledby", "tabs-tab-tab2");
      expect(panels[1]).toHaveAttribute("id", "tabs-panel-tab2");
    });

    it("uses roving tabindex", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveAttribute("tabindex", "0");
      expect(tabs[1]).toHaveAttribute("tabindex", "-1");
    });

    it("sets hidden attribute on inactive panels", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
      });

      const panels = screen.getAllByRole("tabpanel", { hidden: true });
      expect(panels[0]).not.toHaveAttribute("hidden");
      expect(panels[1]).toHaveAttribute("hidden");
    });
  });

  describe("className on sub-components", () => {
    it("applies custom className to TabsList", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList className="custom-list">
              <TabsTab value="tab1">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByRole("tablist")).toHaveClass("custom-list");
    });

    it("applies custom className to TabsTab", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1" className="custom-tab">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByRole("tab")).toHaveClass("custom-tab");
    });

    it("applies custom className to TabsPanel", () => {
      render({
        ...defaultTemplate,
        template: `
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
            </TabsList>
            <TabsPanel value="tab1" className="custom-panel">Content</TabsPanel>
          </Tabs>
        `,
      });

      expect(screen.getByRole("tabpanel")).toHaveClass("custom-panel");
    });
  });

  describe("controlled mode", () => {
    it("syncs with external value prop changes", async () => {
      const activeTab = ref("tab1");
      render({
        ...defaultTemplate,
        template: `
          <Tabs :value="activeTab">
            <TabsList>
              <TabsTab value="tab1">Tab 1</TabsTab>
              <TabsTab value="tab2">Tab 2</TabsTab>
            </TabsList>
            <TabsPanel value="tab1">Content 1</TabsPanel>
            <TabsPanel value="tab2">Content 2</TabsPanel>
          </Tabs>
        `,
        setup() {
          return { activeTab };
        },
      });

      const tabs = screen.getAllByRole("tab");
      expect(tabs[0]).toHaveClass(classes.tabStates.active);

      activeTab.value = "tab2";
      await new Promise((r) => setTimeout(r, 0));

      expect(tabs[1]).toHaveClass(classes.tabStates.active);
    });
  });

  describe("context error", () => {
    it("throws error when TabsTab is used outside Tabs", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      expect(() => {
        render(TabsTab, { props: { value: "tab1" }, slots: { default: "Tab 1" } });
      }).toThrow();

      consoleSpy.mockRestore();
    });

    it("throws error when TabsList is used outside Tabs", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      expect(() => {
        render(TabsList, { slots: { default: "list" } });
      }).toThrow();

      consoleSpy.mockRestore();
    });

    it("throws error when TabsPanel is used outside Tabs", () => {
      const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

      expect(() => {
        render(TabsPanel, { props: { value: "tab1" }, slots: { default: "Content" } });
      }).toThrow();

      consoleSpy.mockRestore();
    });
  });
});
