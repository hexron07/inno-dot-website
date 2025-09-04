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
    <div className="pt-24 pb-20 relative" data-oid="3.e_e-:">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0" data-oid="5zotvgg">
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-violet-600/20 rounded-full filter blur-3xl animate-float"
          data-oid="1hv1f.h"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="qjq_mj_"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-violet-500/5 to-purple-500/5 rounded-full filter blur-3xl"
          data-oid="i3hlo9t"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="xp:5cvy"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="vhr3oi7"
        >
          <Badge
            className="mb-8 bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 hover:scale-105 transition-transform duration-300"
            data-oid="h3e0-8g"
          >
            <Bot className="w-5 h-5 mr-2" data-oid="n2j_ppk" />
            AI Automation
          </Badge>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="u-jzd4h"
          >
            <span className="block text-contrast-high" data-oid="_.b932d">
              Transform Your Business with
            </span>
            <span className="block gradient-text-vibrant" data-oid="vth_.f4">
              AI-Powered Automation
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl mb-12 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="obsyl:2"
          >
            Revolutionize your operations with cutting-edge AI automation
            solutions. Reduce costs, increase efficiency, and scale your
            business with intelligent workflows that work around the clock.
          </motion.p>

          {/* Enhanced Hero Cards */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto"
            data-oid="ix4gfu_"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative group cursor-pointer card-interactive"
              data-oid="301a3jc"
            >
              <div
                className="glass-card-enhanced p-6 rounded-xl text-center"
                data-oid="o:d-qv1"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center"
                  data-oid="wj7_in_"
                >
                  <BrainCircuit
                    className="w-8 h-8 text-white"
                    data-oid="tpg8jyz"
                  />
                </div>
                <h3 className="heading-card mb-2" data-oid="um6l10s">
                  Smart Automation
                </h3>
                <p
                  className="text-body-sm text-contrast-medium"
                  data-oid="4t_a97z"
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
              data-oid="3dauo4o"
            >
              <div
                className="glass-card-enhanced p-6 rounded-xl text-center"
                data-oid="owv7noz"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center"
                  data-oid="p24p09r"
                >
                  <MessageSquare
                    className="w-8 h-8 text-white"
                    data-oid="476bzdu"
                  />
                </div>
                <h3 className="heading-card mb-2" data-oid=".1sk3qd">
                  AI Chatbots
                </h3>
                <p
                  className="text-body-sm text-contrast-medium"
                  data-oid="7-p4055"
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
              data-oid="-91sl3x"
            >
              <div
                className="glass-card-enhanced p-6 rounded-xl text-center"
                data-oid="-p9b_rt"
              >
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center"
                  data-oid=".yl5aw5"
                >
                  <BarChart3
                    className="w-8 h-8 text-white"
                    data-oid="hl3dt5s"
                  />
                </div>
                <h3 className="heading-card mb-2" data-oid="wegso4p">
                  Predictive Analytics
                </h3>
                <p
                  className="text-body-sm text-contrast-medium"
                  data-oid="8_lty_q"
                >
                  Data-driven insights and forecasting
                </p>
              </div>
            </motion.div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            data-oid="2zpr3g:"
          >
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="-aq-o.f"
            >
              <Button
                size="lg"
                className="btn-premium bg-gradient-to-r from-violet-500 to-purple-600 text-contrast-high px-10 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group"
                onClick={() => onNavigate("pricing")}
                data-oid="a7y-u4c"
              >
                <Calendar
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="fz6-dpq"
                />
                Start AI Consultation
                <ArrowRight
                  className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                  data-oid="3qz58dn"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="v92lmhk"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-10 py-6 font-semibold tracking-wide group"
                onClick={() => onNavigate("portfolio")}
                data-oid="6mi2n91"
              >
                <Eye
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="ag52ple"
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
          data-oid="9d1wd3:"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid="w81cvsf"
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
                data-oid="d98y_j-"
              >
                <Card
                  className="glass-stat-card hover:bg-white/10 transition-all duration-300 card-stat cursor-pointer"
                  data-oid="ju:xleo"
                >
                  <CardContent
                    className="p-6 text-center relative z-10"
                    data-oid="u0r.8nx"
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      data-oid="ahx7zm8"
                    >
                      <stat.icon
                        className="w-7 h-7 icon-primary icon-stat"
                        data-oid="sfj.izm"
                      />
                    </div>
                    <div
                      className="infographic-stat mb-2 animate-stat-counter text-card-primary"
                      data-oid="04b5k-9"
                    >
                      {stat.value}
                    </div>
                    <div
                      className="heading-card text-card-secondary"
                      data-oid="h14i1mi"
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
          data-oid="hgbyh5u"
        >
          <div className="text-center mb-16" data-oid="qrlqdi.">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="9q94qun"
            >
              <span className="block text-contrast-high" data-oid="d5hl3_q">
                AI Automation
              </span>
              <span className="block gradient-text-vibrant" data-oid="nsq90lz">
                Solutions & Features
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="7q-n4tj"
            >
              Comprehensive AI-powered automation tools to transform your
              business operations
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="xfyk.1:"
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
                data-oid="q86zt8z"
              >
                <Card
                  className="glass-feature-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature relative overflow-hidden"
                  data-oid="wbb.y8c"
                >
                  <CardContent className="p-8 relative z-10" data-oid="816ivto">
                    <div
                      className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 glow-effect group-hover:scale-110 group-hover:rotate-3 transition-all duration-300"
                      data-oid="f67-coy"
                    >
                      <feature.icon
                        className="w-8 h-8 text-contrast-high icon-feature"
                        data-oid="ndskg67"
                      />
                    </div>

                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="eyb18.q"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="vcsws_r"
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
          data-oid="ac9-:b3"
        >
          <div className="text-center mb-16" data-oid=":rprt26">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="dxy3nhb"
            >
              <span className="block text-contrast-high" data-oid="s8:.:mh">
                Our AI Automation
              </span>
              <span className="block gradient-text-vibrant" data-oid="yku0ixo">
                Implementation Process
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="um6bg0u"
            >
              Systematic approach to implementing AI automation in your business
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="y2otpeu"
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
                data-oid="f53-cw0"
              >
                <Card
                  className="glass-feature-card h-full text-center border-white/15 hover:border-white/25 transition-all duration-300 card-interactive relative overflow-hidden"
                  data-oid=".xx6wwf"
                >
                  <CardContent className="p-8 relative z-10" data-oid="i9w4h0f">
                    <div className="relative mb-6" data-oid="mn.jsja">
                      <div
                        className="w-20 h-20 mx-auto glass-ultra rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        data-oid="p6my15:"
                      >
                        <step.icon
                          className="w-10 h-10 icon-accent icon-feature transition-all group-hover:scale-110"
                          data-oid="8agqseo"
                        />
                      </div>
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-contrast-high text-caption glow-effect group-hover:scale-110 transition-transform duration-300"
                        data-oid="2x4o1so"
                      >
                        {step.step}
                      </div>
                    </div>

                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="d5iw2fe"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-body-sm text-card-secondary mb-4 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="m1o65g_"
                    >
                      {step.description}
                    </p>
                    <div
                      className="text-caption text-card-muted group-hover:text-purple-200 transition-colors duration-300"
                      data-oid="4cb_cc5"
                    >
                      <Clock
                        className="w-3 h-3 inline mr-1"
                        data-oid="nc.:p23"
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
          data-oid="8iq_3vg"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            data-oid="go62vxa"
          >
            <div data-oid="jldeobf">
              <motion.h2
                className="heading-section mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                data-oid="ys6jamt"
              >
                <span className="block text-contrast-high" data-oid="rriug_g">
                  Why Choose Our
                </span>
                <span
                  className="block gradient-text-vibrant"
                  data-oid="v7ur-rh"
                >
                  AI Automation Services?
                </span>
              </motion.h2>
              <p
                className="text-body-xl text-contrast-medium mb-8"
                data-oid="w31o7j3"
              >
                Our AI automation solutions help businesses achieve exceptional
                efficiency gains and cost reductions while improving customer
                experience and operational scalability.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="k7voj--"
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
                    data-oid="mtgs:2_"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-success flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      data-oid="b.9m_9-"
                    />
                    <span
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="moj8k1_"
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative" data-oid="osh7e4q">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                data-oid="gazolra"
              >
                <Card
                  className="glass-card-enhanced p-8 border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect cursor-pointer relative overflow-hidden"
                  data-oid="f7i6num"
                >
                  <div className="text-center relative z-10" data-oid="c5o0nch">
                    <div
                      className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center glow-effect group-hover:scale-110 transition-transform duration-300"
                      data-oid="zn.ux-o"
                    >
                      <Bot
                        className="w-12 h-12 text-contrast-high"
                        data-oid="m95vbol"
                      />
                    </div>
                    <h3
                      className="heading-card text-card-primary mb-4"
                      data-oid="5smafai"
                    >
                      Average AI Results
                    </h3>
                    <div className="space-y-4" data-oid="_bl53st">
                      {resultsData.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-oid="q8prqhp"
                        >
                          <div
                            className="infographic-stat animate-stat-counter"
                            data-oid="0v5oldw"
                          >
                            {result.value}
                          </div>
                          <p
                            className="text-body text-card-secondary"
                            data-oid="r2y7xup"
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
          data-oid="si:y17i"
        >
          <div className="text-center mb-16" data-oid="f4548ab">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="d2nqg6b"
            >
              <span className="block text-contrast-high" data-oid="lxba36e">
                AI Automation
              </span>
              <span className="block gradient-text-vibrant" data-oid="gg02y8e">
                Packages
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="flstogf"
            >
              Choose the perfect AI automation package for your business
              transformation
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="38nk-:y"
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
                data-oid="-np7-wl"
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="oku45ma"
                  >
                    <Badge
                      className="bg-gradient-to-r from-violet-500 to-purple-600 text-contrast-high px-4 py-2 shadow-lg animate-pulse"
                      data-oid="1m38dl3"
                    >
                      <Award className="w-3 h-3 mr-1" data-oid=":-gusiq" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`glass-card-enhanced h-full transition-all duration-300 card-interactive relative overflow-hidden ${
                    pkg.popular ? "border-violet-500/50" : "border-white/15"
                  } hover:border-white/25`}
                  data-oid="0l2.y7-"
                >
                  <CardContent className="p-8 relative z-10" data-oid="xnho::y">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="wk04wqo"
                    >
                      <h3
                        className="heading-card text-card-primary group-hover:text-purple-100 transition-colors duration-300"
                        data-oid="ehv.82r"
                      >
                        {pkg.name}
                      </h3>
                    </div>
                    <p
                      className="text-body text-card-secondary mb-6 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="7fqm3vw"
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-8" data-oid="xvl4gjo">
                      <span
                        className="text-4xl text-card-primary font-bold group-hover:scale-105 transition-transform duration-300 inline-block"
                        data-oid="61j738a"
                      >
                        {pkg.price}
                      </span>
                      <span className="text-card-muted" data-oid="xlf-ehg">
                        {" "}
                        {pkg.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8" data-oid=":iryh0w">
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
                          data-oid="b-m-v8d"
                        >
                          <CheckCircle
                            className="w-5 h-5 text-success mr-3 flex-shrink-0"
                            data-oid="t_xotpj"
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      data-oid="dm6h-ea"
                    >
                      <Button
                        className={`w-full transition-all duration-300 font-semibold relative overflow-hidden group ${
                          pkg.popular
                            ? "btn-premium bg-gradient-to-r from-violet-500 to-purple-600 shadow-lg hover:shadow-xl text-contrast-high"
                            : "glass-strong border-white/20 hover:bg-white/20 text-card-primary"
                        }`}
                        onClick={() => onNavigate("pricing")}
                        data-oid="-ghbsez"
                      >
                        Choose Plan
                        <ArrowUpRight
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          data-oid="c0i_vt9"
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
          data-oid="ae2bldy"
        >
          <div className="relative z-10" data-oid="q93p9g:">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
              data-oid="c:ovowp"
            >
              <div className="relative" data-oid="w-xo-gw">
                <Bot
                  className="w-20 h-20 icon-accent glow-effect transition-all group-hover:scale-110 group-hover:rotate-6 duration-300"
                  data-oid="zg3c4ez"
                />
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-pulse"
                  data-oid="kbx2j7m"
                >
                  <Zap
                    className="w-3 h-3 text-contrast-high"
                    data-oid="7kvg.ec"
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
              data-oid="pkgqs2b"
            >
              <span className="block text-contrast-high" data-oid="g:tx8bt">
                Ready to Automate
              </span>
              <span className="block gradient-text-vibrant" data-oid="5gfz4xu">
                Your Business with AI?
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium mb-10 max-w-3xl mx-auto group-hover:text-contrast-high transition-colors duration-300"
              data-oid="m44g46a"
            >
              Let's create AI automation solutions that transform your
              operations and drive exceptional growth. Get your free AI
              consultation and custom automation strategy today.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="ulz.nse"
            >
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="c9.o:t4"
              >
                <Button
                  size="lg"
                  className="btn-premium bg-gradient-to-r from-violet-500 to-purple-600 text-contrast-high px-12 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group"
                  onClick={() => onNavigate("pricing")}
                  data-oid="ij_2gzs"
                >
                  <Calendar
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="lzncl.f"
                  />
                  Start AI Consultation
                  <ArrowRight
                    className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                    data-oid="dzbg80s"
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="u7x7dlv"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-12 py-6 font-semibold tracking-wide group"
                  onClick={() => onNavigate("portfolio")}
                  data-oid="tkvc3iz"
                >
                  <BarChart3
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="plyav3n"
                  />
                  View AI Solutions
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Animated Background Particles */}
          <div className="absolute inset-0 opacity-30" data-oid="l0h5t0b">
            <div
              className="absolute top-10 left-10 w-2 h-2 bg-accent-blue rounded-full animate-ping"
              data-oid="awm2bi."
            ></div>
            <div
              className="absolute top-20 right-20 w-1 h-1 bg-accent-purple rounded-full animate-pulse"
              data-oid="6nc_n81"
            ></div>
            <div
              className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce"
              data-oid="-glrb4g"
            ></div>
            <div
              className="absolute bottom-20 right-10 w-1 h-1 bg-accent-rose rounded-full animate-ping"
              data-oid="s5il354"
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
