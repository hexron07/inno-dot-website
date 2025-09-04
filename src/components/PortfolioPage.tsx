import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Users,
  DollarSign,
  Filter,
  Grid3X3,
  List,
} from "lucide-react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface PortfolioPageProps {
  onNavigate: (page: Page) => void;
}

type FilterType =
  | "all"
  | "ecommerce"
  | "saas"
  | "restaurant"
  | "healthcare"
  | "fintech"
  | "education";

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filters = [
    { id: "all" as FilterType, label: "All Projects" },
    { id: "ecommerce" as FilterType, label: "E-commerce" },
    { id: "saas" as FilterType, label: "SaaS" },
    { id: "restaurant" as FilterType, label: "Restaurant" },
    { id: "healthcare" as FilterType, label: "Healthcare" },
    { id: "fintech" as FilterType, label: "FinTech" },
    { id: "education" as FilterType, label: "Education" },
  ];

  const projects = [
    {
      id: 1,
      title: "EcoShop - Sustainable E-commerce",
      client: "EcoShop Inc.",
      category: "ecommerce" as FilterType,
      description:
        "Complete digital transformation of a sustainable products e-commerce platform, including SEO, PPC, and social media marketing.",
      image:
        "https://images.unsplash.com/photo-1577333715735-8fcb0359d906?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwbW9ja3VwfGVufDF8fHx8MTc1NTMxNDgzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      results: {
        traffic: "+320%",
        revenue: "+185%",
        conversion: "+45%",
      },
      services: ["SEO", "PPC", "Social Media", "Web Design"],
      duration: "6 months",
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      id: 2,
      title: "CloudTech - SaaS Platform Launch",
      client: "CloudTech Solutions",
      category: "saas" as FilterType,
      description:
        "Full-scale digital marketing campaign for a B2B SaaS platform launch, focusing on lead generation and customer acquisition.",
      image:
        "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ24lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU1MzMxODMyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      results: {
        leads: "+450%",
        signups: "+280%",
        mrr: "+150%",
      },
      services: ["Content Marketing", "PPC", "Email Marketing", "SEO"],
      duration: "8 months",
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      id: 3,
      title: "Bella Vista - Restaurant Chain",
      client: "Bella Vista Restaurants",
      category: "restaurant" as FilterType,
      description:
        "Local SEO and social media marketing campaign for a growing restaurant chain with 12 locations.",
      image:
        "https://images.unsplash.com/photo-1682778418768-16081e4470a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwxfHx8fDE3NTUzMTA4MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      results: {
        footTraffic: "+65%",
        onlineOrders: "+220%",
        engagement: "+340%",
      },
      services: ["Local SEO", "Social Media", "PPC", "Brand Strategy"],
      duration: "4 months",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 4,
      title: "HealthFirst - Telemedicine Platform",
      client: "HealthFirst Medical",
      category: "healthcare" as FilterType,
      description:
        "Digital marketing strategy for a telemedicine platform focusing on patient acquisition and trust building.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      results: {
        patients: "+290%",
        appointments: "+180%",
        retention: "+85%",
      },
      services: ["Content Marketing", "SEO", "Social Media", "Email Marketing"],
      duration: "10 months",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 5,
      title: "PaySecure - FinTech Startup",
      client: "PaySecure Technologies",
      category: "fintech" as FilterType,
      description:
        "Brand strategy and digital marketing for a financial technology startup targeting small businesses.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      results: {
        brand: "+400%",
        users: "+230%",
        funding: "$2.5M",
      },
      services: ["Brand Strategy", "Content Marketing", "PPC", "PR"],
      duration: "12 months",
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      id: 6,
      title: "EduPlatform - Online Learning",
      client: "EduPlatform Inc.",
      category: "education" as FilterType,
      description:
        "Comprehensive digital marketing strategy for an online education platform targeting professionals.",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
      results: {
        enrollment: "+350%",
        completion: "+120%",
        revenue: "+275%",
      },
      services: ["SEO", "Content Marketing", "Social Media", "Email Marketing"],
      duration: "9 months",
      gradient: "from-teal-500/20 to-blue-500/20",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="pt-24 pb-20" data-oid="dcmm.22">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="m1rf9ru"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="e0vq8qv"
        >
          <Badge
            className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30"
            data-oid="c.4u13c"
          >
            <TrendingUp className="w-4 h-4 mr-2" data-oid="h3s_gvl" />
            Success Stories
          </Badge>

          <motion.h1
            className="heading-section mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="kwgwdd0"
          >
            <span className="block" data-oid="1wen6ve">
              Our
            </span>
            <span
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              data-oid="orxq8zt"
            >
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="ns4g4kq"
          >
            Explore our successful digital marketing campaigns and see how we've
            helped businesses across industries achieve remarkable growth and
            success.
          </motion.p>
        </motion.div>

        {/* Filters and View Toggle */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-oid="c-jyu30"
        >
          <div className="flex flex-wrap gap-2" data-oid="fa0xjqp">
            {filters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-oid="4x.ymrz"
              >
                <Button
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "glass border-white/20 text-gray-300 hover:bg-white/10"
                  } transition-all duration-300`}
                  onClick={() => setActiveFilter(filter.id)}
                  data-oid="xtkwj5b"
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2" data-oid="p1j0-s3">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="1hr0x_f"
            >
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className={
                  viewMode === "grid"
                    ? "bg-blue-500 shadow-lg"
                    : "glass border-white/20 text-gray-300"
                }
                data-oid="p3ld-_f"
              >
                <Grid3X3 className="w-4 h-4" data-oid="xgmic69" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="-95ivhr"
            >
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className={
                  viewMode === "list"
                    ? "bg-blue-500 shadow-lg"
                    : "glass border-white/20 text-gray-300"
                }
                data-oid="pasdsju"
              >
                <List className="w-4 h-4" data-oid="3ud3:3j" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait" data-oid="7eo.ypg">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={
              viewMode === "grid"
                ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : "space-y-8"
            }
            data-oid="sfilqcc"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
                data-oid="jq9y0u_"
              >
                <Card
                  className={`bg-gradient-to-br ${project.gradient} glass-card border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden`}
                  data-oid="rik6i9n"
                >
                  <div className="relative" data-oid="q-ycwr-">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      data-oid="8o.beq6"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="l_9-x92"
                    ></div>
                    <div className="absolute top-4 right-4" data-oid="c_hcxpr">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="9dz_1tm"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                          data-oid="640665t"
                        >
                          <ExternalLink
                            className="w-4 h-4"
                            data-oid="4611-mr"
                          />
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-6" data-oid="t57_9n1">
                    <div
                      className="flex items-center justify-between mb-3"
                      data-oid="76ano8-"
                    >
                      <Badge
                        className="bg-white/10 text-white border-white/20 text-xs"
                        data-oid="y79jw42"
                      >
                        {filters.find((f) => f.id === project.category)?.label}
                      </Badge>
                      <span
                        className="text-xs text-gray-400"
                        data-oid="lo6d009"
                      >
                        {project.duration}
                      </span>
                    </div>

                    <h3 className="heading-card mb-2" data-oid="1vdc2j3">
                      {project.title}
                    </h3>
                    <p
                      className="text-caption text-gray-400 mb-2"
                      data-oid="v9:b5.8"
                    >
                      Client: {project.client}
                    </p>
                    <p className="text-body-sm mb-4" data-oid="zkr4:py">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div
                      className="grid grid-cols-3 gap-2 mb-4"
                      data-oid="6.07i-9"
                    >
                      {Object.entries(project.results).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center"
                          data-oid="3_ap_9h"
                        >
                          <div
                            className="text-sm text-white font-semibold"
                            data-oid="ebi8zg:"
                          >
                            {value}
                          </div>
                          <div
                            className="text-xs text-gray-400 capitalize"
                            data-oid="62:p-ej"
                          >
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div
                      className="flex flex-wrap gap-1 mb-4"
                      data-oid="xbco-8x"
                    >
                      {project.services.map((service) => (
                        <Badge
                          key={service}
                          className="bg-white/5 text-gray-300 border-white/10 text-xs"
                          data-oid="1wa_jq9"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-oid="tqdh6tn"
                    >
                      <Button
                        variant="ghost"
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-400/50 p-4 group-hover:translate-x-1 transition-all duration-300 font-semibold"
                        data-oid=".uk27-g"
                      >
                        View Case Study{" "}
                        <ArrowRight
                          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                          data-oid="dk69p62"
                        />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Results Summary */}
        <motion.div
          className="mt-20 text-center glass-card rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          data-oid="i-fmdi6"
        >
          <motion.h2
            className="heading-section mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="kinpm1c"
          >
            Portfolio Results at a Glance
          </motion.h2>

          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
            data-oid="b1x.fer"
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-oid="-oo2c92"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center"
                data-oid="8x90-65"
              >
                <TrendingUp
                  className="w-8 h-8 text-blue-400"
                  data-oid="b-byf0r"
                />
              </div>
              <div className="infographic-stat mb-2" data-oid="wio7:_x">
                300%
              </div>
              <div className="text-muted" data-oid="icehkqt">
                Average Traffic Increase
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-oid="h92z3s6"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center"
                data-oid="-26al7p"
              >
                <DollarSign
                  className="w-8 h-8 text-green-400"
                  data-oid="jq_nqdh"
                />
              </div>
              <div className="infographic-stat mb-2" data-oid="e00fg-2">
                $50M+
              </div>
              <div className="text-muted" data-oid="wgi8.gj">
                Revenue Generated
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-oid="ubtvk_f"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center"
                data-oid="hhkb3kt"
              >
                <Users className="w-8 h-8 text-purple-400" data-oid="c776.87" />
              </div>
              <div className="infographic-stat mb-2" data-oid="8mvaytr">
                500K+
              </div>
              <div className="text-muted" data-oid=".qk:87c">
                New Customers Acquired
              </div>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-oid="sp.4uvc"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center"
                data-oid="9n20f6n"
              >
                <Filter
                  className="w-8 h-8 text-orange-400"
                  data-oid="jejf:-g"
                />
              </div>
              <div className="infographic-stat mb-2" data-oid="d0juswi">
                98%
              </div>
              <div className="text-muted" data-oid="2vfzh9y">
                Client Satisfaction
              </div>
            </motion.div>
          </div>

          <p className="text-body-xl max-w-2xl mx-auto mb-8" data-oid="4jmqca-">
            Ready to become our next success story? Let's discuss how we can
            help you achieve similar results.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="o5wlmww"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-oid="wjg7:5s"
            >
              <Button
                size="lg"
                className="btn-premium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-2xl text-white px-8 py-4 font-bold tracking-wide"
                data-oid="7_dm2qj"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" data-oid="s1a17v6" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-oid="qu.zeqo"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-white hover:bg-white/20 px-8 py-4 font-semibold tracking-wide"
                onClick={() => onNavigate("services")}
                data-oid="-7n5mzw"
              >
                View Our Services
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
