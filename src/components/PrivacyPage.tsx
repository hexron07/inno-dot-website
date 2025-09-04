import { useState } from "react";
import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  Shield,
  Lock,
  Eye,
  Globe,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  FileText,
  Users,
  Database,
  Settings,
  AlertCircle,
  CheckCircle,
  Cookie,
  Smartphone,
  BarChart3,
  Share2,
  CreditCard,
} from "lucide-react";

type Page =
  | "home"
  | "portfolio"
  | "pricing"
  | "services"
  | "service-detail"
  | "privacy";

interface PrivacyPageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  const privacySections = [
    {
      id: "information-collection",
      title: "Information We Collect",
      icon: Database,
      summary:
        "Types of personal and business information we collect from clients and website visitors.",
      content: [
        {
          subtitle: "Personal Information",
          details: [
            "Name, email address, phone number, and job title",
            "Company information including business name and address",
            "Billing and payment information for our services",
            "Payment card information (processed securely through Stripe)",
            "Communication preferences and marketing opt-ins",
          ],
        },
        {
          subtitle: "Business Information",
          details: [
            "Website analytics and performance data",
            "Marketing campaign data and conversion metrics",
            "Social media account information (when managing accounts)",
            "Advertising account access (Google Ads, Facebook Ads, etc.)",
          ],
        },
        {
          subtitle: "Technical Information",
          details: [
            "IP addresses, browser type, and device information",
            "Website usage patterns and page interactions",
            "Cookies and similar tracking technologies",
            "Log files and server data for security purposes",
          ],
        },
      ],
    },
    {
      id: "information-use",
      title: "How We Use Your Information",
      icon: Settings,
      summary:
        "The purposes for which we collect and process your personal and business data.",
      content: [
        {
          subtitle: "Service Delivery",
          details: [
            "Providing digital marketing services as contracted",
            "Creating and managing advertising campaigns",
            "Analyzing website performance and user behavior",
            "Generating reports and performance insights",
          ],
        },
        {
          subtitle: "Business Operations",
          details: [
            "Processing payments and managing billing",
            "Communicating about services and support",
            "Improving our services and developing new features",
            "Complying with legal and regulatory requirements",
          ],
        },
        {
          subtitle: "Marketing Communications",
          details: [
            "Sending newsletters and marketing updates (with consent)",
            "Providing industry insights and best practices",
            "Inviting to webinars and events",
            "Sharing case studies and success stories (anonymized)",
          ],
        },
      ],
    },
    {
      id: "information-sharing",
      title: "Information Sharing and Disclosure",
      icon: Share2,
      summary: "When and how we share your information with third parties.",
      content: [
        {
          subtitle: "Service Providers",
          details: [
            "Marketing platforms (Google, Facebook, LinkedIn, etc.)",
            "Analytics tools (Google Analytics, etc.)",
            "CRM and email marketing services",
            "Payment processors (Stripe) and billing systems",
            "Financial institutions for payment processing",
          ],
        },
        {
          subtitle: "Legal Requirements",
          details: [
            "Compliance with legal obligations and court orders",
            "Protection of our rights and property",
            "Prevention of fraud and security threats",
            "Emergency situations involving safety",
          ],
        },
        {
          subtitle: "Business Transfers",
          details: [
            "In connection with mergers or acquisitions",
            "Asset sales or business reorganizations",
            "Due diligence processes (with confidentiality)",
            "Successor entities or assigns",
          ],
        },
      ],
    },
    {
      id: "data-security",
      title: "Data Security and Protection",
      icon: Lock,
      summary: "Security measures we implement to protect your information.",
      content: [
        {
          subtitle: "Technical Safeguards",
          details: [
            "SSL/TLS encryption for data transmission",
            "Encrypted storage of sensitive information",
            "Regular security audits and vulnerability assessments",
            "Multi-factor authentication for account access",
          ],
        },
        {
          subtitle: "Administrative Safeguards",
          details: [
            "Employee training on data protection practices",
            "Limited access to personal information on need-to-know basis",
            "Background checks for employees with data access",
            "Regular review and update of security policies",
          ],
        },
        {
          subtitle: "Physical Safeguards",
          details: [
            "Secure data centers with restricted access",
            "Environmental controls and backup systems",
            "Secure disposal of physical documents",
            "Visitor access controls and monitoring",
          ],
        },
      ],
    },
    {
      id: "cookies-tracking",
      title: "Cookies and Tracking Technologies",
      icon: Cookie,
      summary: "How we use cookies and similar technologies on our website.",
      content: [
        {
          subtitle: "Essential Cookies",
          details: [
            "Required for website functionality and security",
            "Session management and user authentication",
            "Form submission and error prevention",
            "Cannot be disabled without affecting site functionality",
          ],
        },
        {
          subtitle: "Analytics Cookies",
          details: [
            "Google Analytics for website usage statistics",
            "Performance monitoring and optimization",
            "User behavior analysis for improvements",
            "Conversion tracking for marketing effectiveness",
          ],
        },
        {
          subtitle: "Marketing Cookies",
          details: [
            "Retargeting and remarketing campaigns",
            "Social media integration and sharing",
            "Personalized content and advertisements",
            "Cross-platform campaign attribution",
          ],
        },
      ],
    },
    {
      id: "user-rights",
      title: "Your Rights and Choices",
      icon: Users,
      summary:
        "Your rights regarding your personal information and how to exercise them.",
      content: [
        {
          subtitle: "Access and Portability",
          details: [
            "Request copies of your personal information",
            "Receive data in a structured, machine-readable format",
            "Transfer your data to another service provider",
            "Review how your information is being processed",
          ],
        },
        {
          subtitle: "Correction and Deletion",
          details: [
            "Update or correct inaccurate personal information",
            "Request deletion of your personal data",
            "Opt-out of marketing communications",
            "Withdraw consent for data processing",
          ],
        },
        {
          subtitle: "Marketing Preferences",
          details: [
            "Unsubscribe from email newsletters anytime",
            "Opt-out of retargeting and remarketing",
            "Control cookie preferences through browser settings",
            "Request restriction of processing activities",
          ],
        },
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention and Deletion",
      icon: Calendar,
      summary: "How long we keep your information and deletion procedures.",
      content: [
        {
          subtitle: "Client Data Retention",
          details: [
            "Active client data retained for duration of service agreement",
            "Historical campaign data kept for 3 years for reporting",
            "Financial records retained for 7 years per legal requirements",
            "Marketing data deleted upon client request",
          ],
        },
        {
          subtitle: "Website Visitor Data",
          details: [
            "Analytics data aggregated and anonymized after 26 months",
            "Contact form submissions kept for 2 years",
            "Email subscribers retained until unsubscription",
            "Cookie data expires based on individual cookie settings",
          ],
        },
        {
          subtitle: "Deletion Procedures",
          details: [
            "Secure deletion using industry-standard methods",
            "Backup data purged within 90 days of deletion request",
            "Third-party data processors notified of deletion requirements",
            "Confirmation provided once deletion is complete",
          ],
        },
      ],
    },
    {
      id: "international-transfers",
      title: "International Data Transfers",
      icon: Globe,
      summary: "How we handle data transfers across international borders.",
      content: [
        {
          subtitle: "Transfer Mechanisms",
          details: [
            "Standard Contractual Clauses for EU data transfers",
            "Adequacy decisions by relevant data protection authorities",
            "Binding Corporate Rules where applicable",
            "Explicit consent for transfers when required",
          ],
        },
        {
          subtitle: "Service Provider Locations",
          details: [
            "Primary servers located in the United States",
            "Backup systems in secure international data centers",
            "Marketing platforms may process data globally",
            "All transfers comply with applicable privacy laws",
          ],
        },
      ],
    },
    {
      id: "payment-processing",
      title: "Payment Processing and Financial Data",
      icon: CreditCard,
      summary: "How we handle payment information and financial transactions through Stripe.",
      content: [
        {
          subtitle: "Payment Information Collection",
          details: [
            "Credit card numbers, expiration dates, and CVV codes",
            "Billing addresses and contact information",
            "Bank account details for ACH payments (when applicable)",
            "Payment history and transaction records",
          ],
        },
        {
          subtitle: "Stripe Payment Processing",
          details: [
            "All payment processing is handled by Stripe, Inc.",
            "We do not store complete credit card information on our servers",
            "Stripe maintains PCI DSS Level 1 compliance",
            "Payment data is encrypted and tokenized by Stripe",
          ],
        },
        {
          subtitle: "Financial Data Security",
          details: [
            "SSL/TLS encryption for all payment transactions",
            "Tokenization of sensitive payment information",
            "Regular security audits and compliance monitoring",
            "Fraud detection and prevention measures",
          ],
        },
        {
          subtitle: "Payment Data Retention",
          details: [
            "Transaction records retained for 7 years for tax purposes",
            "Payment method tokens stored securely for recurring billing",
            "Failed payment attempts logged for fraud prevention",
            "Refund and chargeback data maintained per legal requirements",
          ],
        },
        {
          subtitle: "Third-Party Payment Services",
          details: [
            "Stripe's privacy policy applies to payment processing: https://stripe.com/privacy",
            "Payment data may be processed in multiple jurisdictions",
            "Stripe may share data with financial institutions as required",
            "We receive limited payment information from Stripe for billing purposes",
          ],
        },
      ],
    },
    {
      id: "compliance",
      title: "Legal Compliance",
      icon: Shield,
      summary: "Privacy laws and regulations we comply with.",
      content: [
        {
          subtitle: "Applicable Laws",
          details: [
            "General Data Protection Regulation (GDPR)",
            "California Consumer Privacy Act (CCPA)",
            "CAN-SPAM Act for email communications",
            "Payment Card Industry Data Security Standard (PCI DSS)",
            "Various state and federal privacy regulations",
          ],
        },
        {
          subtitle: "Compliance Measures",
          details: [
            "Regular privacy impact assessments",
            "Data Processing Agreements with service providers",
            "Privacy by design in new service development",
            "PCI DSS compliance through Stripe payment processing",
            "Ongoing monitoring of regulatory changes",
          ],
        },
      ],
    }
  ];

  const lastUpdated = "December 24, 2024";

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 relative" data-oid="ydt9a:g">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0" data-oid="giraq6x">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-float"
          data-oid="2o1cpie"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="7-y_9pu"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          data-oid="x2l0wqy"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="y:vi-8o"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="phmgiu5"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-oid="n55z92c"
          >
            <Badge
              className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="183i94g"
            >
              <Shield className="w-5 h-5 mr-2" data-oid="qadsj1." />
              Privacy & Data Protection
            </Badge>
          </motion.div>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid=".ejrjkd"
          >
            <span className="block text-white" data-oid="hrlan1i">
              Privacy
            </span>
            <span className="block gradient-text-vibrant" data-oid="0_mldh-">
              Policy
            </span>
          </motion.h1>

          <motion.div
            className="text-body-xl mb-8 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="j.st_th"
          >
            <p className="mb-4" data-oid="l8_de2z">
              At Inno Dot, we are committed to protecting your privacy and
              ensuring the security of your personal information. This privacy
              policy explains how we collect, use, and safeguard your data when
              you use our digital marketing services.
            </p>
            <div
              className="flex items-center justify-center space-x-2 text-sm text-gray-400"
              data-oid="jxtmxf9"
            >
              <Calendar className="w-4 h-4" data-oid="vvcij7u" />
              <span data-oid="reeu0j8">Last updated: {lastUpdated}</span>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
            data-oid="ghkxw1q"
          >
            <h3
              className="text-xl font-semibold text-white mb-6"
              data-oid="ylpmz6a"
            >
              Quick Navigation
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
              data-oid="xvx8t-m"
            >
              {privacySections.map((section, index) => (
                <motion.button
                  key={section.id}
                  onClick={() =>
                    document
                      .getElementById(section.id)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="glass-card border-white/15 hover:border-white/25 p-3 rounded-lg transition-all duration-300 text-left group"
                  whileHover={{ filter: "brightness(1.05)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                  data-oid=":u-hup."
                >
                  <section.icon
                    className="w-5 h-5 text-blue-400 mb-2"
                    data-oid="kvddof7"
                  />

                  <div
                    className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors"
                    data-oid="5qy7xg5"
                  >
                    {section.title}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-8" data-oid="a.tgfx2">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
              data-oid="zzyzab6"
            >
              <Card
                className="glass-card-enhanced border-white/20 overflow-hidden"
                data-oid="80hbp4m"
              >
                <CardContent className="p-0" data-oid="ts:ug6_">
                  {/* Section Header */}
                  <motion.button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 md:p-8 text-left hover:bg-white/5 transition-colors duration-300 flex items-center justify-between group"
                    whileHover={{ filter: "brightness(1.02)" }}
                    data-oid="az5quf."
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="p.6.c80"
                    >
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        data-oid="3-ylsci"
                      >
                        <section.icon
                          className="w-6 h-6 text-white"
                          data-oid="6o25sq3"
                        />
                      </div>
                      <div data-oid="8im:gyf">
                        <h2
                          className="heading-card text-card-primary mb-2"
                          data-oid="6gtehva"
                        >
                          {section.title}
                        </h2>
                        <p
                          className="text-body-sm text-card-secondary"
                          data-oid="q2gv4t_"
                        >
                          {section.summary}
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: expandedSection === section.id ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      data-oid="c5v04pb"
                    >
                      <ChevronDown
                        className="w-5 h-5 text-gray-400"
                        data-oid="c33fo_0"
                      />
                    </motion.div>
                  </motion.button>

                  {/* Section Content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedSection === section.id ? "auto" : 0,
                      opacity: expandedSection === section.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    data-oid="1efb1f9"
                  >
                    <div
                      className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10"
                      data-oid="fhl14a2"
                    >
                      <div className="space-y-6 mt-6" data-oid="h_v4-k8">
                        {section.content.map((subsection, idx) => (
                          <div key={idx} data-oid=".3.:rap">
                            <h4
                              className="text-lg font-semibold text-white mb-3 flex items-center"
                              data-oid="4wjmfdr"
                            >
                              <CheckCircle
                                className="w-5 h-5 text-green-400 mr-2"
                                data-oid="utvsy3q"
                              />

                              {subsection.subtitle}
                            </h4>
                            <ul className="space-y-2" data-oid="ubm32ra">
                              {subsection.details.map((detail, detailIdx) => (
                                <li
                                  key={detailIdx}
                                  className="flex items-start text-card-secondary"
                                  data-oid="6ufwat1"
                                >
                                  <div
                                    className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                                    data-oid="n8x.d9b"
                                  ></div>
                                  <span data-oid="dxexe5s">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Contact Information */}
        <motion.section
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="-i-q1v0"
        >
          <Card
            className="glass-card-enhanced border-white/20"
            data-oid="acrpbii"
          >
            <CardContent className="p-6 md:p-8" data-oid="3h8lp39">
              <div className="text-center mb-8" data-oid="u:0crjn">
                <h2 className="heading-section mb-4" data-oid="w87flk6">
                  <span className="text-white" data-oid="wd.q40p">
                    Contact Us About
                  </span>
                  <span
                    className="block gradient-text-vibrant"
                    data-oid=".55:ge3"
                  >
                    Privacy Matters
                  </span>
                </h2>
                <p
                  className="text-body-lg text-contrast-medium max-w-3xl mx-auto"
                  data-oid="j7a6ujq"
                >
                  If you have questions about this privacy policy or want to
                  exercise your rights, please don't hesitate to contact us
                  using any of the methods below.
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-oid="chxs3ed"
              >
                <motion.div
                  className="text-center"
                  whileHover={{ filter: "brightness(1.05)" }}
                  data-oid="2igf8rs"
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    data-oid="adn-0f8"
                  >
                    <Mail className="w-8 h-8 text-white" data-oid="es:b3_e" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    data-oid="l_pjx:s"
                  >
                    Email Us
                  </h3>
                  <p className="text-card-secondary" data-oid="vb7-wt9">
                    privacy@innodot.com
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ filter: "brightness(1.05)" }}
                  data-oid="ibjpzem"
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    data-oid="snms.do"
                  >
                    <Phone className="w-8 h-8 text-white" data-oid="z0.0s79" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    data-oid="n4j3v-t"
                  >
                    Call Us
                  </h3>
                  <p className="text-card-secondary" data-oid="4_ju0i9">
                    +1 (555) 123-4567
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ filter: "brightness(1.05)" }}
                  data-oid="-jicpog"
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    data-oid="jz64e4r"
                  >
                    <MapPin className="w-8 h-8 text-white" data-oid="v7.i3z." />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    data-oid="rkfdp4x"
                  >
                    Visit Us
                  </h3>
                  <p className="text-card-secondary" data-oid="kin15hm">
                    Morgan Hill, California
                    <br data-oid=":qqqtm:" />
                    95037
                  </p>
                </motion.div>
              </div>

              <div
                className="mt-8 pt-8 border-t border-white/10 text-center"
                data-oid="4:t7z9m"
              >
                <motion.div
                  className="button-group-responsive"
                  data-oid="8zhg6bm"
                >
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white btn-premium"
                    onClick={() => onNavigate("home")}
                    data-oid="-539mtm"
                  >
                    <FileText className="mr-2 h-4 w-4" data-oid="55naw73" />
                    Back to Home
                  </Button>
                  <Button
                    variant="outline"
                    className="glass-strong border-white/20 text-card-primary hover:bg-white/20 hover:text-white"
                    onClick={() =>
                      window.open("mailto:privacy@innodot.com", "_blank")
                    }
                    data-oid="zl-v:9d"
                  >
                    <Mail className="mr-2 h-4 w-4" data-oid="lgk-x0_" />
                    Contact Privacy Team
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
