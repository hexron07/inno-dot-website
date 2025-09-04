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
    <div className="pt-24 pb-20 relative" data-oid="pi_ukc_">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="ggrv236"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid=":oaz5w:"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="dvfrajs"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="wzod05d"
            >
              <Search className="w-5 h-5 mr-2" data-oid="cvzqj6n" />
              Search Engine Optimization
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="3dljw5q"
          >
            Dominate Search Results with
            <span
              className="block bg-gradient-to-r from-blue-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="9gqqmlh"
            >
              Advanced SEO Strategy
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="u03cxng"
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
            data-oid="01g0aj0"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="l_qo-lc"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="_qv-g-1"
                >
                  <CardContent className="p-6" data-oid="9b4w0ms">
                    <stat.icon
                      className="w-8 h-8 text-blue-400 mx-auto mb-3"
                      data-oid="7aiqvi."
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid=":w82lp-"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="gy87_67">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="v5_ijvr"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="1u-j2_."
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="6y2pgl8"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="tqyi491"
                />
                Get Free SEO Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="f70hfm1"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="utcvdsf"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="fykulyt"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="1y6wsgp"
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
          data-oid=":jes1zw"
        >
          <div className="text-center mb-16" data-oid=":ks_e3g">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="6uffyaa"
            >
              Comprehensive{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="eo9q1g2"
              >
                SEO Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="7xcf7e0"
            >
              Our SEO approach covers every aspect of search optimization to
              ensure maximum visibility and performance.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="g-_m_m4"
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
                data-oid="4uqimoq"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid=".ftj0-4"
                >
                  <CardContent className="p-8" data-oid="66f4h5x">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="9_y1iej"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="mcxgj_w"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="0tcae0o"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="8:amsmx"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="r484jk2">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="259wifb"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="obj5y-8"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="nict94p"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid=".5iex9l"
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
          data-oid=":yiw7:j"
        >
          <div className="text-center mb-16" data-oid="omzeh0w">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="chqndlw"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="-_kz4kr"
              >
                SEO Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="nejqxwj"
            >
              A systematic approach to SEO that delivers consistent, measurable
              results for your business.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="isd2kt7"
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
                data-oid="7zv9d17"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-blue-400/50 bg-blue-500/5"
                      : ""
                  }`}
                  data-oid="wnzw6_y"
                >
                  <CardContent className="p-6 text-center" data-oid="do4pry4">
                    <div className="relative mb-6" data-oid="us35td.">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="xne70eg"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="cfyar4c"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="fyrq_6."
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-blue-500/20 text-blue-400 px-3 py-1 text-sm"
                      data-oid="4ui6axx"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="vk5v634"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="88m7a:j"
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
                      data-oid="317_avs"
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
          data-oid="xjl7crj"
        >
          <div className="text-center mb-16" data-oid=".widuzp">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3.tdmpq"
            >
              SEO{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="7x0bfbx"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="yp6evml"
            >
              Real results from real clients who trusted us with their SEO
              strategy.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="eho0dg7"
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
                data-oid="ygnwmhv"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="hhzizh1"
                >
                  <CardContent className="p-6" data-oid="8v:2ulg">
                    <div className="mb-4" data-oid="q1zz3gy">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid=":xk3bgs"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-blue-500/20 text-blue-400 px-2 py-1 text-xs"
                        data-oid="wh3f52y"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="tdzhy-v">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="dq689yt"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="f0ypl4-"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="a3aoil7"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="vi7lqm2"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="ssczd39"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="7dur369"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="w7gm37t">
                        <div
                          className="flex justify-between"
                          data-oid="3f:.qle"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="avzpm.9"
                          >
                            Traffic:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="cr6m4cb"
                          >
                            {study.results.traffic}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="gg0wt.:"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="k3nc_5t"
                          >
                            Rankings:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="uu82-bi"
                          >
                            {study.results.rankings}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="jzquc0:"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="in1j8oy"
                          >
                            Revenue:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="1v80..f"
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
          data-oid="2:fi.l3"
        >
          <div className="text-center mb-16" data-oid="51b02uk">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="bnnc-fw"
            >
              SEO{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="hs34vwc"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="yit.5qg"
            >
              Choose the SEO package that best fits your business goals and
              budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="7f285ii"
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
                data-oid="k55y8-f"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="nc.:nsc"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="ocfdb9e"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="a6fpwi2" />
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
                  data-oid="k-kekcg"
                >
                  <CardContent className="p-8 text-center" data-oid="01wmbge">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="ecvcev8"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="dc.pizo">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="n9rg4sg">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="u.g2yy0"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="-hr4j0h">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="wzuobv7">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="y6waud7"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-3 flex-shrink-0"
                            data-oid="x1kta36"
                          />

                          <span className="text-gray-300" data-oid="4b0o.:6">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="dhm3qu0">
                      <p
                        className="text-blue-400 text-sm font-medium"
                        data-oid=".ma_e6:"
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
                      data-oid="ko6mt_j"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="mz_9:3x"
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
          data-oid="2c01m:8"
        >
          <div className="text-center mb-16" data-oid="85.w.hf">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="m6y8r8f"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                data-oid="dhmh7q:"
              >
                SEO Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="hwse6o6"
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
                data-oid="xwgrhd5"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="pstf8-9"
                >
                  <CardContent className="p-8" data-oid="-2339ey">
                    <div className="flex items-center mb-4" data-oid="uohhptf">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="dv6_sv5"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="yoiy42a"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="c38d:p-"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="da4xk8k">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="lvfmk.q"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="d4gp.qe">
                        <div
                          className="font-bold text-white"
                          data-oid="8x6z3dj"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="-scup9p"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="m6rnx8q"
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
          data-oid="gwomj8z"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="kns0l.h"
          >
            <div className="relative z-10" data-oid="o-mmo:a">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="ga3su:2"
              >
                <Search
                  className="w-20 h-20 text-blue-400 glow-effect"
                  data-oid="gifjplh"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="e:mr5n4"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
                  data-oid="wxr13ts"
                >
                  Dominate
                </span>{" "}
                Search Results?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="-34jc5:"
              >
                Get a free SEO audit and discover how we can help your business
                rank higher, drive more organic traffic, and generate qualified
                leads through search.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="52c8ipr"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="xy63lk."
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="ao-5u:d"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="exg3raz"
                    />
                    Get Free SEO Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="lda36s5"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="_pjjn00"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="e2st00a"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="28_h326"
                    />
                    View SEO Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-500"
              data-oid="qvqkjsa"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
