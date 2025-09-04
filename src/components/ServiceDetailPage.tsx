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
        return <SEOServicePage onNavigate={onNavigate} data-oid="mn-4.qc" />;
      case "PPC":
        return <PPCServicePage onNavigate={onNavigate} data-oid="b_pyp:i" />;
      case "Social Media Marketing":
        return (
          <SocialMediaServicePage onNavigate={onNavigate} data-oid="1:h78a." />
        );
      case "Content Marketing":
        return (
          <ContentMarketingServicePage
            onNavigate={onNavigate}
            data-oid="lxrf24r"
          />
        );
      case "Email Marketing":
        return (
          <EmailMarketingServicePage
            onNavigate={onNavigate}
            data-oid="znxu5ab"
          />
        );
      case "Web Design & Development":
        return (
          <WebDesignServicePage onNavigate={onNavigate} data-oid="ltlq9pf" />
        );
      case "Brand Strategy & Design":
        return (
          <BrandStrategyServicePage
            onNavigate={onNavigate}
            data-oid="xmbnl.y"
          />
        );
      case "AI Automation":
        return (
          <AIAutomationServicePage onNavigate={onNavigate} data-oid="zx3_9-0" />
        );
      default:
        return <SEOServicePage onNavigate={onNavigate} data-oid="17e.1f4" />;
    }
  };

  return renderServicePage();
}
