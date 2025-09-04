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
    <div className="pt-24 pb-20 relative" data-oid=":noutvx">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="kg3oe:2"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="fkfg1sz"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="h3xtta:"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="cvw3prk"
            >
              <Code className="w-5 h-5 mr-2" data-oid="zvhyb3:" />
              Web Design & Development
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="2o4:gbt"
          >
            Build Your Digital Presence with
            <span
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="ecjtvvv"
            >
              Custom Web Development
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="gjfodc7"
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
            data-oid="::6g8xo"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="971k-5w"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="-obv8:z"
                >
                  <CardContent className="p-6" data-oid="dtbwxtr">
                    <stat.icon
                      className="w-8 h-8 text-cyan-400 mx-auto mb-3"
                      data-oid="_yy3:zx"
                    />
                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="kyqriss"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="uo_e76c">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="xf2yg54"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid=".armiui"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="zjhe-.o"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="7dg1s5a"
                />
                Get Free Website Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="eohj:_l"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid=":_bwah4"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="t6vzufm"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="_qpym45"
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
          data-oid=".o77_zw"
        >
          <div className="text-center mb-16" data-oid="rs1ww:m">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="lkpj7o-"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="5t6cj-6"
              >
                Web Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="dvd:o_5"
            >
              Our comprehensive approach combines cutting-edge design with
              advanced development to create websites that perform.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="b6as08g"
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
                data-oid="eivyrum"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid=".rjju_i"
                >
                  <CardContent className="p-8" data-oid="bp:ngmd">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="oyk:t3q"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="r096.e3"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300"
                      data-oid="nt0_zjl"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="qj2k46-"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="rt98ffl">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="e_7-ro8"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"
                            data-oid=".pj4kpp"
                          />
                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="-t:7m5y"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="a.ay_uj"
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
          data-oid="k2.mrcc"
        >
          <div className="text-center mb-16" data-oid="nuvzbzu">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="foc5g6i"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="w.uvj-t"
              >
                Development Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="kc-qq04"
            >
              A systematic approach to web development that ensures quality,
              performance, and results-driven websites.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="snoa7-9"
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
                data-oid="tefpqh0"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-cyan-400/50 bg-cyan-500/5"
                      : ""
                  }`}
                  data-oid="_c:mk02"
                >
                  <CardContent className="p-6 text-center" data-oid="aq6udjr">
                    <div className="relative mb-6" data-oid="ozhx_9:">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="e:a65of"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="6frhb10"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="urj-dew"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-cyan-500/20 text-cyan-400 px-3 py-1 text-sm"
                      data-oid="fay3q66"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-cyan-100 transition-colors duration-300"
                      data-oid="m.dolrj"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="zkanecn"
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
                      data-oid="csk74vn"
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
          data-oid="hle37y."
        >
          <div className="text-center mb-16" data-oid="yr_twze">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="f-l-_a3"
            >
              Web Development{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="ezfqiss"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="1ljwakw"
            >
              Real results from real clients who trusted us with their web
              development and digital transformation.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="5ui863x"
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
                data-oid="rmmqpth"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="l1djtli"
                >
                  <CardContent className="p-6" data-oid=".pjrd6e">
                    <div className="mb-4" data-oid="1388y-u">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="s4.96ey"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-cyan-500/20 text-cyan-400 px-2 py-1 text-xs"
                        data-oid="uyeip:a"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="vpgatp_">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="3sh_zef"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="-_na.9_"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="sy5xd_z"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="7o00pc-"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="s5oayee"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="hixdoao"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="hij.jt7">
                        <div
                          className="flex justify-between"
                          data-oid="jwzv47n"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="gv-4.3b"
                          >
                            Conversions:
                          </span>
                          <span
                            className="text-cyan-400 font-bold text-sm"
                            data-oid="pt7pguv"
                          >
                            {study.results.conversions}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="5c::yo:"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="j3zoarm"
                          >
                            Speed:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="rcv68cu"
                          >
                            {study.results.speed}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="3gi8-pk"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="qq79_gu"
                          >
                            Mobile:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="7c0rmzf"
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
          data-oid="r5e6lvd"
        >
          <div className="text-center mb-16" data-oid="-q_frai">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid=":pg_9fm"
            >
              Web Development{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="q8fg5lc"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="0c-k76n"
            >
              Choose the web development package that best fits your business
              needs and budget requirements.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="eu3o9nc"
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
                data-oid="a9-ten7"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="csik_ul"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="vl2i.t4"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="p:simnk" />
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
                  data-oid="w5th9v5"
                >
                  <CardContent className="p-8 text-center" data-oid="u7zf3yz">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="ywln:.m"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="ytpz-f-">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="d_p:l5p">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="e655bir"
                      >
                        ${tier.price}
                      </span>
                      <span
                        className="text-gray-400 text-sm ml-2"
                        data-oid="eaohyf:"
                      >
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="5osb-0j">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="hmbuc4t"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0"
                            data-oid="ov_akqz"
                          />
                          <span className="text-gray-300" data-oid="b-s8s_.">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="vapgqk_">
                      <p
                        className="text-cyan-400 text-sm font-medium"
                        data-oid="w3.ddo-"
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
                      data-oid="lev22:2"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="07w-fh9"
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
          data-oid="7aogmk-"
        >
          <div className="text-center mb-16" data-oid="p9u-2b-">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="4enay0n"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="y9_p7lq"
              >
                Web Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="2kuef6h"
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
                data-oid="_kx5hmt"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="fofu:ja"
                >
                  <CardContent className="p-8" data-oid="so5rydy">
                    <div className="flex items-center mb-4" data-oid="jaelhmr">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="u73_qwd"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-cyan-500/20 text-cyan-400 px-2 py-1 text-xs"
                        data-oid="z4rk83p"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="sv3n_6u"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="89g4htm">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="n5v1t4b"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="yz43s40">
                        <div
                          className="font-bold text-white"
                          data-oid="j2ipfq7"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="csg5-gy"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="9n_ohp-"
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
          data-oid=":a78jd3"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="o7t3k4w"
          >
            <div className="relative z-10" data-oid="d0wbfmv">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="f1myiiv"
              >
                <Code
                  className="w-20 h-20 text-cyan-400 glow-effect"
                  data-oid="964o9t2"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="vnf-szx"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
                  data-oid="6pdil7f"
                >
                  Transform
                </span>{" "}
                Your Website?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="io2f4.g"
              >
                Get a free website audit and discover how we can help you create
                a high-performing website that converts visitors into customers
                and drives sustainable business growth.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="_3emj0z"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="xzgn-an"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-6 text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="urhsset"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="lgh4.-o"
                    />
                    Get Free Website Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="_:l2ed8"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="99pqitk"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="wuxpp9p"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="0oadm.g"
                    />
                    View Web Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"
              data-oid="g4hmx49"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
