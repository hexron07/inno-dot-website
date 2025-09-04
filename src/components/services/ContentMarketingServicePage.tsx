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
    <div className="pt-24 pb-20 relative" data-oid="ps5mggf">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="szavjs6"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="tvb3ay0"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="uu_j9de"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-violet-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="ubne1mv"
            >
              <Edit3 className="w-5 h-5 mr-2" data-oid="2-xfot8" />
              Content Marketing
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="d4gav1w"
          >
            Engage Your Audience with
            <span
              className="block bg-gradient-to-r from-purple-400 via-violet-500 to-cyan-600 bg-clip-text text-transparent"
              data-oid="o_dn6kq"
            >
              Strategic Content Marketing
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="uz4wz.e"
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
            data-oid="vv_57ld"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="nbfm:bn"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="gn44jsq"
                >
                  <CardContent className="p-6" data-oid="ctitq.u">
                    <stat.icon
                      className="w-8 h-8 text-purple-400 mx-auto mb-3"
                      data-oid="6-em5:0"
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="aphnnpl"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="5.m8uu4">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="la11noi"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="3j6y4z4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="d9ovste"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="0-xo.cb"
                />
                Get Free Content Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="czasfw4"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="d0eq435"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="5x1-lse"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="du63ycs"
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
          data-oid="l07qhm0"
        >
          <div className="text-center mb-16" data-oid="pw2xdeg">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="a2xu1tk"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="g4rsk54"
              >
                Content Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="jzxndbq"
            >
              Our comprehensive approach covers every aspect of content
              marketing to engage your audience and drive business growth.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="dfk0tvl"
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
                data-oid="w.q7jt:"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="he85vg9"
                >
                  <CardContent className="p-8" data-oid="h6i26a8">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="e-oo236"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="g9brccl"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="6_h3gef"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="cv5ggxo"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="jw77_v7">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid=".0b6_5j"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0"
                            data-oid="b3e3bru"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="7:xhu73"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid=":mdsg6w"
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
          data-oid="orotfzb"
        >
          <div className="text-center mb-16" data-oid="h0zd4pl">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="8jym05l"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="rdq8dw4"
              >
                Content Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="8lqrp8g"
            >
              A systematic approach to content marketing that creates valuable,
              engaging content that drives real business results.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="j39u_8g"
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
                data-oid="x6fo8yb"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-purple-400/50 bg-purple-500/5"
                      : ""
                  }`}
                  data-oid="9-w4q6c"
                >
                  <CardContent className="p-6 text-center" data-oid="5bb_6u9">
                    <div className="relative mb-6" data-oid="iwhdtby">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="lxduxxq"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="fvu0ilu"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="0wl2yy-"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-purple-500/20 text-purple-400 px-3 py-1 text-sm"
                      data-oid="x-4eb8d"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="sol6739"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="dppm2dj"
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
                      data-oid=":7tyklx"
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
          data-oid="9e9up-x"
        >
          <div className="text-center mb-16" data-oid="3-4hug2">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="cx:-zyu"
            >
              Content{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="2ubhd4r"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="7-cpiso"
            >
              Real results from real clients who trusted us with their content
              marketing strategy and execution.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="ujrcqmh"
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
                data-oid="d450lu6"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="6uam7wv"
                >
                  <CardContent className="p-6" data-oid="uelnmzu">
                    <div className="mb-4" data-oid=":86-kqw">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="vmbehf4"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-purple-500/20 text-purple-400 px-2 py-1 text-xs"
                        data-oid="xdf_k08"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="cv8ra67">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="7a8j5b_"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="6u6-ysv"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="cx:8gqy"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="q5ehkqj"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="al8pum."
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="7b1r7ik"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="2oo112-">
                        <div
                          className="flex justify-between"
                          data-oid="dknl.ws"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="_0rjt5j"
                          >
                            Traffic:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="k5nov.7"
                          >
                            {study.results.traffic}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="35_mj9_"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="3nn_8tv"
                          >
                            Leads:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="2:yz0qh"
                          >
                            {study.results.leads}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="iqafkjp"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="p0t1.o2"
                          >
                            Engagement:
                          </span>
                          <span
                            className="text-green-400 font-bold text-sm"
                            data-oid=":0m5isy"
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
          data-oid="uh9:rnx"
        >
          <div className="text-center mb-16" data-oid="1hbo6pn">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="bqih207"
            >
              Content Marketing{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="yfzl-1i"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="4iwrut."
            >
              Choose the content marketing package that best fits your brand's
              storytelling goals and budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="ka7t72_"
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
                data-oid="ce8es-f"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="pjuf5v3"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="s69l3q7"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="yem00k1" />
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
                  data-oid="iva0:rk"
                >
                  <CardContent className="p-8 text-center" data-oid="n-re6ve">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="eo6n-b2"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="8jc18x0">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="z3.4.cp">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="rzy0cum"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="o8krkcj">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="kxvchn7">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="so07kj1"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-purple-400 mr-3 flex-shrink-0"
                            data-oid="ri87482"
                          />

                          <span className="text-gray-300" data-oid="afptm6x">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="7dz-zji">
                      <p
                        className="text-purple-400 text-sm font-medium"
                        data-oid="klwgu:j"
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
                      data-oid="-9nkywq"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="fk765iq"
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
          data-oid="eg9kevu"
        >
          <div className="text-center mb-16" data-oid="1h83di8">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3135::r"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                data-oid="qhfulcg"
              >
                Content Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="8__my2o"
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
                data-oid="if:et96"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="yefq8os"
                >
                  <CardContent className="p-8" data-oid="3erxv1k">
                    <div className="flex items-center mb-4" data-oid="arz09l5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="3uatv.6"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-purple-500/20 text-purple-400 px-2 py-1 text-xs"
                        data-oid="mkucgxl"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="a.g5kqv"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="6lf2-3-">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="7my3sh2"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="j46di1c">
                        <div
                          className="font-bold text-white"
                          data-oid="59tjnu_"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="7f-3a_z"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="bipjwy7"
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
          data-oid="h3jckkc"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="vfbh.wn"
          >
            <div className="relative z-10" data-oid="j6ajly:">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="qq6:e76"
              >
                <Edit3
                  className="w-20 h-20 text-purple-400 glow-effect"
                  data-oid="7irsdpd"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="b8mqo:9"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-purple-400 to-violet-500 bg-clip-text text-transparent"
                  data-oid="sj6:-r:"
                >
                  Tell Your Story?
                </span>
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="082sst8"
              >
                Get a free content audit and discover how we can help you create
                compelling content that engages your audience, builds trust, and
                drives meaningful business results across all channels.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="m-2uwrm"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="-u8u6yg"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="anje:eo"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="rihfta2"
                    />
                    Get Free Content Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="fo2nuym"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="8tse2ff"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid=":7w668e"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="hxfcugs"
                    />
                    View Content Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-violet-500/5 group-hover:from-purple-500/10 group-hover:to-violet-500/10 transition-all duration-500"
              data-oid="yjwjh1:"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
