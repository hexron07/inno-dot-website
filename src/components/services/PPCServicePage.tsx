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
    <div className="pt-24 pb-20 relative" data-oid="lwns-69">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="4vu7h34"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="ml73-aq"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="kd:ayoo"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="wl_a6bf"
            >
              <MousePointer className="w-5 h-5 mr-2" data-oid="abt42v5" />
              Pay-Per-Click Advertising
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid=":u:8fkz"
          >
            Maximize ROI with
            <span
              className="block bg-gradient-to-r from-green-400 via-emerald-500 to-cyan-600 bg-clip-text text-transparent"
              data-oid="64qldq8"
            >
              Strategic PPC Campaigns
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="oza_7jb"
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
            data-oid="j-s7se-"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="9k8hn.-"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="n6jp372"
                >
                  <CardContent className="p-6" data-oid="w67pskm">
                    <stat.icon
                      className="w-8 h-8 text-green-400 mx-auto mb-3"
                      data-oid="y-rdnwk"
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="oj:j361"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="7jn_p5c">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="s2nkw-6"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="t7lc22p"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="kprxdwr"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="tw6t-h8"
                />
                Get Free PPC Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="d3itvwk"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="a7eps4g"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="76-ida3"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="a.:wee4"
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
          data-oid="xrqlnk."
        >
          <div className="text-center mb-16" data-oid="dwzqna4">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3nyps1j"
            >
              Advanced{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="j0qzl2w"
              >
                PPC Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="m7cmg-8"
            >
              Our comprehensive PPC approach maximizes every advertising dollar
              to deliver exceptional results and sustainable growth.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="f.6m-7-"
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
                data-oid="f37bmm0"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="kjkw5wr"
                >
                  <CardContent className="p-8" data-oid="t7kctb5">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="v9o5jol"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="ixyjn3t"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-green-100 transition-colors duration-300"
                      data-oid="9drp5au"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="8yxj:rl"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="cexi856">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="e1_j9b1"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="z-vk0a6"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="cmh9um."
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="23b5tv4"
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
          data-oid="todtc8q"
        >
          <div className="text-center mb-16" data-oid="bxdpxpb">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="j.zd6ci"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="jua6jbp"
              >
                PPC Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="ix0u2bq"
            >
              A systematic approach to PPC management that delivers consistent,
              profitable results for your business.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="j4:br0-"
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
                data-oid="dtj_3qh"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-green-400/50 bg-green-500/5"
                      : ""
                  }`}
                  data-oid="afbdmq0"
                >
                  <CardContent className="p-6 text-center" data-oid="4c715o:">
                    <div className="relative mb-6" data-oid="fsgoktl">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="ej5i559"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="0_pf9bm"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="3yhpj8c"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-green-500/20 text-green-400 px-3 py-1 text-sm"
                      data-oid="gca7sio"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-green-100 transition-colors duration-300"
                      data-oid="xufmr_5"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="zw_gyvw"
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
                      data-oid="5y2ot0z"
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
          data-oid=".e_9:1b"
        >
          <div className="text-center mb-16" data-oid="744jbu4">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="aa1av4_"
            >
              PPC{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="8jmi:dk"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="ylr55.8"
            >
              Real results from real clients who trusted us with their PPC
              advertising investment.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="oivno6d"
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
                data-oid="a_gynkz"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid=":mre9dq"
                >
                  <CardContent className="p-6" data-oid="zaz:a6v">
                    <div className="mb-4" data-oid="mcjn-t4">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="y-t7oli"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="1di8g2h"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="1qvl4sc">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="c4fg:wn"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="gog8d3_"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="oc5i_gw"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="vyc26ru"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="khiijo:"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="hh.vt._"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="cslxeh0">
                        <div
                          className="flex justify-between"
                          data-oid="o01ypgv"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="-kwb.9o"
                          >
                            ROAS:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="-m43uzv"
                          >
                            {study.results.roas}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="27y2359"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid=".b8bzkb"
                          >
                            CPA:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="brzxf3g"
                          >
                            {study.results.cpa}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="7wy.how"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="pbu1m06"
                          >
                            Growth:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="p7smpwv"
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
          data-oid="6:zkdvh"
        >
          <div className="text-center mb-16" data-oid="gp737b1">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="7neo6v_"
            >
              PPC{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="6p_j.s."
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="k.it_c."
            >
              Choose the PPC management package that best fits your advertising
              goals and budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="l6a2c.2"
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
                data-oid="_gukgq9"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="7xq:n0f"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="o5oq4:q"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="b9:alzh" />
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
                  data-oid="sxz5jzr"
                >
                  <CardContent className="p-8 text-center" data-oid="pkgz7.t">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="9-z9j.y"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="nw0u:wp">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="_5-llms">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="_6gl4ub"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="ind6h_8">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="n5tn679">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="v8xm.4w"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="m-4j4k5"
                          />

                          <span className="text-gray-300" data-oid="0m9ihb4">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="tkt_ife">
                      <p
                        className="text-green-400 text-sm font-medium"
                        data-oid="5-l8lmc"
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
                      data-oid="8f2wrd:"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="n3y13-y"
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
          data-oid="3zo-i5-"
        >
          <div className="text-center mb-16" data-oid="_fc7n2s">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="acx8w42"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                data-oid="thf:zvz"
              >
                PPC Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="e6zw1it"
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
                data-oid="cp_t7f9"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="cmf04p6"
                >
                  <CardContent className="p-8" data-oid="n3qzs3n">
                    <div className="flex items-center mb-4" data-oid="q4tdqyx">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="_rq34m5"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="di_tsvl"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="00xm6vp"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="q2d8zw0">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="pg4xlr_"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="m2uej4s">
                        <div
                          className="font-bold text-white"
                          data-oid="f1-0a6-"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="ehoxy26"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="lv.bch5"
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
          data-oid="5w6m_jw"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="6j1enx8"
          >
            <div className="relative z-10" data-oid="f-.ko58">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="c97orvl"
              >
                <MousePointer
                  className="w-20 h-20 text-green-400 glow-effect"
                  data-oid="jub5-ra"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="6c5zwf1"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent"
                  data-oid="vdfblwe"
                >
                  Maximize
                </span>{" "}
                Your ROI?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="a9nbes5"
              >
                Get a free PPC audit and discover how we can help your business
                achieve higher conversions, lower costs, and exceptional return
                on ad spend across all platforms.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="28fx69p"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="x.5m42z"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="zoaf3fd"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="kww3:17"
                    />
                    Get Free PPC Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="d5515uv"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="yelri2g"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid=".o9b26r"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="4-to1u."
                    />
                    View PPC Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-500"
              data-oid="m5m683_"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
