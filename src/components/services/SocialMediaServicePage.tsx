import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Share2,
  TrendingUp,
  Heart,
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
  Eye,
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
  Megaphone,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface SocialMediaServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function SocialMediaServicePage({
  onNavigate,
}: SocialMediaServicePageProps) {
  const [activeProcess, setActiveProcess] = useState(0);

  const heroStats = [
    { value: "500%", label: "Avg Engagement Increase", icon: Heart },
    { value: "85%", label: "Follower Growth Rate", icon: Users },
    { value: "3.2M", label: "Impressions Generated", icon: Eye },
    { value: "24/7", label: "Community Management", icon: Clock },
  ];

  const socialProcessSteps = [
    {
      title: "Social Media Audit & Strategy",
      description:
        "Comprehensive analysis of your current social presence and competitive landscape to develop a winning social media strategy.",
      icon: Settings,
      timeline: "Week 1",
    },
    {
      title: "Content Planning & Calendar",
      description:
        "Strategic content calendar development with platform-specific content designed to engage your target audience.",
      icon: Calendar,
      timeline: "Week 1-2",
    },
    {
      title: "Visual Content Creation",
      description:
        "Professional graphic design, video editing, and visual content creation optimized for each social media platform.",
      icon: Camera,
      timeline: "Week 2-3",
    },
    {
      title: "Community Building",
      description:
        "Organic growth strategies to build authentic follower base and foster meaningful community engagement.",
      icon: Users,
      timeline: "Week 2-4",
    },
    {
      title: "Content Publishing & Engagement",
      description:
        "Strategic content distribution with active community management and real-time engagement monitoring.",
      icon: Share2,
      timeline: "Week 3-4",
    },
    {
      title: "Analytics & Optimization",
      description:
        "Comprehensive performance tracking with data-driven optimizations to maximize engagement and reach.",
      icon: BarChart3,
      timeline: "Ongoing",
    },
  ];

  const socialFeatures = [
    {
      icon: Camera,
      title: "Creative Content Production",
      description:
        "Professional visual content creation including graphics, videos, and interactive posts tailored for each platform.",
      benefits: [
        "Custom Graphics & Videos",
        "Platform-Specific Content",
        "Brand-Consistent Visuals",
      ],
    },
    {
      icon: Users,
      title: "Community Management",
      description:
        "Active community engagement with timely responses, moderation, and relationship building with your audience.",
      benefits: [
        "24/7 Community Monitoring",
        "Real-Time Engagement",
        "Crisis Management",
      ],
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description:
        "Comprehensive tracking and reporting on all key metrics with actionable insights for continuous improvement.",
      benefits: ["Detailed Reporting", "Audience Insights", "Growth Tracking"],
    },
    {
      icon: Megaphone,
      title: "Paid Social Advertising",
      description:
        "Strategic paid social campaigns to amplify reach, drive conversions, and accelerate business growth.",
      benefits: [
        "Targeted Ad Campaigns",
        "Budget Optimization",
        "Conversion Tracking",
      ],
    },
  ];

  const caseStudies = [
    {
      client: "Lifestyle Brand Co.",
      industry: "Fashion & Lifestyle",
      challenge: "Low engagement rates and stagnant follower growth",
      solution:
        "Comprehensive content strategy with influencer partnerships and community building",
      results: {
        engagement: "+650% engagement",
        followers: "+340% followers",
        sales: "+290% social sales",
      },
      timeframe: "6 months",
    },
    {
      client: "TechFlow Solutions",
      industry: "B2B SaaS",
      challenge: "Difficulty building thought leadership and generating leads",
      solution:
        "LinkedIn-focused strategy with educational content and lead generation campaigns",
      results: {
        engagement: "+420% engagement",
        followers: "+280% followers",
        sales: "+350% qualified leads",
      },
      timeframe: "4 months",
    },
    {
      client: "Local Restaurant Group",
      industry: "Food & Beverage",
      challenge: "Limited local awareness and customer engagement",
      solution:
        "Visual storytelling with user-generated content and local community focus",
      results: {
        engagement: "+580% engagement",
        followers: "+450% followers",
        sales: "+380% foot traffic",
      },
      timeframe: "3 months",
    },
  ];

  const pricingTiers = [
    {
      name: "Social Starter",
      price: 999,
      period: "/month",
      description: "Essential social media management for small businesses",
      features: [
        "2 social media platforms",
        "12 posts per month",
        "Basic graphic design",
        "Community management",
        "Monthly reporting",
        "Email support",
      ],

      ideal: "Small businesses, startups",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      name: "Social Growth",
      price: 1999,
      period: "/month",
      description: "Comprehensive social media strategy for growing brands",
      features: [
        "Everything in Starter",
        "4 social media platforms",
        "20 posts per month",
        "Video content creation",
        "Influencer outreach",
        "Paid social advertising",
        "Bi-weekly reporting",
        "Phone support",
      ],

      ideal: "Growing businesses, e-commerce",
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Social Enterprise",
      price: 3999,
      period: "/month",
      description: "Full-scale social media management for large brands",
      features: [
        "Everything in Growth",
        "All major platforms",
        "Daily content creation",
        "Advanced video production",
        "Crisis management",
        "Dedicated social manager",
        "Weekly strategy calls",
        "Custom reporting dashboard",
      ],

      ideal: "Large businesses, enterprise brands",
      gradient: "from-amber-500 to-orange-500",
    },
  ];

  const testimonials = [
    {
      name: "Emma Wilson",
      company: "Lifestyle Brand Co.",
      role: "Marketing Director",
      text: "Their creative content and community management transformed our social presence. We saw 650% increase in engagement and massive brand growth.",
      rating: 5,
      result: "+650% Engagement",
    },
    {
      name: "James Rodriguez",
      company: "TechFlow Solutions",
      role: "CEO",
      text: "The B2B social strategy they developed generated more qualified leads than any other channel. Their LinkedIn expertise is unmatched.",
      rating: 5,
      result: "+350% Qualified Leads",
    },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="5r:2rpk">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="6k_mxnx"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="esn7qat"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="_voaz8."
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="ipnebut"
            >
              <Share2 className="w-5 h-5 mr-2" data-oid="c_:bysm" />
              Social Media Marketing
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="5w-:eb2"
          >
            Build Your Brand with
            <span
              className="block bg-gradient-to-r from-pink-400 via-rose-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="9p_a7t."
            >
              Strategic Social Media
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="i8dh7f4"
          >
            Engage your audience, build community, and drive conversions with
            our comprehensive social media strategies. From content creation to
            community management, we handle it all.
          </motion.p>

          {/* Hero Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="tmiwbs7"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid=".fps0h5"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="zejt.yn"
                >
                  <CardContent className="p-6" data-oid="glff5dx">
                    <stat.icon
                      className="w-8 h-8 text-pink-400 mx-auto mb-3"
                      data-oid="q7oy6u0"
                    />
                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="c.lmj76"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="-4mbgyv">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="s2jh3m."
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="oipehh."
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="9.4s:4_"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="58l9ahu"
                />
                Get Free Social Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="-2vptrx"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="2imxwer"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="q8v43z2"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid=":4r.qot"
                />
                View Social Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Social Media Features */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="iq:f::s"
        >
          <div className="text-center mb-16" data-oid="-vqn3:v">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="qsl4c.s"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="kv_y8ve"
              >
                Social Media Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="pts91np"
            >
              Our comprehensive approach covers every aspect of social media
              marketing to build your brand and engage your audience.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="vdp212y"
          >
            {socialFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
                data-oid="g:_4_09"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="8x2rhep"
                >
                  <CardContent className="p-8" data-oid="le8iz-9">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid=".svpb_n"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="4ro54g3"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300"
                      data-oid="1hijeo1"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="pskfjmq"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="f4rsugd">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="4wpmg3t"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0"
                            data-oid="lmr3huk"
                          />
                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="51gm-8i"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="ogpa62w"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Social Media Process */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid=".rz8:.9"
        >
          <div className="text-center mb-16" data-oid="y9v85c_">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="g9nymo5"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="rblsuv9"
              >
                Social Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="akugxh2"
            >
              A systematic approach to social media marketing that builds
              authentic communities and drives real business results.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="f_rmw5m"
          >
            {socialProcessSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => setActiveProcess(index)}
                data-oid="0zqyc1."
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-pink-400/50 bg-pink-500/5"
                      : ""
                  }`}
                  data-oid="gjqo31g"
                >
                  <CardContent className="p-6 text-center" data-oid="_rsmik4">
                    <div className="relative mb-6" data-oid="9fb0uxv">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="2czdrnq"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="3zy_8k_"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="tkrxuj1"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-pink-500/20 text-pink-400 px-3 py-1 text-sm"
                      data-oid="u5j6obv"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300"
                      data-oid="i82x.49"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="ddy0mo5"
                    >
                      {step.description}
                    </p>
                  </CardContent>

                  {activeProcess === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="r44vwky"
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
          data-oid="t9awr29"
        >
          <div className="text-center mb-16" data-oid="st8hujk">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3xk6w9h"
            >
              Social Media{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="zhkg6k7"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="y_4o23c"
            >
              Real results from real clients who trusted us with their social
              media presence and community building.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="iqpeh_3"
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
                data-oid="n-ev7hl"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="le57j-w"
                >
                  <CardContent className="p-6" data-oid="29ofji1">
                    <div className="mb-4" data-oid="3k4ri7:">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="2rew--z"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-pink-500/20 text-pink-400 px-2 py-1 text-xs"
                        data-oid="dwusqkd"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="y14gi7o">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="zfg6l17"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="gojz4ab"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="521vfn."
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="p0mtvwy"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="6nhyupc"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="rf89.w6"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="hze25gy">
                        <div
                          className="flex justify-between"
                          data-oid="3mp44eh"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="p8hhx-j"
                          >
                            Engagement:
                          </span>
                          <span
                            className="text-pink-400 font-bold text-sm"
                            data-oid="tgtg9gz"
                          >
                            {study.results.engagement}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="9v9aw-c"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="gla_rfm"
                          >
                            Followers:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="l3qkwwq"
                          >
                            {study.results.followers}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="3c15vab"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="idgzx-n"
                          >
                            Business:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="d9jtcwz"
                          >
                            {study.results.sales}
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
          data-oid="l.kc5dq"
        >
          <div className="text-center mb-16" data-oid="6f2sbev">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="2j6z-:c"
            >
              Social Media{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="ag2mj3i"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid=".sf9w2x"
            >
              Choose the social media management package that best fits your
              brand's goals and budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="-_771ja"
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
                data-oid="vv05he3"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="3thxqth"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="gw834fw"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="xte3g6j" />
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
                  data-oid="42io8t9"
                >
                  <CardContent className="p-8 text-center" data-oid="uhedpu-">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid="c71i3ig"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="g2hd42g">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="eog1q8z">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="621jmb5"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="gwkikvs">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="9.wo6fk">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="ec174_-"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0"
                            data-oid="m_pdnpe"
                          />
                          <span className="text-gray-300" data-oid="nunp0et">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="6iw:b52">
                      <p
                        className="text-pink-400 text-sm font-medium"
                        data-oid="ru.1n7x"
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
                      data-oid="g2q.dfd"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="qbglg4t"
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
          data-oid="avto7j."
        >
          <div className="text-center mb-16" data-oid="5dr5po2">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="5kix0z6"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="igitkoh"
              >
                Social Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="if09reo"
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
                data-oid="7gjaf0p"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="kw3rgov"
                >
                  <CardContent className="p-8" data-oid="kfn-y5t">
                    <div className="flex items-center mb-4" data-oid="llgqt60">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="st8a3ct"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-pink-500/20 text-pink-400 px-2 py-1 text-xs"
                        data-oid="b0b-60j"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="i__cafm"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="09p_511">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid="y1xifl5"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="1n1a9ed">
                        <div
                          className="font-bold text-white"
                          data-oid="_tatn51"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="9zi1z53"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="-y8y-kt"
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
          data-oid="ndh_goa"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="mp.hj4_"
          >
            <div className="relative z-10" data-oid=".-din_-">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="ak-smj9"
              >
                <Share2
                  className="w-20 h-20 text-pink-400 glow-effect"
                  data-oid=":6ng1_y"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="0haowhe"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                  data-oid="6ljkehn"
                >
                  Amplify
                </span>{" "}
                Your Brand?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="391io6_"
              >
                Get a free social media audit and discover how we can help you
                build an engaged community, increase brand awareness, and drive
                meaningful business results through social media.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="fj15v36"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="d09ma_d"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-12 py-6 text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="_mv4r88"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="2cb6pa-"
                    />
                    Get Free Social Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="pcls3jf"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="-lm.a.f"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="y4c:t0e"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="lakytue"
                    />
                    View Social Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 group-hover:from-pink-500/10 group-hover:to-rose-500/10 transition-all duration-500"
              data-oid="olnd5t6"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
