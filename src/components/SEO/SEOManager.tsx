import { useEffect } from "react";

interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noIndex?: boolean;
}

interface SEOManagerProps {
  data: SEOData;
  page: string;
}

export default function SEOManager({ data, page }: SEOManagerProps) {
  useEffect(() => {
    // Update document title
    document.title = data.title;

    // Remove existing meta tags
    const existingMetas = document.querySelectorAll('meta[data-seo="true"]');
    existingMetas.forEach((meta) => meta.remove());

    // Remove existing structured data
    const existingStructuredData = document.querySelectorAll(
      'script[type="application/ld+json"][data-seo="true"]',
    );
    existingStructuredData.forEach((script) => script.remove());

    // Remove existing canonical link
    const existingCanonical = document.querySelector(
      'link[rel="canonical"][data-seo="true"]',
    );
    if (existingCanonical) existingCanonical.remove();

    // Create and append new meta tags
    const metaTags = [
      { name: "description", content: data.description },
      { name: "keywords", content: data.keywords },
      {
        name: "robots",
        content: data.noIndex ? "noindex, nofollow" : "index, follow",
      },
      { name: "author", content: "Inno Dot - Digital Marketing Agency" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "theme-color", content: "#000000" },

      // Open Graph tags
      { property: "og:title", content: data.ogTitle || data.title },
      {
        property: "og:description",
        content: data.ogDescription || data.description,
      },
      {
        property: "og:image",
        content: data.ogImage || "https://innodot.com/og-image.jpg",
      },
      {
        property: "og:url",
        content: data.ogUrl || `https://innodot.com/${page}`,
      },
      { property: "og:type", content: "website" },
      {
        property: "og:site_name",
        content: "Inno Dot - Digital Marketing Agency",
      },
      { property: "og:locale", content: "en_US" },

      // Twitter Card tags
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@innodot" },
      { name: "twitter:title", content: data.twitterTitle || data.title },
      {
        name: "twitter:description",
        content: data.twitterDescription || data.description,
      },
      {
        name: "twitter:image",
        content:
          data.twitterImage ||
          data.ogImage ||
          "https://innodot.com/twitter-image.jpg",
      },

      // Additional SEO meta tags
      { name: "application-name", content: "Inno Dot" },
      { name: "apple-mobile-web-app-title", content: "Inno Dot" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black-translucent",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#000000" },
      { name: "msapplication-config", content: "/browserconfig.xml" },
    ];

    const head = document.head;

    metaTags.forEach((tag) => {
      const meta = document.createElement("meta");
      if (tag.name) meta.setAttribute("name", tag.name);
      if (tag.property) meta.setAttribute("property", tag.property);
      meta.setAttribute("content", tag.content);
      meta.setAttribute("data-seo", "true");
      head.appendChild(meta);
    });

    // Add canonical URL
    if (data.canonicalUrl) {
      const canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      canonical.setAttribute("href", data.canonicalUrl);
      canonical.setAttribute("data-seo", "true");
      head.appendChild(canonical);
    }

    // Add structured data
    if (data.structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "true");
      script.textContent = JSON.stringify(data.structuredData);
      head.appendChild(script);
    }

    // Add preconnect links for performance
    const preconnectLinks = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://images.unsplash.com",
    ];

    preconnectLinks.forEach((href) => {
      if (!document.querySelector(`link[rel="preconnect"][href="${href}"]`)) {
        const link = document.createElement("link");
        link.rel = "preconnect";
        link.href = href;
        if (href.includes("gstatic")) link.crossOrigin = "";
        head.appendChild(link);
      }
    });
  }, [data, page]);

  return null;
}

