import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Bot,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  BarChart3,
  Zap,
  Clock,
  Users,
  Award,
  Lightbulb,
  Eye,
  Globe,
  Shield,
  Calendar,
  ArrowUpRight,
  Cpu,
  Database,
  MessageSquare,
  Workflow,
  BrainCircuit,
  Target,
  Settings,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface AIAutomationServicePageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function AIAutomationServicePage({
  onNavigate,
}: AIAutomationServicePageProps) {
  const features = [
    {
      icon: BrainCircuit,
      title: "Intelligent Process Automation",
      description:
        "AI-powered workflows that learn and adapt to your business processes, reducing manual work by up to 80%.",
    },
    {
      icon: MessageSquare,
      title: "AI Chatbots & Virtual Assistants",
      description:
        "24/7 customer support with natural language processing, handling inquiries and bookings automatically.",
    },
    {
      icon: Database,
      title: "Predictive Analytics & Insights",
      description:
        "Machine learning models that analyze data patterns to predict trends and optimize business decisions.",
    },
    {
      icon: Workflow,
      title: "Custom AI Integrations",
      description:
        "Seamlessly integrate AI capabilities into your existing tools and platforms for enhanced productivity.",
    },
    {
      icon: Target,
      title: "Lead Scoring & Qualification",
      description:
        "AI algorithms that automatically score and qualify leads based on behavior and engagement patterns.",
    },
    {
      icon: Settings,
      title: "Automated Reporting & Analytics",
      description:
        "Intelligent dashboards that generate insights and reports automatically, saving hours of manual work.",
    },
  ];

  const process = [
    {
      step: "1",
      icon: Eye,
      title: "AI Audit & Assessment",
      description:
        "Comprehensive analysis of your business processes to identify AI automation opportunities.",
      duration: "1-2 weeks",
    },
    {
      step: "2",
      icon: Lightbulb,
      title: "Strategy & Planning",
      description:
        "Develop a custom AI automation strategy aligned with your business goals and objectives.",
      duration: "1 week",
    },
    {
      step: "3",
      icon: Cpu,
      title: "AI Development & Training",
      description:
        "Build and train custom AI models and automation workflows tailored to your needs.",
      duration: "3-6 weeks",
    },
    {
      step: "4",
      icon: BarChart3,
      title: "Testing & Optimization",
      description:
        "Rigorous testing and continuous optimization to ensure maximum efficiency and accuracy.",
      duration: "2-3 weeks",
    },
    {
      step: "5",
      icon: Zap,
      title: "Deployment & Integration",
      description:
        "Seamless deployment and integration with your existing systems and workflows.",
      duration: "1-2 weeks",
    },
    {
      step: "6",
      icon: TrendingUp,
      title: "Monitor & Scale",
      description:
        "Ongoing monitoring, maintenance, and scaling of AI automation solutions.",
      duration: "Ongoing",
    },
  ];

  const benefits = [
    "Reduce operational costs by 40-70%",
    "Increase productivity and efficiency",
    "24/7 automated customer support",
    "Eliminate repetitive manual tasks",
    "Improve data accuracy and insights",
    "Scale operations without hiring",
    "Faster decision-making with AI insights",
    "Enhanced customer experience",
  ];

  const packages = [
    {
      name: "AI Starter",
      price: "$2,500",
      period: "/month",
      description:
        "Perfect for small businesses looking to automate basic processes",
      features: [
        "AI chatbot for customer support",
        "Basic process automation (up to 3)",
        "Email automation workflows",
        "Simple predictive analytics",
        "Monthly performance reports",
        "Standard support",
      ],
    },
    {
      name: "AI Professional",
      price: "$5,000",
      period: "/month",
      popular: true,
      description: "Comprehensive AI automation for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced chatbot with NLP",
        "Process automation (up to 10)",
        "Lead scoring and qualification",
        "Custom AI integrations",
        "Advanced analytics dashboard",
        "CRM automation",
        "Priority support",
      ],
    },
    {
      name: "AI Enterprise",
      price: "$10,000",
      period: "/month",
      description: "Full-scale AI transformation for large organizations",
      features: [
        "Everything in Professional",
        "Unlimited process automation",
        "Custom AI model development",
        "Multi-language support",
        "Advanced predictive modeling",
        "API integrations",
        "White-label solutions",
        "Dedicated AI specialist",
      ],
    },
  ];

  const stats = [
    { icon: TrendingUp, value: "73%", label: "Cost Reduction" },
    { icon: Zap, value: "5x", label: "Faster Processing" },
    { icon: Users, value: "24/7", label: "Automated Support" },
    { icon: Award, value: "98%", label: "Accuracy Rate" },
  ];

  const resultsData = [
    { value: "65%", label: "Average cost reduction" },
    { value: "400%", label: "Increase in processing speed" },
    { value: "90%", label: "Reduction in manual tasks" },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="1eous-6">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0" data-oid="usivouq">
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl animate-float"
          data-oid="h.ezrib"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="0_twrnq"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full filter blur-3xl"
          data-oid=".n1hgec"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="-.mr5jn"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="7x4ppe1"
        >
          <Badge
            className="mb-8 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 hover:scale-105 transition-transform duration-300"
            data-oid="osh9rzg"
          >
            <Bot className="w-5 h-5 mr-2" data-oid="oi9r-n8" />
            AI Automation
          </Badge>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="wllnsof"
          >
            <span className="block text-contrast-high" data-oid="hj-4qk5">
              Transform Your Business with
            </span>
            <span className="block gradient-text-vibrant" data-oid="gezugpc">
              AI-Powered Automation
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl mb-12 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="9l03gvo"
          >
            Revolutionize your operations with cutting-edge AI automation
            solutions. Reduce costs, increase efficiency, and scale your
            business with intelligent workflows that work around the clock.
          </motion.p>

          {/* Enhanced Hero Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto"
            data-oid="1z5dgk:"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group cursor-pointer card-interactive"
              data-oid="2cxhp.w"
            >
              <div
                className="glass-card-enhanced p-6 rounded-xl text-center"
                data-oid="b50u769"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center"
                  data-oid="lyt:2lf"
                >
                  <BrainCircuit
                    className="w-8 h-8 text-white"
                    data-oid="2hqw77q"
                  />
                </div>
                <h3 className="heading-card mb-2" data-oid="h_slxbc">
                  Smart Automation
                </h3>
                <p
                  className="text-body-sm text-contrast-medium"
                  data-oid="havs6wi"
                >
                  Intelligent workflows that adapt and learn
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative group cursor-pointer card-interactive"
              data-oid="f62_acx"
            >
              <div
                className="glass-card-enhanced p-6 rounded-xl text-center"
                data-oid="-khpdpo"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center"
                  data-oid="t9kkz3i"
                >
                  <MessageSquare
                    className="w-8 h-8 text-white"
                    data-oid=":qot2db"
                  />
                </div>
                <h3 className="heading-card mb-2" data-oid="q9v_o3q">
                  AI Chatbots
                </h3>
                <p
                  className="text-body-sm text-contrast-medium"
                  data-oid=".ovnr50"
                >
                  24/7 customer support automation
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="relative group cursor-pointer card-interactive"
              data-oid="l4bznx0"
            >
              <div
                className="glass-card-enhanced p-6 rounded-xl text-center"
                data-oid="1d3095w"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center"
                  data-oid="rnfb2:1"
                >
                  <BarChart3
                    className="w-8 h-8 text-white"
                    data-oid="qf0_bge"
                  />
                </div>
                <h3 className="heading-card mb-2" data-oid="j-zo4_8">
                  Predictive Analytics
                </h3>
                <p
                  className="text-body-sm text-contrast-medium"
                  data-oid="bke8:xe"
                >
                  Data-driven insights and forecasting
                </p>
              </div>
            </motion.div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            data-oid="s.dxet:"
          >
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="8stjmyc"
            >
              <Button
                size="lg"
                className="btn-premium bg-gradient-to-r from-violet-500 to-purple-600 text-contrast-high px-10 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group"
                onClick={() => onNavigate("pricing")}
                data-oid="5ziid4z"
              >
                <Calendar
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="h0-hj48"
                />
                Start AI Consultation
                <ArrowRight
                  className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                  data-oid="9reg2cm"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid=".af-pn7"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-10 py-6 font-semibold tracking-wide group"
                onClick={() => onNavigate("portfolio")}
                data-oid="n08-b:h"
              >
                <Eye
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="qhdlvoe"
                />
                View AI Solutions
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="qdlk5kk"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid="vxb51sd"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
                className="group"
                data-oid="k9g:kjd"
              >
                <Card
                  className="glass-stat-card hover:bg-white/10 transition-all duration-300 card-stat cursor-pointer bg-black/40 border-white/15"
                  data-oid="mscelp8"
                >
                  <CardContent
                    className="p-6 text-center relative z-10"
                    data-oid=":1q03s_"
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      data-oid="py3:_k2"
                    >
                      <stat.icon
                        className="w-7 h-7 text-blue-400"
                        data-oid="615_zpv"
                      />
                    </div>
                    <div
                      className="infographic-stat mb-2 animate-stat-counter text-card-primary"
                      data-oid="l4k.lcz"
                    >
                      {stat.value}
                    </div>
                    <div
                      className="heading-card text-card-secondary"
                      data-oid="vnopyvg"
                    >
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="h413tln"
        >
          <div className="text-center mb-16" data-oid="e-0xo1h">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid=".cz49bg"
            >
              <span className="block text-contrast-high" data-oid="6.m02pl">
                AI Automation
              </span>
              <span className="block gradient-text-vibrant" data-oid="9m_9bc4">
                Solutions & Features
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="esgngn_"
            >
              Comprehensive AI-powered automation tools to transform your
              business operations
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid=".g2ftfu"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -3 }}
                className="group cursor-pointer"
                data-oid="dtp9dmr"
              >
                <Card
                  className="glass-feature-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature relative overflow-hidden bg-black/40"
                  data-oid=":x-o:us"
                >
                  <CardContent className="p-8 relative z-10" data-oid="ris2wb4">
                    <div
                      className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 glow-effect group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      data-oid="pwrz_91"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="0y.xpej"
                      />
                    </div>

                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="oczj_pr"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="n-75efj"
                    >
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Process Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="dwacgn7"
        >
          <div className="text-center mb-16" data-oid="38v8_5e">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="8et25or"
            >
              <span className="block text-contrast-high" data-oid="1lm09-q">
                Our AI Automation
              </span>
              <span className="block gradient-text-vibrant" data-oid="6unocfl">
                Implementation Process
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="9pvfh95"
            >
              Systematic approach to implementing AI automation in your business
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="kn0-05f"
          >
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer"
                data-oid="h0.03t2"
              >
                <Card
                  className="glass-feature-card h-full text-center border-white/15 hover:border-white/25 transition-all duration-300 card-interactive relative overflow-hidden bg-black/40"
                  data-oid="2owq267"
                >
                  <CardContent className="p-8 relative z-10" data-oid="9bzl7xe">
                    <div className="relative mb-6" data-oid="xw6m9yy">
                      <div
                        className="w-20 h-20 mx-auto glass-ultra rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        data-oid="sm.8h76"
                      >
                        <step.icon
                          className="w-10 h-10 text-violet-400"
                          data-oid="kudk4gm"
                        />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-contrast-high text-caption glow-effect group-hover:scale-110 transition-transform duration-300"
                        data-oid="n45mmjh"
                      >
                        {step.step}
                      </div>
                    </div>

                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="h-n5k9:"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-body-sm text-card-secondary mb-4 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="3w1of1u"
                    >
                      {step.description}
                    </p>
                    <div
                      className="text-caption text-card-muted group-hover:text-purple-200 transition-colors duration-300"
                      data-oid="bot6vlw"
                    >
                      <Clock
                        className="w-3 h-3 inline mr-1"
                        data-oid="-i70bmr"
                      />

                      {step.duration}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Benefits Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="a172rl3"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            data-oid="nawdan6"
          >
            <div data-oid="hpknvbx">
              <motion.h2
                className="heading-section mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                data-oid="omj.kok"
              >
                <span className="block text-contrast-high" data-oid=":es_z1i">
                  Why Choose Our
                </span>
                <span
                  className="block gradient-text-vibrant"
                  data-oid="mdts1jb"
                >
                  AI Automation Services?
                </span>
              </motion.h2>
              <p
                className="text-body-xl text-contrast-medium mb-8"
                data-oid="sdq.m8j"
              >
                Our AI automation solutions help businesses achieve exceptional
                efficiency gains and cost reductions while improving customer
                experience and operational scalability.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="tzcpgtl"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-3 group cursor-pointer"
                    data-oid="3ua8jaw"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      data-oid="z6bu9.y"
                    />

                    <span
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="w0.e99."
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative" data-oid="fsuveix">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                data-oid="qylsuj3"
              >
                <Card
                  className="glass-card-enhanced p-8 border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect cursor-pointer relative overflow-hidden bg-black/40"
                  data-oid="6145.h6"
                >
                  <div className="text-center relative z-10" data-oid="r3a96-g">
                    <div
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center glow-effect group-hover:scale-110 transition-transform duration-300"
                      data-oid="tg17a_-"
                    >
                      <Bot
                        className="w-12 h-12 text-white"
                        data-oid="e3wrob:"
                      />
                    </div>
                    <h3
                      className="heading-card text-card-primary mb-4"
                      data-oid="7z1v0-5"
                    >
                      Average AI Results
                    </h3>
                    <div className="space-y-4" data-oid="i0h4i3z">
                      {resultsData.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-oid="t3va5c4"
                        >
                          <div
                            className="infographic-stat animate-stat-counter"
                            data-oid="b0wt10h"
                          >
                            {result.value}
                          </div>
                          <p
                            className="text-body text-card-secondary"
                            data-oid="h2pyab_"
                          >
                            {result.label}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Pricing Packages */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="oo4tin0"
        >
          <div className="text-center mb-16" data-oid="cwv7acd">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="-t12dp."
            >
              <span className="block text-contrast-high" data-oid="iwt9te-">
                AI Automation
              </span>
              <span className="block gradient-text-vibrant" data-oid="1z44owk">
                Packages
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="itk6w7a"
            >
              Choose the perfect AI automation package for your business
              transformation
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="l:h8f3g"
          >
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group cursor-pointer"
                data-oid="lpfdr.j"
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="sf6z765"
                  >
                    <Badge
                      className="bg-gradient-to-r from-violet-500 to-purple-600 text-contrast-high px-4 py-2 shadow-lg animate-pulse"
                      data-oid="-m56blv"
                    >
                      <Award className="w-3 h-3 mr-1" data-oid=":a:jmp9" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`glass-card-enhanced h-full transition-all duration-300 card-interactive relative overflow-hidden bg-black/40 ${
                    pkg.popular ? "border-violet-500/50" : "border-white/15"
                  } hover:border-white/25`}
                  data-oid="_6qemye"
                >
                  <CardContent className="p-8 relative z-10" data-oid="1yghj0w">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="714cl3n"
                    >
                      <h3
                        className="heading-card text-card-primary group-hover:text-purple-100 transition-colors duration-300"
                        data-oid="5wxvabh"
                      >
                        {pkg.name}
                      </h3>
                    </div>
                    <p
                      className="text-body text-card-secondary mb-6 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="89_b-yw"
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-8" data-oid="czoxsxi">
                      <span
                        className="text-4xl text-card-primary font-bold group-hover:scale-105 transition-transform duration-300 inline-block"
                        data-oid="7ii.awe"
                      >
                        {pkg.price}
                      </span>
                      <span className="text-card-muted" data-oid="_dspk5j">
                        {" "}
                        {pkg.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8" data-oid="d-nldu9">
                      {pkg.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: featureIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          data-oid=":0.a7fo"
                        >
                          <CheckCircle
                            className="w-5 h-5 text-green-400 mr-3 flex-shrink-0"
                            data-oid="7nqowup"
                          />

                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      data-oid="3i6ewjy"
                    >
                      <Button
                        className={`w-full transition-all duration-300 font-semibold relative overflow-hidden group ${
                          pkg.popular
                            ? "btn-premium bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg hover:shadow-xl text-contrast-high"
                            : "glass-strong border-white/20 hover:bg-white/20 text-card-primary"
                        }`}
                        onClick={() => onNavigate("pricing")}
                        data-oid="axeh2s4"
                      >
                        Choose Plan
                        <ArrowUpRight
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          data-oid="mdf75v3"
                        />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center glass-card-enhanced rounded-3xl p-12 relative overflow-hidden cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          data-oid="ifuzat:"
        >
          <div className="relative z-10" data-oid="b70b:88">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
              data-oid="m_nznpn"
            >
              <div className="relative" data-oid="v.zi_nj">
                <Bot
                  className="w-20 h-20 text-violet-400 glow-effect transition-all group-hover:scale-110 group-hover:rotate-6 duration-300"
                  data-oid="oy7.q-:"
                />

                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-pulse"
                  data-oid="ia1q3z7"
                >
                  <Zap
                    className="w-3 h-3 text-white"
                    data-oid="yey:jg6"
                  />
                </div>
              </div>
            </motion.div>

            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="g013rh6"
            >
              <span className="block text-contrast-high" data-oid="0ys8wq0">
                Ready to Automate
              </span>
              <span className="block gradient-text-vibrant" data-oid="4fthlb1">
                Your Business with AI?
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium mb-10 max-w-3xl mx-auto group-hover:text-contrast-high transition-colors duration-300"
              data-oid="hzn2-iu"
            >
              Let's create AI automation solutions that transform your
              operations and drive exceptional growth. Get your free AI
              consultation and custom automation strategy today.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="n.oksh."
            >
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="a7yx2zc"
              >
                <Button
                  size="lg"
                  className="btn-premium bg-gradient-to-r from-violet-500 to-purple-600 text-contrast-high btn-responsive font-bold tracking-wide shadow-2xl relative overflow-hidden group"
                  onClick={() => onNavigate("pricing")}
                  data-oid="al0osx4"
                >
                  <Calendar
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="rbv558s"
                  />
                  Start AI Consultation
                  <ArrowRight
                    className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                    data-oid="1h:uzzu"
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="tszy3h0"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 btn-responsive font-semibold tracking-wide group"
                  onClick={() => onNavigate("portfolio")}
                  data-oid="7bgo1ni"
                >
                  <BarChart3
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="c9kjm7n"
                  />
                  View AI Solutions
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Animated Background Particles */}
          <div className="absolute inset-0 opacity-30" data-oid=".m8w2:8">
            <div
              className="absolute top-10 left-10 w-2 h-2 bg-accent-blue rounded-full animate-ping"
              data-oid="6:g-:.1"
            ></div>
            <div
              className="absolute top-20 right-20 w-1 h-1 bg-accent-purple rounded-full animate-pulse"
              data-oid="wgz2r--"
            ></div>
            <div
              className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce"
              data-oid="m3yhiuw"
            ></div>
            <div
              className="absolute bottom-20 right-10 w-1 h-1 bg-accent-rose rounded-full animate-ping"
              data-oid="kjuy5wv"
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
