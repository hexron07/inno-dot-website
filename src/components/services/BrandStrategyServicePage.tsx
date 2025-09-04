import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Palette,
  TrendingUp,
  Heart,
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
  Users,
  Layers,
  Code,
  Rocket,
  Briefcase,
  Crown,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface BrandStrategyServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function BrandStrategyServicePage({
  onNavigate,
}: BrandStrategyServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "250%", label: "Brand Recognition Increase", icon: TrendingUp },
    { value: "180%", label: "Customer Loyalty Boost", icon: Heart },
    { value: "320%", label: "Premium Pricing Power", icon: Crown },
    { value: "95%", label: "Brand Consistency Score", icon: Award },
  ];

  const brandProcessSteps = [
    {
      title: "Brand Discovery & Research",
      description:
        "Deep dive into your business, industry, competitors, and target audience to uncover unique brand opportunities.",
      icon: Search,
      timeline: "Week 1-2",
    },
    {
      title: "Brand Strategy Development",
      description:
        "Crafting comprehensive brand strategy including positioning, messaging, values, and personality framework.",
      icon: Target,
      timeline: "Week 2-3",
    },
    {
      title: "Visual Identity Design",
      description:
        "Creating distinctive visual identity including logo design, color palettes, typography, and brand elements.",
      icon: Palette,
      timeline: "Week 3-5",
    },
    {
      title: "Brand Guidelines Creation",
      description:
        "Comprehensive brand guidelines ensuring consistent application across all touchpoints and communications.",
      icon: FileText,
      timeline: "Week 4-5",
    },
    {
      title: "Brand Collateral Design",
      description:
        "Designing essential brand materials including business cards, presentations, and marketing collateral.",
      icon: Briefcase,
      timeline: "Week 5-6",
    },
    {
      title: "Brand Launch & Support",
      description:
        "Strategic brand launch with ongoing support, monitoring, and optimization for maximum market impact.",
      icon: Rocket,
      timeline: "Week 6+",
    },
  ];

  const brandFeatures = [
    {
      icon: Target,
      title: "Strategic Brand Positioning",
      description:
        "Develop unique market positioning that differentiates your brand and resonates with your target audience.",
      benefits: [
        "Competitive Analysis",
        "Market Research",
        "Positioning Strategy",
      ],
    },
    {
      icon: Palette,
      title: "Visual Identity Design",
      description:
        "Create stunning visual identity that captures your brand essence and creates lasting impressions.",
      benefits: ["Logo Design", "Color Psychology", "Typography Selection"],
    },
    {
      icon: MessageSquare,
      title: "Brand Messaging Framework",
      description:
        "Craft compelling brand messaging that communicates your value proposition clearly and consistently.",
      benefits: ["Brand Voice", "Key Messages", "Tone Guidelines"],
    },
    {
      icon: Globe,
      title: "Brand Implementation",
      description:
        "Comprehensive brand rollout across all touchpoints ensuring consistent brand experience everywhere.",
      benefits: ["Style Guides", "Application Templates", "Brand Training"],
    },
  ];

  const caseStudies = [
    {
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge:
        "Generic brand identity with poor market differentiation and low brand recognition",
      solution:
        "Complete brand redesign with strategic positioning, modern visual identity, and comprehensive guidelines",
      results: {
        recognition: "+340% brand recognition",
        leads: "+280% qualified leads",
        premium: "+220% premium pricing",
      },
      timeframe: "8 weeks",
    },
    {
      client: "EcoGreen Products",
      industry: "Sustainable Products",
      challenge:
        "Unclear brand message and inconsistent visual identity across channels",
      solution:
        "Brand strategy development with sustainability focus, cohesive visual system, and messaging framework",
      results: {
        recognition: "+290% brand awareness",
        leads: "+350% customer engagement",
        premium: "+180% market share",
      },
      timeframe: "6 weeks",
    },
    {
      client: "Local Healthcare Group",
      industry: "Healthcare",
      challenge: "Outdated brand perception and low trust in digital channels",
      solution:
        "Trust-focused rebranding with professional visual identity and patient-centered messaging",
      results: {
        recognition: "+420% brand trust",
        leads: "+380% patient inquiries",
        premium: "+290% service adoption",
      },
      timeframe: "7 weeks",
    },
  ];

  const pricingTiers = [
    {
      name: "Brand Foundation",
      price: 3999,
      period: "one-time",
      description: "Essential brand identity for new businesses",
      features: [
        "Logo design (3 concepts)",
        "Color palette & typography",
        "Basic brand guidelines",
        "Business card design",
        "Letterhead template",
        "Digital logo files",
      ],

      ideal: "Startups, small businesses",
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Brand Professional",
      price: 7999,
      period: "one-time",
      description: "Comprehensive brand strategy and identity",
      features: [
        "Everything in Foundation",
        "Brand strategy development",
        "Comprehensive brand guidelines",
        "Marketing collateral suite",
        "Social media templates",
        "Brand messaging framework",
        "3 months brand support",
      ],

      ideal: "Growing businesses, rebrands",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Brand Enterprise",
      price: 15999,
      period: "one-time",
      description: "Complete brand transformation with strategy",
      features: [
        "Everything in Professional",
        "Market research & analysis",
        "Brand positioning strategy",
        "Complete visual identity system",
        "Brand implementation plan",
        "Team training & workshops",
        "12 months brand support",
        "Dedicated brand manager",
      ],

      ideal: "Large businesses, corporations",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Jennifer Davis",
      company: "TechFlow Solutions",
      role: "CEO",
      text: "The brand transformation was incredible. Our new identity perfectly captures who we are and has increased our brand recognition by 340%.",
      rating: 5,
      result: "+340% Brand Recognition",
    },
    {
      name: "Marcus Wilson",
      company: "EcoGreen Products",
      role: "Marketing Director",
      text: "The strategic approach to our rebrand not only looks amazing but has significantly improved our market position and customer engagement.",
      rating: 5,
      result: "+350% Customer Engagement",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="_ooha7b">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="ig3.jfh"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="-0xnyt9"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="h:2sj-4"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="braw392"
            >
              <Palette className="w-5 h-5 mr-2" data-oid="uwal7b0" />
              Brand Strategy & Design
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="m4ty2lf"
          >
            Build a Memorable Brand with
            <span
              className="block bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent"
              data-oid="dg37j4y"
            >
              Strategic Brand Design
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="fz:ug7y"
          >
            Create a powerful brand identity that resonates with your audience
            and drives business growth. From strategy to visual design, we build
            brands that stand out and succeed in competitive markets.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="xic.ygj"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="w_q.vla"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="lj1rj4v"
                >
                  <CardContent className="p-6" data-oid="gqif0lg">
                    <stat.icon
                      className="w-8 h-8 text-orange-400 mx-auto mb-3"
                      data-oid="gchmzq7"
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid=".kpe0l0"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="6nkdw-f">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="i8hcvz1"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="v9tx603"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="izih1.o"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="j8rkq3x"
                />
                Get Free Brand Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="zve.poy"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="4rohnih"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="rc6thg3"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="tqly3vl"
                />
                View Brand Portfolio
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Brand Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="7ezixd:"
        >
          <div className="text-center mb-16" data-oid="dlkx.jk">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="5j54iki"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                data-oid="tclgq78"
              >
                Brand Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="fwkegvi"
            >
              Our comprehensive approach combines strategic thinking with
              creative design to build brands that resonate and perform.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="kurkgqf"
          >
            {brandFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="jz9.iz9"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="8641wys"
                >
                  <CardContent className="p-8" data-oid="g9-wg:_">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="1t33nyb"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="td1_8pc"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300"
                      data-oid="v81al3h"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="e3s0pok"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="8o9cs5y">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="oatpnc8"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0"
                            data-oid="-1pqz5f"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="mvps10b"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="w14_.ze"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Brand Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="2.fmwfn"
        >
          <div className="text-center mb-16" data-oid="fflku1f">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="s-0o_un"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                data-oid="bcru6_t"
              >
                Brand Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="oulwi77"
            >
              A systematic approach to brand development that creates authentic,
              memorable brands that connect with audiences.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="330z9zp"
          >
            {brandProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="p-6g:33"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-orange-400/50 bg-orange-500/5"
                      : ""
                  }`}
                  data-oid="0xl4hyj"
                >
                  <CardContent className="p-6 text-center" data-oid="i0_28ku">
                    <div className="relative mb-6" data-oid="wr4ilfa">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="-ejs_6h"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="_g:rqcx"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="i2zxphx"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-orange-500/20 text-orange-400 px-3 py-1 text-sm"
                      data-oid="khr:t58"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-orange-100 transition-colors duration-300"
                      data-oid="ybjv2ta"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="ncfnk3h"
                    >
                      {step.description}
                    </p>
                  </CardContent>

                  {activeProcess === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="a5.ssus"
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
          data-oid="cbp1f1o"
        >
          <div className="text-center mb-16" data-oid="i6gs_wj">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="pql84.r"
            >
              Brand Strategy{" "}
              <span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                data-oid="7thtdhr"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="_4tplo-"
            >
              Real results from real clients who trusted us with their brand
              transformation and strategic positioning.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="5xblros"
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
                data-oid="2uo8cep"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="8x8y834"
                >
                  <CardContent className="p-6" data-oid="g5u_wu.">
                    <div className="mb-4" data-oid="3bv4sz_">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="nl11260"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-orange-500/20 text-orange-400 px-2 py-1 text-xs"
                        data-oid="kq_88ls"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="ria.qh1">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="wz98yz8"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="6:w3tat"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="rr4oi27"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="a8lzrsw"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid=":d2ukyk"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="5igp9wg"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="2z8y5vu">
                        <div
                          className="flex justify-between"
                          data-oid="69ot_0j"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="j:0fgkz"
                          >
                            Recognition:
                          </span>
                          <span
                            className="text-orange-400 font-bold text-sm"
                            data-oid="i1-f.iy"
                          >
                            {study.results.recognition}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="ij4.0um"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="j0gm7.4"
                          >
                            Leads:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid="td_q3m2"
                          >
                            {study.results.leads}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="dji5_yq"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="clskl70"
                          >
                            Premium:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="9bpq1j9"
                          >
                            {study.results.premium}
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
          data-oid="zih8crn"
        >
          <div className="text-center mb-16" data-oid="kxeqwfp">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="6f5yphz"
            >
              Brand Strategy{" "}
              <span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                data-oid="bafubq2"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="5lh1-mc"
            >
              Choose the brand development package that best fits your business
              stage and branding goals.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="-nl00q6"
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
                data-oid="cdvmppn"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="zzv-71a"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="5py6syg"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="tz7py0w" />
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
                  data-oid="xxxg:k5"
                >
                  <CardContent className="p-8 text-center" data-oid="p3:ttdm">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="wsmhwlt"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="4qe-6wb">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="ctfse9m">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="7lkxqo6"
                      >
                        ${tier.price}
                      </span>
                      <span
                        className="text-gray-400 text-sm ml-2"
                        data-oid="i59a:_8"
                      >
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="9j880_-">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="hgemcpl"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-orange-400 mr-3 flex-shrink-0"
                            data-oid="fz4g_1k"
                          />

                          <span className="text-gray-300" data-oid="npp9qo_">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="wsm538_">
                      <p
                        className="text-orange-400 text-sm font-medium"
                        data-oid="xjpmfqw"
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
                      data-oid="g6k67tp"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="azc9k4-"
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
          data-oid="2xjio:u"
        >
          <div className="text-center mb-16" data-oid="mz8uy15">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="iq:mxd6"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                data-oid="fs0h:ms"
              >
                Brand Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="jz6ha9y"
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
                data-oid="tnq84r3"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="pt.zf6o"
                >
                  <CardContent className="p-8" data-oid=":0b3qz2">
                    <div className="flex items-center mb-4" data-oid="1-lqq8j">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="r2r643_"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-orange-500/20 text-orange-400 px-2 py-1 text-xs"
                        data-oid="6ykq7z0"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="ww0l6oq"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="9i17o8e">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid=".:uha7z"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="41twoim">
                        <div
                          className="font-bold text-white"
                          data-oid="2908h4w"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="i860wcp"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="ovyohah"
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
          data-oid="h82yyuu"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="r_y9k54"
          >
            <div className="relative z-10" data-oid="of_qpme">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="wyltdza"
              >
                <Palette
                  className="w-20 h-20 text-orange-400 glow-effect"
                  data-oid="bb2kxkt"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid=":81i-vf"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
                  data-oid="go2g3xs"
                >
                  Transform
                </span>{" "}
                Your Brand?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="xv24zjx"
              >
                Get a free brand audit and discover how we can help you create a
                powerful brand identity that resonates with your audience,
                differentiates from competitors, and drives business growth.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="ymzn9hv"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="fun4n__"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="93i081."
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid=":lr5cfs"
                    />
                    Get Free Brand Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="n5d4x2l"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid=":-7aio-"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="v-a80p4"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="u9pdr3i"
                    />
                    View Brand Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-red-500/5 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500"
              data-oid="mle17mb"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
