import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  Play,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Award,
  Zap,
  Search,
  MousePointer,
  Share2,
  Mail,
  Palette,
  Code,
  Bot,
  BarChart3,
  Globe,
  Calendar,
  ArrowUpRight,
  Rocket,
  Target,
  Shield,
  Clock,
  Sparkles,
  Brain,
  MessageSquare,
  Lightbulb,
  ChevronRight,
  ChevronDown,
  Eye,
  Workflow,
  Database,
  Settings,
  Phone,
  MapPin,
  Send,
  Quote,
  DollarSign,
  Check,
  X,
  Crown,
  Briefcase,
  GraduationCap,
  Trophy,
  Headphones,
  LineChart,
  PieChart,
  BarChart,
  Activity,
  Layers,
  Cpu,
  CloudLightning,
  Smartphone,
  Monitor,
  Megaphone,
  Camera,
  Edit3,
  TrendingDown,
  Plus,
  Minus,
  Loader2,
  AlertCircle,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface HomePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [currentStat, setCurrentStat] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const stats = [
    {
      icon: Users,
      value: "200+",
      label: "Happy Clients",
      color: "text-blue-400",
      bgColor: "from-blue-500 to-blue-600",
      description: "Successful partnerships built",
      trend: "+25% this quarter",
    },
    {
      icon: TrendingUp,
      value: "350%",
      label: "Average ROI",
      color: "text-green-400",
      bgColor: "from-green-500 to-green-600",
      description: "Return on investment delivered",
      trend: "Consistently growing",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Client Rating",
      color: "text-yellow-400",
      bgColor: "from-yellow-500 to-orange-500",
      description: "Client satisfaction score",
      trend: "Based on 150+ reviews",
    },
    {
      icon: Award,
      value: "98%",
      label: "Success Rate",
      color: "text-purple-400",
      bgColor: "from-purple-500 to-purple-600",
      description: "Campaign success ratio",
      trend: "Industry-leading performance",
    },
  ];

  const whyChooseUs = [
    {
      icon: Trophy,
      title: "Industry Expertise",
      description:
        "10+ years of proven experience in digital marketing with cutting-edge strategies that deliver measurable results for businesses of all sizes.",
      gradient: "from-amber-500 to-orange-500",
      delay: 0.1,
    },
    {
      icon: Rocket,
      title: "Data-Driven Approach",
      description:
        "Every campaign is backed by comprehensive analytics and real-time data insights to ensure maximum ROI and continuous optimization.",
      gradient: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Support",
      description:
        "Round-the-clock support from our expert team ensures your campaigns are always optimized and your questions are answered promptly.",
      gradient: "from-purple-500 to-pink-500",
      delay: 0.3,
    },
  ];

  const digitalArsenal = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Dominate search results with advanced SEO strategies that drive organic traffic and increase visibility.",
      gradient: "from-blue-500 to-blue-600",
      features: ["Keyword Research", "Technical SEO", "Content Optimization"],
    },
    {
      icon: MousePointer,
      title: "Pay-Per-Click Advertising",
      description:
        "Maximize ROI with targeted PPC campaigns across Google, Facebook, and other premium platforms.",
      gradient: "from-green-500 to-green-600",
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage audiences across all major social media platforms.",
      gradient: "from-pink-500 to-rose-500",
      features: [
        "Content Creation",
        "Community Management",
        "Influencer Outreach",
      ],
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description:
        "Drive conversions with personalized email campaigns and automated marketing funnels.",
      gradient: "from-purple-500 to-violet-500",
      features: ["Automation", "Personalization", "A/B Testing"],
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description:
        "Create stunning, high-converting websites optimized for performance and user experience.",
      gradient: "from-cyan-500 to-blue-500",
      features: ["Responsive Design", "E-commerce", "Performance Optimization"],
    },
    {
      icon: Bot,
      title: "AI Automation",
      description:
        "Transform operations with intelligent automation and AI-powered business solutions.",
      gradient: "from-violet-500 to-purple-600",
      features: ["Chatbots", "Process Automation", "Predictive Analytics"],
      isNew: true,
    },
  ];

  const pricingPackages = [
    {
      name: "Starter",
      price: 999,
      originalPrice: 1299,
      period: "/month",
      description:
        "Perfect for small businesses starting their digital journey",
      features: [
        "SEO Basics",
        "Google Ads",
        "Social Media (2 platforms)",
        "Monthly Reports",
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
    },
    {
      name: "Growth",
      price: 2199,
      originalPrice: 2999,
      period: "/month",
      description: "Comprehensive marketing for scaling businesses",
      features: [
        "Advanced SEO",
        "Multi-Platform PPC",
        "Social Media (4 platforms)",
        "Email Marketing",
        "Weekly Reports",
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true,
    },
    {
      name: "Enterprise",
      price: 4499,
      originalPrice: 6999,
      period: "/month",
      description: "Full-scale digital transformation with AI automation",
      features: [
        "Enterprise SEO",
        "Unlimited PPC",
        "All Platforms",
        "AI Automation",
        "Custom Development",
        "24/7 Support",
      ],
      gradient: "from-amber-500 to-orange-500",
      popular: false,
    },
    {
      name: "Custom",
      price: "Custom",
      originalPrice: "",
      period: "",
      description: "Tailored solutions for unique business requirements",
      features: [
        "Custom Strategy",
        "Dedicated Team",
        "Advanced Analytics",
        "White-label Solutions",
      ],
      gradient: "from-emerald-500 to-green-500",
      popular: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechFlow Solutions",
      role: "CEO",
      text: "Inno Dot transformed our digital presence completely. We saw a 400% increase in qualified leads within just 3 months. Their AI automation solutions are game-changing!",
      avatar: "SJ",
      rating: 5,
      results: "+400% Leads",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      name: "Michael Chen",
      company: "EcoGreen Retail",
      role: "Marketing Director",
      text: "The ROI we've achieved with their campaigns is incredible. Professional, data-driven, and always delivering beyond expectations. Highly recommended!",
      avatar: "MC",
      rating: 5,
      results: "580% ROI",
      gradient: "from-green-500 to-blue-500",
    },
    {
      name: "Emily Rodriguez",
      company: "StartupX",
      role: "Founder",
      text: "As a startup, we needed results fast. Inno Dot delivered with strategic campaigns that helped us scale from 0 to 10k customers in 6 months.",
      avatar: "ER",
      rating: 5,
      results: "10k Customers",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Digital Strategist",
      experience: "12+ Years",
      specialization: "Digital Strategy & Growth",
      avatar: "AT",
      gradient: "from-blue-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjA0MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Maria Garcia",
      role: "Head of SEO",
      experience: "8+ Years",
      specialization: "Technical SEO & Content",
      avatar: "MG",
      gradient: "from-emerald-500 to-green-500",
      image:
        "https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG1hcmtldGluZyUyMHNwZWNpYWxpc3R8ZW58MXx8fHwxNzU2MDQwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "David Kim",
      role: "PPC Specialist",
      experience: "6+ Years",
      specialization: "Paid Media & Analytics",
      avatar: "DK",
      gradient: "from-orange-500 to-red-500",
      image:
        "https://images.unsplash.com/photo-1579540830482-659e7518c895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGFuYWx5c3R8ZW58MXx8fHwxNzU2MDQwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Lisa Wang",
      role: "AI Automation Lead",
      experience: "5+ Years",
      specialization: "AI & Machine Learning",
      avatar: "LW",
      gradient: "from-violet-500 to-purple-600",
      image:
        "https://images.unsplash.com/photo-1736939678218-bd648b5ef3bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlY2glMjBzcGVjaWFsaXN0fGVufDF8fHx8MTc1NjA0MDA2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  const faqItems = [
    {
      question:
        "What makes Inno Dot different from other digital marketing agencies?",
      answer:
        "We combine traditional digital marketing expertise with cutting-edge AI automation. Our data-driven approach, 24/7 support, and proven track record of 350% average ROI increase sets us apart. We don't just run campaigns - we transform businesses.",
    },
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Most clients see initial improvements within 30 days, with significant results typically visible within 60-90 days. However, timelines vary based on industry, competition, and current digital presence. We provide weekly reports to track progress.",
    },
    {
      question: "Do you work with businesses in my industry?",
      answer:
        "We've successfully worked with businesses across 50+ industries including healthcare, e-commerce, SaaS, professional services, and more. Our strategies are customized for each industry's unique challenges and opportunities.",
    },
    {
      question: "What's included in your AI Automation services?",
      answer:
        "Our AI Automation includes chatbots, lead qualification systems, email automation, social media scheduling, predictive analytics, and custom automation workflows. We also provide training and ongoing optimization.",
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer:
        "Absolutely! Our plans are flexible. You can upgrade immediately to access more features, or downgrade at your next billing cycle. We'll work with you to find the perfect fit for your growing business needs.",
    },
    {
      question: "Do you provide training and ongoing support?",
      answer:
        "Yes! All plans include comprehensive onboarding, training materials, and ongoing support. Higher-tier plans include dedicated account managers and priority support. We believe in empowering our clients with knowledge.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stats.length]);

  // Form validation
  const validateForm = () => {
    const errors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }

    if (
      formData.phone &&
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/[\s\-\(\)]/g, ""))
    ) {
      errors.phone = "Please enter a valid phone number";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Simulated form submission
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate random success/error for demo
      if (Math.random() > 0.1) {
        // 90% success rate
        setSubmitStatus("success");
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
        setFormErrors({});

        // Auto-clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      } else {
        setSubmitStatus("error");
        // Auto-clear error message after 5 seconds
        setTimeout(() => {
          setSubmitStatus("idle");
        }, 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  return (
    <div className="relative" data-oid="cush3m8">
      {/* Enhanced Hero Section */}
      <section
        className="pt-20 md:pt-28 pb-12 md:pb-20 relative overflow-hidden"
        data-oid="olwyxj1"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="u73pn80"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh] md:min-h-[70vh]"
            data-oid="ma6-1yn"
          >
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
              data-oid="orh0zo3"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                data-oid="6sfaicp"
              >
                <Badge
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-full"
                  data-oid="5o:0wj6"
                >
                  <Zap className="w-4 h-4 mr-2" data-oid="1kqph1v" />
                  #1 Digital Innovation Agency
                </Badge>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-1 md:space-y-2"
                data-oid="4ai2.4q"
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  data-oid="r.oznw5"
                >
                  Transform Your
                </h1>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                  data-oid="2-0u-li"
                >
                  Digital Presence
                </h1>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  data-oid="sse00yu"
                >
                  Today
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                data-oid="epoguzb"
              >
                Boost your business with our expert digital marketing services.
                From SEO and PPC to AI automation, we deliver results that
                matter with proven strategies and cutting-edge technology.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="button-group-responsive"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                data-oid="y_byu12"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto"
                  data-oid="n5hgcgg"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold rounded-xl btn-premium group"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-oid="f51vic5"
                  >
                    <Rocket
                      className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce"
                      data-oid="8hj2cn6"
                    />
                    <span className="sm:hidden" data-oid="2o67mt0">
                      Free Consultation
                    </span>
                    <span className="hidden sm:inline" data-oid="fr4j1ls">
                      Get Free Consultation
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto"
                  data-oid="qxrbsxz"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto glass border-white/30 text-white hover:bg-white/15 px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold rounded-xl group"
                    onClick={() => onNavigate("portfolio")}
                    data-oid="ksyji2i"
                  >
                    <Play
                      className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform"
                      data-oid="3381xoj"
                    />
                    <span className="sm:hidden" data-oid="4yy054r">
                      Success Stories
                    </span>
                    <span className="hidden sm:inline" data-oid="xq3uq0.">
                      View Success Stories
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Side - Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative flex justify-center lg:justify-end mt-8 lg:mt-0"
              data-oid="cs843-l"
            >
              <div
                className="relative w-full max-w-md lg:max-w-lg"
                data-oid="wd4c7qi"
              >
                {/* Main Stats Card */}
                <motion.div
                  whileHover={{ filter: "brightness(1.05)" }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                  data-oid="6xrf7ws"
                >
                  <Card
                    className="glass-card-enhanced border-white/20 relative overflow-hidden"
                    data-oid="npfkkdc"
                  >
                    <CardContent className="p-4 md:p-6" data-oid="ekc0vhl">
                      {/* Header */}
                      <div
                        className="flex items-center justify-between mb-6"
                        data-oid="ee.cn7o"
                      >
                        <div data-oid="28wcd8m">
                          <h3
                            className="text-xl font-bold text-white mb-1"
                            data-oid="jar7suu"
                          >
                            Live Results Dashboard
                          </h3>
                          <p
                            className="text-gray-400 text-sm"
                            data-oid="z.blt0_"
                          >
                            Real-time client success metrics
                          </p>
                        </div>
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          data-oid="4q.3x82"
                        >
                          <Activity
                            className="w-6 h-6 text-white"
                            data-oid="jk:awi_"
                          />
                        </motion.div>
                      </div>

                      {/* Interactive Stats Grid */}
                      <div
                        className="grid grid-cols-2 gap-4 mb-6"
                        data-oid="q:vf6gy"
                      >
                        {stats.map((stat, index) => (
                          <motion.div
                            key={stat.label}
                            className="text-center p-3 glass-stat-card rounded-lg cursor-pointer card-stat border border-white/10"
                            whileHover={{ filter: "brightness(1.1)" }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 0.8 + index * 0.1,
                            }}
                            onClick={() => setCurrentStat(index)}
                            data-oid="i4k_8mr"
                          >
                            <motion.div
                              className={`w-8 h-8 mx-auto mb-2 ${stat.color} icon-stat`}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              data-oid="4ed_2xu"
                            >
                              <stat.icon
                                className="w-full h-full"
                                data-oid="hcdai.."
                              />
                            </motion.div>
                            <div
                              className="text-lg font-bold text-white infographic-stat"
                              data-oid="7r30wvz"
                            >
                              {stat.value}
                            </div>
                            <div
                              className="text-xs text-gray-400"
                              data-oid="c:if589"
                            >
                              {stat.label}
                            </div>
                            <div
                              className="text-xs text-blue-400 mt-1"
                              data-oid="m0no5gf"
                            >
                              {stat.trend}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Growth Indicators */}
                      <div className="space-y-3" data-oid="8095bb2">
                        {[
                          {
                            label: "Client Growth",
                            value: "+47%",
                            color: "text-green-400",
                          },
                          {
                            label: "Campaign Performance",
                            value: "+89%",
                            color: "text-blue-400",
                          },
                          {
                            label: "ROI Achievement",
                            value: "+156%",
                            color: "text-purple-400",
                          },
                        ].map((metric, index) => (
                          <motion.div
                            key={metric.label}
                            className="flex items-center justify-between p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300 cursor-pointer card-interactive"
                            whileHover={{ filter: "brightness(1.05)" }}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.5,
                              delay: 1.0 + index * 0.1,
                            }}
                            data-oid="2w15hn5"
                          >
                            <span
                              className="text-gray-300 font-medium text-sm"
                              data-oid="ewasco9"
                            >
                              {metric.label}
                            </span>
                            <span
                              className={`font-bold ${metric.color}`}
                              data-oid="6qmqd1m"
                            >
                              {metric.value}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>

                    {/* Background Effects */}
                    <div
                      className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl"
                      data-oid="hc3:w-b"
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/15 to-green-500/15 rounded-full blur-xl"
                      data-oid="cdrac68"
                    ></div>
                  </Card>
                </motion.div>

                {/* Floating Success Badge */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 z-10"
                  data-oid="x-6xj2c"
                >
                  <Badge
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 text-sm font-medium shadow-lg"
                    data-oid="81tsatj"
                  >
                    <Trophy className="w-4 h-4 mr-1" data-oid="q2u_uir" />
                    98% Success Rate
                  </Badge>
                </motion.div>

                {/* AI Innovation Badge */}
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 z-10"
                  data-oid="m7:j_ye"
                >
                  <Badge
                    className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-2 text-sm font-medium shadow-lg"
                    data-oid="n.o4tl."
                  >
                    <Bot className="w-4 h-4 mr-1" data-oid="k2wch.h" />
                    AI-Powered ✨
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Showcase */}
      <section className="py-20 relative" data-oid="asubga7">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="04ptct7"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="acbrwos"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="6_govpk"
            >
              Proven{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="wb70i_c"
              >
                Results
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="i-n29yf"
            >
              Our data-driven approach delivers measurable results that drive
              real business growth
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="aitvfjq"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="text-center group cursor-pointer"
                onClick={() => setCurrentStat(index)}
                data-oid=".nioscb"
              >
                <Card
                  className={`glass-card-enhanced border-white/15 hover:border-white/25 transition-all duration-300 card-stat relative overflow-hidden ${
                    currentStat === index
                      ? "border-blue-400/50 bg-blue-500/5"
                      : ""
                  }`}
                  data-oid="uq89chg"
                >
                  <CardContent className="p-8" data-oid="_mpefst">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${stat.bgColor}`}
                      whileHover={{ rotate: 10 }}
                      data-oid="n6n3v-w"
                    >
                      <stat.icon
                        className="w-8 h-8 text-white"
                        data-oid="e9mw:eu"
                      />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 infographic-stat"
                      whileHover={{ scale: 1.1 }}
                      data-oid="im7i:40"
                    >
                      {stat.value}
                    </motion.div>
                    <div
                      className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 mb-2"
                      data-oid="yl:g_z1"
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2"
                      data-oid="8zrvhhd"
                    >
                      {stat.description}
                    </div>
                    <div
                      className="text-xs text-blue-400 font-medium"
                      data-oid="ymro--s"
                    >
                      {stat.trend}
                    </div>
                  </CardContent>

                  {/* Selected Indicator */}
                  {currentStat === index && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      data-oid="lj61d6n"
                    />
                  )}

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                    data-oid="8ip.un-"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Inno Dot Section */}
      <section className="py-20 relative" data-oid="j074_-3">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="zjt:5w3"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="rdya785"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2"
              data-oid="d4e1b_b"
            >
              Why Choose Us
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="zci0gyo"
            >
              Why Choose{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="uvhwafy"
              >
                Inno Dot?
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="sqc75ap"
            >
              We don't just deliver campaigns - we deliver transformation.
              Here's what sets us apart from the competition.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="np7uogp"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                data-oid="uimd.4b"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect text-center relative overflow-hidden"
                  data-oid="f:4zbj6"
                >
                  <CardContent className="p-8" data-oid="lfjhzn:">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="mlpqm:u"
                    >
                      <item.icon
                        className="w-8 h-8 text-white"
                        data-oid="kibm:42"
                      />
                    </motion.div>
                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="d-c2a2m"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed"
                      data-oid="jfhyu4d"
                    >
                      {item.description}
                    </p>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="exc.9nb"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Arsenal */}
      <section className="py-20 relative" data-oid="nnlycfc">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="eu-_6ip"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="c_gxma7"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2"
              data-oid="az8btss"
            >
              Our Services Arsenal
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid=":gp00ge"
            >
              Our Digital Marketing{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                data-oid=".x1hsn8"
              >
                Arsenal
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="c3x69ej"
            >
              Comprehensive digital marketing services designed to dominate your
              market and drive exponential growth.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="-s70-cs"
          >
            {digitalArsenal.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                onClick={() => onNavigate("service-detail", service.title)}
                data-oid="dat6vhf"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect relative overflow-hidden"
                  data-oid="gf-wl9l"
                >
                  <CardContent className="p-6" data-oid="5tv.6y7">
                    {service.isNew && (
                      <motion.div
                        className="absolute top-4 right-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-oid="a9fnvmx"
                      >
                        <Badge
                          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-2 py-1 text-xs"
                          data-oid="9t4yu7a"
                        >
                          ✨ New!
                        </Badge>
                      </motion.div>
                    )}

                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="b20_1ro"
                    >
                      <service.icon
                        className="w-7 h-7 text-white"
                        data-oid="vtjudjm"
                      />
                    </motion.div>

                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="_:_vena"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="ji6k8b6"
                    >
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4" data-oid="sutn15-">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                          data-oid="chivtvc"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                            data-oid="une26mm"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      data-oid="1fij_rm"
                    >
                      <span
                        className="font-semibold text-sm"
                        data-oid="d8tipp8"
                      >
                        Learn More
                      </span>
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="7sxwdqp"
                      />
                    </motion.div>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="km62v40"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Preview */}
      <section className="py-20 relative" data-oid="66izbg2">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="rj8h1ts"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="mcdcj8v"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2"
              data-oid="bc-gayw"
            >
              <DollarSign className="w-4 h-4 mr-2" data-oid="ie2z29f" />
              Pricing Packages
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="7oowa1e"
            >
              Our Pricing{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="6fr9s9:"
              >
                Packages
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="k2r83qe"
            >
              Flexible pricing plans designed to fit businesses of all sizes.
              Choose the perfect package for your growth journey.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="rkh2z4j"
          >
            {pricingPackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer relative"
                data-oid="dfwtdil"
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="89px63b"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="0.pqxxu"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="p_4zfql" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`glass-card h-full transition-all duration-300 relative overflow-hidden ${
                    pkg.popular
                      ? "border-purple-500/50 hover:border-purple-400/70"
                      : "border-white/15 hover:border-white/25"
                  }`}
                  data-oid="u59kd36"
                >
                  <CardContent className="p-6 text-center" data-oid="::wjnau">
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${pkg.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="v.lv4kc"
                    >
                      {pkg.name === "Starter" && (
                        <Rocket
                          className="w-6 h-6 text-white"
                          data-oid="6dheer6"
                        />
                      )}
                      {pkg.name === "Growth" && (
                        <TrendingUp
                          className="w-6 h-6 text-white"
                          data-oid="l7:gs8x"
                        />
                      )}
                      {pkg.name === "Enterprise" && (
                        <Crown
                          className="w-6 h-6 text-white"
                          data-oid="6-j0566"
                        />
                      )}
                      {pkg.name === "Custom" && (
                        <Settings
                          className="w-6 h-6 text-white"
                          data-oid="gv_1akq"
                        />
                      )}
                    </motion.div>

                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="q52t6f-"
                    >
                      {pkg.name}
                    </h3>

                    <div className="mb-4" data-oid="3734rvg">
                      {pkg.originalPrice && (
                        <span
                          className="text-sm text-gray-400 line-through block"
                          data-oid="mcuylee"
                        >
                          ${pkg.originalPrice}
                          {pkg.period}
                        </span>
                      )}
                      <div
                        className="flex items-center justify-center"
                        data-oid="4:ctfih"
                      >
                        <span
                          className="text-2xl font-bold text-white"
                          data-oid="0hvf07g"
                        >
                          {typeof pkg.price === "string"
                            ? pkg.price
                            : `$${pkg.price}`}
                        </span>
                        {pkg.period && (
                          <span
                            className="text-gray-400 text-sm ml-1"
                            data-oid="ucocl.y"
                          >
                            {pkg.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors duration-300"
                      data-oid="hq5g589"
                    >
                      {pkg.description}
                    </p>

                    <div className="space-y-2 mb-6" data-oid="t16gdfk">
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                          data-oid=".kwqzr6"
                        >
                          <CheckCircle
                            className="w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                            data-oid="ik9c380"
                          />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full transition-all duration-300 ${
                        pkg.popular
                          ? "btn-premium bg-gradient-to-r from-purple-500 to-pink-500"
                          : "glass border-white/20 hover:bg-white/20 text-white"
                      }`}
                      onClick={() => onNavigate("pricing")}
                      data-oid="j2.mfty"
                    >
                      {pkg.popular ? "Get Started" : "Choose Plan"}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="p9nbhng"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12"
            data-oid="y1m6i0v"
          >
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
              onClick={() => onNavigate("pricing")}
              data-oid="n:xxt1:"
            >
              View All Pricing Details
              <ArrowUpRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                data-oid="6a8a532"
              />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative" data-oid="opws9qi">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="aks561r"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="2:v0dpm"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-4 py-2"
              data-oid="qgzlwa9"
            >
              <Quote className="w-4 h-4 mr-2" data-oid="v2-i5b0" />
              Client Testimonials
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="2o-fkrm"
            >
              Testimonials From Our{" "}
              <span
                className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                data-oid="g_gqend"
              >
                Clients
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="5qkisk7"
            >
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their success with Inno Dot.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="7ki:hvj"
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
                data-oid="bed9ajz"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect relative overflow-hidden"
                  data-oid="d.6zhr3"
                >
                  <CardContent className="p-6" data-oid="k8zhxmb">
                    <div className="flex items-center mb-4" data-oid="ypiqit9">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          data-oid="-e5pbut"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="z-wjlx-"
                      >
                        {testimonial.results}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic group-hover:text-white transition-colors duration-300"
                      data-oid=":1_pehg"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="eg79vk0">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                        data-oid="a:p26fd"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div data-oid="-aimjrs">
                        <div
                          className="font-bold text-white group-hover:text-blue-100 transition-colors duration-300"
                          data-oid="-8fda53"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="_iafre4"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="d5hh1zz"
                        >
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 pointer-events-none`}
                    data-oid="qj0q4x:"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Team with Images */}
      <section className="py-20 relative" data-oid="ihv4cdp">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="sy5d6pu"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="dtcv_tu"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2"
              data-oid="jm2yyh-"
            >
              <Users className="w-4 h-4 mr-2" data-oid="b-08uko" />
              Our Expert Team
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid=".tmbymx"
            >
              Meet Our{" "}
              <span
                className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
                data-oid=".slosy8"
              >
                Expert Team
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="5tw3743"
            >
              Our team of seasoned professionals brings decades of combined
              experience in digital marketing, AI automation, and business
              growth strategies.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="dig0z3v"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                data-oid="wu8am_n"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect text-center relative overflow-hidden"
                  data-oid="pf5u56o"
                >
                  <CardContent className="p-6" data-oid="hl048_0">
                    {/* Professional Image */}
                    <motion.div
                      className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="zjvgj4s"
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                        data-oid="_o48fg-"
                      />

                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                        data-oid="v6z23mj"
                      ></div>
                    </motion.div>

                    <h3
                      className="text-lg font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="ez5nrsu"
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-blue-400 font-medium mb-2 group-hover:text-blue-300 transition-colors duration-300"
                      data-oid="2nceego"
                    >
                      {member.role}
                    </p>
                    <div
                      className="text-sm text-gray-400 mb-3"
                      data-oid="heu:vnt"
                    >
                      <div
                        className="flex items-center justify-center mb-1"
                        data-oid="oorfxpg"
                      >
                        <GraduationCap
                          className="w-4 h-4 mr-1"
                          data-oid="tjaiy7b"
                        />
                        {member.experience}
                      </div>
                      <div
                        className="text-gray-300 group-hover:text-white transition-colors duration-300"
                        data-oid="5kw2p8s"
                      >
                        {member.specialization}
                      </div>
                    </div>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="43qd-16"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Contact Form Side by Side */}
      <section id="contact" className="py-20 relative" data-oid="s-pzwri">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="kgente4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="az5fg28"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2"
              data-oid="ui.uxos"
            >
              <Send className="w-4 h-4 mr-2" data-oid="gt:72.j" />
              FAQ & Contact
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="xs5lvym"
            >
              Get Answers &{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid=".ooiko3"
              >
                Get Started
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="yli04e7"
            >
              Find answers to common questions and get in touch for your free
              consultation.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            data-oid="nw3ykf2"
          >
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-oid="6tn-115"
            >
              <div className="mb-8" data-oid="asxp9_z">
                <h3
                  className="text-2xl font-bold text-white mb-4 flex items-center"
                  data-oid="78k0r9."
                >
                  <Lightbulb
                    className="w-6 h-6 mr-3 text-orange-400"
                    data-oid="2jgxtwj"
                  />
                  Frequently Asked Questions
                </h3>
                <p className="text-gray-300" data-oid="0y6ywc-">
                  Got questions? We've got answers. Here are the most common
                  questions our clients ask us.
                </p>
              </div>

              <div className="space-y-4" data-oid="vuu5ech">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                    data-oid="8_42b_w"
                  >
                    <Card
                      className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                      data-oid="s8.g39e"
                    >
                      <CardContent className="p-0" data-oid="t.emrxo">
                        <motion.button
                          onClick={() =>
                            setOpenFaq(openFaq === index ? null : index)
                          }
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                          whileHover={{ x: 2 }}
                          data-oid="j_9e7_d"
                        >
                          <h4
                            className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300 pr-4"
                            data-oid="u6eeo3n"
                          >
                            {faq.question}
                          </h4>
                          <motion.div
                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                            data-oid="39tr_pe"
                          >
                            {openFaq === index ? (
                              <Minus
                                className="w-5 h-5 text-blue-400"
                                data-oid="1sv9rgp"
                              />
                            ) : (
                              <Plus
                                className="w-5 h-5 text-blue-400"
                                data-oid="epq:4o7"
                              />
                            )}
                          </motion.div>
                        </motion.button>

                        <motion.div
                          initial={false}
                          animate={{
                            height: openFaq === index ? "auto" : 0,
                            opacity: openFaq === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                          data-oid="23h6:ei"
                        >
                          <div className="px-6 pb-6" data-oid="b55q0cn">
                            <p
                              className="text-gray-300 leading-relaxed"
                              data-oid="mrpluyn"
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Contact Form with Validation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
              data-oid="gl2qktu"
            >
              {/* Contact Form */}
              <Card
                className="glass-card-enhanced border-white/20"
                data-oid=".qpnw8j"
              >
                <CardContent className="p-8" data-oid=":in-ylc">
                  <h3
                    className="text-2xl font-bold text-white mb-6"
                    data-oid="fck5zws"
                  >
                    Get Your Free Consultation
                  </h3>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
                      data-oid="g5p6v8_"
                    >
                      <CheckCircle
                        className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                        data-oid="m0h8dkr"
                      />
                      <div data-oid="um5lcnp">
                        <p
                          className="text-green-400 font-medium"
                          data-oid="efc3j5r"
                        >
                          Message sent successfully!
                        </p>
                        <p
                          className="text-green-300 text-sm"
                          data-oid="3mgazo5"
                        >
                          We'll get back to you within 24 hours.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center"
                      data-oid="1f09yu5"
                    >
                      <AlertCircle
                        className="w-5 h-5 text-red-400 mr-3 flex-shrink-0"
                        data-oid="1jx:4qm"
                      />
                      <div data-oid="ysph9w4">
                        <p
                          className="text-red-400 font-medium"
                          data-oid="1hmjprp"
                        >
                          Failed to send message
                        </p>
                        <p className="text-red-300 text-sm" data-oid="bxq6p.3">
                          Please try again or contact us directly.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    noValidate
                    data-oid="3g8a9xg"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="tx_r-rd"
                    >
                      <div data-oid="ha5u:-0">
                        <Label
                          htmlFor="name"
                          className="text-white mb-2 block"
                          data-oid="fgvkzsg"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`glass border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 ${
                            formErrors.name
                              ? "border-red-400 focus:border-red-400"
                              : ""
                          }`}
                          placeholder="John Doe"
                          disabled={isSubmitting}
                          data-oid="_ey92vz"
                        />

                        {formErrors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                            data-oid="lhcxyek"
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </div>
                      <div data-oid="rdzit3y">
                        <Label
                          htmlFor="email"
                          className="text-white mb-2 block"
                          data-oid="7ewre8q"
                        >
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`glass border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 ${
                            formErrors.email
                              ? "border-red-400 focus:border-red-400"
                              : ""
                          }`}
                          placeholder="john@company.com"
                          disabled={isSubmitting}
                          data-oid="h2u0tc9"
                        />

                        {formErrors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                            data-oid="duk48wu"
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="eqhm9as"
                    >
                      <div data-oid="lv0z0cl">
                        <Label
                          htmlFor="phone"
                          className="text-white mb-2 block"
                          data-oid="v4gb:kd"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`glass border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 ${
                            formErrors.phone
                              ? "border-red-400 focus:border-red-400"
                              : ""
                          }`}
                          placeholder="+1 (555) 123-4567"
                          disabled={isSubmitting}
                          data-oid="yg2ycgh"
                        />

                        {formErrors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                            data-oid="xi4pzur"
                          >
                            {formErrors.phone}
                          </motion.p>
                        )}
                      </div>
                      <div data-oid="814eqtx">
                        <Label
                          htmlFor="company"
                          className="text-white mb-2 block"
                          data-oid="acjo.qr"
                        >
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="glass border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400"
                          placeholder="Your Company Inc."
                          disabled={isSubmitting}
                          data-oid="rzc33qx"
                        />
                      </div>
                    </div>

                    <div data-oid="4nlnisz">
                      <Label
                        htmlFor="service"
                        className="text-white mb-2 block"
                        data-oid="yi71-g."
                      >
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full glass border-white/20 text-white bg-black/20 rounded-lg px-3 py-2 focus:border-blue-400 focus:outline-none disabled:opacity-50"
                        disabled={isSubmitting}
                        data-oid="s08m::m"
                      >
                        <option
                          value=""
                          className="bg-black"
                          data-oid="dx.p2m1"
                        >
                          Select a service
                        </option>
                        <option
                          value="SEO"
                          className="bg-black"
                          data-oid="z581hzu"
                        >
                          Search Engine Optimization
                        </option>
                        <option
                          value="PPC"
                          className="bg-black"
                          data-oid="92oqrzm"
                        >
                          Pay-Per-Click Advertising
                        </option>
                        <option
                          value="Social Media"
                          className="bg-black"
                          data-oid="qc4t3ts"
                        >
                          Social Media Marketing
                        </option>
                        <option
                          value="Email Marketing"
                          className="bg-black"
                          data-oid="j1zt6fr"
                        >
                          Email Marketing
                        </option>
                        <option
                          value="Web Design"
                          className="bg-black"
                          data-oid="vx.5s94"
                        >
                          Web Design & Development
                        </option>
                        <option
                          value="AI Automation"
                          className="bg-black"
                          data-oid="ev:fyz7"
                        >
                          AI Automation
                        </option>
                        <option
                          value="Full Package"
                          className="bg-black"
                          data-oid="7bkas:1"
                        >
                          Complete Marketing Package
                        </option>
                      </select>
                    </div>

                    <div data-oid="d7mq9fv">
                      <Label
                        htmlFor="message"
                        className="text-white mb-2 block"
                        data-oid="2jt091o"
                      >
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`glass border-white/20 text-white placeholder:text-gray-400 focus:border-blue-400 resize-none ${
                          formErrors.message
                            ? "border-red-400 focus:border-red-400"
                            : ""
                        }`}
                        placeholder="Tell us about your business goals and how we can help you achieve them..."
                        disabled={isSubmitting}
                        data-oid="u1rn-mv"
                      />

                      {formErrors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1"
                          data-oid="y_u0l.r"
                        >
                          {formErrors.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      data-oid="-p6fsvi"
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 font-semibold btn-premium group disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="rgq0j_l"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2
                              className="mr-2 h-5 w-5 animate-spin"
                              data-oid="5io6ut0"
                            />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send
                              className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                              data-oid="o829p_k"
                            />
                            Send Message & Get Free Consultation
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass-card border-white/15" data-oid="6226h0z">
                <CardContent className="p-6" data-oid="6bt_nbr">
                  <h4
                    className="text-xl font-bold text-white mb-4"
                    data-oid="iynvvg1"
                  >
                    Get in Touch
                  </h4>
                  <div className="space-y-4" data-oid="6umn3-r">
                    <div className="flex items-center" data-oid="9j6vspi">
                      <Mail
                        className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0"
                        data-oid="j.d3:84"
                      />
                      <div data-oid="y80qbht">
                        <div
                          className="text-white font-medium"
                          data-oid="flg5q37"
                        >
                          Email Us
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="la68sdo"
                        >
                          hello@innodot.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" data-oid="reer0-c">
                      <Phone
                        className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                        data-oid="0y777mp"
                      />
                      <div data-oid="rxmbkdr">
                        <div
                          className="text-white font-medium"
                          data-oid="dyohchu"
                        >
                          Call Us
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="l1m_1w6"
                        >
                          +1 (555) 123-4567
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" data-oid="syjtnb_">
                      <MapPin
                        className="w-5 h-5 text-red-400 mr-3 flex-shrink-0"
                        data-oid="b4kb1l4"
                      />
                      <div data-oid="v7i6ud:">
                        <div
                          className="text-white font-medium"
                          data-oid="ecyd7b9"
                        >
                          Visit Us
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="a9a0awy"
                        >
                          123 Innovation Street, Tech City
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Strategy Session CTA */}
              <Card
                className="glass-card-enhanced border-white/20 relative overflow-hidden group cursor-pointer"
                data-oid="t97jwao"
              >
                <CardContent className="p-6" data-oid="t2r8n.r">
                  <div className="text-center" data-oid="9kwm2:o">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block mb-4"
                      data-oid="sek5i7x"
                    >
                      <Sparkles
                        className="w-12 h-12 text-blue-400 glow-effect"
                        data-oid="q.c:fz0"
                      />
                    </motion.div>
                    <h4
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="eq5u66w"
                    >
                      Free Strategy Session
                    </h4>
                    <p
                      className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300"
                      data-oid="cfauuh2"
                    >
                      Get a comprehensive analysis of your current digital
                      presence and a custom growth strategy - completely free!
                    </p>
                    <ul
                      className="space-y-2 text-sm text-gray-400 mb-6"
                      data-oid="--n9bc:"
                    >
                      <li className="flex items-center" data-oid="akkkfr2">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="ds_zqnm"
                        />
                        Comprehensive website audit
                      </li>
                      <li className="flex items-center" data-oid="l_zd_wt">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="6wdqq9t"
                        />
                        Competitive analysis report
                      </li>
                      <li className="flex items-center" data-oid="1x-.66t">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="-.y6z4g"
                        />
                        Custom growth strategy
                      </li>
                      <li className="flex items-center" data-oid="w6r_t9w">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="kd.o4wh"
                        />
                        ROI projections & timeline
                      </li>
                    </ul>
                    <Badge
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2"
                      data-oid="_sdh94v"
                    >
                      <DollarSign className="w-4 h-4 mr-1" data-oid="bnevq2j" />
                      Worth $2,500 - Yours Free!
                    </Badge>
                  </div>
                </CardContent>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                  data-oid="qh8cxdv"
                ></div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative" data-oid="e6phnqa">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="_dtftzg"
        >
          <motion.div
            className="text-center glass-card-enhanced rounded-3xl p-12 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            data-oid=".:7h3uy"
          >
            <div className="relative z-10" data-oid="mtv:wmx">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="9n9-1dz"
              >
                <div className="relative" data-oid="r_jogi0">
                  <Rocket
                    className="w-20 h-20 text-blue-400 glow-effect group-hover:text-blue-300 transition-colors duration-300"
                    data-oid="xi1vu2f"
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-oid="o3dn3k6"
                  >
                    <Sparkles
                      className="w-3 h-3 text-white"
                      data-oid="ox_6oju"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors duration-300"
                data-oid="ib9_i:v"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  data-oid="zw-ot7u"
                >
                  Dominate
                </span>{" "}
                Your Market?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300"
                data-oid="ajelat7"
              >
                Join 200+ successful businesses that have transformed their
                digital presence with Inno Dot. Your competitors are already
                ahead - don't let them stay there.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="i4kac.a"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid=":c5m-63"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 btn-premium group"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-oid="7ug-0xu"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="e04s5lq"
                    />
                    Start Your Transformation Now
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="kqc_xci"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="7_fbxn5"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 px-12 py-6 text-lg font-semibold group"
                    onClick={() => onNavigate("portfolio")}
                    data-oid=".sbb5zb"
                  >
                    <Eye
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="utsxz0t"
                    />
                    See Our Success Stories
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Background Effects */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
              data-oid="8i39o4u"
            ></div>

            {/* Animated Particles */}
            <div
              className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              data-oid="l70au.0"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 ${
                    [
                      "bg-blue-400",
                      "bg-purple-400",
                      "bg-cyan-400",
                      "bg-pink-400",
                    ][i % 4]
                  } rounded-full`}
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${10 + i * 11}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  data-oid="bpo1bel"
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
