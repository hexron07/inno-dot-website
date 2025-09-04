import {
  useEffect,
  useState,
  createContext,
  useContext,
  ReactNode,
} from "react";

interface AccessibilityContextType {
  prefersReducedMotion: boolean;
  highContrast: boolean;
  fontSize: "normal" | "large" | "larger";
  announceToScreenReader: (message: string) => void;
  focusManagement: {
    trapFocus: boolean;
    setTrapFocus: (trap: boolean) => void;
  };
}

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider",
    );
  }
  return context;
};

interface AccessibilityProviderProps {
  children: ReactNode;
}

export default function AccessibilityProvider({
  children,
}: AccessibilityProviderProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState<"normal" | "large" | "larger">(
    "normal",
  );
  const [trapFocus, setTrapFocus] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Check for high contrast preference
    const contrastQuery = window.matchMedia("(prefers-contrast: high)");
    setHighContrast(contrastQuery.matches);

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setHighContrast(e.matches);
    };

    contrastQuery.addEventListener("change", handleContrastChange);

    // Load user preferences from localStorage
    const savedFontSize = localStorage.getItem("accessibility-font-size") as
      | "normal"
      | "large"
      | "larger";
    if (savedFontSize) {
      setFontSize(savedFontSize);
    }

    const savedHighContrast =
      localStorage.getItem("accessibility-high-contrast") === "true";
    if (savedHighContrast) {
      setHighContrast(true);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
      contrastQuery.removeEventListener("change", handleContrastChange);
    };
  }, []);

  useEffect(() => {
    // Apply font size to document
    document.documentElement.classList.remove(
      "font-size-normal",
      "font-size-large",
      "font-size-larger",
    );
    document.documentElement.classList.add(`font-size-${fontSize}`);
    localStorage.setItem("accessibility-font-size", fontSize);
  }, [fontSize]);

  useEffect(() => {
    // Apply high contrast mode
    if (highContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
    localStorage.setItem(
      "accessibility-high-contrast",
      highContrast.toString(),
    );
  }, [highContrast]);

  useEffect(() => {
    // Apply reduced motion preference
    if (prefersReducedMotion) {
      document.documentElement.classList.add("reduce-motion");
    } else {
      document.documentElement.classList.remove("reduce-motion");
    }
  }, [prefersReducedMotion]);

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.className = "sr-only";
    announcement.textContent = message;

    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  };

  // Keyboard navigation handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Skip links with Tab key
      if (
        event.key === "Tab" &&
        !event.shiftKey &&
        event.target === document.body
      ) {
        const skipLink = document.querySelector(".skip-link") as HTMLElement;
        if (skipLink) {
          skipLink.focus();
        }
      }

      // Escape key to close modals/dropdowns
      if (event.key === "Escape") {
        const activeElement = document.activeElement as HTMLElement;
        if (
          activeElement &&
          activeElement.closest('[role="dialog"], [role="menu"]')
        ) {
          activeElement.blur();
          announceToScreenReader("Dialog closed");
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  const contextValue: AccessibilityContextType = {
    prefersReducedMotion,
    highContrast,
    fontSize,
    announceToScreenReader,
    focusManagement: {
      trapFocus,
      setTrapFocus,
    },
  };

  return (
    <AccessibilityContext.Provider value={contextValue} data-oid="3vz5.:l">
      {children}
    </AccessibilityContext.Provider>
  );
}

// Skip Link Component
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      data-oid="njkvgig"
    >
      Skip to main content
    </a>
  );
}

// Screen Reader Only utility component
export function ScreenReaderOnly({ children }: { children: ReactNode }) {
  return (
    <span className="sr-only" data-oid="gy8flke">
      {children}
    </span>
  );
}

// Focus trap utility
export function useFocusTrap(isActive: boolean) {
  useEffect(() => {
    if (!isActive) return;

    const focusableElements = document.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[
      focusableElements.length - 1
    ] as HTMLElement;

    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener("keydown", handleTabKey);
    firstElement?.focus();

    return () => {
      document.removeEventListener("keydown", handleTabKey);
    };
  }, [isActive]);
}
