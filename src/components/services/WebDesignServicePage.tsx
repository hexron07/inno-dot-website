import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Code,
  TrendingUp,
  Smartphone,
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
  Mail,
  MapPin,
  Sparkles,
  LineChart,
  PieChart,
  Activity,
  Settings,
  Globe,
  Monitor,
  Image,
  Video,
  FileText,
  Search,
  Bot,
  Eye,
  Heart,
  Layers,
  Palette,
  Users,
  Rocket,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface WebDesignServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function WebDesignServicePage({
  onNavigate,
}: WebDesignServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "300%", label: "Avg Conversion Increase", icon: TrendingUp },
    { value: "2.5s", label: "Page Load Time", icon: Zap },
    { value: "98%", label: "Mobile Performance", icon: Smartphone },
    { value: "24/7", label: "Website Uptime", icon: Shield },
  ];

  const webProcessSteps = [
    {
      title: "Discovery & Strategy",
      description:
        "Comprehensive analysis of your business goals, target audience, and competitive landscape to inform design strategy.",
      icon: Settings,
      timeline: "Week 1",
    },
    {
      title: "UX/UI Design",
      description:
        "User-centered design process creating wireframes, prototypes, and high-fidelity designs optimized for conversions.",
      icon: Palette,
      timeline: "Week 2-3",
    },
    {
      title: "Development & Coding",
      description:
        "Clean, semantic code development with modern frameworks, ensuring fast loading times and optimal performance.",
      icon: Code,
      timeline: "Week 3-5",
    },
    {
      title: "Content Integration",
      description:
        "Strategic content integration with SEO optimization, ensuring your website ranks well and converts visitors.",
      icon: FileText,
      timeline: "Week 4-5",
    },
    {
      title: "Testing & Optimization",
      description:
        "Comprehensive testing across devices and browsers with performance optimization and quality assurance.",
      icon: Activity,
      timeline: "Week 5-6",
    },
    {
      title: "Launch & Maintenance",
      description:
        "Smooth website launch with ongoing maintenance, updates, and performance monitoring for optimal results.",
      icon: Rocket,
      timeline: "Week 6+",
    },
  ];

  const webFeatures = [
    {
      icon: Monitor,
      title: "Responsive Design",
      description:
        "Mobile-first, responsive websites that look perfect and function flawlessly on all devices and screen sizes.",
      benefits: [
        "Mobile Optimization",
        "Cross-Browser Testing",
        "Retina Display Ready",
      ],
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Lightning-fast websites optimized for speed, Core Web Vitals, and exceptional user experience.",
      benefits: [
        "Page Speed Optimization",
        "Image Compression",
        "CDN Integration",
      ],
    },
    {
      icon: Search,
      title: "SEO-Optimized Structure",
      description:
        "Built-in SEO best practices with clean code, proper structure, and optimization for search engines.",
      benefits: ["Technical SEO", "Schema Markup", "Site Architecture"],
    },
    {
      icon: Shield,
      title: "Security & Reliability",
      description:
        "Enterprise-grade security measures with SSL certificates, regular backups, and 99.9% uptime guarantee.",
      benefits: ["SSL Security", "Regular Backups", "Security Monitoring"],
    },
  ];

  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge:
        "Outdated website with poor conversion rates and mobile experience",
      solution:
        "Complete redesign with modern UX/UI, mobile optimization, and conversion-focused design",
      results: {
        conversions: "+420% conversions",
        speed: "85% faster loading",
        mobile: "+380% mobile traffic",
      },
      timeframe: "8 weeks",
    },
    {
      client: "EcoGreen Products",
      industry: "E-commerce",
      challenge: "High bounce rates and poor user experience on product pages",
      solution:
        "User-centered redesign with improved navigation, product showcase, and checkout optimization",
      results: {
        conversions: "+340% sales",
        speed: "70% faster checkout",
        mobile: "+290% mobile orders",
      },
      timeframe: "6 weeks",
    },
    {
      client: "Local Healthcare Group",
      industry: "Healthcare",
      challenge: "Non-mobile friendly website with poor patient engagement",
      solution:
        "Responsive redesign with patient portal integration and accessibility compliance",
      results: {
        conversions: "+450% appointments",
        speed: "90% mobile improvement",
        mobile: "+420% patient engagement",
      },
      timeframe: "7 weeks",
    },
  ];

  const pricingTiers = [
    {
      name: "Web Starter",
      price: 2499,
      period: "one-time",
      description: "Professional website for small businesses",
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form integration",
        "SSL certificate included",
        "3 months support",
      ],

      ideal: "Small businesses, startups",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Web Professional",
      price: 4999,
      period: "one-time",
      description: "Advanced website with custom features",
      features: [
        "Everything in Starter",
        "Up to 15 pages",
        "Custom functionality",
        "Advanced SEO optimization",
        "Analytics integration",
        "E-commerce capability",
        "6 months support",
        "Content management system",
      ],

      ideal: "Growing businesses, e-commerce",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Web Enterprise",
      price: 9999,
      period: "one-time",
      description: "Custom web application with advanced features",
      features: [
        "Everything in Professional",
        "Unlimited pages",
        "Custom web application",
        "Advanced integrations",
        "Performance optimization",
        "Security enhancements",
        "12 months support",
        "Dedicated project manager",
      ],

      ideal: "Large businesses, enterprise",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Michael Rodriguez",
      company: "TechFlow Solutions",
      role: "CEO",
      text: "Our new website completely transformed our business. The design is stunning and conversions increased by 420% within the first month.",
      rating: 5,
      result: "+420% Conversions",
    },
    {
      name: "Sarah Chen",
      company: "EcoGreen Products",
      role: "Marketing Director",
      text: "The mobile optimization and user experience improvements led to a 340% increase in online sales. Incredible results!",
      rating: 5,
      result: "+340% Sales",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="y_umo-c">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="iyh5de2"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="p1p2q7m"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="xzihy6c"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="uz6ri4c"
            >
              <Code className="w-5 h-5 mr-2" data-oid=":70f-lz" />
              Web Design & Development
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="f6t4-jz"
          >
            Build Your Digital Presence with
            <span
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="5:jmli5"
            >
              Custom Web Development
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="ahxw4bv"
          >
            Create stunning, high-performing websites that convert visitors into
            customers. From responsive design to custom development, we build
            digital experiences that drive business growth.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="sujnbq_"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="-nybjlj"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="-tfv25b"
                >
                  <CardContent className="p-6" data-oid="4a5ksi9">
                    <stat.icon
                      className="w-8 h-8 text-cyan-400 mx-auto mb-3"
                      data-oid="8tp_wbb"
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="uoben76"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="yy_lz..">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="7b-286x"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="ws2dhyq"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="26t-nn3"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="hcdlvj3"
                />
                Get Free Website Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="3hczttm"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="anugndv"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="kkco:zx"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="0q1ab60"
                />
                View Web Portfolio
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Web Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="2ndwu_4"
        >
          <div className="text-center mb-16" data-oid="n9rvpp1">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="2oyx5r-"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="75270e9"
              >
                Web Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="skhjxan"
            >
              Our comprehensive approach combines cutting-edge design with
              advanced development to create websites that perform.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="wic0c68"
          >
            {webFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="z5::i9s"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="-x:5njs"
                >
                  <CardContent className="p-8" data-oid="zplwp6u">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="xj:eque"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="ywwofyl"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300"
                      data-oid="kxuv3p8"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="-ufgr6d"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="1e7a-vt">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="g6:z3pu"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"
                            data-oid="9twm6ky"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid=".g38:6s"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="-qumwvt"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Web Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="to_oekm"
        >
          <div className="text-center mb-16" data-oid="a5_8:wg">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="999er1w"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="sv_mi.t"
              >
                Development Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="rkvkp:u"
            >
              A systematic approach to web development that ensures quality,
              performance, and results-driven websites.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid=".:kfy2."
          >
            {webProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="m96bk9b"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-cyan-400/50 bg-cyan-500/5"
                      : ""
                  }`}
                  data-oid="8gou5:3"
                >
                  <CardContent className="p-6 text-center" data-oid="wvzre:1">
                    <div className="relative mb-6" data-oid="db48ihq">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="oyub5c_"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="1jl5eke"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="69yfaxb"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm"
                      data-oid="l1_uvzh"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300"
                      data-oid="zpv.b:-"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="7d29mnm"
                    >
                      {step.description}
                    </p>
                  </CardContent>

                  {activeProcess === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="jkv668t"
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
          data-oid="6x0ydth"
        >
          <div className="text-center mb-16" data-oid="lzt1-0-">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3f-9-sb"
            >
              Web Development{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="ir4k2lc"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="ldpl1kj"
            >
              Real results from real clients who trusted us with their web
              development and digital transformation.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="a-48i9m"
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
                data-oid="9bgmqck"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="i5970bg"
                >
                  <CardContent className="p-6" data-oid="tl0t5bu">
                    <div className="mb-4" data-oid="ckgq7ib">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid=".7ccrws"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-cyan-500/20 text-cyan-400 px-2 py-1 text-xs"
                        data-oid="oofgd5i"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="vhipnzf">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="rdjk7k5"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="emb:2rh"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="wt44ci:"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="-xok9s5"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="pvy4503"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="cd17igq"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="71:qhcc">
                        <div
                          className="flex justify-between"
                          data-oid="j83o0fp"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="5q101z_"
                          >
                            Conversions:
                          </span>
                          <span
                            className="text-cyan-400 font-bold text-sm"
                            data-oid="ws5k40b"
                          >
                            {study.results.conversions}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="wdkizh7"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="qjbs.de"
                          >
                            Speed:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="0q-0ikl"
                          >
                            {study.results.speed}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="7xccgx2"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="vtixub2"
                          >
                            Mobile:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="u-m98ac"
                          >
                            {study.results.mobile}
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
          data-oid="b-m246r"
        >
          <div className="text-center mb-16" data-oid=":hkidiy">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="77p.zg5"
            >
              Web Development{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="4hysvy9"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="sjv1yld"
            >
              Choose the web development package that best fits your business
              needs and budget requirements.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="y1ayrvo"
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
                data-oid="r9._jve"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="03zg9ej"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="4af2q_w"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="caqo-wa" />
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
                  data-oid="-b.rgg5"
                >
                  <CardContent className="p-8 text-center" data-oid="fxyz5yo">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="r0xdilx"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="0xoje7m">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="1-8t2e5">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="5ca9nh9"
                      >
                        ${tier.price}
                      </span>
                      <span
                        className="text-gray-400 text-sm ml-2"
                        data-oid="_nw3ylv"
                      >
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="hk57yyz">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="_vuj39g"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"
                            data-oid="o:n1yua"
                          />

                          <span className="text-gray-300" data-oid=".ib8o2z">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="x1ritvq">
                      <p
                        className="text-cyan-400 text-sm font-medium"
                        data-oid="nvhg8s6"
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
                      data-oid="42bcc-g"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="otzmrz-"
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
          data-oid="xke4p02"
        >
          <div className="text-center mb-16" data-oid="v5_gkj2">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="ivl.z_a"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="7hja2am"
              >
                Web Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="3f-zjpx"
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
                data-oid="5dyz7gl"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid=":l17613"
                >
                  <CardContent className="p-8" data-oid="t6m:imq">
                    <div className="flex items-center mb-4" data-oid="vl-dpky">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="hx6yzxe"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-cyan-500/20 text-cyan-400 px-2 py-1 text-xs"
                        data-oid="g0vmfre"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="_1-m-eu"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="da2w_9r">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="-3r5rkw"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="6gbj150">
                        <div
                          className="font-bold text-white"
                          data-oid="1-xi5yx"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="rlae._m"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid=":ilhdbq"
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
          data-oid="2o7m56a"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="-_:fgrm"
          >
            <div className="relative z-10" data-oid="qt35rww">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="v26m6x4"
              >
                <Code
                  className="w-20 h-20 text-cyan-400 glow-effect"
                  data-oid="4jimc3d"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="r3ohf.b"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  data-oid="h4.1bk0"
                >
                  Transform
                </span>{" "}
                Your Website?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="cxvwf8i"
              >
                Get a free website audit and discover how we can help you create
                a high-performing website that converts visitors into customers
                and drives sustainable business growth.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="-8ieid."
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="du2q:80"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid=".bokl-u"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="dbkngnb"
                    />
                    Get Free Website Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="gytr4t-"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="csli-x."
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="xnkm.:w"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid=":b-t5zr"
                    />
                    View Web Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"
              data-oid="8iadzij"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
