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
    <div className="pt-24 pb-20" data-oid="8-pm0t:">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="sm36x26"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="i7l39_g"
        >
          <Badge
            className="mb-6 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border-blue-500/30"
            data-oid="h6vv.np"
          >
            <TrendingUp className="w-4 h-4 mr-2" data-oid="gq4sk8g" />
            Success Stories
          </Badge>

          <motion.h1
            className="heading-section mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="kia1xsd"
          >
            <span className="block" data-oid="_dsssyz">
              Our
            </span>
            <span
              className="block bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent"
              data-oid="svltanz"
            >
              Portfolio
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="8cxqv.w"
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
          data-oid="3cpq:fp"
        >
          <div className="flex flex-wrap gap-2" data-oid="iob72v.">
            {filters.map((filter) => (
              <motion.div
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-oid="r7r8a8-"
              >
                <Button
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  className={`${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg hover:shadow-xl"
                      : "glass border-white/20 text-gray-300 hover:bg-white/10"
                  } transition-all duration-300`}
                  onClick={() => setActiveFilter(filter.id)}
                  data-oid="uzjrsrg"
                >
                  {filter.label}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-2" data-oid="2qtm6i9">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="kga7fkg"
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
                data-oid="wjdksro"
              >
                <Grid3X3 className="w-4 h-4" data-oid="uhj6-mq" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="r3ct58p"
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
                data-oid="4b:oblv"
              >
                <List className="w-4 h-4" data-oid="xm9bu.-" />
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <AnimatePresence mode="wait" data-oid="crxjdrz">
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
            data-oid="v_-use:"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
                data-oid="0ju8tcu"
              >
                <Card
                  className={`bg-gradient-to-br ${project.gradient} glass-card border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden`}
                  data-oid="77g7jfr"
                >
                  <div className="relative" data-oid="sjjfkcq">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      data-oid="z1h:cd6"
                    />

                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                      data-oid="he3ov9w"
                    ></div>
                    <div className="absolute top-4 right-4" data-oid="r7je3iq">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        data-oid="m--1s:n"
                      >
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20"
                          data-oid="_-2r8y_"
                        >
                          <ExternalLink
                            className="w-4 h-4"
                            data-oid="n5i0fhi"
                          />
                        </Button>
                      </motion.div>
                    </div>
                  </div>

                  <CardContent className="p-6" data-oid="e0z5dib">
                    <div
                      className="flex items-center justify-between mb-3"
                      data-oid="d-5dpdc"
                    >
                      <Badge
                        className="bg-white/10 text-white border-white/20 text-xs"
                        data-oid="kmq9hqv"
                      >
                        {filters.find((f) => f.id === project.category)?.label}
                      </Badge>
                      <span
                        className="text-xs text-gray-400"
                        data-oid="26tiw5."
                      >
                        {project.duration}
                      </span>
                    </div>

                    <h3 className="heading-card mb-2" data-oid="__ezfzj">
                      {project.title}
                    </h3>
                    <p
                      className="text-caption text-gray-400 mb-2"
                      data-oid="xx:b_86"
                    >
                      Client: {project.client}
                    </p>
                    <p className="text-body-sm mb-4" data-oid="i3yv8zl">
                      {project.description}
                    </p>

                    {/* Results */}
                    <div
                      className="grid grid-cols-3 gap-2 mb-4"
                      data-oid="xj4m2-k"
                    >
                      {Object.entries(project.results).map(([key, value]) => (
                        <div
                          key={key}
                          className="text-center"
                          data-oid="x8r.k2x"
                        >
                          <div
                            className="text-sm text-white font-semibold"
                            data-oid="e2qz7c3"
                          >
                            {value}
                          </div>
                          <div
                            className="text-xs text-gray-400 capitalize"
                            data-oid="gsf6vip"
                          >
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Services */}
                    <div
                      className="flex flex-wrap gap-1 mb-4"
                      data-oid="79q4s1o"
                    >
                      {project.services.map((service) => (
                        <Badge
                          key={service}
                          className="bg-white/5 text-gray-300 border-white/10 text-xs"
                          data-oid="t:r7vyi"
                        >
                          {service}
                        </Badge>
                      ))}
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-oid="i7oieuo"
                    >
                      <Button
                        variant="ghost"
                        className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-500/30 text-blue-400 hover:text-blue-300 border border-blue-500/30 hover:border-blue-400/50 p-4 group-hover:translate-x-1 transition-all duration-300 font-semibold"
                        data-oid="507-7r-"
                      >
                        View Case Study{" "}
                        <ArrowRight
                          className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
                          data-oid="o.e4_om"
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
          data-oid="v6i4yzl"
        >
          <motion.h2
            className="heading-section mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="1bq:n9i"
          >
            Portfolio Results at a Glance
          </motion.h2>

          <div
            className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8"
            data-oid="8gquv.e"
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              data-oid="35eiiv2"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center"
                data-oid="62zil59"
              >
                <TrendingUp
                  className="w-8 h-8 text-blue-400"
                  data-oid="-k0uczi"
                />
              </div>
              <div className="infographic-stat mb-2" data-oid="x_6nwou">
                300%
              </div>
              <div className="text-muted" data-oid="f022b5t">
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
              data-oid="4r:-0td"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center"
                data-oid="28si7o2"
              >
                <DollarSign
                  className="w-8 h-8 text-green-400"
                  data-oid="0n9bjx1"
                />
              </div>
              <div className="infographic-stat mb-2" data-oid="946wrmm">
                $50M+
              </div>
              <div className="text-muted" data-oid="vseouum">
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
              data-oid="x_royq0"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center"
                data-oid="5--5pl:"
              >
                <Users className="w-8 h-8 text-purple-400" data-oid="5_.tv4g" />
              </div>
              <div className="infographic-stat mb-2" data-oid="_ywg84:">
                500K+
              </div>
              <div className="text-muted" data-oid="91uggjl">
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
              data-oid="qqz6y2k"
            >
              <div
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full flex items-center justify-center"
                data-oid="5rmjxud"
              >
                <Filter
                  className="w-8 h-8 text-orange-400"
                  data-oid="qllv1.r"
                />
              </div>
              <div className="infographic-stat mb-2" data-oid="e6vudma">
                98%
              </div>
              <div className="text-muted" data-oid="jg9lcpo">
                Client Satisfaction
              </div>
            </motion.div>
          </div>

          <p className="text-body-xl max-w-2xl mx-auto mb-8" data-oid="6j6mtsg">
            Ready to become our next success story? Let's discuss how we can
            help you achieve similar results.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            data-oid="oe4xsvi"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-oid="46gtzt9"
            >
              <Button
                size="lg"
                className="btn-premium bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg hover:shadow-2xl text-white px-8 py-4 font-bold tracking-wide"
                data-oid="rhya4ut"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" data-oid="_fa9za7" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              data-oid="ya:by2-"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass border-white/20 text-white hover:bg-white/20 px-8 py-4 font-semibold tracking-wide"
                onClick={() => onNavigate("services")}
                data-oid="9qlr9qv"
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
