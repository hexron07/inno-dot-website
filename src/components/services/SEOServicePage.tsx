import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Search,
  TrendingUp,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  BarChart3,
  Globe,
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
  FileText,
  Settings,
  Code,
  Smartphone,
  Monitor,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface SEOServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function SEOServicePage({ onNavigate }: SEOServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "400%", label: "Avg Traffic Increase", icon: TrendingUp },
    { value: "150%", label: "Lead Generation Boost", icon: Target },
    { value: "90%", label: "First Page Rankings", icon: Award },
    { value: "6 Months", label: "Avg. Time to Results", icon: Clock },
  ];

  const seoProcessSteps = [
    {
      title: "Technical SEO Audit",
      description:
        "Comprehensive analysis of your website's technical foundation, identifying crawlability issues, site speed problems, and mobile optimization gaps.",
      icon: Settings,
      timeline: "Week 1-2",
    },
    {
      title: "Keyword Research & Strategy",
      description:
        "Deep dive into your industry's search landscape to identify high-value keywords with optimal search volume and competition balance.",
      icon: Search,
      timeline: "Week 2-3",
    },
    {
      title: "On-Page Optimization",
      description:
        "Optimizing meta tags, headers, content structure, and internal linking to maximize relevance and search engine understanding.",
      icon: FileText,
      timeline: "Week 3-6",
    },
    {
      title: "Content Strategy & Creation",
      description:
        "Developing and implementing content that addresses user intent while incorporating target keywords naturally and effectively.",
      icon: Lightbulb,
      timeline: "Week 4-8",
    },
    {
      title: "Link Building & Authority",
      description:
        "Strategic acquisition of high-quality backlinks from authoritative sources to boost domain authority and search rankings.",
      icon: Globe,
      timeline: "Week 6-12",
    },
    {
      title: "Performance Monitoring",
      description:
        "Continuous tracking of rankings, traffic, and conversions with monthly reporting and strategy adjustments.",
      icon: BarChart3,
      timeline: "Ongoing",
    },
  ];

  const seoFeatures = [
    {
      icon: Code,
      title: "Technical SEO Excellence",
      description:
        "Complete technical optimization including site speed, mobile responsiveness, crawlability, and Core Web Vitals improvement.",
      benefits: [
        "Faster Loading Times",
        "Better User Experience",
        "Higher Search Rankings",
      ],
    },
    {
      icon: Target,
      title: "Keyword Domination",
      description:
        "Strategic keyword research and optimization targeting high-value search terms your customers actually use.",
      benefits: [
        "Increased Organic Traffic",
        "Better Quality Leads",
        "Higher Conversion Rates",
      ],
    },
    {
      icon: Lightbulb,
      title: "Content Optimization",
      description:
        "Creating and optimizing content that answers user questions while satisfying search engine algorithms.",
      benefits: [
        "Enhanced Relevance",
        "Improved Engagement",
        "Better Rankings",
      ],
    },
    {
      icon: Globe,
      title: "Authority Building",
      description:
        "Strategic link building and digital PR to establish your website as an authoritative source in your industry.",
      benefits: [
        "Higher Domain Authority",
        "Increased Trust Signals",
        "Better SERP Visibility",
      ],
    },
  ];

  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "SaaS",
      challenge: "Low organic visibility for competitive keywords",
      solution:
        "Comprehensive technical SEO overhaul with targeted content strategy",
      results: {
        traffic: "+425%",
        rankings: "78 first page keywords",
        revenue: "+340% organic revenue",
      },
      timeframe: "6 months",
    },
    {
      client: "EcoGreen Products",
      industry: "E-commerce",
      challenge: "Poor mobile performance and low conversion rates",
      solution: "Mobile-first optimization with Core Web Vitals improvement",
      results: {
        traffic: "+380%",
        rankings: "156% increase in rankings",
        revenue: "+290% mobile revenue",
      },
      timeframe: "4 months",
    },
    {
      client: "Local Healthcare Group",
      industry: "Healthcare",
      challenge: "Limited local search visibility",
      solution: "Local SEO strategy with Google My Business optimization",
      results: {
        traffic: "+520%",
        rankings: "Top 3 for 45 local keywords",
        revenue: "+450% appointment bookings",
      },
      timeframe: "3 months",
    },
  ];

  const pricingTiers = [
    {
      name: "SEO Starter",
      price: 1299,
      period: "/month",
      description: "Essential SEO foundation for small businesses",
      features: [
        "Technical SEO audit & fixes",
        "Keyword research (25 keywords)",
        "On-page optimization (10 pages)",
        "Monthly reporting",
        "Email support",
      ],

      ideal: "Small businesses, startups",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "SEO Growth",
      price: 2499,
      period: "/month",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced keyword research (50+ keywords)",
        "Content strategy & creation",
        "Link building campaign",
        "Bi-weekly reporting",
        "Priority phone support",
      ],

      ideal: "Growing businesses, competitive markets",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "SEO Enterprise",
      price: 4999,
      period: "/month",
      description: "Advanced SEO for large organizations",
      features: [
        "Everything in Growth",
        "Unlimited keyword targeting",
        "Advanced technical optimizations",
        "Custom content marketing",
        "Weekly reporting & calls",
        "Dedicated SEO specialist",
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
      text: "Their SEO strategy transformed our organic presence. We went from page 3 to consistent top 3 rankings for our primary keywords.",
      rating: 5,
      result: "+425% Organic Traffic",
    },
    {
      name: "David Rodriguez",
      company: "EcoGreen Products",
      role: "CEO",
      text: "The technical SEO improvements alone increased our site speed by 300%. The ranking improvements followed quickly after.",
      rating: 5,
      result: "+380% Mobile Traffic",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="4f_zwyo">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="zysluhx"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="pijmblq"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="_v9br.-"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="cgxvs6c"
            >
              <Search className="w-5 h-5 mr-2" data-oid="eu2t8e6" />
              Search Engine Optimization
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="0urwv_a"
          >
            Dominate Search Results with
            <span
              className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="v4gjt_1"
            >
              Advanced SEO Strategy
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="6at:a28"
          >
            Drive organic traffic, increase visibility, and generate qualified
            leads with our comprehensive SEO strategies. Our data-driven
            approach delivers measurable results that grow your business.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="war1gov"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="2g0urga"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="pt0ik4."
                >
                  <CardContent className="p-6" data-oid="ab:xsdo">
                    <stat.icon
                      className="w-8 h-8 text-blue-400 mx-auto mb-3"
                      data-oid="i9n3adg"
                    />
                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="xau-4da"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="h:9en45">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="axzq56s"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="zarekc6"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="kevoh4j"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="m_8b94f"
                />
                Get Free SEO Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="j145z5i"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="mr7ydt1"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="zq-v.87"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="ny.59u0"
                />
                View SEO Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* SEO Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="xl:5_5."
        >
          <div className="text-center mb-16" data-oid="equ7_-l">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="l.5o65n"
            >
              Comprehensive{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="bmo5yt6"
              >
                SEO Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="orrrka6"
            >
              Our SEO approach covers every aspect of search optimization to
              ensure maximum visibility and performance.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="qtt9i21"
          >
            {seoFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="hxzosff"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="gna597d"
                >
                  <CardContent className="p-8" data-oid="9h_uxp-">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="e6wpepk"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="501tr-n"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="ek8lz_f"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="u3h-ckr"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="-pwvnyk">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="c9um32l"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="_a9avoz"
                          />
                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="b87ynon"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="-bqkkz5"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* SEO Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="b1w-c.u"
        >
          <div className="text-center mb-16" data-oid=".aspib6">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="zqp-a7g"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="o58_f7r"
              >
                SEO Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="ulw_3io"
            >
              A systematic approach to SEO that delivers consistent, measurable
              results for your business.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="nr68ezl"
          >
            {seoProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="6g6aw7i"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-blue-400/50 bg-blue-500/5"
                      : ""
                  }`}
                  data-oid="f5n:t:x"
                >
                  <CardContent className="p-6 text-center" data-oid="gpkz-kv">
                    <div className="relative mb-6" data-oid="46xwil3">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="r8vei6d"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="f4agkx0"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="hep90s9"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-blue-500/20 text-blue-400 px-3 py-1 text-sm"
                      data-oid="m7uwtn4"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="wijzyke"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="dmgu:hv"
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
                      data-oid="e54bqz."
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
          data-oid="gxgsc4w"
        >
          <div className="text-center mb-16" data-oid="18p_4b3">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="p:8nqe6"
            >
              SEO{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="r9fdy7z"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="zmewzy3"
            >
              Real results from real clients who trusted us with their SEO
              strategy.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid=":77toew"
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
                data-oid="bicah_a"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="0s3st._"
                >
                  <CardContent className="p-6" data-oid="2fio8bf">
                    <div className="mb-4" data-oid="omle4s_">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="15msisa"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs"
                        data-oid="b_hull5"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="b_3fd8m">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="sk4ky.a"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="wm757h0"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="k.64.k1"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="g-ofto8"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="yf.5fr7"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="h41jy2p"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="xovihth">
                        <div
                          className="flex justify-between"
                          data-oid=".csw.ja"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="8cxohhs"
                          >
                            Traffic:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="_hyf9h0"
                          >
                            {study.results.traffic}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="fr3j_7-"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="pr_fwyt"
                          >
                            Rankings:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="l-a1.:g"
                          >
                            {study.results.rankings}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="iho4fx1"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="vmolybe"
                          >
                            Revenue:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="5vvw_0c"
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
          data-oid="shhs_tu"
        >
          <div className="text-center mb-16" data-oid="d-9z:1g">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="z5oob9-"
            >
              SEO{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="ng-93xs"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="t324ao:"
            >
              Choose the SEO package that best fits your business goals and
              budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid=":ysryip"
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
                data-oid="xwrka9-"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="v67px-a"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="miwoscm"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="dhvnyu:" />
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
                  data-oid="jnb-rtv"
                >
                  <CardContent className="p-8 text-center" data-oid="b0.ch41">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="zoqijro"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="iywt4-v">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="151.2wj">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="qct64pa"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="6h9ovxa">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="nlhvr4h">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid=":gxb.f0"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="h3bcuo0"
                          />
                          <span className="text-gray-300" data-oid="bl6ff9z">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="gx_mc-y">
                      <p
                        className="text-blue-400 text-sm font-medium"
                        data-oid="hhq3.6z"
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
                      data-oid="iuow6js"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="i-yhbz0"
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
          data-oid="ctp9mse"
        >
          <div className="text-center mb-16" data-oid="mskihnr">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="vth57gr"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="h1uthxc"
              >
                SEO Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="t57p17g"
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
                data-oid="_.liy6."
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="41vtp_i"
                >
                  <CardContent className="p-8" data-oid="2dez50t">
                    <div className="flex items-center mb-4" data-oid="xd_7mqz">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="bdlc2.e"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="o2fer7n"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="3at24i0"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="c6tmd8g">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="m7-o0q-"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="5opx7df">
                        <div
                          className="font-bold text-white"
                          data-oid="abujd39"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="wpq25ft"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="qvylogp"
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
          data-oid="pwftf33"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="rycg9qg"
          >
            <div className="relative z-10" data-oid="93:idym">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="edz:6ow"
              >
                <Search
                  className="w-20 h-20 text-blue-400 glow-effect"
                  data-oid="ql5hk4h"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="11-t2:o"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                  data-oid="o4i2m4x"
                >
                  Dominate
                </span>{" "}
                Search Results?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="pdzcejm"
              >
                Get a free SEO audit and discover how we can help your business
                rank higher, drive more organic traffic, and generate qualified
                leads through search.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="n.bq7q9"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="3my594b"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-12 py-6 text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="wwei_-s"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="0uwgzs0"
                    />
                    Get Free SEO Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="1o20btb"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="ksgx2:s"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="r_e4rnp"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="3xazcn:"
                    />
                    View SEO Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"
              data-oid="57dxna9"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
