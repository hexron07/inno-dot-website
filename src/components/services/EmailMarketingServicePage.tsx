import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Mail,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  Target,
  MessageSquare,
  Zap,
  Award,
  Shield,
  Clock,
  Lightbulb,
  Send,
  Camera,
  ArrowUpRight,
  ChevronRight,
  Calendar,
  Phone,
  MapPin,
  Sparkles,
  LineChart,
  PieChart,
  Activity,
  Settings,
  Globe,
  Smartphone,
  Monitor,
  Image,
  Video,
  FileText,
  Search,
  Bot,
  Eye,
  Heart,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface EmailMarketingServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function EmailMarketingServicePage({
  onNavigate,
}: EmailMarketingServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "4200%", label: "Avg ROI on Email", icon: TrendingUp },
    { value: "45%", label: "Higher Open Rates", icon: Mail },
    { value: "300%", label: "Click-Through Increase", icon: Target },
    { value: "24/7", label: "Automated Campaigns", icon: Bot },
  ];

  const emailProcessSteps = [
    {
      title: "Email Strategy & Audit",
      description:
        "Comprehensive analysis of your current email marketing efforts and development of a strategic roadmap for success.",
      icon: Settings,
      timeline: "Week 1",
    },
    {
      title: "List Building & Segmentation",
      description:
        "Advanced list building strategies and intelligent segmentation to ensure the right message reaches the right audience.",
      icon: Users,
      timeline: "Week 1-2",
    },
    {
      title: "Template Design & Creation",
      description:
        "Custom email template design that's mobile-responsive, brand-consistent, and optimized for maximum engagement.",
      icon: FileText,
      timeline: "Week 2-3",
    },
    {
      title: "Automation Setup",
      description:
        "Sophisticated email automation workflows including welcome series, abandoned cart, and nurture sequences.",
      icon: Bot,
      timeline: "Week 2-4",
    },
    {
      title: "Campaign Launch & Management",
      description:
        "Strategic campaign deployment with A/B testing, timing optimization, and continuous performance monitoring.",
      icon: Send,
      timeline: "Week 3-4",
    },
    {
      title: "Analytics & Optimization",
      description:
        "Detailed performance tracking with actionable insights and continuous optimization for improved results.",
      icon: BarChart3,
      timeline: "Ongoing",
    },
  ];

  const emailFeatures = [
    {
      icon: Bot,
      title: "Advanced Automation",
      description:
        "Sophisticated email automation workflows that nurture leads, recover abandoned carts, and drive conversions 24/7.",
      benefits: ["Behavioral Triggers", "Drip Campaigns", "Smart Segmentation"],
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Advanced segmentation and personalization to deliver highly relevant content that resonates with each subscriber.",
      benefits: [
        "Dynamic Personalization",
        "Behavioral Segmentation",
        "Lifecycle Targeting",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Comprehensive tracking and reporting with actionable insights to continuously improve campaign performance.",
      benefits: ["Real-Time Analytics", "A/B Testing", "ROI Tracking"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description:
        "Responsive email templates that look perfect on all devices, ensuring maximum engagement across all platforms.",
      benefits: [
        "Mobile Optimization",
        "Cross-Client Testing",
        "Responsive Design",
      ],
    },
  ];

  const caseStudies = [
    {
      client: "EcoGreen Products",
      industry: "E-commerce",
      challenge: "Low email engagement and poor conversion rates",
      solution:
        "Complete email redesign with advanced automation and personalization strategies",
      results: {
        openRate: "+280% open rates",
        clickRate: "+340% click rates",
        revenue: "+450% email revenue",
      },
      timeframe: "4 months",
    },
    {
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge: "Ineffective lead nurturing and low trial conversions",
      solution:
        "Sophisticated drip campaigns with behavioral triggers and personalized content",
      results: {
        openRate: "+320% engagement",
        clickRate: "+290% trial signups",
        revenue: "+380% qualified leads",
      },
      timeframe: "6 months",
    },
    {
      client: "Local Healthcare Group",
      industry: "Healthcare",
      challenge: "Poor patient communication and low appointment bookings",
      solution:
        "Automated appointment reminders and patient education email series",
      results: {
        openRate: "+400% open rates",
        clickRate: "+350% appointment bookings",
        revenue: "+420% patient retention",
      },
      timeframe: "3 months",
    },
  ];

  const pricingTiers = [
    {
      name: "Email Starter",
      price: 799,
      period: "/month",
      description: "Essential email marketing for small businesses",
      features: [
        "Up to 5,000 subscribers",
        "4 email campaigns per month",
        "Basic automation setup",
        "Mobile-responsive templates",
        "Basic analytics",
        "Email support",
      ],

      ideal: "Small businesses, startups",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Email Growth",
      price: 1599,
      period: "/month",
      description: "Advanced email marketing for growing businesses",
      features: [
        "Everything in Starter",
        "Up to 25,000 subscribers",
        "Unlimited campaigns",
        "Advanced automation workflows",
        "A/B testing & optimization",
        "Advanced segmentation",
        "Bi-weekly reporting",
        "Phone support",
      ],

      ideal: "Growing businesses, e-commerce",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Email Enterprise",
      price: 2999,
      period: "/month",
      description: "Full-scale email marketing for large organizations",
      features: [
        "Everything in Growth",
        "Unlimited subscribers",
        "Custom automation workflows",
        "Advanced personalization",
        "Dedicated account manager",
        "Custom integrations",
        "Weekly strategy calls",
        "Priority support",
      ],

      ideal: "Large businesses, enterprise",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Lisa Rodriguez",
      company: "EcoGreen Products",
      role: "Marketing Director",
      text: "Their email automation transformed our customer journey. We saw 450% increase in email revenue and incredible engagement rates.",
      rating: 5,
      result: "+450% Email Revenue",
    },
    {
      name: "David Chen",
      company: "TechFlow Solutions",
      role: "CEO",
      text: "The sophisticated drip campaigns they built converted 290% more trial users. Their email expertise is unmatched in the industry.",
      rating: 5,
      result: "+290% Trial Signups",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="9s-4:gm">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="inv52gs"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="a34vez7"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="ynni0qt"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="9wndc.w"
            >
              <Mail className="w-5 h-5 mr-2" data-oid="5qf.2-c" />
              Email Marketing
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid=".uvwe8:"
          >
            Drive Revenue with
            <span
              className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="pzn33qu"
            >
              Strategic Email Marketing
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="2xm2c12"
          >
            Maximize customer lifetime value with sophisticated email marketing
            strategies. From automation to personalization, we create email
            campaigns that convert subscribers into loyal customers.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="xzbsui0"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="-z0sw3a"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid=":mh:2ce"
                >
                  <CardContent className="p-6" data-oid="2nndvka">
                    <stat.icon
                      className="w-8 h-8 text-blue-400 mx-auto mb-3"
                      data-oid="ox50qs8"
                    />
                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="zpo59yl"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="b.30im0">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="m4zvp95"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="6x1tbi1"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid=".e8v6r8"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="_v873kn"
                />
                Get Free Email Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="13_7m_i"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="2h0emg9"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="v.axuep"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="dhamhtx"
                />
                View Email Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Email Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="41:097u"
        >
          <div className="text-center mb-16" data-oid="-y4sz:n">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="gmksqit"
            >
              Advanced{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="r7-0sij"
              >
                Email Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="waczaam"
            >
              Our comprehensive approach leverages the latest email marketing
              technologies to maximize engagement and drive revenue.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="l5tl9jv"
          >
            {emailFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="f.5327y"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="zpsvq28"
                >
                  <CardContent className="p-8" data-oid="aozndn0">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="5i2sd1c"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="889:drl"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="tksx_ul"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="gmx:h9g"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="c_lzl9m">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="f4nd76v"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0"
                            data-oid="5fc.znq"
                          />
                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="612_ngn"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="_zpe.:r"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Email Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="x0.iq_t"
        >
          <div className="text-center mb-16" data-oid="vvhlx4o">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="5k5c1z."
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="0:i9e6v"
              >
                Email Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="a3z3bk3"
            >
              A systematic approach to email marketing that builds
              relationships, nurtures leads, and drives consistent revenue
              growth.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="n:unmge"
          >
            {emailProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="11ryigb"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-blue-400/50 bg-blue-500/5"
                      : ""
                  }`}
                  data-oid="9_ip7za"
                >
                  <CardContent className="p-6 text-center" data-oid="g1c.23.">
                    <div className="relative mb-6" data-oid="qcpg5oa">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="tp8tb55"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="30saoia"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="cstufha"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-blue-500/20 text-blue-400 px-3 py-1 text-sm"
                      data-oid="9:-ej8m"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="v2xav3."
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="_krlc_h"
                    >
                      {step.description}
                    </p>
                  </CardContent>

                  {activeProcess === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="eqqxj0a"
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Case Studies */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="jwaedtk"
        >
          <div className="text-center mb-16" data-oid="fs577xz">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="drz-ta6"
            >
              Email Marketing{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="6xw:j59"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="j3kvukv"
            >
              Real results from real clients who trusted us with their email
              marketing strategy and automation.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="9uq:ouy"
          >
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.client}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="jarz3-s"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="qxralzg"
                >
                  <CardContent className="p-6" data-oid="y:pqg0b">
                    <div className="mb-4" data-oid="m-0lh6.">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="0a2kktd"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs"
                        data-oid="zxrcg.1"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="-vas802">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="55gclfl"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="lm6p-gh"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="bhm0r-w"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="oxcl9dk"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="4s6h8m7"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid=".m20_n5"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="_a5k.xj">
                        <div
                          className="flex justify-between"
                          data-oid="sp50kw."
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="gqzx.a8"
                          >
                            Open Rate:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="x-syk:9"
                          >
                            {study.results.openRate}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="re5upmv"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="5m6tzk-"
                          >
                            Click Rate:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="9lcbma."
                          >
                            {study.results.clickRate}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="-.pu4ex"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="8ldfw03"
                          >
                            Revenue:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="jyjfyum"
                          >
                            {study.results.revenue}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Pricing */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="llqxqzt"
        >
          <div className="text-center mb-16" data-oid="ohif0oc">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="bufgv49"
            >
              Email Marketing{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="5d4m75g"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="horel9x"
            >
              Choose the email marketing package that best fits your audience
              size and business goals.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="t_r9sce"
          >
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
                data-oid="dwu1vom"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="b-ke-1."
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="0uz18x7"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="cfcxdfx" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`glass-card h-full transition-all duration-300 relative overflow-hidden ${
                    tier.popular
                      ? "border-purple-500/50"
                      : "border-white/15 hover:border-white/25"
                  }`}
                  data-oid="y.57fwz"
                >
                  <CardContent className="p-8 text-center" data-oid="0qtli4e">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="ez4dq7c"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="ajuwvr.">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="6obaocx">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="bf1.m1_"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="j_png4z">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid=":tu3foc">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="hp:ykuw"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0"
                            data-oid="jcfz3hy"
                          />
                          <span className="text-gray-300" data-oid="i8-b-21">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="9n4j1x1">
                      <p
                        className="text-blue-400 text-sm font-medium"
                        data-oid="9xbs9ot"
                      >
                        Ideal for: {tier.ideal}
                      </p>
                    </div>

                    <Button
                      className={`w-full ${
                        tier.popular
                          ? "btn-premium bg-gradient-to-r from-purple-500 to-pink-500"
                          : "glass border-white/20 hover:bg-white/20 text-white"
                      }`}
                      onClick={() => onNavigate("home")}
                      data-oid="1_vgqpd"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="s4hgzvu"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="2u2mobj"
        >
          <div className="text-center mb-16" data-oid="c385yih">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="zgb98q0"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="ssnux4r"
              >
                Email Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid=":cooepm"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="d_8xdnk"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="x_jrlm8"
                >
                  <CardContent className="p-8" data-oid="2c4jt.h">
                    <div className="flex items-center mb-4" data-oid="c8bief2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="0dxzr8a"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-blue-500/20 text-blue-400 px-2 py-1 text-xs"
                        data-oid="8x:53ka"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="4xo6r:4"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="47ho31q">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="1peprmr"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="oiaf9xf">
                        <div
                          className="font-bold text-white"
                          data-oid="r-g61kz"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="c5fw_hh"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="1_e96cd"
                        >
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="cal6pdz"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="olpv0j."
          >
            <div className="relative z-10" data-oid="l8njj.9">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="u1fc99m"
              >
                <Mail
                  className="w-20 h-20 text-blue-400 glow-effect"
                  data-oid="1-d0laf"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="x2eu2hj"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                  data-oid="k.o5p-w"
                >
                  Maximize
                </span>{" "}
                Email ROI?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="03nt16t"
              >
                Get a free email marketing audit and discover how we can help
                you build stronger customer relationships, increase engagement,
                and drive consistent revenue through strategic email campaigns.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="g-bk1i5"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="f53q1l9"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-12 py-6 text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="i.9iqq:"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="-m9ftp1"
                    />
                    Get Free Email Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="ycqwlpn"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="qnthx-0"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="l51ccer"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="lr5k4du"
                    />
                    View Email Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"
              data-oid="ldyt16o"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
