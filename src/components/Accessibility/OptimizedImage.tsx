import { useState, useRef, useEffect, ImgHTMLAttributes } from "react";
import { useAccessibility } from "./AccessibilityProvider";

interface OptimizedImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "loading"> {
  src: string;
  alt: string;
  width?: number | string;
  height?: number | string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
  className?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  sizes,
  placeholder = "empty",
  blurDataURL,
  onLoad,
  onError,
  lazy = true,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(!lazy || priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const { announceToScreenReader } = useAccessibility();

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (!lazy || priority || isInView) return;

    // Check if IntersectionObserver is supported
    if (!("IntersectionObserver" in window)) {
      // Fallback: load immediately if IntersectionObserver is not supported
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      },
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [lazy, priority, isInView]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(false);
    onError?.();
    announceToScreenReader(`Failed to load image: ${alt}`);
  };

  // Generate responsive image sources for Unsplash images
  const generateSrcSet = (baseSrc: string) => {
    if (
      !baseSrc.includes("unsplash.com") &&
      !baseSrc.includes("images.unsplash.com")
    ) {
      return baseSrc;
    }

    const sizes = [320, 640, 768, 1024, 1280, 1920];
    return sizes
      .map((size) => `${baseSrc}&w=${size}&q=${quality}&auto=format ${size}w`)
      .join(", ");
  };

  // Optimize image URL for better performance
  const getOptimizedSrc = (originalSrc: string) => {
    if (
      originalSrc.includes("unsplash.com") ||
      originalSrc.includes("images.unsplash.com")
    ) {
      // Add optimization parameters for Unsplash images
      const separator = originalSrc.includes("?") ? "&" : "?";
      return `${originalSrc}${separator}w=${width || 1200}&q=${quality}&auto=format&fit=crop`;
    }
    return originalSrc;
  };

  const optimizedSrc = getOptimizedSrc(src);
  const srcSet = generateSrcSet(src);

  // Placeholder component
  const Placeholder = () => (
    <div
      className={`absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center ${
        placeholder === "blur" && blurDataURL ? "bg-cover bg-center" : ""
      }`}
      style={
        placeholder === "blur" && blurDataURL
          ? { backgroundImage: `url(${blurDataURL})` }
          : {}
      }
      aria-hidden="true"
      data-oid="3locewc"
    >
      {placeholder === "empty" && (
        <div className="text-gray-500 text-center p-4" data-oid="o1k866-">
          <svg
            className="w-8 h-8 mx-auto mb-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
            data-oid="6gud9-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              data-oid="j3ne5k7"
            />
          </svg>
          <span className="text-xs" data-oid="r7dhcth">
            Loading...
          </span>
        </div>
      )}
    </div>
  );

  // Error fallback
  const ErrorFallback = () => (
    <div
      className="absolute inset-0 bg-gray-800 flex items-center justify-center text-gray-400 border border-gray-700 rounded"
      role="img"
      aria-label={`Failed to load: ${alt}`}
      data-oid="t:22opa"
    >
      <div className="text-center p-4" data-oid="glj7qmi">
        <svg
          className="w-8 h-8 mx-auto mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          data-oid="q0wd2ef"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            data-oid="k64aqq."
          />
        </svg>
        <span className="text-xs" data-oid="zorhsin">
          Image unavailable
        </span>
      </div>
    </div>
  );

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden bg-gray-900 ${className}`}
      style={{ width, height }}
      data-oid="1rp8a5o"
    >
      {!isInView && <Placeholder data-oid="_l3le1l" />}

      {isInView && (
        <>
          {!isLoaded && !hasError && <Placeholder data-oid="vmlyn8f" />}
          {hasError && <ErrorFallback data-oid="b1av--l" />}

          <img
            src={optimizedSrc}
            srcSet={srcSet !== optimizedSrc ? srcSet : undefined}
            sizes={
              sizes ||
              "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onLoad={handleLoad}
            onError={handleError}
            className={`transition-opacity duration-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${hasError ? "hidden" : ""} w-full h-full object-cover`}
            {...props}
            data-oid="xvtppg7"
          />
        </>
      )}
    </div>
  );
}

// Utility function for generating blur data URLs (client-side)
export function generateBlurDataURL(
  width: number = 10,
  height: number = 10,
): string {
  try {
    // Create a small canvas for the blur effect
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return "";

    // Create a gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#1f2937");
    gradient.addColorStop(0.5, "#374151");
    gradient.addColorStop(1, "#4b5563");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    return canvas.toDataURL("image/webp", 0.1);
  } catch (error) {
    console.warn("Failed to generate blur data URL:", error);
    return "";
  }
}

// Hook for preloading critical images
export function useImagePreloader(imageUrls: string[]) {
  useEffect(() => {
    if (!imageUrls.length) return;

    const preloadImages = imageUrls.map((url) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });
    });

    Promise.allSettled(preloadImages).then((results) => {
      const successful = results.filter(
        (result) => result.status === "fulfilled",
      ).length;
      const failed = results.filter(
        (result) => result.status === "rejected",
      ).length;

      if (failed > 0) {
        console.warn(`Failed to preload ${failed} images`);
      }
      if (successful > 0) {
        console.log(`Successfully preloaded ${successful} images`);
      }
    });
  }, [imageUrls]);
}
