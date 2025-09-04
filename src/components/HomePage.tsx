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

  // Unified gradient system
  const gradients = {
    primary: "from-blue-500 to-purple-600",
    secondary: "from-purple-500 to-pink-500", 
    accent: "from-cyan-500 to-blue-500",
    success: "from-green-500 to-emerald-500",
    warning: "from-yellow-500 to-orange-500",
    info: "from-indigo-500 to-purple-500"
  };

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
      gradient: gradients.warning,
      delay: 0.1,
    },
    {
      icon: Rocket,
      title: "Data-Driven Approach",
      description:
        "Every campaign is backed by comprehensive analytics and real-time data insights to ensure maximum ROI and continuous optimization.",
      gradient: gradients.accent,
      delay: 0.2,
    },
    {
      icon: Headphones,
      title: "24/7 Dedicated Support",
      description:
        "Round-the-clock support from our expert team ensures your campaigns are always optimized and your questions are answered promptly.",
      gradient: gradients.secondary,
      delay: 0.3,
    },
  ];

  const digitalArsenal = [
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Dominate search results with advanced SEO strategies that drive organic traffic and increase visibility.",
      gradient: gradients.primary,
      features: ["Keyword Research", "Technical SEO", "Content Optimization"],
    },
    {
      icon: MousePointer,
      title: "Pay-Per-Click Advertising",
      description:
        "Maximize ROI with targeted PPC campaigns across Google, Facebook, and other premium platforms.",
      gradient: gradients.success,
      features: ["Google Ads", "Facebook Ads", "Campaign Optimization"],
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description:
        "Build brand awareness and engage audiences across all major social media platforms.",
      gradient: gradients.secondary,
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
      gradient: gradients.info,
      features: ["Automation", "Personalization", "A/B Testing"],
    },
    {
      icon: Code,
      title: "Web Design & Development",
      description:
        "Create stunning, high-converting websites optimized for performance and user experience.",
      gradient: gradients.accent,
      features: ["Responsive Design", "E-commerce", "Performance Optimization"],
    },
    {
      icon: Bot,
      title: "AI Automation",
      description:
        "Transform operations with intelligent automation and AI-powered business solutions.",
      gradient: gradients.info,
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
      gradient: gradients.accent,
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
      gradient: gradients.secondary,
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
      gradient: gradients.warning,
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
      gradient: gradients.success,
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
      gradient: gradients.primary,
    },
    {
      name: "Michael Chen",
      company: "EcoGreen Retail",
      role: "Marketing Director",
      text: "The ROI we've achieved with their campaigns is incredible. Professional, data-driven, and always delivering beyond expectations. Highly recommended!",
      avatar: "MC",
      rating: 5,
      results: "580% ROI",
      gradient: gradients.success,
    },
    {
      name: "Emily Rodriguez",
      company: "StartupX",
      role: "Founder",
      text: "As a startup, we needed results fast. Inno Dot delivered with strategic campaigns that helped us scale from 0 to 10k customers in 6 months.",
      avatar: "ER",
      rating: 5,
      results: "10k Customers",
      gradient: gradients.secondary,
    },
  ];

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Digital Strategist",
      experience: "12+ Years",
      specialization: "Digital Strategy & Growth",
      avatar: "AT",
      gradient: gradients.primary,
      image:
        "https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBDRU8lMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NjA0MDA1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Maria Garcia",
      role: "Head of SEO",
      experience: "8+ Years",
      specialization: "Technical SEO & Content",
      avatar: "MG",
      gradient: gradients.success,
      image:
        "https://images.unsplash.com/photo-1736939666660-d4c776e0532c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMG1hcmtldGluZyUyMHNwZWNpYWxpc3R8ZW58MXx8fHwxNzU2MDQwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "David Kim",
      role: "PPC Specialist",
      experience: "6+ Years",
      specialization: "Paid Media & Analytics",
      avatar: "DK",
      gradient: gradients.warning,
      image:
        "https://images.unsplash.com/photo-1579540830482-659e7518c895?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBidXNpbmVzcyUyMGFuYWx5c3R8ZW58MXx8fHwxNzU2MDQwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Lisa Wang",
      role: "AI Automation Lead",
      experience: "5+ Years",
      specialization: "AI & Machine Learning",
      avatar: "LW",
      gradient: gradients.info,
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
    <div className="relative" data-oid="2ufkk_7">
      {/* Enhanced Hero Section */}
      <section
        className="pt-20 md:pt-28 pb-12 md:pb-20 relative overflow-hidden"
        data-oid="5njwyo2"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="quy-1vz"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[60vh] md:min-h-[70vh]"
            data-oid="82ajk0l"
          >
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
              data-oid="56e_wek"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                data-oid="jjqtiit"
              >
                <Badge
                  className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm font-semibold rounded-full"
                  data-oid="vji7zey"
                >
                  <Zap className="w-4 h-4 mr-2" data-oid="3m66nw1" />
                  #1 Digital Innovation Agency
                </Badge>
              </motion.div>

              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-1 md:space-y-2"
                data-oid=":1:9prg"
              >
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  data-oid="amgtgm6"
                >
                  Transform Your
                </h1>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
                  data-oid="6_sm5wh"
                >
                  Digital Presence
                </h1>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                  data-oid="7t2osq."
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
                data-oid="haimdeb"
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
                data-oid="7ksnzxf"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto"
                  data-oid="8v-unok"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold rounded-xl btn-premium group"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-oid="owyr4i0"
                  >
                    <Rocket
                      className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce"
                      data-oid="g73.112"
                    />

                    <span className="sm:hidden" data-oid="-176yvo">
                      Free Consultation
                    </span>
                    <span className="hidden sm:inline" data-oid="u2l4l50">
                      Get Free Consultation
                    </span>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full sm:w-auto"
                  data-oid="9bl912d"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto glass border-white/30 text-white hover:bg-white/15 px-6 py-3 sm:px-8 sm:py-4 text-base font-semibold rounded-xl group"
                    onClick={() => onNavigate("portfolio")}
                    data-oid="g2q-t.7"
                  >
                    <Play
                      className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform"
                      data-oid="3i_r3al"
                    />

                    <span className="sm:hidden" data-oid="9f8.r9n">
                      Success Stories
                    </span>
                    <span className="hidden sm:inline" data-oid="gq9r9im">
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
              data-oid="v6013i0"
            >
              <div
                className="relative w-full max-w-md lg:max-w-lg"
                data-oid="wn6.mww"
              >
                {/* Main Stats Card */}
                <motion.div
                  whileHover={{ filter: "brightness(1.05)" }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                  data-oid="m:3koq_"
                >
                  <Card
                    className="glass-card-enhanced border-white/20 relative overflow-hidden"
                    data-oid=":8sbgjx"
                  >
                    <CardContent className="p-4 md:p-6" data-oid="a-vpghf">
                      {/* Header */}
                      <div
                        className="flex items-center justify-between mb-6"
                        data-oid="wglm5it"
                      >
                        <div data-oid="2mvbvm0">
                          <h3
                            className="text-xl font-bold text-white mb-1"
                            data-oid="6a4kphc"
                          >
                            Live Results Dashboard
                          </h3>
                          <p
                            className="text-gray-400 text-sm"
                            data-oid="mi4o6t."
                          >
                            Real-time client success metrics
                          </p>
                        </div>
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                          data-oid="vjq81o."
                        >
                          <Activity
                            className="w-6 h-6 text-white"
                            data-oid="b23yi74"
                          />
                        </motion.div>
                      </div>

                      {/* Interactive Stats Grid */}
                      <div
                        className="grid grid-cols-2 gap-4 mb-6"
                        data-oid="gekjj-8"
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
                            data-oid=".0l8mxs"
                          >
                            <motion.div
                              className={`w-8 h-8 mx-auto mb-2 ${stat.color} icon-stat`}
                              whileHover={{ scale: 1.2, rotate: 10 }}
                              data-oid="_zt70ud"
                            >
                              <stat.icon
                                className="w-full h-full"
                                data-oid="c3-xmu8"
                              />
                            </motion.div>
                            <div
                              className="text-lg font-bold text-white infographic-stat"
                              data-oid="_c7p:n6"
                            >
                              {stat.value}
                            </div>
                            <div
                              className="text-xs text-gray-400"
                              data-oid="-gqac8h"
                            >
                              {stat.label}
                            </div>
                            <div
                              className="text-xs text-blue-400 mt-1"
                              data-oid="ko.rcr7"
                            >
                              {stat.trend}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Growth Indicators */}
                      <div className="space-y-3" data-oid="m8mn0r7">
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
                            data-oid="yx:73.6"
                          >
                            <span
                              className="text-gray-300 font-medium text-sm"
                              data-oid="iouxb1u"
                            >
                              {metric.label}
                            </span>
                            <span
                              className={`font-bold ${metric.color}`}
                              data-oid="a1c7sbs"
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
                      data-oid="i3ufavr"
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-cyan-500/15 to-green-500/15 rounded-full blur-xl"
                      data-oid="9t:qzh9"
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
                  data-oid="-minwrm"
                >
                  <Badge
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-2 text-sm font-medium shadow-lg"
                    data-oid="g3ty2wv"
                  >
                    <Trophy className="w-4 h-4 mr-1" data-oid="qcb6yan" />
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
                  data-oid="8b4pbvd"
                >
                  <Badge
                    className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-3 py-2 text-sm font-medium shadow-lg"
                    data-oid="w7lovrr"
                  >
                    <Bot className="w-4 h-4 mr-1" data-oid="yjhvvx." />
                    AI-Powered ✨
                  </Badge>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Stats Showcase */}
      <section className="py-20 relative" data-oid="td9:5dq">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="jwhz2eb"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="npn_d69"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="1os_.0i"
            >
              Proven{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                data-oid="fpuhp.t"
              >
                Results
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="79.c1.e"
            >
              Our data-driven approach delivers measurable results that drive
              real business growth
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="sqddejp"
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
                data-oid="dtv-wet"
              >
                <Card
                  className={`glass-card-enhanced border-white/15 hover:border-white/25 transition-all duration-300 card-stat relative overflow-hidden ${
                    currentStat === index
                      ? "border-blue-400/50 bg-blue-500/5"
                      : ""
                  }`}
                  data-oid="1edbj-j"
                >
                  <CardContent className="p-8" data-oid="k5gl:1z">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 bg-gradient-to-r ${stat.bgColor}`}
                      whileHover={{ rotate: 10 }}
                      data-oid="apd6f9d"
                    >
                      <stat.icon
                        className="w-8 h-8 text-white"
                        data-oid="dow1-p_"
                      />
                    </motion.div>
                    <motion.div
                      className="text-4xl font-bold text-white mb-2 group-hover:scale-105 transition-transform duration-300 infographic-stat"
                      whileHover={{ scale: 1.1 }}
                      data-oid="l8-3efh"
                    >
                      {stat.value}
                    </motion.div>
                    <div
                      className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300 mb-2"
                      data-oid="g:ym0q5"
                    >
                      {stat.label}
                    </div>
                    <div
                      className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-2"
                      data-oid="2.v2gjg"
                    >
                      {stat.description}
                    </div>
                    <div
                      className="text-xs text-blue-400 font-medium"
                      data-oid="a6l13zl"
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
                      data-oid=".oq9l:7"
                    />
                  )}

                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-lg`}
                    data-oid="1mn6p-n"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Inno Dot Section */}
      <section className="py-20 relative" data-oid="7cfi:dy">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="8uxp79v"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="vq_-l.s"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2"
              data-oid="r-.4_i1"
            >
              Why Choose Us
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="f7zsp8p"
            >
              Why Choose{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="k6q4ifa"
              >
                Inno Dot?
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="mccq4dg"
            >
              We don't just deliver campaigns - we deliver transformation.
              Here's what sets us apart from the competition.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="7k.58fv"
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
                data-oid="a7cn6lp"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect text-center relative overflow-hidden"
                  data-oid="fx3wxn5"
                >
                  <CardContent className="p-8" data-oid="axshlp:">
                    <motion.div
                      className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="7au98h9"
                    >
                      <item.icon
                        className="w-8 h-8 text-white"
                        data-oid="u7l4x1t"
                      />
                    </motion.div>
                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="el_86w3"
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed"
                      data-oid="25vxw7e"
                    >
                      {item.description}
                    </p>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="tklnr.2"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Digital Marketing Arsenal */}
      <section className="py-20 relative" data-oid="__nq572">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="ku8dho:"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="e2m6gl0"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2"
              data-oid="-df..4h"
            >
              Our Services Arsenal
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="x6bkv7n"
            >
              Our Digital Marketing{" "}
              <span
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="2dmqjs3"
              >
                Arsenal
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="rqw.h6r"
            >
              Comprehensive digital marketing services designed to dominate your
              market and drive exponential growth.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="92ca3ec"
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
                data-oid="v-rcugz"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect relative overflow-hidden"
                  data-oid="zi4p:n6"
                >
                  <CardContent className="p-6" data-oid="s5yyvkx">
                    {service.isNew && (
                      <motion.div
                        className="absolute top-4 right-4"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-oid="9-49-f6"
                      >
                        <Badge
                          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-2 py-1 text-xs"
                          data-oid="70:4tlm"
                        >
                          ✨ New!
                        </Badge>
                      </motion.div>
                    )}

                    <motion.div
                      className={`w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="nvxy.00"
                    >
                      <service.icon
                        className="w-7 h-7 text-white"
                        data-oid="v:-osef"
                      />
                    </motion.div>

                    <h3
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="3meu_:-"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300 text-sm"
                      data-oid="wdub4d0"
                    >
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-4" data-oid="x5yqntj">
                      {service.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                          data-oid="ux0ghfv"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                            data-oid="59x:ey1"
                          />

                          {feature}
                        </div>
                      ))}
                    </div>

                    <motion.div
                      className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      data-oid="9bepj5-"
                    >
                      <span
                        className="font-semibold text-sm"
                        data-oid="v7sw2ab"
                      >
                        Learn More
                      </span>
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="wnmwe5s"
                      />
                    </motion.div>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="jf50acp"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages Preview */}
      <section className="py-20 relative" data-oid="lhqwh35">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="um0.hc4"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid=":6au1kn"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2"
              data-oid="m5hw-31"
            >
              <DollarSign className="w-4 h-4 mr-2" data-oid="7csffmz" />
              Pricing Packages
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="inxhr45"
            >
              Our Pricing{" "}
              <span
                className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"
                data-oid=".vnne07"
              >
                Packages
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="tx45go:"
            >
              Flexible pricing plans designed to fit businesses of all sizes.
              Choose the perfect package for your growth journey.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            data-oid="aa-fzhx"
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
                data-oid="ah8gs10"
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="6kps-zm"
                  >
                    <Badge
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 shadow-lg"
                      data-oid="pjo:wn4"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="wg0ke86" />
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
                  data-oid="ywh6h2y"
                >
                  <CardContent className="p-6 text-center" data-oid="nsl2jkg">
                    <motion.div
                      className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-r ${pkg.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="6ezmfss"
                    >
                      {pkg.name === "Starter" && (
                        <Rocket
                          className="w-6 h-6 text-white"
                          data-oid="p2hrf6k"
                        />
                      )}
                      {pkg.name === "Growth" && (
                        <TrendingUp
                          className="w-6 h-6 text-white"
                          data-oid="zp9_jtb"
                        />
                      )}
                      {pkg.name === "Enterprise" && (
                        <Crown
                          className="w-6 h-6 text-white"
                          data-oid="tb31xoy"
                        />
                      )}
                      {pkg.name === "Custom" && (
                        <Settings
                          className="w-6 h-6 text-white"
                          data-oid="4u_n5pa"
                        />
                      )}
                    </motion.div>

                    <h3
                      className="text-xl font-bold text-white mb-2 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="cb2pgch"
                    >
                      {pkg.name}
                    </h3>

                    <div className="mb-4" data-oid="xae0a1y">
                      {pkg.originalPrice && (
                        <span
                          className="text-sm text-gray-400 line-through block"
                          data-oid=":hrxh7_"
                        >
                          ${pkg.originalPrice}
                          {pkg.period}
                        </span>
                      )}
                      <div
                        className="flex items-center justify-center"
                        data-oid="0vpksn_"
                      >
                        <span
                          className="text-2xl font-bold text-white"
                          data-oid="-hgt.3k"
                        >
                          {typeof pkg.price === "string"
                            ? pkg.price
                            : `$${pkg.price}`}
                        </span>
                        {pkg.period && (
                          <span
                            className="text-gray-400 text-sm ml-1"
                            data-oid="r.7k5o-"
                          >
                            {pkg.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <p
                      className="text-gray-300 text-sm mb-4 group-hover:text-white transition-colors duration-300"
                      data-oid="i73iyo9"
                    >
                      {pkg.description}
                    </p>

                    <div className="space-y-2 mb-6" data-oid="f2n_don">
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                          data-oid="y3zm53c"
                        >
                          <CheckCircle
                            className="w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                            data-oid="iyoyg7."
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
                      data-oid="e5w9031"
                    >
                      {pkg.popular ? "Get Started" : "Choose Plan"}
                    </Button>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    data-oid="ce9rugl"
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
            data-oid="93a1qhx"
          >
            <Button
              size="lg"
              variant="outline"
              className="glass border-white/20 text-white hover:bg-white/10 px-8 py-4 font-semibold group"
              onClick={() => onNavigate("pricing")}
              data-oid="aq:nhsw"
            >
              View All Pricing Details
              <ArrowUpRight
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                data-oid="wbg3w7p"
              />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative" data-oid="rti6:bj">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid=":lc_08f"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="5g:2tb."
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2"
              data-oid="d:eo9y7"
            >
              <Quote className="w-4 h-4 mr-2" data-oid="-mzgz1j" />
              Client Testimonials
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="acph7:2"
            >
              Testimonials From Our{" "}
              <span
                className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                data-oid="vyv1dp5"
              >
                Clients
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="99yr2gk"
            >
              Don't just take our word for it. Here's what our satisfied clients
              have to say about their success with Inno Dot.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="wfm6mle"
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
                data-oid="2-fyoxh"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect relative overflow-hidden"
                  data-oid="p9thmwl"
                >
                  <CardContent className="p-6" data-oid="67xyqli">
                    <div className="flex items-center mb-4" data-oid="2art6j2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                          data-oid="7t_-ide"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="eyzapzm"
                      >
                        {testimonial.results}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-gray-300 mb-6 italic group-hover:text-white transition-colors duration-300"
                      data-oid="9emc0-e"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div className="flex items-center" data-oid="iy5vr-_">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 5 }}
                        data-oid="gq2xz04"
                      >
                        {testimonial.avatar}
                      </motion.div>
                      <div data-oid="rg.qu3:">
                        <div
                          className="font-bold text-white group-hover:text-blue-100 transition-colors duration-300"
                          data-oid="q.az6ax"
                        >
                          {testimonial.name}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="6yi:d7w"
                        >
                          {testimonial.role}
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="4lpxb9f"
                        >
                          {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300 pointer-events-none`}
                    data-oid="rco0y5-"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Expert Team with Images */}
      <section className="py-20 relative" data-oid="-1ha79m">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="4cdpk9p"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="huy2i8p"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2"
              data-oid="6kptt7y"
            >
              <Users className="w-4 h-4 mr-2" data-oid="hjy3txk" />
              Our Expert Team
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="3ink0.l"
            >
              Meet Our{" "}
              <span
                className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="1vszdy9"
              >
                Expert Team
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="vpd:-nz"
            >
              Our team of seasoned professionals brings decades of combined
              experience in digital marketing, AI automation, and business
              growth strategies.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid=":0m1noq"
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
                data-oid="42vyxb4"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect text-center relative overflow-hidden"
                  data-oid="0kgh6vt"
                >
                  <CardContent className="p-6" data-oid=".k9g40z">
                    {/* Professional Image */}
                    <motion.div
                      className="relative w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 5 }}
                      data-oid="b0arr.d"
                    >
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"
                        data-oid=".9-wv8u"
                      />

                      <div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                        data-oid="9ezg_k8"
                      ></div>
                    </motion.div>

                    <h3
                      className="text-lg font-bold text-white mb-1 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="8jz0n.g"
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-blue-400 font-medium mb-2 group-hover:text-blue-300 transition-colors duration-300"
                      data-oid="kso9aqb"
                    >
                      {member.role}
                    </p>
                    <div
                      className="text-sm text-gray-400 mb-3"
                      data-oid="q:..fm3"
                    >
                      <div
                        className="flex items-center justify-center mb-1"
                        data-oid="zty...o"
                      >
                        <GraduationCap
                          className="w-4 h-4 mr-1"
                          data-oid="if3r4n5"
                        />

                        {member.experience}
                      </div>
                      <div
                        className="text-gray-300 group-hover:text-white transition-colors duration-300"
                        data-oid="7tf77.q"
                      >
                        {member.specialization}
                      </div>
                    </div>
                  </CardContent>
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="i4rjuoh"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Contact Form Side by Side */}
      <section id="contact" className="py-20 relative" data-oid="m8cn8mj">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="be_:ism"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            data-oid="76dx7:8"
          >
            <Badge
              className="mb-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2"
              data-oid="tknk:zs"
            >
              <Send className="w-4 h-4 mr-2" data-oid="8-bimmm" />
              FAQ & Contact
            </Badge>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="5ulfnn-"
            >
              Get Answers &{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="fepr:kr"
              >
                Get Started
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="cag:w5f"
            >
              Find answers to common questions and get in touch for your free
              consultation.
            </p>
          </motion.div>

          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
            data-oid="l0_lmsj"
          >
            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-oid="fcz752-"
            >
              <div className="mb-8" data-oid="0m-3et6">
                <h3
                  className="text-2xl font-bold text-white mb-4 flex items-center"
                  data-oid="_lrtowa"
                >
                  <Lightbulb
                    className="w-6 h-6 mr-3 text-orange-400"
                    data-oid="v-b2zit"
                  />
                  Frequently Asked Questions
                </h3>
                <p className="text-gray-300" data-oid="tkqemyn">
                  Got questions? We've got answers. Here are the most common
                  questions our clients ask us.
                </p>
              </div>

              <div className="space-y-4" data-oid="atps-bb">
                {faqItems.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                    data-oid="v3v4frt"
                  >
                    <Card
                      className="glass-card border-white/15 hover:border-white/25 transition-all duration-300"
                      data-oid="m8m1zsj"
                    >
                      <CardContent className="p-0" data-oid="iz7lsa0">
                        <motion.button
                          onClick={() =>
                            setOpenFaq(openFaq === index ? null : index)
                          }
                          className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                          whileHover={{ x: 2 }}
                          data-oid="t_7p:h8"
                        >
                          <h4
                            className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300 pr-4"
                            data-oid="6yqmr8f"
                          >
                            {faq.question}
                          </h4>
                          <motion.div
                            animate={{ rotate: openFaq === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0"
                            data-oid="g1ep8kf"
                          >
                            {openFaq === index ? (
                              <Minus
                                className="w-5 h-5 text-blue-400"
                                data-oid="2m_i8_p"
                              />
                            ) : (
                              <Plus
                                className="w-5 h-5 text-blue-400"
                                data-oid="e0rws09"
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
                          data-oid="-c_trik"
                        >
                          <div className="px-6 pb-6" data-oid="e5i3vj6">
                            <p
                              className="text-gray-300 leading-relaxed"
                              data-oid="hgjvm4e"
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
              data-oid="wgo4ob8"
            >
              {/* Contact Form */}
              <Card
                className="glass-card-enhanced border-white/20"
                data-oid="nvd14ay"
              >
                <CardContent className="p-8" data-oid="6qiliet">
                  <h3
                    className="text-2xl font-bold text-white mb-6"
                    data-oid="6:a_-:i"
                  >
                    Get Your Free Consultation
                  </h3>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center"
                      data-oid="1qcf6go"
                    >
                      <CheckCircle
                        className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                        data-oid="so50f48"
                      />

                      <div data-oid="0zklkw3">
                        <p
                          className="text-green-400 font-medium"
                          data-oid="eahr3_6"
                        >
                          Message sent successfully!
                        </p>
                        <p
                          className="text-green-300 text-sm"
                          data-oid="prn25o2"
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
                      data-oid="dbrf.8y"
                    >
                      <AlertCircle
                        className="w-5 h-5 text-red-400 mr-3 flex-shrink-0"
                        data-oid="w59fxa."
                      />

                      <div data-oid="::tuo5:">
                        <p
                          className="text-red-400 font-medium"
                          data-oid="jahxllu"
                        >
                          Failed to send message
                        </p>
                        <p className="text-red-300 text-sm" data-oid="hb7a51g">
                          Please try again or contact us directly.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  <form
                    onSubmit={handleFormSubmit}
                    className="space-y-6"
                    noValidate
                    data-oid="b2cgk5-"
                  >
                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="upwfa7-"
                    >
                      <div data-oid="vz87h8.">
                        <Label
                          htmlFor="name"
                          className="text-white mb-2 block"
                          data-oid="7:aw:iu"
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
                          data-oid="w8_-vrj"
                        />

                        {formErrors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                            data-oid="cn.35cv"
                          >
                            {formErrors.name}
                          </motion.p>
                        )}
                      </div>
                      <div data-oid="a9s5oct">
                        <Label
                          htmlFor="email"
                          className="text-white mb-2 block"
                          data-oid="-_2q3um"
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
                          data-oid="7v705mb"
                        />

                        {formErrors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                            data-oid="4c-m6k."
                          >
                            {formErrors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    <div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      data-oid="cblyv73"
                    >
                      <div data-oid="38qf-pj">
                        <Label
                          htmlFor="phone"
                          className="text-white mb-2 block"
                          data-oid="ghhya.5"
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
                          data-oid="60l12m3"
                        />

                        {formErrors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-1"
                            data-oid="h_iq-cm"
                          >
                            {formErrors.phone}
                          </motion.p>
                        )}
                      </div>
                      <div data-oid="hpa:lo8">
                        <Label
                          htmlFor="company"
                          className="text-white mb-2 block"
                          data-oid="_3fvvb_"
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
                          data-oid="0g61ugg"
                        />
                      </div>
                    </div>

                    <div data-oid="py0-opw">
                      <Label
                        htmlFor="service"
                        className="text-white mb-2 block"
                        data-oid="8-ozg-t"
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
                        data-oid="xtlcylt"
                      >
                        <option
                          value=""
                          className="bg-black"
                          data-oid="oue:oo8"
                        >
                          Select a service
                        </option>
                        <option
                          value="SEO"
                          className="bg-black"
                          data-oid="11qo41s"
                        >
                          Search Engine Optimization
                        </option>
                        <option
                          value="PPC"
                          className="bg-black"
                          data-oid="qrojfxp"
                        >
                          Pay-Per-Click Advertising
                        </option>
                        <option
                          value="Social Media"
                          className="bg-black"
                          data-oid="8r3mq43"
                        >
                          Social Media Marketing
                        </option>
                        <option
                          value="Email Marketing"
                          className="bg-black"
                          data-oid="0a189d."
                        >
                          Email Marketing
                        </option>
                        <option
                          value="Web Design"
                          className="bg-black"
                          data-oid="p346uoz"
                        >
                          Web Design & Development
                        </option>
                        <option
                          value="AI Automation"
                          className="bg-black"
                          data-oid="zqlvdkq"
                        >
                          AI Automation
                        </option>
                        <option
                          value="Full Package"
                          className="bg-black"
                          data-oid="b3c6p-m"
                        >
                          Complete Marketing Package
                        </option>
                      </select>
                    </div>

                    <div data-oid="khajvax">
                      <Label
                        htmlFor="message"
                        className="text-white mb-2 block"
                        data-oid="_bkc44e"
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
                        data-oid="v6wh3r5"
                      />

                      {formErrors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-1"
                          data-oid=":rvm9b."
                        >
                          {formErrors.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.div
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      data-oid="jqh4mry"
                    >
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 font-semibold btn-premium group disabled:opacity-50 disabled:cursor-not-allowed"
                        data-oid="77rgi1u"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2
                              className="mr-2 h-5 w-5 animate-spin"
                              data-oid="zm3m_iw"
                            />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send
                              className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
                              data-oid="4g:kj-w"
                            />
                            Get free consultation
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass-card border-white/15" data-oid="qgqbko2">
                <CardContent className="p-6" data-oid="5f1_-lj">
                  <h4
                    className="text-xl font-bold text-white mb-4"
                    data-oid="bzu9q9a"
                  >
                    Get in Touch
                  </h4>
                  <div className="space-y-4" data-oid="txvwu2c">
                    <div className="flex items-center" data-oid="8sxm9ov">
                      <Mail
                        className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0"
                        data-oid="259s5hn"
                      />

                      <div data-oid="m1i4mt2">
                        <div
                          className="text-white font-medium"
                          data-oid="8f5:.lq"
                        >
                          Email Us
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="rihv2a3"
                        >
                          hello@innodot.com
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" data-oid="qpjzs_7">
                      <Phone
                        className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                        data-oid="h5fvhu:"
                      />

                      <div data-oid="wr31w9w">
                        <div
                          className="text-white font-medium"
                          data-oid="tiuv9oc"
                        >
                          Call Us
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid=":mdjiie"
                        >
                          +1 (555) 123-4567
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center" data-oid="whe:9y-">
                      <MapPin
                        className="w-5 h-5 text-red-400 mr-3 flex-shrink-0"
                        data-oid=":c1opzz"
                      />

                      <div data-oid="g0qz6nu">
                        <div
                          className="text-white font-medium"
                          data-oid="nd5ucik"
                        >
                          Visit Us
                        </div>
                        <div
                          className="text-gray-400 text-sm"
                          data-oid="eyyjgmo"
                        >
                          Morgan Hill, California 95037
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Free Strategy Session CTA */}
              <Card
                className="glass-card-enhanced border-white/20 relative overflow-hidden group cursor-pointer"
                data-oid="d2070xw"
              >
                <CardContent className="p-6" data-oid="5t4_u8g">
                  <div className="text-center" data-oid="4wpy1wh">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block mb-4"
                      data-oid="zyq_9c1"
                    >
                      <Sparkles
                        className="w-12 h-12 text-blue-400 glow-effect"
                        data-oid="nuplgut"
                      />
                    </motion.div>
                    <h4
                      className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="x57zpbm"
                    >
                      Free Strategy Session
                    </h4>
                    <p
                      className="text-gray-300 mb-4 group-hover:text-white transition-colors duration-300"
                      data-oid=":f:_nz7"
                    >
                      Get a comprehensive analysis of your current digital
                      presence and a custom growth strategy - completely free!
                    </p>
                    <ul
                      className="space-y-2 text-sm text-gray-400 mb-6"
                      data-oid="mx6fg3w"
                    >
                      <li className="flex items-center" data-oid="xlbi6lr">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="5u0l4t_"
                        />
                        Comprehensive website audit
                      </li>
                      <li className="flex items-center" data-oid="3t5ny24">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="pigdkj2"
                        />
                        Competitive analysis report
                      </li>
                      <li className="flex items-center" data-oid="qn5c6ce">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="cia3p1e"
                        />
                        Custom growth strategy
                      </li>
                      <li className="flex items-center" data-oid="n:thbsd">
                        <CheckCircle
                          className="w-4 h-4 text-green-400 mr-2"
                          data-oid="6n6o-bh"
                        />
                        ROI projections & timeline
                      </li>
                    </ul>
                    <Badge
                      className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2"
                      data-oid="e4musmm"
                    >
                      <DollarSign className="w-4 h-4 mr-1" data-oid="-7zs4cy" />
                      Worth $2,500 - Yours Free!
                    </Badge>
                  </div>
                </CardContent>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
                  data-oid="p0wbeap"
                ></div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 relative" data-oid="-9wt89f">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="_01mlu8"
        >
          <motion.div
            className="text-center glass-card-enhanced rounded-3xl p-12 relative overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            data-oid="bmkhnoe"
          >
            <div className="relative z-10" data-oid="18.xbc.">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="kbqb84y"
              >
                <div className="relative" data-oid="q691i46">
                  <Rocket
                    className="w-20 h-20 text-blue-400 glow-effect group-hover:text-blue-300 transition-colors duration-300"
                    data-oid="nzpd189"
                  />

                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-oid="w:8qdkt"
                  >
                    <Sparkles
                      className="w-3 h-3 text-white"
                      data-oid="dj0mzq3"
                    />
                  </motion.div>
                </div>
              </motion.div>

              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 group-hover:text-blue-100 transition-colors duration-300"
                data-oid="5ruc:p9"
              >
                Ready to{" "}
                <span
                  className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                  data-oid=":tco.px"
                >
                  Dominate
                </span>{" "}
                Your Market?
              </h2>

              <p
                className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto group-hover:text-white transition-colors duration-300"
                data-oid="j8j8_63"
              >
                Join 200+ successful businesses that have transformed their
                digital presence with Inno Dot. Your competitors are already
                ahead - don't let them stay there.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="2imrunb"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="y-vxpm5"
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white btn-responsive text-lg font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 btn-premium group"
                    onClick={() => {
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    data-oid="hel8owo"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="6mtx0bp"
                    />
                    Start Your Transformation Now
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="d4oy:_8"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="x_d07ym"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass border-white/30 text-white hover:bg-white/15 btn-responsive text-lg font-semibold group"
                    onClick={() => onNavigate("portfolio")}
                    data-oid="4:wfo:m"
                  >
                    <Eye
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="b5.vc7x"
                    />
                    See Our Success Stories
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Background Effects */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
              data-oid="u-0w:8_"
            ></div>

            {/* Animated Particles - Responsive */}
            <div
              className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              data-oid="qu7gw28"
            >
              {/* Mobile: Show fewer particles (4) */}
              <div className="block sm:hidden">
                {Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-0.5 h-0.5 sm:w-1 sm:h-1 ${
                      [
                        "bg-blue-400",
                        "bg-purple-400",
                        "bg-cyan-400",
                        "bg-pink-400",
                      ][i % 4]
                    } rounded-full`}
                    style={{
                      top: `${25 + i * 15}%`,
                      left: `${15 + i * 20}%`,
                    }}
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                    data-oid="9abaags"
                  />
                ))}
              </div>

              {/* Tablet and above: Show normal amount (6) */}
              <div className="hidden sm:block md:hidden">
                {Array.from({ length: 6 }).map((_, i) => (
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
                      top: `${20 + i * 12}%`,
                      left: `${12 + i * 13}%`,
                    }}
                    animate={{
                      y: [0, -15, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3.5 + i * 0.4,
                      repeat: Infinity,
                      delay: i * 0.6,
                    }}
                    data-oid="9abaags"
                  />
                ))}
              </div>

              {/* Desktop: Show all particles (8) */}
              <div className="hidden md:block">
                {Array.from({ length: 8 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 lg:w-1.5 lg:h-1.5 ${
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
                    data-oid="9abaags"
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
