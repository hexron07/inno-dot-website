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
    <div className="pt-24 pb-20 relative" data-oid="n65y7e_">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="7k_qmxw"
      >
        {/* Hero Section */}
        <motion.section
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="suuy_oo"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
            data-oid="aaqcdx9"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="u8iq7n3"
            >
              <Share2 className="w-5 h-5 mr-2" data-oid="hgaxurt" />
              Social Media Marketing
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="zgydy0j"
          >
            Build Your Brand with
            <span
              className="block bg-gradient-to-r from-pink-400 via-rose-500 to-purple-600 bg-clip-text text-transparent"
              data-oid="qbbmk1n"
            >
              Strategic Social Media
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="dg_usq3"
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
            data-oid="dvo:4:f"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
                data-oid="tagrzhd"
              >
                <Card
                  className="glass-card border-white/20 hover:border-white/30 transition-all duration-300"
                  data-oid="pmzgtyj"
                >
                  <CardContent className="p-6" data-oid="_t-t41a">
                    <stat.icon
                      className="w-8 h-8 text-pink-400 mx-auto mb-3"
                      data-oid="39rmlx7"
                    />

                    <div
                      className="text-2xl font-bold text-white mb-1"
                      data-oid="cmgy_3w"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="uqe2z62">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="ubl..u8"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="8:o5-aq"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white px-8 py-4 font-semibold btn-premium group"
                onClick={() => onNavigate("home")}
                data-oid="j8d8e2v"
              >
                <Calendar
                  className="mr-2 h-5 w-5 group-hover:animate-bounce"
                  data-oid="d6fijh."
                />
                Get Free Social Audit
                <ArrowRight
                  className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                  data-oid="9m-8xzl"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="ettpp-0"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
                onClick={() => onNavigate("portfolio")}
                data-oid="mpiqjj4"
              >
                <Eye
                  className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform"
                  data-oid="gm41xl."
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
          data-oid="sj5:f64"
        >
          <div className="text-center mb-16" data-oid="bw..dbw">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="9mz.jor"
            >
              Complete{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="_l6c0o9"
              >
                Social Media Solutions
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="scltuk0"
            >
              Our comprehensive approach covers every aspect of social media
              marketing to build your brand and engage your audience.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="tb1r.6r"
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
                data-oid="5yv5nm9"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden"
                  data-oid="wt9-ss6"
                >
                  <CardContent className="p-8" data-oid="jxo9e2x">
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="-9-y8-a"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="81soi_r"
                      />
                    </motion.div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300"
                      data-oid="::m-kxq"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="78orxkc"
                    >
                      {feature.description}
                    </p>

                    <div className="space-y-2" data-oid="zur80bk">
                      {feature.benefits.map((benefit, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="b.4ws9m"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0"
                            data-oid="6d3r5o0"
                          />

                          <span
                            className="text-gray-300 group-hover:text-white transition-colors duration-300"
                            data-oid="8-pb7n6"
                          >
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="u4.epg9"
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
          data-oid="7gm3q4."
        >
          <div className="text-center mb-16" data-oid="7pmls50">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="7_dpy6:"
            >
              Our Proven{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="5x:w6a:"
              >
                Social Process
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="9odoe19"
            >
              A systematic approach to social media marketing that builds
              authentic communities and drives real business results.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="rf2-xf0"
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
                data-oid="kvduk8f"
              >
                <Card
                  className={`glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 relative overflow-hidden ${
                    activeProcess === index
                      ? "border-pink-400/50 bg-pink-500/5"
                      : ""
                  }`}
                  data-oid="65kj89x"
                >
                  <CardContent className="p-6 text-center" data-oid="ydu465.">
                    <div className="relative mb-6" data-oid="1.rppu-">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ rotate: 10 }}
                        data-oid="mgnf6os"
                      >
                        <step.icon
                          className="w-8 h-8 text-white"
                          data-oid="crnjpgz"
                        />
                      </motion.div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm"
                        data-oid="r093gzs"
                      >
                        {index + 1}
                      </div>
                    </div>

                    <Badge
                      className="mb-4 bg-pink-500/20 text-pink-400 px-3 py-1 text-sm"
                      data-oid="k.1ahoz"
                    >
                      {step.timeline}
                    </Badge>

                    <h3
                      className="text-xl font-bold text-white mb-4 group-hover:text-pink-100 transition-colors duration-300"
                      data-oid="e8at:g."
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="7orrgvk"
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
                      data-oid=".wjcx1-"
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
          data-oid="1tzamz1"
        >
          <div className="text-center mb-16" data-oid="16hvl-p">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="n19k3lw"
            >
              Social Media{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="9diqowr"
              >
                Success Stories
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="ug6j738"
            >
              Real results from real clients who trusted us with their social
              media presence and community building.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="pdgc6li"
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
                data-oid="vtkmsoi"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="7ulwx39"
                >
                  <CardContent className="p-6" data-oid="6kcgaqi">
                    <div className="mb-4" data-oid="jzpgd7i">
                      <h3
                        className="text-xl font-bold text-white mb-1"
                        data-oid="1c80li5"
                      >
                        {study.client}
                      </h3>
                      <Badge
                        className="bg-pink-500/20 text-pink-400 px-2 py-1 text-xs"
                        data-oid="npoaua-"
                      >
                        {study.industry}
                      </Badge>
                    </div>

                    <div className="mb-4" data-oid="p54xne.">
                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="7-mi-l8"
                      >
                        Challenge:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-3"
                        data-oid="ui-9uny"
                      >
                        {study.challenge}
                      </p>

                      <h4
                        className="text-sm font-semibold text-gray-300 mb-2"
                        data-oid="ivojnz9"
                      >
                        Solution:
                      </h4>
                      <p
                        className="text-gray-400 text-sm mb-4"
                        data-oid="_m93qm5"
                      >
                        {study.solution}
                      </p>
                    </div>

                    <div
                      className="border-t border-white/10 pt-4"
                      data-oid="_k-ai22"
                    >
                      <h4
                        className="text-sm font-semibold text-white mb-3"
                        data-oid="-94c:1l"
                      >
                        Results in {study.timeframe}:
                      </h4>
                      <div className="space-y-2" data-oid="376brol">
                        <div
                          className="flex justify-between"
                          data-oid="293bk99"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="1qsjldg"
                          >
                            Engagement:
                          </span>
                          <span
                            className="text-pink-400 font-bold text-sm"
                            data-oid="0sc.kal"
                          >
                            {study.results.engagement}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="rl_iw6p"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="yucazxw"
                          >
                            Followers:
                          </span>
                          <span
                            className="text-blue-400 font-bold text-sm"
                            data-oid="6clgvgv"
                          >
                            {study.results.followers}
                          </span>
                        </div>
                        <div
                          className="flex justify-between"
                          data-oid="3n0fl2w"
                        >
                          <span
                            className="text-gray-400 text-sm"
                            data-oid="dp6rmkg"
                          >
                            Business:
                          </span>
                          <span
                            className="text-purple-400 font-bold text-sm"
                            data-oid="wggb39x"
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
          data-oid=".px-xo3"
        >
          <div className="text-center mb-16" data-oid="_78gdzo">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="7v3nqjq"
            >
              Social Media{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="alsd79:"
              >
                Pricing Plans
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="oomlesh"
            >
              Choose the social media management package that best fits your
              brand's goals and budget.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="v:t8gm:"
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
                data-oid="n0mwq.f"
              >
                {tier.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="0n38su2"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="bptxeu:"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="z5cp:tm" />
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
                  data-oid="q.vcqwp"
                >
                  <CardContent className="p-8 text-center" data-oid="keymn.y">
                    <h3
                      className="text-2xl font-bold text-white mb-2"
                      data-oid=".q8y7-g"
                    >
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-6" data-oid="2kzh-ht">
                      {tier.description}
                    </p>

                    <div className="mb-6" data-oid="8hhcain">
                      <span
                        className="text-4xl font-bold text-white"
                        data-oid="thapf7w"
                      >
                        ${tier.price}
                      </span>
                      <span className="text-gray-400" data-oid="zklxkgs">
                        {tier.period}
                      </span>
                    </div>

                    <div className="space-y-3 mb-8" data-oid="w9hqpa_">
                      {tier.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm"
                          data-oid="2jsi1uy"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-pink-400 mr-3 flex-shrink-0"
                            data-oid="vey.06l"
                          />

                          <span className="text-gray-300" data-oid=".ju6h8r">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mb-6" data-oid="46a:dks">
                      <p
                        className="text-pink-400 text-sm font-medium"
                        data-oid="3qcwg9z"
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
                      data-oid="bno.t8w"
                    >
                      Get Started with {tier.name}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="nmllxyc"
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
          data-oid="r.7ndqv"
        >
          <div className="text-center mb-16" data-oid="1ky7lu8">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="8n05::2"
            >
              What Our{" "}
              <span
                className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                data-oid="_5wzx3d"
              >
                Social Clients
              </span>{" "}
              Say
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="2m:h0wz"
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
                data-oid=".zd-8xq"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                  data-oid="1l7l4lg"
                >
                  <CardContent className="p-8" data-oid="sqo43j4">
                    <div className="flex items-center mb-4" data-oid="qq4ht7t">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="ph..x5v"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-pink-500/20 text-pink-400 px-2 py-1 text-xs"
                        data-oid="fh2q_hd"
                      >
                        {testimonial.result}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic"
                      data-oid="gtsqndl"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="l9yes4.">
                      <div
                        className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white font-bold mr-4"
                        data-oid=".ira-7b"
                      >
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <div data-oid="5n3-5es">
                        <div
                          className="font-bold text-white"
                          data-oid="poxt778"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="8r874j5"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="svsuobu"
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
          data-oid="g2j1.nj"
        >
          <Card
            className="glass-card-enhanced rounded-3xl p-12 text-center relative overflow-hidden group"
            data-oid="s2jwbw:"
          >
            <div className="relative z-10" data-oid="vjugzg-">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="6vvwyfw"
              >
                <Share2
                  className="w-20 h-20 text-pink-400 glow-effect"
                  data-oid="lfhks3x"
                />
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                data-oid="m1474rw"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent"
                  data-oid="ma_6g2y"
                >
                  Amplify
                </span>{" "}
                Your Brand?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
                data-oid="q1funug"
              >
                Get a free social media audit and discover how we can help you
                build an engaged community, increase brand awareness, and drive
                meaningful business results through social media.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="ihfytlz"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="9khz52q"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white btn-responsive text-lg font-bold shadow-2xl btn-premium group"
                    onClick={() => onNavigate("home")}
                    data-oid="38bs0ue"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid=":82qo8f"
                    />
                    Get Free Social Audit
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="ew0d-om"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="9j2jwqk"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("pricing")}
                    data-oid="q.b344y"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="004yrfs"
                    />
                    View Social Pricing
                  </Button>
                </motion.div>
              </div>
            </div>

            <div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 group-hover:from-pink-500/10 group-hover:to-rose-500/10 transition-all duration-500"
              data-oid="82-n_xa"
            ></div>
          </Card>
        </motion.section>
      </div>
    </div>
  );
}