// SEO data for all pages
export const seoData = {
  home: {
    title: "Inno Dot - Premier Digital Marketing Agency | Digital Innovation",
    description:
      "Transform your business with Inno Dot's expert digital marketing services. Specializing in SEO, PPC, social media, web design, and AI automation. Get 400% ROI increase with our proven strategies.",
    keywords:
      "digital marketing agency, SEO services, PPC advertising, social media marketing, web design, AI automation, digital transformation, online marketing, digital strategy, ROI optimization",
    ogTitle: "Inno Dot - Premier Digital Marketing Agency",
    ogDescription:
      "Expert digital marketing services that deliver 400% ROI increase. Specializing in SEO, PPC, social media, and AI automation.",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Inno Dot",
      description:
        "Premier digital marketing agency specializing in SEO, PPC, social media marketing, web design, and AI automation",
      url: "https://innodot.com",
      logo: "https://innodot.com/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+1-555-123-4567",
        contactType: "customer service",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Innovation Street",
        addressLocality: "Tech City",
        addressRegion: "CA",
        postalCode: "90210",
        addressCountry: "US",
      },
      sameAs: [
        "https://facebook.com/innodot",
        "https://twitter.com/innodot",
        "https://linkedin.com/company/innodot",
        "https://instagram.com/innodot",
      ],
    },
  },
  services: {
    title: "Digital Marketing Services | SEO, PPC, Social Media | Inno Dot",
    description:
      "Comprehensive digital marketing services including SEO, PPC advertising, social media marketing, content marketing, email marketing, web design, and AI automation. Expert solutions for business growth.",
    keywords:
      "digital marketing services, SEO optimization, PPC management, social media marketing, content marketing, email marketing, web development, AI automation, digital strategy services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Digital Marketing Services",
      description:
        "Comprehensive digital marketing solutions including SEO, PPC, social media, and AI automation",
      provider: {
        "@type": "Organization",
        name: "Inno Dot",
      },
      serviceType: "Digital Marketing",
      areaServed: "Worldwide",
    },
  },
  portfolio: {
    title: "Portfolio & Case Studies | Proven Results | Inno Dot",
    description:
      "Explore our successful digital marketing campaigns and case studies. See how we've helped businesses achieve 400% ROI increase, 350% traffic growth, and measurable results.",
    keywords:
      "digital marketing portfolio, case studies, marketing results, ROI success stories, client testimonials, proven marketing strategies, digital transformation examples",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: "Digital Marketing Portfolio",
      description:
        "Showcase of successful digital marketing campaigns and case studies",
    },
  },
  pricing: {
    title: "Digital Marketing Pricing Plans | Affordable Packages | Inno Dot",
    description:
      "Transparent pricing for digital marketing services. Choose from Startup Accelerator ($999), Growth Catalyst ($2199), or Enterprise Domination ($4499). No hidden fees, flexible plans.",
    keywords:
      "digital marketing pricing, marketing packages, SEO pricing, PPC management cost, social media marketing prices, affordable digital marketing, marketing agency rates",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Digital Marketing Services",
      description:
        "Professional digital marketing packages for businesses of all sizes",
      brand: {
        "@type": "Brand",
        name: "Inno Dot",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Startup Accelerator",
          price: "999",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Growth Catalyst",
          price: "2199",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Enterprise Domination",
          price: "4499",
          priceCurrency: "USD",
          priceValidUntil: "2025-12-31",
          availability: "https://schema.org/InStock",
        },
      ],
    },
  },
  seo: {
    title: "Professional SEO Services | 400% Traffic Increase | Inno Dot",
    description:
      "Expert SEO services that deliver 400% average traffic increase. Technical SEO, keyword optimization, content strategy, and link building. Dominate search results with proven strategies.",
    keywords:
      "SEO services, search engine optimization, technical SEO, keyword research, content optimization, link building, organic traffic, search rankings, SEO strategy, local SEO",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "SEO Services",
      description:
        "Professional search engine optimization services for improved rankings and traffic",
      provider: {
        "@type": "Organization",
        name: "Inno Dot",
      },
    },
  },
  ppc: {
    title: "PPC Management Services | Google Ads Experts | Inno Dot",
    description:
      "Expert PPC management delivering 300% average ROAS. Google Ads, Facebook Ads, multi-platform campaigns. Lower costs, higher conversions with data-driven strategies.",
    keywords:
      "PPC management, Google Ads, Facebook Ads, pay per click advertising, PPC optimization, ad management, conversion optimization, ROAS improvement, paid search",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "PPC Management Services",
      description:
        "Professional pay-per-click advertising management for maximum ROI",
    },
  },
  "social-media": {
    title: "Social Media Marketing Services | 500% Engagement Boost | Inno Dot",
    description:
      "Strategic social media marketing delivering 500% engagement increase. Content creation, community management, influencer outreach across all major platforms.",
    keywords:
      "social media marketing, social media management, content creation, community management, influencer marketing, social media strategy, engagement optimization",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Marketing",
      description:
        "Comprehensive social media marketing and management services",
    },
  },
  "content-marketing": {
    title: "Content Marketing Services | Strategic Content Creation | Inno Dot",
    description:
      "Expert content marketing that drives 400% engagement increase. Blog writing, video content, infographics, content strategy, and distribution across all channels.",
    keywords:
      "content marketing, content creation, blog writing, video marketing, content strategy, storytelling, brand content, content distribution, content optimization",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Content Marketing Services",
      description: "Strategic content creation and marketing services",
    },
  },
  "email-marketing": {
    title: "Email Marketing Services | 4200% ROI | Inno Dot",
    description:
      "Advanced email marketing delivering 4200% average ROI. Automation, segmentation, personalization, and campaign optimization for maximum conversions.",
    keywords:
      "email marketing, email automation, email campaigns, newsletter marketing, email segmentation, marketing automation, drip campaigns, email optimization",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Email Marketing Services",
      description: "Professional email marketing and automation services",
    },
  },
  "web-design": {
    title: "Web Design & Development | 300% Conversion Increase | Inno Dot",
    description:
      "Professional web design and development delivering 300% conversion increase. Responsive design, UX/UI optimization, performance optimization, and mobile-first approach.",
    keywords:
      "web design, web development, responsive design, UX/UI design, website optimization, mobile-first design, conversion optimization, website performance",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Design & Development",
      description: "Professional web design and development services",
    },
  },
  "brand-strategy": {
    title:
      "Brand Strategy & Design Services | 250% Recognition Boost | Inno Dot",
    description:
      "Strategic brand development delivering 250% brand recognition increase. Logo design, brand identity, messaging, positioning, and comprehensive brand guidelines.",
    keywords:
      "brand strategy, brand design, logo design, brand identity, brand positioning, brand messaging, visual identity, brand guidelines, rebranding services",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Brand Strategy & Design",
      description: "Professional brand strategy and design services",
    },
  },
  "ai-automation": {
    title: "AI Automation Services | Business Process Automation | Inno Dot",
    description:
      "Cutting-edge AI automation services that save 30+ hours weekly. Chatbots, workflow automation, predictive analytics, and intelligent business solutions.",
    keywords:
      "AI automation, artificial intelligence, business automation, chatbots, workflow automation, process automation, AI solutions, machine learning, predictive analytics",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI Automation Services",
      description:
        "Advanced AI and automation solutions for business optimization",
    },
  },
  privacy: {
    title: "Privacy Policy | Data Protection & Security | Inno Dot",
    description:
      "Learn how Inno Dot protects your privacy and personal information. Comprehensive privacy policy covering data collection, usage, security measures, and your rights.",
    keywords:
      "privacy policy, data protection, GDPR compliance, data security, personal information, privacy rights, data collection, information security",
    canonicalUrl: "https://innodot.com/privacy",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Privacy Policy",
      description:
        "Comprehensive privacy policy detailing data protection practices and user rights",
      url: "https://innodot.com/privacy",
      publisher: {
        "@type": "Organization",
        name: "Inno Dot",
      },
    },
  },
};
