import SEOServicePage from "./services/SEOServicePage";
import PPCServicePage from "./services/PPCServicePage";
import SocialMediaServicePage from "./services/SocialMediaServicePage";
import ContentMarketingServicePage from "./services/ContentMarketingServicePage";
import EmailMarketingServicePage from "./services/EmailMarketingServicePage";
import WebDesignServicePage from "./services/WebDesignServicePage";
import BrandStrategyServicePage from "./services/BrandStrategyServicePage";
import AIAutomationServicePage from "./services/AIAutomationServicePage";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface ServiceDetailPageProps {
  service: string;
  onNavigate: (page: Page, service?: string) => void;
}

export default function ServiceDetailPage({
  service,
  onNavigate,
}: ServiceDetailPageProps) {
  const renderServicePage = () => {
    switch (service) {
      case "SEO":
        return <SEOServicePage onNavigate={onNavigate} data-oid="f8wthjy" />;
      case "PPC":
        return <PPCServicePage onNavigate={onNavigate} data-oid="0m7g68x" />;
      case "Social Media Marketing":
        return (
          <SocialMediaServicePage onNavigate={onNavigate} data-oid="6zs2v60" />
        );

      case "Content Marketing":
        return (
          <ContentMarketingServicePage
            onNavigate={onNavigate}
            data-oid="xu_abvl"
          />
        );

      case "Email Marketing":
        return (
          <EmailMarketingServicePage
            onNavigate={onNavigate}
            data-oid="tu8yi4r"
          />
        );

      case "Web Design & Development":
        return (
          <WebDesignServicePage onNavigate={onNavigate} data-oid="wz0sr.y" />
        );

      case "Brand Strategy & Design":
        return (
          <BrandStrategyServicePage
            onNavigate={onNavigate}
            data-oid="9oz_.q9"
          />
        );

      case "AI Automation":
        return (
          <AIAutomationServicePage onNavigate={onNavigate} data-oid="ozh07gj" />
        );

      default:
        return <SEOServicePage onNavigate={onNavigate} data-oid="sr1m:9i" />;
    }
  };

  return renderServicePage();
}
