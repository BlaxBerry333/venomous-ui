import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { AVATAR_CSS_CLASS_NAMES, COMPONENT_NAMES } from "@/core/constants";
import { ThemeProvider } from "@/react/components/ThemeProvider";
import Avatar from "./Avatar";

// Wrapper function with ThemeProvider
const renderWithTheme = (ui: React.ReactElement) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>);
};

// Helper to get the Avatar container element (the div with AVATAR base class)
const getAvatarContainer = () => {
  const container = document.querySelector(`.${AVATAR_CSS_CLASS_NAMES.base.className}`);
  if (!container) throw new Error("Avatar container not found");
  return container as HTMLElement;
};

describe("Avatar", () => {
  // Basic render test
  it("renders correctly with default props", () => {
    renderWithTheme(<Avatar />);
    expect(getAvatarContainer()).toBeInTheDocument();
  });

  // Size tests
  it("applies size className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Avatar size="small" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.sizeSmall.className);

    rerender(
      <ThemeProvider>
        <Avatar size="medium" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.sizeMedium.className);

    rerender(
      <ThemeProvider>
        <Avatar size="large" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.sizeLarge.className);
  });

  // Variant tests
  it("applies variant className", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Avatar variant="circular" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.variantCircular.className);

    rerender(
      <ThemeProvider>
        <Avatar variant="rounded" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.variantRounded.className);

    rerender(
      <ThemeProvider>
        <Avatar variant="square" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.variantSquare.className);
  });

  // Default props test
  it("has correct default props", () => {
    renderWithTheme(<Avatar />);
    const avatar = getAvatarContainer();
    expect(avatar).toHaveClass(AVATAR_CSS_CLASS_NAMES.sizeMedium.className);
    expect(avatar).toHaveClass(AVATAR_CSS_CLASS_NAMES.variantCircular.className);
  });

  // Image source test
  it("renders image when imageSrc is provided", () => {
    renderWithTheme(<Avatar imageSrc="/test.jpg" alt="Test" />);
    const avatar = getAvatarContainer();
    const img = avatar.querySelector("img");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "/test.jpg");
    expect(img).toHaveAttribute("alt", "Test");
  });

  // Fallback text test
  it("renders fallbackText when no imageSrc", () => {
    renderWithTheme(<Avatar fallbackText="JD" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  // Fallback icon test
  it("renders fallbackIcon when no imageSrc or fallbackText", () => {
    renderWithTheme(<Avatar fallbackIcon={<span data-testid="custom-icon">Icon</span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  // Children override test
  it("renders children when provided (overrides imageSrc/fallbackText/fallbackIcon)", () => {
    renderWithTheme(
      <Avatar imageSrc="/test.jpg" fallbackText="JD">
        <span data-testid="custom-child">Custom</span>
      </Avatar>,
    );
    expect(screen.getByTestId("custom-child")).toBeInTheDocument();
    expect(screen.queryByText("JD")).not.toBeInTheDocument();
  });

  // Image error handling test
  it("shows fallback when image fails to load", async () => {
    const handleError = vi.fn();
    renderWithTheme(<Avatar imageSrc="/invalid.jpg" fallbackText="FB" onImageLoadError={handleError} />);

    const avatar = getAvatarContainer();
    const img = avatar.querySelector("img");
    expect(img).toBeInTheDocument();

    // Simulate image error
    fireEvent.error(img!);

    await waitFor(() => {
      expect(handleError).toHaveBeenCalled();
      expect(screen.getByText("FB")).toBeInTheDocument();
    });
  });

  // ImageProps forwarding test
  it("forwards ImageProps to img element", () => {
    renderWithTheme(<Avatar imageSrc="/test.jpg" ImageProps={{ "data-testid": "avatar-img", loading: "lazy" }} />);
    const img = screen.getByTestId("avatar-img");
    expect(img).toHaveAttribute("loading", "lazy");
  });

  // Custom className test
  it("applies custom className", () => {
    renderWithTheme(<Avatar className="custom-class" />);
    expect(getAvatarContainer()).toHaveClass("custom-class");
  });

  // Ref forwarding test
  it("forwards ref correctly", () => {
    const ref = vi.fn();
    renderWithTheme(<Avatar ref={ref} />);
    expect(ref).toHaveBeenCalled();
    expect(ref.mock.calls[0][0]).toBeInstanceOf(HTMLDivElement);
  });

  // displayName test
  it("has correct displayName", () => {
    expect(Avatar.displayName).toBe(COMPONENT_NAMES.Avatar);
  });

  // aria-label test
  it("has correct aria-label", () => {
    const { rerender } = render(
      <ThemeProvider>
        <Avatar alt="User Avatar" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveAttribute("aria-label", "User Avatar");

    rerender(
      <ThemeProvider>
        <Avatar fallbackText="JD" />
      </ThemeProvider>,
    );
    expect(getAvatarContainer()).toHaveAttribute("aria-label", "JD");
  });

  // Theme callback function test
  it("supports style as theme callback function", () => {
    renderWithTheme(<Avatar style={(theme) => ({ backgroundColor: theme.semanticColors.success.main })} />);
    const avatar = getAvatarContainer();
    expect(avatar).toHaveStyle({ backgroundColor: expect.any(String) });
  });

  // hasImage className test
  it("applies hasImage className when valid imageSrc exists", () => {
    renderWithTheme(<Avatar imageSrc="/test.jpg" />);
    expect(getAvatarContainer()).toHaveClass(AVATAR_CSS_CLASS_NAMES.hasImage.className);
  });

  // Reset error state when imageSrc changes test
  it("resets error state when imageSrc changes", async () => {
    const { rerender } = render(
      <ThemeProvider>
        <Avatar imageSrc="/invalid.jpg" fallbackText="FB" />
      </ThemeProvider>,
    );

    const avatar = getAvatarContainer();
    const img = avatar.querySelector("img");
    fireEvent.error(img!);

    await waitFor(() => {
      expect(screen.getByText("FB")).toBeInTheDocument();
    });

    // Change imageSrc - should reset error state and show new image
    rerender(
      <ThemeProvider>
        <Avatar imageSrc="/new-valid.jpg" fallbackText="FB" />
      </ThemeProvider>,
    );

    await waitFor(() => {
      const newAvatar = getAvatarContainer();
      const newImg = newAvatar.querySelector("img");
      expect(newImg).toBeInTheDocument();
      expect(newImg).toHaveAttribute("src", "/new-valid.jpg");
    });
  });
});
