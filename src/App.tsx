import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "motion/react";
import SEOManager, { seoData } from "./components/SEO/SEOManager";
import AccessibilityProvider, {
  SkipLink,
} from "./components/Accessibility/AccessibilityProvider";
import ErrorBoundary from "./components/ErrorBoundary";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

// Lazy load components for better performance
const HomePage = lazy(() => import("./components/HomePage"));
const PortfolioPage = lazy(() => import("./components/PortfolioPage"));
const PricingPage = lazy(() => import("./components/PricingPage"));
const ServicesPage = lazy(() => import("./components/ServicesPage"));
const ServiceDetailPage = lazy(() => import("./components/ServiceDetailPage"));
const PrivacyPage = lazy(() => import("./components/PrivacyPage"));

type Page =
  | "home"
  | "portfolio"
  | "pricing"
  | "services"
  | "service-detail"
  | "privacy";

// Loading component with accessibility
function LoadingSpinner() {
  return (
    <div
      className="flex items-center justify-center min-h-screen"
      role="status"
      aria-live="polite"
      aria-label="Loading content"
      data-oid="tjlnw.i"
    >
      <div className="relative" data-oid="9qokch2">
        <div
          className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"
          data-oid="-9ym9qr"
        ></div>
        <span className="sr-only" data-oid="tt-vo61">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [currentService, setCurrentService] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const navigateToPage = (page: Page, service?: string) => {
    setIsLoading(true);
    setCurrentPage(page);
    if (service) setCurrentService(service);

    // Scroll to top when navigating to a new page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Simulate loading delay for better UX
    setTimeout(() => {
      setIsLoading(false);
    }, 300);

    // Announce page change to screen readers
    const pageNames = {
      home: "Home page",
      services: "Services page",
      portfolio: "Portfolio page",
      pricing: "Pricing page",
      "service-detail": `${service} service page`,
      privacy: "Privacy Policy page",
    };

    setTimeout(() => {
      const announcement = document.createElement("div");
      announcement.setAttribute("aria-live", "polite");
      announcement.className = "sr-only";
      announcement.textContent = `Navigated to ${pageNames[page] || "new page"}`;
      document.body.appendChild(announcement);
      setTimeout(() => document.body.removeChild(announcement), 1000);
    }, 500);
  };

  // Get current SEO data based on page and service
  const getCurrentSEOData = () => {
    if (currentPage === "service-detail" && currentService) {
      const serviceKey = currentService
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "-")
        .replace(/--+/g, "-");
      return seoData[serviceKey as keyof typeof seoData] || seoData.services;
    }
    return seoData[currentPage] || seoData.home;
  };

  // Preload critical resources and setup performance monitoring
  useEffect(() => {
    // Initialize React DevTools hook if not present (development only)
    if (
      typeof window !== "undefined" &&
      process.env.NODE_ENV === "development"
    ) {
      if (typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined") {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
          supportsFiber: true,
          inject: () => {},
          onCommitFiberRoot: () => {},
          onCommitFiberUnmount: () => {},
          isDisabled: false,
        };
      }
    }

    // Preload fonts for better performance
    const fontLink = document.createElement("link");
    fontLink.rel = "preload";
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@300;400;500;600;700;800;900&display=swap";
    fontLink.as = "style";
    fontLink.crossOrigin = "anonymous";
    document.head.appendChild(fontLink);

    // Preconnect to external domains for better performance
    const preconnectDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com",
    ];

    preconnectDomains.forEach((domain) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = domain;
        if (domain.includes("gstatic")) {
          link.crossOrigin = "";
        }
        document.head.appendChild(link);
      }
    });

    // Add performance observer for Core Web Vitals monitoring
    if ("PerformanceObserver" in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            // Log performance metrics for debugging (can be sent to analytics in production)
            if (entry.entryType === "largest-contentful-paint") {
              console.log("LCP:", entry.startTime);
            }
            if (entry.entryType === "first-input") {
              const fid = entry.processingStart - entry.startTime;
              console.log("FID:", fid);
            }
            if (
              entry.entryType === "layout-shift" &&
              entry.hadRecentInput !== true
            ) {
              console.log("CLS:", entry.value);
            }
          });
        });

        // Observe Core Web Vitals
        observer.observe({
          entryTypes: [
            "largest-contentful-paint",
            "first-input",
            "layout-shift",
          ],
        });

        // Cleanup observer on unmount
        return () => {
          observer.disconnect();
        };
      } catch (error) {
        console.warn(
          "Performance Observer not supported or failed to initialize:",
          error,
        );
      }
    }

    // Setup intersection observer for lazy loading (if not supported by browser)
    if (!("IntersectionObserver" in window)) {
      console.warn(
        "IntersectionObserver not supported, lazy loading will be disabled",
      );
    }

    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      document.documentElement.classList.add("reduce-motion");
    }

    // Monitor network connection for performance optimization
    if ("connection" in navigator) {
      const connection = (navigator as any).connection;
      if (connection && connection.effectiveType) {
        console.log("Network connection:", connection.effectiveType);
        // Could adjust image quality or loading strategies based on connection
      }
    }

    // Add error boundary for JavaScript errors
    const handleError = (event: ErrorEvent) => {
      // Filter out React DevTools errors in development
      if (
        process.env.NODE_ENV === "development" &&
        event.error &&
        (event.error.message?.includes("React DevTools") ||
          event.error.message?.includes("__REACT_DEVTOOLS_GLOBAL_HOOK__"))
      ) {
        return; // Ignore React DevTools related errors
      }
      console.error("JavaScript error:", event.error);
      // In production, this could be sent to error tracking service
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      // Filter out React DevTools related promise rejections
      if (
        process.env.NODE_ENV === "development" &&
        event.reason?.toString().includes("React DevTools")
      ) {
        return;
      }
      console.error("Unhandled promise rejection:", event.reason);
      // In production, this could be sent to error tracking service
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    // Setup page visibility API for performance optimization
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page is hidden, could pause animations or reduce activity
        console.log("Page hidden");
      } else {
        // Page is visible, resume normal activity
        console.log("Page visible");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup event listeners
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  const renderPage = () => {
    if (isLoading) {
      return <LoadingSpinner data-oid="12up9kc" />;
    }

    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={navigateToPage} data-oid="4ds1:fg" />;
      case "portfolio":
        return <PortfolioPage onNavigate={navigateToPage} data-oid="l7lma.c" />;
      case "pricing":
        return <PricingPage onNavigate={navigateToPage} data-oid="1rxwz2e" />;
      case "services":
        return <ServicesPage onNavigate={navigateToPage} data-oid="9os7ycv" />;
      case "service-detail":
        return (
          <ServiceDetailPage
            service={currentService}
            onNavigate={navigateToPage}
            data-oid="lml.ecl"
          />
        );
      case "privacy":
        return <PrivacyPage onNavigate={navigateToPage} data-oid="mk0.fl_" />;
      default:
        return <HomePage onNavigate={navigateToPage} data-oid="fifllyw" />;
    }
  };

  return (
    <ErrorBoundary data-oid="lf4srup">
      <AccessibilityProvider data-oid="qze2op5">
        <div
          className="min-h-screen bg-black text-white relative overflow-hidden"
          data-oid="0g1_r:x"
        >
          {/* SEO Manager */}
          <SEOManager
            data={getCurrentSEOData()}
            page={currentPage}
            data-oid="2dnaaki"
          />

          {/* Skip Link for accessibility */}
          <SkipLink data-oid="yda57_:" />

          {/* Enhanced animated background elements with better contrast */}
          <div
            className="fixed inset-0 z-0"
            aria-hidden="true"
            data-oid="jpen.2r"
          >
            {/* Strong dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-black" data-oid="bt8ved1"></div>
            <div
              className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"
              data-oid="5l-2mq:"
            ></div>

            {/* Multiple floating orbs for depth - reduced opacity for better contrast */}
            <div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse"
              data-oid="e.v_.nx"
            ></div>
            <div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-pulse delay-1000"
              data-oid="zfiovhe"
            ></div>
            <div
              className="absolute top-3/4 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full filter blur-3xl animate-pulse delay-2000"
              data-oid="f5mtkrw"
            ></div>
            <div
              className="absolute top-1/2 right-1/3 w-64 h-64 bg-pink-600/10 rounded-full filter blur-2xl animate-pulse delay-3000"
              data-oid="yd8v5v2"
            ></div>
            <div
              className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-indigo-600/12 rounded-full filter blur-3xl animate-pulse delay-4000"
              data-oid="r.s_:ox"
            ></div>

            {/* Subtle grid pattern overlay */}
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:50px_50px]"
              data-oid="fq4w6_i"
            ></div>

            {/* Additional dark overlay for maximum contrast */}
            <div
              className="absolute inset-0 bg-black/20"
              data-oid="pryb-re"
            ></div>
          </div>

          <div className="relative z-10" data-oid="uc2-o4.">
            {/* Navigation with enhanced accessibility */}
            <Navigation
              currentPage={currentPage}
              onNavigate={navigateToPage}
              data-oid="-0hnusx"
            />

            {/* Main content area */}
            <main
              id="main-content"
              role="main"
              aria-label="Main content"
              className="focus:outline-none"
              tabIndex={-1}
              data-oid="icd9bkd"
            >
              <AnimatePresence mode="wait" data-oid="v3bi79e">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                    // Respect reduced motion preference
                    ...(window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches && {
                      duration: 0.01,
                    }),
                  }}
                  data-oid="lkomh6i"
                >
                  <Suspense
                    fallback={<LoadingSpinner data-oid="ea7:2lo" />}
                    data-oid="idp14hy"
                  >
                    {renderPage()}
                  </Suspense>
                </motion.div>
              </AnimatePresence>
            </main>

            {/* Footer */}
            <Footer onNavigate={navigateToPage} data-oid="gy:h35x" />
          </div>

          {/* Live region for announcements */}
          <div
            id="announcements"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
            data-oid="93wo7eb"
          ></div>

          {/* Schema.org structured data for better SEO */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "WebSite",
                name: "Inno Dot",
                description:
                  "Premier digital marketing agency specializing in SEO, PPC, social media marketing, web design, and AI automation",
                url: "https://innodot.com",
                potentialAction: {
                  "@type": "SearchAction",
                  target: "https://innodot.com/search?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Inno Dot",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://innodot.com/logo.png",
                  },
                },
              }),
            }}
            data-oid=":9hcvtc"
          />
        </div>
      </AccessibilityProvider>
    </ErrorBoundary>
  );
}
