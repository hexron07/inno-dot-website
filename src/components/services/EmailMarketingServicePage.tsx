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
    <div className="pt-24 pb-20 relative" data-oid="ass_m62">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="1.q3u4m"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="ai:0w5s"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="e.2q6mh"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="j385x5n"
            >
              <Mail className="w-5 h-5 mr-2" data-oid=":-swv9v" />
              Email Marketing
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="m-d-8tt"
          >
            Drive Revenue with
            <span
              className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="h856aau"
            >
              Strategic Email Marketing
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="fhnirtk"
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
            data-oid="w4ayfgt"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="xsqfrj7"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="oa8jst8"
                >
                  <CardContent className="p-6" data-oid="x54t8nl">
                    <stat.icon
                      className="w-8 h-8 text-blue-400 mx-auto mb-3"
                      data-oid="tl6tr5v"
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="nldqg2e"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="ow.6-v.">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="kvb6u1o"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="xihcewk"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="e4egk6t"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="m_y2yr8"
                />
                Get Free Email Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="ikahdmp"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="xws6rpw"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="-_e.zqh"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="5t2sen0"
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
          data-oid=":z:_b27"
        >
          <div className="text-center mb-16" data-oid="y6.tspd">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="c0u6m:0"
            >
              Advanced{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="l7ess:2"
              >
                Email Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="xzr5w97"
            >
              Our comprehensive approach leverages the latest email marketing
              technologies to maximize engagement and drive revenue.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="ram6-su"
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
                data-oid="hzhxc7u"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="-ves061"
                >
                  <CardContent className="p-8" data-oid="0yos07h">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="5-maj:1"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="eihcg65"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="rz:urg7"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="4cc3343"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="d8jf.0s">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid=".2_qtrz"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0"
                            data-oid="9zbszdy"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="8-893ns"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="ztlyu30"
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
          data-oid="vnc13gc"
        >
          <div className="text-center mb-16" data-oid="jym8cxe">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="l4d4wrj"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="8ytkqmj"
              >
                Email Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="crv14hm"
            >
              A systematic approach to email marketing that builds
              relationships, nurtures leads, and drives consistent revenue
              growth.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid=".tk.0jj"
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
                data-oid="lewj_ej"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-blue-400/50 bg-blue-500/5"
                      : ""
                  }`}
                  data-oid="uk-31ai"
                >
                  <CardContent className="p-6 text-center" data-oid="ufh6u:f">
                    <div className="relative mb-6" data-oid="zyrp4lk">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="i9l-d0d"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="xyjwxg2"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="60dl7uw"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-blue-500/20 text-blue-400 px-3 py-1 text-sm"
                      data-oid="bldqqub"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="jld80gp"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="6-wy4ky"
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
                      data-oid="3-pkqw:"
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
          data-oid="-:o52jq"
        >
          <div className="text-center mb-16" data-oid="j..i5z4">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="uvfbgiq"
            >
              Email Marketing{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="vpye8kl"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="2xqiqzl"
            >
              Real results from real clients who trusted us with their email
              marketing strategy and automation.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="ehyvb.7"
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
                data-oid="8u5pyd:"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="va4_uut"
                >
                  <CardContent className="p-6" data-oid="6xc2cjy">
                    <div className="mb-4" data-oid="n75job.">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="1vmm:28"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs"
                        data-oid="6jvnktf"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="xqchncj">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="np0_h24"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="1h_zydd"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="0m0cf:g"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="8kipfh."
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="i6agi5f"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="tn1suo3"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="a7sti9w">
                        <div
                          className="flex justify-between"
                          data-oid="s7:i50h"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="b7e1oa6"
                          >
                            Open Rate:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="p-8jog4"
                          >
                            {study.results.openRate}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="wd-edxb"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="p:u7q:9"
                          >
                            Click Rate:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="e6-:590"
                          >
                            {study.results.clickRate}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="7c:4.nb"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="-1am_m5"
                          >
                            Revenue:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="jfpoevt"
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
          data-oid="k5ps_d8"
        >
          <div className="text-center mb-16" data-oid="o28nf48">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="yhbmwco"
            >
              Email Marketing{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="tqjbj3."
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="nlharqk"
            >
              Choose the email marketing package that best fits your audience
              size and business goals.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="8itdsl7"
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
                data-oid="3ijuamz"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="jg5vrde"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="_jatg4a"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="6wphjwl" />
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
                  data-oid="_q848u:"
                >
                  <CardContent className="p-8 text-center" data-oid="qkwdyzj">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="6:vfhfa"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="79wamg.">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="j4p0xjb">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="c21xr0o"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="pn7:p6j">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="fei3tu.">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="cj.t.4v"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0"
                            data-oid="r2s2r46"
                          />

                          <span className="text-gray-300" data-oid="tkko-dn">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="_ja-psg">
                      <p
                        className="text-blue-400 text-sm font-medium"
                        data-oid="cv4_0cv"
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
                      data-oid="cshhku3"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="x:swna:"
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
          data-oid="sovcwey"
        >
          <div className="text-center mb-16" data-oid="v_kluro">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="_evfudh"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="0.vav1z"
              >
                Email Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="6g4nquf"
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
                data-oid="ljsi-s8"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="drhe93r"
                >
                  <CardContent className="p-8" data-oid="pl4zp16">
                    <div className="flex items-center mb-4" data-oid="fh8odte">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="u2gdmo_"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-blue-500/20 text-blue-400 px-2 py-1 text-xs"
                        data-oid="1x0aj6t"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="54qo:fc"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="5ao91xi">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="6zwp1qo"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="0elfkc8">
                        <div
                          className="font-bold text-white"
                          data-oid="yne.dbd"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="ibtzb26"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="61yeivs"
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
          data-oid="zm.8w77"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="gtddlfz"
          >
            <div className="relative z-10" data-oid="skgelzl">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="3jmfv-6"
              >
                <Mail
                  className="w-20 h-20 text-blue-400 glow-effect"
                  data-oid="y-ome2g"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="bnyveft"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                  data-oid="8hv6pxo"
                >
                  Maximize
                </span>{" "}
                Email ROI?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="yozzl26"
              >
                Get a free email marketing audit and discover how we can help
                you build stronger customer relationships, increase engagement,
                and drive consistent revenue through strategic email campaigns.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="2qmkqys"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="tsr9u1h"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="jnnz_e4"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="9l.y2co"
                    />
                    Get Free Email Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="vntyoxq"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="1bzpfal"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="d106ywy"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="3:_7z7g"
                    />
                    View Email Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"
              data-oid="hh59r9b"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
