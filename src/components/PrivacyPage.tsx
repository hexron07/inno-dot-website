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
            "Payment processors and billing systems",
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
            "Various state and federal privacy regulations",
          ],
        },
        {
          subtitle: "Compliance Measures",
          details: [
            "Regular privacy impact assessments",
            "Data Processing Agreements with service providers",
            "Privacy by design in new service development",
            "Ongoing monitoring of regulatory changes",
          ],
        },
      ],
    },
  ];

  const lastUpdated = "December 24, 2024";

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 relative" data-oid="6p3358v">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0" data-oid="njygzi.">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-float"
          data-oid="opzkmfl"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="m.uxlmi"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          data-oid="ifsth8:"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="h5fav0-"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="srk91j7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-oid="uzd5a2h"
          >
            <Badge
              className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="-kbn0f2"
            >
              <Shield className="w-5 h-5 mr-2" data-oid="vt9yfvr" />
              Privacy & Data Protection
            </Badge>
          </motion.div>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="tvuxn0z"
          >
            <span className="block text-white" data-oid="bmr-cjs">
              Privacy
            </span>
            <span className="block gradient-text-vibrant" data-oid="sbrn23_">
              Policy
            </span>
          </motion.h1>

          <motion.div
            className="text-body-xl mb-8 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="om51kq4"
          >
            <p className="mb-4" data-oid="r66uqpk">
              At Inno Dot, we are committed to protecting your privacy and
              ensuring the security of your personal information. This privacy
              policy explains how we collect, use, and safeguard your data when
              you use our digital marketing services.
            </p>
            <div
              className="flex items-center justify-center space-x-2 text-sm text-gray-400"
              data-oid="ins5ew2"
            >
              <Calendar className="w-4 h-4" data-oid="owi_i11" />
              <span data-oid="2d-0sxp">Last updated: {lastUpdated}</span>
            </div>
          </motion.div>

          {/* Quick Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
            data-oid="wnoeceh"
          >
            <h3
              className="text-xl font-semibold text-white mb-6"
              data-oid="v.c1ps-"
            >
              Quick Navigation
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
              data-oid="1-.yq3d"
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
                  data-oid="v1el7zs"
                >
                  <section.icon
                    className="w-5 h-5 text-blue-400 mb-2"
                    data-oid="43qccbh"
                  />
                  <div
                    className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors"
                    data-oid="xwymn:f"
                  >
                    {section.title}
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Privacy Sections */}
        <div className="space-y-8" data-oid="k-uzrun">
          {privacySections.map((section, index) => (
            <motion.div
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
              data-oid="9.b1ju4"
            >
              <Card
                className="glass-card-enhanced border-white/20 overflow-hidden"
                data-oid="aw5dhx_"
              >
                <CardContent className="p-0" data-oid="j._4pcf">
                  {/* Section Header */}
                  <motion.button
                    onClick={() => toggleSection(section.id)}
                    className="w-full p-6 md:p-8 text-left hover:bg-white/5 transition-colors duration-300 flex items-center justify-between group"
                    whileHover={{ filter: "brightness(1.02)" }}
                    data-oid="fjgviyb"
                  >
                    <div
                      className="flex items-center space-x-4"
                      data-oid="kofa-8h"
                    >
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300"
                        data-oid="87xe9nn"
                      >
                        <section.icon
                          className="w-6 h-6 text-white"
                          data-oid="bj_kakr"
                        />
                      </div>
                      <div data-oid=".5y87vi">
                        <h2
                          className="heading-card text-card-primary mb-2"
                          data-oid="rka7sng"
                        >
                          {section.title}
                        </h2>
                        <p
                          className="text-body-sm text-card-secondary"
                          data-oid="syiw.48"
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
                      data-oid="ln-v15e"
                    >
                      <ChevronDown
                        className="w-5 h-5 text-gray-400"
                        data-oid="sd2u-e2"
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
                    data-oid="u58_1z."
                  >
                    <div
                      className="px-6 md:px-8 pb-6 md:pb-8 border-t border-white/10"
                      data-oid="--tmbn:"
                    >
                      <div className="space-y-6 mt-6" data-oid="ia5-38b">
                        {section.content.map((subsection, idx) => (
                          <div key={idx} data-oid="yio:8px">
                            <h4
                              className="text-lg font-semibold text-white mb-3 flex items-center"
                              data-oid="izbt._t"
                            >
                              <CheckCircle
                                className="w-5 h-5 text-green-400 mr-2"
                                data-oid="3e.rrlu"
                              />
                              {subsection.subtitle}
                            </h4>
                            <ul className="space-y-2" data-oid="x84q98-">
                              {subsection.details.map((detail, detailIdx) => (
                                <li
                                  key={detailIdx}
                                  className="flex items-start text-card-secondary"
                                  data-oid=":o2elqt"
                                >
                                  <div
                                    className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"
                                    data-oid=":g:kj2r"
                                  ></div>
                                  <span data-oid="v1jnspy">{detail}</span>
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
          data-oid="9k4ok31"
        >
          <Card
            className="glass-card-enhanced border-white/20"
            data-oid="4xio9ae"
          >
            <CardContent className="p-6 md:p-8" data-oid="s0ttt2x">
              <div className="text-center mb-8" data-oid="70-tys7">
                <h2 className="heading-section mb-4" data-oid="s4vtm1c">
                  <span className="text-white" data-oid="r3w2e3i">
                    Contact Us About
                  </span>
                  <span
                    className="block gradient-text-vibrant"
                    data-oid="vxnanf."
                  >
                    Privacy Matters
                  </span>
                </h2>
                <p
                  className="text-body-lg text-contrast-medium max-w-3xl mx-auto"
                  data-oid="8-8lrtx"
                >
                  If you have questions about this privacy policy or want to
                  exercise your rights, please don't hesitate to contact us
                  using any of the methods below.
                </p>
              </div>

              <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                data-oid="be8ulfq"
              >
                <motion.div
                  className="text-center"
                  whileHover={{ filter: "brightness(1.05)" }}
                  data-oid="2dvc-1j"
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    data-oid="wtqgbih"
                  >
                    <Mail className="w-8 h-8 text-white" data-oid="56fv-h2" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    data-oid="vx0lyp9"
                  >
                    Email Us
                  </h3>
                  <p className="text-card-secondary" data-oid="ueloaug">
                    privacy@innodot.com
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ filter: "brightness(1.05)" }}
                  data-oid="f0albf1"
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    data-oid="ctfp6fx"
                  >
                    <Phone className="w-8 h-8 text-white" data-oid="t1:0dtt" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    data-oid="ynb_u2l"
                  >
                    Call Us
                  </h3>
                  <p className="text-card-secondary" data-oid="83_9e8j">
                    +1 (555) 123-4567
                  </p>
                </motion.div>

                <motion.div
                  className="text-center"
                  whileHover={{ filter: "brightness(1.05)" }}
                  data-oid=".jo-q-7"
                >
                  <div
                    className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    data-oid="tscbu68"
                  >
                    <MapPin className="w-8 h-8 text-white" data-oid="th5sgiv" />
                  </div>
                  <h3
                    className="text-lg font-semibold text-white mb-2"
                    data-oid="pftzeq9"
                  >
                    Visit Us
                  </h3>
                  <p className="text-card-secondary" data-oid="niaieyz">
                    123 Innovation Drive
                    <br data-oid="kzm4otb" />
                    Digital City, DC 12345
                  </p>
                </motion.div>
              </div>

              <div
                className="mt-8 pt-8 border-t border-white/10 text-center"
                data-oid="ghwz:5e"
              >
                <motion.div
                  className="button-group-responsive"
                  data-oid="n3z9:t."
                >
                  <Button
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white btn-premium"
                    onClick={() => onNavigate("home")}
                    data-oid="m_bdis8"
                  >
                    <FileText className="mr-2 h-4 w-4" data-oid="1c4y81g" />
                    Back to Home
                  </Button>
                  <Button
                    variant="outline"
                    className="glass-strong border-white/20 text-card-primary hover:bg-white/20 hover:text-white"
                    onClick={() =>
                      window.open("mailto:privacy@innodot.com", "_blank")
                    }
                    data-oid="jc8f0o."
                  >
                    <Mail className="mr-2 h-4 w-4" data-oid="dpu5kk8" />
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
