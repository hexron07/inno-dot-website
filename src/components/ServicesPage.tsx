import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Search,
  MousePointer,
  Share2,
  Mail,
  Palette,
  Code,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Star,
  Bot,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface ServicesPageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  const services = [
    {
      title: "Search Engine Optimization",
      short: "SEO",
      description:
        "Dominate search results with our comprehensive SEO strategies. Increase organic traffic, improve rankings, and drive qualified leads to your website.",
      icon: Search,
      features: [
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO audit",
        "Link building campaigns",
      ],
      price: "From $1,200/mo",
      gradient: "from-blue-500 to-blue-600",
      popular: false,
    },
    {
      title: "Pay-Per-Click Advertising",
      short: "PPC",
      description:
        "Maximize ROI with targeted PPC campaigns across Google Ads, Facebook, and other platforms. Get immediate visibility and qualified traffic.",
      icon: MousePointer,
      features: [
        "Campaign setup & management",
        "Ad copy optimization",
        "Landing page design",
        "Performance tracking",
      ],
      price: "From $1,500/mo",
      gradient: "from-green-500 to-green-600",
      popular: true,
    },
    {
      title: "Social Media Marketing",
      short: "Social Media Marketing",
      description:
        "Build brand awareness and engage your audience across all social platforms. Create compelling content that drives engagement and conversions.",
      icon: Share2,
      features: [
        "Content creation & curation",
        "Community management",
        "Social media advertising",
        "Analytics & reporting",
      ],
      price: "From $800/mo",
      gradient: "from-pink-500 to-pink-600",
      popular: false,
    },
    {
      title: "Content Marketing",
      short: "Content Marketing",
      description:
        "Tell your brand story with strategic content that educates, engages, and converts. From blog posts to video content, we've got you covered.",
      icon: Mail,
      features: [
        "Content strategy development",
        "Blog writing & SEO",
        "Video production",
        "Content distribution",
      ],
      price: "From $1,000/mo",
      gradient: "from-purple-500 to-purple-600",
      popular: false,
    },
    {
      title: "Email Marketing",
      short: "Email Marketing",
      description:
        "Nurture leads and retain customers with personalized email campaigns. Automate your marketing and increase customer lifetime value.",
      icon: Mail,
      features: [
        "Email automation",
        "List segmentation",
        "Template design",
        "A/B testing & optimization",
      ],
      price: "From $600/mo",
      gradient: "from-orange-500 to-orange-600",
      popular: false,
    },
    {
      title: "Web Design & Development",
      short: "Web Design & Development",
      description:
        "Create stunning, high-converting websites that represent your brand perfectly. Custom designs optimized for performance and user experience.",
      icon: Code,
      features: [
        "Custom website design",
        "Mobile optimization",
        "E-commerce solutions",
        "CMS integration",
      ],
      price: "From $2,500/mo",
      gradient: "from-cyan-500 to-cyan-600",
      popular: false,
    },
    {
      title: "Brand Strategy & Design",
      short: "Brand Strategy & Design",
      description:
        "Develop a powerful brand identity that resonates with your target audience. From logo design to brand guidelines, we create memorable brands.",
      icon: Palette,
      features: [
        "Brand strategy development",
        "Logo & identity design",
        "Brand guidelines",
        "Marketing collateral",
      ],
      price: "From $1,800/mo",
      gradient: "from-indigo-500 to-indigo-600",
      popular: false,
    },
    {
      title: "AI Automation",
      short: "AI Automation",
      description:
        "Transform your business with intelligent automation. Reduce costs, increase efficiency, and scale operations with AI-powered solutions.",
      icon: Bot,
      features: [
        "Process automation",
        "AI chatbots",
        "Predictive analytics",
        "Custom AI integrations",
      ],
      price: "From $2,500/mo",
      gradient: "from-violet-500 to-violet-600",
      popular: true,
      isNew: true,
    },
  ];

  const stats = [
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: TrendingUp, value: "350%", label: "Avg. Growth" },
    { icon: Star, value: "4.9/5", label: "Client Rating" },
    { icon: CheckCircle, value: "98%", label: "Success Rate" },
  ];

  return (
    <div className="pt-24 pb-20 relative" data-oid="-5v5e6a">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0" data-oid="rvm7tm8">
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-float"
          data-oid="sgk8vhp"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="_.1gk:u"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl"
          data-oid="z6d-3_e"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="vqt_ad:"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="z5e2o3t"
        >
          <Badge
            className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3"
            data-oid="3r1nw0r"
          >
            Digital Marketing Services
          </Badge>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="u-6y3j3"
          >
            <span className="block text-white" data-oid="nl_u746">
              Comprehensive Digital
            </span>
            <span
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              data-oid="ix051aq"
            >
              Marketing Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="bl9rs27"
          >
            From SEO and PPC to AI automation and brand strategy, we offer
            complete digital marketing services to help your business grow,
            scale, and dominate your market.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="s.phk00"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid="h441e7m"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-oid="xkwgz1f"
              >
                <Card
                  className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 card-hover-effect"
                  data-oid="99s9df_"
                >
                  <CardContent className="p-6" data-oid="m2.zi6y">
                    <div
                      className="w-12 h-12 mx-auto mb-4 glass-ultra rounded-2xl flex items-center justify-center"
                      data-oid="hcfr.22"
                    >
                      <stat.icon
                        className="w-6 h-6 text-blue-400"
                        data-oid="94thsd0"
                      />
                    </div>
                    <div
                      className="text-3xl font-bold text-white mb-2"
                      data-oid="mdxo14b"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-300" data-oid="2nxbll4">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Services Grid */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="164pzrg"
        >
          <div className="text-center mb-16" data-oid=".l80npc">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="7tbt2pc"
            >
              Our{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="za-0kgy"
              >
                Services
              </span>
            </motion.h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="8s_kn0g"
            >
              Choose from our comprehensive range of digital marketing services
              designed to drive growth
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="zrs6iem"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative group"
                data-oid="k5l2am6"
              >
                {service.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="ia-c03-"
                  >
                    <Badge
                      className={`bg-gradient-to-r ${service.gradient} text-white px-3 py-1 shadow-lg`}
                      data-oid="hjm-h_o"
                    >
                      {service.isNew ? "🚀 New!" : "⭐ Popular"}
                    </Badge>
                  </div>
                )}

                <Card
                  className="glass-card h-full border-white/10 hover:border-white/20 transition-all duration-300 card-hover-effect cursor-pointer relative overflow-hidden"
                  data-oid="e.vptba"
                >
                  <CardContent className="p-8" data-oid="jtb4ca5">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      data-oid="cjttbm."
                    >
                      <service.icon
                        className="w-8 h-8 text-white"
                        data-oid="udfm.3z"
                      />
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="874-.it"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="tqa7pl9"
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6" data-oid="oeyjei.">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                          data-oid=".iyzum-"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                            data-oid="tfxm4.4"
                          />
                          <span className="text-sm" data-oid="wozv926">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="flex items-center justify-between mb-6"
                      data-oid="ck_fqor"
                    >
                      <div
                        className="text-2xl font-bold text-white"
                        data-oid="8laf40l"
                      >
                        {service.price}
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all duration-300 group`}
                      onClick={() =>
                        onNavigate("service-detail", service.short)
                      }
                      data-oid="hud689u"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="cmrdhnn"
                      />
                    </Button>
                  </CardContent>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="mylbxq2"
                  ></div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.div
          className="text-center glass-card rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-oid="o2t6w5t"
        >
          <div className="relative z-10" data-oid="vzbshyo">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid=":pqxpwl"
            >
              Ready to{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="wrfjvy0"
              >
                Grow Your Business?
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
              data-oid="xpm0h2."
            >
              Let's discuss your digital marketing needs and create a custom
              strategy that drives real results.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="0f-lz-s"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-6 text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate("pricing")}
                data-oid=":beobla"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" data-oid="krzmtxb" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-white hover:bg-white/10 px-12 py-6 text-lg font-semibold"
                onClick={() => onNavigate("portfolio")}
                data-oid="dfpjupr"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Background gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            data-oid="sh:-16v"
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
