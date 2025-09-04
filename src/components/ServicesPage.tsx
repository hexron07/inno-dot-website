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
    <div className="pt-24 pb-20 relative" data-oid="vvu3.-f">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0" data-oid="gf4ytg1">
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-blue-600/20 rounded-full filter blur-3xl animate-float"
          data-oid="lnuqa.6"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="y3dxayd"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl"
          data-oid="dfp-20g"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="06w62g6"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="zyn6-b2"
        >
          <Badge
            className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3"
            data-oid="v15s9yo"
          >
            Digital Marketing Services
          </Badge>

          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="l0o67l4"
          >
            <span className="block text-white" data-oid="px0f336">
              Comprehensive Digital
            </span>
            <span
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              data-oid="cy51rz-"
            >
              Marketing Solutions
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="a93p3xe"
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
          data-oid="x_rc:wz"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid="m.tc-et"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
                data-oid="b-f5kpx"
              >
                <Card
                  className="glass-card border-white/10 hover:border-white/20 transition-all duration-300 card-hover-effect"
                  data-oid="3mbxwj5"
                >
                  <CardContent className="p-6" data-oid="dtb50uf">
                    <div
                      className="w-12 h-12 mx-auto mb-4 glass-ultra rounded-2xl flex items-center justify-center"
                      data-oid="2cgeg5p"
                    >
                      <stat.icon
                        className="w-6 h-6 text-blue-400"
                        data-oid=".2t-.yg"
                      />
                    </div>
                    <div
                      className="text-3xl font-bold text-white mb-2"
                      data-oid="x0sk..9"
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-300" data-oid=":xxogtv">
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
          data-oid="4r4h2k-"
        >
          <div className="text-center mb-16" data-oid="m6b4:eo">
            <motion.h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="ii99t8s"
            >
              Our{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="f4yb5l_"
              >
                Services
              </span>
            </motion.h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              data-oid="t5hwu3w"
            >
              Choose from our comprehensive range of digital marketing services
              designed to drive growth
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            data-oid="mrjax5z"
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
                data-oid="rwph5pf"
              >
                {service.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="v1_p5:w"
                  >
                    <Badge
                      className={`bg-gradient-to-r ${service.gradient} text-white px-3 py-1 shadow-lg`}
                      data-oid="l8cnd4e"
                    >
                      {service.isNew ? "🚀 New!" : "⭐ Popular"}
                    </Badge>
                  </div>
                )}

                <Card
                  className="glass-card h-full border-white/10 hover:border-white/20 transition-all duration-300 card-hover-effect cursor-pointer relative overflow-hidden"
                  data-oid="16._sip"
                >
                  <CardContent className="p-8" data-oid="dh_tosl">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      data-oid="bqe:t.d"
                    >
                      <service.icon
                        className="w-8 h-8 text-white"
                        data-oid="y4wa032"
                      />
                    </div>

                    <h3
                      className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="7y00es2"
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-gray-300 mb-6 group-hover:text-white transition-colors duration-300"
                      data-oid="r8fx9:_"
                    >
                      {service.description}
                    </p>

                    <ul className="space-y-2 mb-6" data-oid="em.2.fm">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                          data-oid="756njxi"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"
                            data-oid="7oq1hkp"
                          />

                          <span className="text-sm" data-oid="c-.855m">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div
                      className="flex items-center justify-between mb-6"
                      data-oid="vi8hf49"
                    >
                      <div
                        className="text-2xl font-bold text-white"
                        data-oid="k6e3xsj"
                      >
                        {service.price}
                      </div>
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all duration-300 group`}
                      onClick={() =>
                        onNavigate("service-detail", service.short)
                      }
                      data-oid="w_zw01l"
                    >
                      Learn More
                      <ArrowRight
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        data-oid="f_vanly"
                      />
                    </Button>
                  </CardContent>

                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                    data-oid="cp.5q_0"
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
          data-oid="iuqbya3"
        >
          <div className="relative z-10" data-oid="f62fnp-">
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              data-oid="-ia:eg1"
            >
              Ready to{" "}
              <span
                className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                data-oid="bww4.wx"
              >
                Grow Your Business?
              </span>
            </h2>
            <p
              className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
              data-oid="v2hw9:w"
            >
              Let's discuss your digital marketing needs and create a custom
              strategy that drives real results.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="5sg1b5h"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white btn-responsive text-lg font-bold shadow-2xl hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate("pricing")}
                data-oid="t51qz:-"
              >
                Get Started Today
                <ArrowRight className="ml-3 h-6 w-6" data-oid="kbdbwvz" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-white hover:bg-white/10 btn-responsive text-lg font-semibold"
                onClick={() => onNavigate("portfolio")}
                data-oid="-6x9uo1"
              >
                View Our Work
              </Button>
            </div>
          </div>

          {/* Background gradient */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            data-oid="rtrgo.e"
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
