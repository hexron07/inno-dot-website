import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  MousePointer,
  TrendingUp,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  DollarSign,
  Users,
  Zap,
  Award,
  Shield,
  Clock,
  Lightbulb,
  Eye,
  MessageSquare,
  ArrowUpRight,
  ChevronRight,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  LineChart,
  PieChart,
  Activity,
  Settings,
  Globe,
  Smartphone,
  Monitor,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface PPCServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function PPCServicePage({ onNavigate }: PPCServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "300%", label: "Avg ROAS Increase", icon: TrendingUp },
    { value: "40%", label: "Lower Cost Per Click", icon: DollarSign },
    { value: "95%", label: "Campaign Success Rate", icon: Award },
    { value: "24 Hours", label: "Campaign Launch Time", icon: Clock },
  ];

  const ppcProcessSteps = [
    {
      title: "Account Audit & Strategy",
      description:
        "Comprehensive analysis of existing campaigns and competitive landscape to develop a winning PPC strategy tailored to your business goals.",
      icon: Settings,
      timeline: "Week 1",
    },
    {
      title: "Keyword Research & Targeting",
      description:
        "Advanced keyword research using industry tools to identify high-converting, cost-effective keywords with optimal search volume.",
      icon: Target,
      timeline: "Week 1-2",
    },
    {
      title: "Ad Creation & Testing",
      description:
        "Compelling ad copy creation with A/B testing to maximize click-through rates and conversion performance across all platforms.",
      icon: Lightbulb,
      timeline: "Week 2-3",
    },
    {
      title: "Landing Page Optimization",
      description:
        "Optimization of landing pages to ensure seamless user experience and maximum conversion rates from ad traffic.",
      icon: Globe,
      timeline: "Week 2-4",
    },
    {
      title: "Campaign Launch & Monitoring",
      description:
        "Strategic campaign deployment with real-time monitoring and immediate optimizations for maximum performance.",
      icon: Activity,
      timeline: "Week 3-4",
    },
    {
      title: "Performance Optimization",
      description:
        "Continuous bid management, keyword optimization, and performance analysis with detailed reporting and strategy refinement.",
      icon: BarChart3,
      timeline: "Ongoing",
    },
  ];

  const ppcFeatures = [
    {
      icon: Target,
      title: "Precision Targeting",
      description:
        "Advanced audience targeting using demographics, interests, behaviors, and custom audiences to reach your ideal customers.",
      benefits: [
        "Laser-Focused Audiences",
        "Higher Conversion Rates",
        "Reduced Wasted Spend",
      ],
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Comprehensive tracking and analytics to measure every aspect of campaign performance with actionable insights.",
      benefits: [
        "Live Performance Data",
        "Conversion Tracking",
        "ROI Optimization",
      ],
    },
    {
      icon: DollarSign,
      title: "Budget Optimization",
      description:
        "Strategic budget allocation and bid management to maximize your advertising spend and achieve the best possible ROAS.",
      benefits: [
        "Cost-Effective Campaigns",
        "Smart Bidding Strategies",
        "Budget Efficiency",
      ],
    },
    {
      icon: Smartphone,
      title: "Multi-Platform Management",
      description:
        "Expert management across Google Ads, Facebook, Instagram, LinkedIn, and other premium advertising platforms.",
      benefits: [
        "Unified Strategy",
        "Cross-Platform Insights",
        "Maximum Reach",
      ],
    },
  ];

  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "High cost per acquisition and low conversion rates",
      solution:
        "Comprehensive campaign restructure with advanced targeting and landing page optimization",
      results: {
        roas: "420% ROAS",
        cpa: "65% lower CPA",
        conversions: "+340% conversions",
      },
      timeframe: "3 months",
    },
    {
      client: "EcoGreen Products",
      industry: "E-commerce",
      challenge: "Inefficient ad spend across multiple platforms",
      solution:
        "Multi-platform strategy with automated bidding and audience optimization",
      results: {
        roas: "380% ROAS",
        cpa: "50% lower CPA",
        conversions: "+290% revenue",
      },
      timeframe: "4 months",
    },
    {
      client: "Local Healthcare Group",
      industry: "Healthcare",
      challenge: "Limited local visibility and high competition",
      solution: "Local PPC strategy with geo-targeting and competitor analysis",
      results: {
        roas: "520% ROAS",
        cpa: "40% lower CPA",
        conversions: "+450% appointments",
      },
      timeframe: "2 months",
    },
  ];

  const pricingTiers = [
    {
      name: "PPC Starter",
      price: 1499,
      period: "/month",
      description: "Essential PPC management for small businesses",
      features: [
        "Google Ads management",
        "Keyword research & targeting",
        "Ad creation & optimization",
        "Landing page analysis",
        "Monthly reporting",
        "Email support",
      ],

      ideal: "Small businesses, startups",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      name: "PPC Growth",
      price: 2999,
      period: "/month",
      description: "Comprehensive PPC across multiple platforms",
      features: [
        "Everything in Starter",
        "Multi-platform management",
        "Advanced audience targeting",
        "A/B testing & optimization",
        "Conversion tracking setup",
        "Bi-weekly reporting",
        "Phone support",
      ],

      ideal: "Growing businesses, competitive markets",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "PPC Enterprise",
      price: 5999,
      period: "/month",
      description: "Advanced PPC for large organizations",
      features: [
        "Everything in Growth",
        "Custom audience development",
        "Advanced automation setup",
        "Dedicated account manager",
        "Weekly strategy calls",
        "Priority support",
        "Custom reporting dashboard",
      ],

      ideal: "Large businesses, enterprise clients",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechFlow Solutions",
      role: "Marketing Director",
      text: "Their PPC expertise completely transformed our advertising performance. We achieved 420% ROAS within just 3 months.",
      rating: 5,
      result: "420% ROAS",
    },
    {
      name: "David Rodriguez",
      company: "EcoGreen Products",
      role: "CEO",
      text: "The multi-platform approach and advanced targeting strategies delivered exceptional results. Our conversion rates tripled.",
      rating: 5,
      result: "+290% Revenue",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="52pgx-t">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="lwv-s1t"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="kqo3.hz"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="hiarm.."
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid=".mrrufk"
            >
              <MousePointer className="w-5 h-5 mr-2" data-oid="6yni-z2" />
              Pay-Per-Click Advertising
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="_r3z7me"
          >
            Maximize ROI with
            <span
              className="block bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent"
              data-oid="nqr4mwj"
            >
              Strategic PPC Campaigns
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="jd6ufip"
          >
            Drive immediate results with expertly managed PPC campaigns across
            Google Ads, Facebook, and premium platforms. Our data-driven
            approach delivers higher conversions at lower costs.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="5frd1dc"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="hnmjr5s"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="pqgd0l2"
                >
                  <CardContent className="p-6" data-oid="5_ame_q">
                    <stat.icon
                      className="w-8 h-8 text-green-400 mx-auto mb-3"
                      data-oid="bzq.jic"
                    />
                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="d2n1p._"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="m_-0arz">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="byxpoiq"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="bh.x9zx"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid=":xm7iyq"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="1i_tcyz"
                />
                Get Free PPC Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="764zo:m"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid=".8crrv2"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="3raz3:."
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="9mhb9j5"
                />
                View PPC Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* PPC Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="xob:xlo"
        >
          <div className="text-center mb-16" data-oid="4q.wq99">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="us2f_um"
            >
              Advanced{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="rzb6cnm"
              >
                PPC Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="8kt9gp2"
            >
              Our comprehensive PPC approach maximizes every advertising dollar
              to deliver exceptional results and sustainable growth.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="5xrqx2o"
          >
            {ppcFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="5.h6.g3"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="tzmj3ub"
                >
                  <CardContent className="p-8" data-oid=".jyklqp">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="-wj:4so"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="7rzhxep"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-green-100 transition-colors duration-300"
                      data-oid="0wxw8cf"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="..cy9pv"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="r7fdco6">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="zgwrkx2"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="ta_bagc"
                          />
                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="e:hgqjt"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="sl0pvdi"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PPC Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="89sma01"
        >
          <div className="text-center mb-16" data-oid="5vcxzno">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="9::uox:"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="_dum:a7"
              >
                PPC Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="v3b7hji"
            >
              A systematic approach to PPC management that delivers consistent,
              profitable results for your business.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="t4ojehs"
          >
            {ppcProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="5k-jqt9"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-green-400/50 bg-green-500/5"
                      : ""
                  }`}
                  data-oid="_5yr:p."
                >
                  <CardContent className="p-6 text-center" data-oid="hg00dbx">
                    <div className="relative mb-6" data-oid="m8hh_c6">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="-ekfbf3"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="lrq4rcp"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="8bcf34x"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-green-500/20 text-green-400 px-3 py-1 text-sm"
                      data-oid="gvuo1-g"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-green-100 transition-colors duration-300"
                      data-oid="a6-crb."
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="8v90knh"
                    >
                      {step.description}
                    </p>
                  </CardContent>

                  {activeProcess === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="o4mga38"
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
          data-oid="gp3cg36"
        >
          <div className="text-center mb-16" data-oid="vgs8rma">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="h3z8a7x"
            >
              PPC{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="d_:1_p7"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="if41x8:"
            >
              Real results from real clients who trusted us with their PPC
              advertising investment.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="x1an7w1"
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
                data-oid="dy243gw"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="ikhw9tl"
                >
                  <CardContent className="p-6" data-oid="li-s8d_">
                    <div className="mb-4" data-oid="cy5aw:b">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="x__hyf9"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="3ic:sn."
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="5b0fqqp">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="-rd:d8b"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid=".l:cu4a"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="2sy37nn"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="kf4-kxg"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="-ydkg9m"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="ut:ikqv"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="58kfle5">
                        <div
                          className="flex justify-between"
                          data-oid="gxo2:te"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="b8krqxp"
                          >
                            ROAS:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="ge6zvbz"
                          >
                            {study.results.roas}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="iwwwy48"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="pxcza3r"
                          >
                            CPA:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="80bkv7h"
                          >
                            {study.results.cpa}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid=".hnxsp1"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="m5rqifs"
                          >
                            Growth:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid=":g9-226"
                          >
                            {study.results.conversions}
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
          data-oid=".nky14y"
        >
          <div className="text-center mb-16" data-oid="qxmu.mz">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3-z34_b"
            >
              PPC{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid=".882ubq"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="98ny68m"
            >
              Choose the PPC management package that best fits your advertising
              goals and budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="kx8fju6"
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
                data-oid="oc5bc-d"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="dsp3_u1"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="6dp-wol"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="ck:pt-_" />
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
                  data-oid="abg0mq5"
                >
                  <CardContent className="p-8 text-center" data-oid="pc:qtk1">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="yk_irnw"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="1ni:a7h">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="53g_6md">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="p3s7cmd"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="j-r1d93">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid=":ydfjor">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="uc57s1r"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="3pzl7k0"
                          />
                          <span className="text-gray-300" data-oid="pm0rlmt">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="_ai.d41">
                      <p
                        className="text-green-400 text-sm font-medium"
                        data-oid="4iz1k0s"
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
                      data-oid="9ixmwvg"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="hicu:f3"
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
          data-oid=".l6ntwo"
        >
          <div className="text-center mb-16" data-oid="pojwko-">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="ayfvohu"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="mjsslsl"
              >
                PPC Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="zvyed9z"
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
                data-oid="8ca.6r1"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="gj_wybt"
                >
                  <CardContent className="p-8" data-oid="q_-sh-k">
                    <div className="flex items-center mb-4" data-oid="pax101g">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="f0vtv83"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="c9-_1fi"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="9d6krxv"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="mc-e2q6">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="q6_e-nc"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="9yl9nai">
                        <div
                          className="font-bold text-white"
                          data-oid="h6r_lmp"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="p.snj_x"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="wmxt455"
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
          data-oid="v5i3gsl"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="0svou7s"
          >
            <div className="relative z-10" data-oid="jk:qgxn">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="spyoczr"
              >
                <MousePointer
                  className="w-20 h-20 text-green-400 glow-effect"
                  data-oid="onjubab"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="xmlfm6c"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                  data-oid="u2x:.0d"
                >
                  Maximize
                </span>{" "}
                Your ROI?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="m:6cuk4"
              >
                Get a free PPC audit and discover how we can help your business
                achieve higher conversions, lower costs, and exceptional return
                on ad spend across all platforms.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="ih9l.ry"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="bxpqctk"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="qxt3nhz"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="ij:q-.i"
                    />
                    Get Free PPC Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="qjn7f:a"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="5cby562"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="8erx:ox"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="2y2ej88"
                    />
                    View PPC Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"
              data-oid="wdgs5z:"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
