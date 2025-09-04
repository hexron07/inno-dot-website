import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Edit3,
  TrendingUp,
  Eye,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  Users,
  MessageSquare,
  Zap,
  Award,
  Shield,
  Clock,
  Lightbulb,
  BookOpen,
  Camera,
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
  Image,
  Video,
  FileText,
  Target,
  Search,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface ContentMarketingServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function ContentMarketingServicePage({
  onNavigate,
}: ContentMarketingServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "400%", label: "Avg Engagement Increase", icon: Eye },
    { value: "300%", label: "Organic Traffic Growth", icon: TrendingUp },
    { value: "250%", label: "Lead Generation Boost", icon: Target },
    { value: "90%", label: "Content Success Rate", icon: Award },
  ];

  const contentProcessSteps = [
    {
      title: "Content Strategy & Planning",
      description:
        "Comprehensive content strategy development based on audience research, competitor analysis, and business objectives.",
      icon: Settings,
      timeline: "Week 1",
    },
    {
      title: "Editorial Calendar Creation",
      description:
        "Strategic content calendar with topic clusters, keyword integration, and optimal publishing schedules.",
      icon: Calendar,
      timeline: "Week 1-2",
    },
    {
      title: "Content Creation & Production",
      description:
        "High-quality content creation including blog posts, videos, infographics, and interactive content pieces.",
      icon: Edit3,
      timeline: "Week 2-4",
    },
    {
      title: "SEO Optimization",
      description:
        "Content optimization for search engines with keyword integration, meta tags, and technical SEO best practices.",
      icon: Search,
      timeline: "Week 3-4",
    },
    {
      title: "Distribution & Promotion",
      description:
        "Multi-channel content distribution across owned, earned, and paid media channels for maximum reach.",
      icon: Globe,
      timeline: "Week 4-5",
    },
    {
      title: "Performance Analysis",
      description:
        "Comprehensive tracking and analysis of content performance with data-driven optimizations and reporting.",
      icon: BarChart3,
      timeline: "Ongoing",
    },
  ];

  const contentFeatures = [
    {
      icon: Edit3,
      title: "Content Strategy & Creation",
      description:
        "Comprehensive content strategies with high-quality creation across all formats - blogs, videos, infographics, and more.",
      benefits: [
        "Strategic Content Planning",
        "Multi-Format Content",
        "SEO-Optimized Writing",
      ],
    },
    {
      icon: Target,
      title: "Audience-Focused Approach",
      description:
        "Data-driven content creation tailored to your specific audience segments and buyer journey stages.",
      benefits: ["Audience Research", "Persona Development", "Journey Mapping"],
    },
    {
      icon: BarChart3,
      title: "Performance Tracking",
      description:
        "Comprehensive analytics and reporting to measure content performance and optimize for better results.",
      benefits: [
        "Content Analytics",
        "ROI Measurement",
        "Performance Optimization",
      ],
    },
    {
      icon: Globe,
      title: "Multi-Channel Distribution",
      description:
        "Strategic content distribution across all relevant channels to maximize reach and engagement.",
      benefits: [
        "Cross-Platform Publishing",
        "Social Amplification",
        "Email Integration",
      ],
    },
  ];

  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge:
        "Low brand awareness and difficulty establishing thought leadership",
      solution:
        "Comprehensive content strategy with educational blog posts, whitepapers, and video series",
      results: {
        traffic: "+450% organic traffic",
        leads: "+380% qualified leads",
        engagement: "+290% content engagement",
      },
      timeframe: "8 months",
    },
    {
      client: "EcoGreen Products",
      industry: "Sustainable Products",
      challenge: "Need to educate market about sustainability benefits",
      solution:
        "Educational content campaign with infographics, videos, and interactive guides",
      results: {
        traffic: "+320% website traffic",
        leads: "+280% lead generation",
        engagement: "+350% social shares",
      },
      timeframe: "6 months",
    },
    {
      client: "Local Healthcare Group",
      industry: "Healthcare",
      challenge: "Building trust and patient education",
      solution:
        "Patient-focused content strategy with health guides, videos, and community content",
      results: {
        traffic: "+400% website visits",
        leads: "+420% appointment bookings",
        engagement: "+380% patient engagement",
      },
      timeframe: "5 months",
    },
  ];

  const pricingTiers = [
    {
      name: "Content Starter",
      price: 1299,
      period: "/month",
      description: "Essential content marketing for small businesses",
      features: [
        "4 blog posts per month",
        "Social media content",
        "Basic SEO optimization",
        "Editorial calendar",
        "Monthly reporting",
        "Email support",
      ],

      ideal: "Small businesses, startups",
      gradient: "from-purple-500 to-violet-500",
    },
    {
      name: "Content Growth",
      price: 2499,
      period: "/month",
      description: "Comprehensive content strategy for growing brands",
      features: [
        "Everything in Starter",
        "8 blog posts per month",
        "Video content creation",
        "Infographic design",
        "Email marketing content",
        "Advanced SEO optimization",
        "Bi-weekly reporting",
        "Phone support",
      ],

      ideal: "Growing businesses, B2B companies",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Content Enterprise",
      price: 4999,
      period: "/month",
      description: "Full-scale content marketing for large organizations",
      features: [
        "Everything in Growth",
        "Unlimited content creation",
        "Whitepaper & ebook creation",
        "Interactive content development",
        "Content automation setup",
        "Dedicated content manager",
        "Weekly strategy calls",
        "Custom analytics dashboard",
      ],

      ideal: "Large businesses, enterprise brands",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Michael Chen",
      company: "TechFlow Solutions",
      role: "Marketing Director",
      text: "Their content strategy completely transformed our thought leadership. We became the go-to resource in our industry with 450% increase in organic traffic.",
      rating: 5,
      result: "+450% Organic Traffic",
    },
    {
      name: "Sarah Rodriguez",
      company: "EcoGreen Products",
      role: "CEO",
      text: "The educational content they created helped us build trust with customers and significantly increase conversions. The ROI has been exceptional.",
      rating: 5,
      result: "+350% Social Shares",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="6fd3zdg">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="ryr8sn-"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="0a:8b_8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="on.x455"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid=".f7xhg8"
            >
              <Edit3 className="w-5 h-5 mr-2" data-oid="g2g7vcs" />
              Content Marketing
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="ff.x5p0"
          >
            Engage Your Audience with
            <span
              className="block bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-600 bg-clip-text text-transparent"
              data-oid=".9:lp2h"
            >
              Strategic Content Marketing
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="v3w491."
          >
            Build trust, establish thought leadership, and drive conversions
            with compelling content strategies. From blog posts to videos, we
            create content that resonates with your audience and drives results.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="evii9cp"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="lh-u:2w"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="mh.1w56"
                >
                  <CardContent className="p-6" data-oid="rnmsb:6">
                    <stat.icon
                      className="w-8 h-8 text-purple-400 mx-auto mb-3"
                      data-oid="ycjdnkx"
                    />
                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="3ht:dfk"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="d1t:xy:">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="d164iy3"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="hjqcaec"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="h1xjqho"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="rsajb_d"
                />
                Get Free Content Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="w1v71f7"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="5p:jisv"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="1c8a8_0"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="057c0yl"
                />
                View Content Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Content Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="u0un5oy"
        >
          <div className="text-center mb-16" data-oid="fpx_hlz">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="xhpt628"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="u7qksd8"
              >
                Content Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="y2t:o:j"
            >
              Our comprehensive approach covers every aspect of content
              marketing to engage your audience and drive business growth.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="2arag8:"
          >
            {contentFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="7ehzklk"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid=":osy_9x"
                >
                  <CardContent className="p-8" data-oid=".yrb0v_">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="u0si_tm"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="x7-3s7q"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="8074wtl"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="v4mnx51"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="2:1c44z">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="in0_mf_"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0"
                            data-oid="m18rijl"
                          />
                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="zq6l.vp"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="2kwib-b"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Content Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="-zu_i0_"
        >
          <div className="text-center mb-16" data-oid="nj0:3vs">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="45v38:4"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="cy47qbz"
              >
                Content Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="2qbxkmg"
            >
              A systematic approach to content marketing that creates valuable,
              engaging content that drives real business results.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="t73:y.p"
          >
            {contentProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="2-:6_74"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-purple-400/50 bg-purple-500/5"
                      : ""
                  }`}
                  data-oid="_s0_7l9"
                >
                  <CardContent className="p-6 text-center" data-oid="o80g.qf">
                    <div className="relative mb-6" data-oid="o7i9x-8">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="w41:drd"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="j3uo9v."
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="qrxwfiw"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-purple-500/20 text-purple-400 px-3 py-1 text-sm"
                      data-oid="3waduwn"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="v.bbwe9"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="452r10o"
                    >
                      {step.description}
                    </p>
                  </CardContent>

                  {activeProcess === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-violet-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="yuv6rsp"
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
          data-oid="4pf7loz"
        >
          <div className="text-center mb-16" data-oid=":5x-pbg">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="_60l2rm"
            >
              Content{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="bs28gl9"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="lu9ls-8"
            >
              Real results from real clients who trusted us with their content
              marketing strategy and execution.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="31dqhd3"
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
                data-oid="5kqu47v"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="643le3i"
                >
                  <CardContent className="p-6" data-oid="p50_-yu">
                    <div className="mb-4" data-oid="fj_oh8f">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="g0e.uab"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-purple-500/20 text-purple-400 px-2 py-1 text-xs"
                        data-oid="csav.oa"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="xkixcrp">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="7028r6i"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="k1d7a71"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="j0v:r.r"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="l4yc51x"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="6vkov6_"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="11n3572"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="g4oyo6n">
                        <div
                          className="flex justify-between"
                          data-oid="b5za0r5"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="j9_p-wn"
                          >
                            Traffic:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="r5pvuog"
                          >
                            {study.results.traffic}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="u855i0s"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="j9679_k"
                          >
                            Leads:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="tx8hrza"
                          >
                            {study.results.leads}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid=":y5xgf."
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="7m7ekgr"
                          >
                            Engagement:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="6nojn:2"
                          >
                            {study.results.engagement}
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
          data-oid="ikt2geo"
        >
          <div className="text-center mb-16" data-oid="rel90_o">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="-hj41ih"
            >
              Content Marketing{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="_uhpwx3"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="fjsd:zp"
            >
              Choose the content marketing package that best fits your brand's
              storytelling goals and budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="1jdllw1"
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
                data-oid="y1ozb1r"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="e0n9jro"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="5vizxlf"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="fv2ms38" />
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
                  data-oid="_iom2:p"
                >
                  <CardContent className="p-8 text-center" data-oid="a_1ayxr">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="3v_nbfr"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="sajsvdu">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="_b9wyt1">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="ku6.2l-"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="kbpuq0h">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="8kp-0-d">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="mmx6_6y"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0"
                            data-oid="a1p18ee"
                          />
                          <span className="text-gray-300" data-oid="ji7a.kt">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="rj-.t8b">
                      <p
                        className="text-purple-400 text-sm font-medium"
                        data-oid="7uziko0"
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
                      data-oid="dco8o5v"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="d2sa0vt"
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
          data-oid="e3buyb3"
        >
          <div className="text-center mb-16" data-oid="2fum4na">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="dmml6az"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="ue:6q0t"
              >
                Content Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="td8a9to"
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
                data-oid="jct3fpa"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="ck0_qn7"
                >
                  <CardContent className="p-8" data-oid=".2im7kn">
                    <div className="flex items-center mb-4" data-oid="zxpwlg3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="boc8g1y"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-purple-500/20 text-purple-400 px-2 py-1 text-xs"
                        data-oid="x-6pdi4"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="2mgj_29"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="6vr-sb1">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="8-ybg8e"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="8j8n2w_">
                        <div
                          className="font-bold text-white"
                          data-oid="pznp7mt"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid=".yu.1va"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="y3-7ihm"
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
          data-oid="p-9w._j"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="ql9vmxl"
          >
            <div className="relative z-10" data-oid="3zday4a">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid=".jo.4mm"
              >
                <Edit3
                  className="w-20 h-20 text-purple-400 glow-effect"
                  data-oid="_ywin.a"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="wbfdotj"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                  data-oid="3h_jr_1"
                >
                  Tell Your Story?
                </span>
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="trdrccc"
              >
                Get a free content audit and discover how we can help you create
                compelling content that engages your audience, builds trust, and
                drives meaningful business results across all channels.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="r7t6jav"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="f9hewqq"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-12 py-6 text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="9:c7csh"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="b.w0de8"
                    />
                    Get Free Content Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="bes1x2e"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="dyx8c57"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="ximp32h"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="25ljdn3"
                    />
                    View Content Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500"
              data-oid="f_9q5t."
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
