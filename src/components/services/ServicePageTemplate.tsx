import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import {
  CheckCircle,
  Calendar,
  ArrowRight,
  Eye,
  BarChart3,
  Clock,
  ArrowUpRight,
  Play,
  Star,
  Zap,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  ServiceFeature,
  ServiceProcess,
  ServicePackage,
  ServiceStat,
} from "./serviceConstants";
import { useState, useEffect } from "react";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface ServicePageTemplateProps {
  onNavigate: (page: Page, service?: string) => void;
  serviceKey: string;
  serviceData: any;
  features: ServiceFeature[];
  process: ServiceProcess[];
  benefits: string[];
  packages: ServicePackage[];
  stats: ServiceStat[];
  ctaIcon: any;
  ctaText: string;
  resultsIcon: any;
  resultsData: Array<{
    value: string;
    label: string;
  }>;
}

export default function ServicePageTemplate({
  onNavigate,
  serviceKey,
  serviceData,
  features,
  process,
  benefits,
  packages,
  stats,
  ctaIcon,
  ctaText,
  resultsIcon,
  resultsData,
}: ServicePageTemplateProps) {
  const { badge, title, description, images, bgColors, gradients } =
    serviceData;
  const CtaIcon = ctaIcon;
  const ResultsIcon = resultsIcon;
  const [selectedPackage, setSelectedPackage] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-24 pb-20 relative" data-oid="gjh_orb">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0" data-oid="kosm2m5">
        <div
          className={`absolute top-20 right-20 w-72 h-72 ${bgColors.primary} rounded-full filter blur-3xl animate-float`}
          data-oid="v1kc0dx"
        ></div>
        <div
          className={`absolute bottom-20 left-20 w-72 h-72 ${bgColors.secondary} rounded-full filter blur-3xl animate-float-delayed`}
          data-oid=":rvr9e0"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl"
          data-oid="pd4.4_l"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="x:m0b6g"
      >
        {/* Enhanced Header with Video Play Button */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid="ck-k2yz"
        >
          <Badge
            className={`mb-8 bg-gradient-to-r ${badge.colors} px-6 py-3 hover:scale-105 transition-transform duration-300 animate-shimmer`}
            data-oid="h2dwxe."
          >
            <badge.icon className="w-5 h-5 mr-2" data-oid="7-1m2-a" />
            {badge.text}
          </Badge>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="4fr:kav"
          >
            <span className="block text-contrast-high" data-oid="jvawf43">
              {title.main}
            </span>
            <span className="block gradient-text-vibrant" data-oid="6eq7s.j">
              {title.highlight}
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl mb-12 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="tysdnt7"
          >
            {description}
          </motion.p>

          {/* Enhanced Hero Images with Interactive Elements */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto"
            data-oid="j5khbex"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative group cursor-pointer card-interactive"
                onClick={() => setPlayingVideo(!playingVideo)}
                data-oid="i8._gh:"
              >
                <div
                  className="relative overflow-hidden rounded-2xl glass-card-enhanced"
                  data-oid="r9.ni7n"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    data-oid="mx8xzof"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    data-oid="r.combt"
                  ></div>

                  {/* Interactive Play Button Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="1g84:wl"
                  >
                    <div
                      className="w-16 h-16 glass-ultra rounded-full flex items-center justify-center border border-white/30 animate-pulse"
                      data-oid="la0z4hq"
                    >
                      <Play
                        className="w-8 h-8 text-contrast-high ml-1"
                        data-oid="6.pth4u"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-4 left-4 text-contrast-high"
                    data-oid="i177da7"
                  >
                    <h3 className="heading-card" data-oid="e01-b7t">
                      {image.title}
                    </h3>
                    <p
                      className="text-body-sm text-contrast-medium"
                      data-oid="ij9hg0l"
                    >
                      {image.subtitle}
                    </p>
                  </div>

                  {/* Interactive Badge */}
                  <div className="absolute top-4 right-4" data-oid="n:lxua.">
                    <Badge
                      className="glass-ultra border-white/20 text-contrast-high micro-bounce"
                      data-oid="n:rux.b"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="6as-rt:" />
                      Premium
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            data-oid="z.ro17k"
          >
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="mf8jzgh"
            >
              <Button
                size="lg"
                className={`btn-premium bg-gradient-to-r ${gradients.button} text-contrast-high px-10 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group`}
                onClick={() => onNavigate("pricing")}
                data-oid="34gbk3:"
              >
                <Calendar
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="v:3e3rg"
                />
                {ctaText}
                <ArrowRight
                  className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                  data-oid="zsqbx1-"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="u9z-0b4"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-10 py-6 font-semibold tracking-wide group"
                onClick={() => onNavigate("portfolio")}
                data-oid="l6ia6d8"
              >
                <Eye
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="8zt6e1p"
                />
                View Case Studies
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Stats Section with Counters */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="b9d66zc"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid="mvkmc7c"
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
                data-oid="-inz1cl"
              >
                <Card
                  className="glass-stat-card hover:bg-white/10 transition-all duration-300 card-stat cursor-pointer"
                  data-oid="e.wllfj"
                >
                  <CardContent
                    className="p-6 text-center relative z-10"
                    data-oid="kz1_8.q"
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      data-oid="ncnpkrl"
                    >
                      <stat.icon
                        className="w-7 h-7 icon-primary icon-stat"
                        data-oid="lpelawi"
                      />
                    </div>
                    <div
                      className="infographic-stat mb-2 animate-stat-counter text-card-primary"
                      data-oid="j4gd_ef"
                    >
                      {stat.value}
                    </div>
                    <div
                      className="heading-card text-card-secondary"
                      data-oid="ex:v5e_"
                    >
                      {stat.label}
                    </div>

                    {/* Sparkle Effect */}
                    <div
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="jf.jw8g"
                    >
                      <Sparkles
                        className="w-4 h-4 text-accent-blue animate-pulse"
                        data-oid="k3ohg44"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Features Section with Hover Effects */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="wakrqli"
        >
          <div className="text-center mb-16" data-oid="t71c:5h">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="o.g5o_a"
            >
              <span className="block text-contrast-high" data-oid="cjtqsdm">
                What's Included in Our
              </span>
              <span className="block gradient-text-vibrant" data-oid="k:3n-nr">
                {badge.text} Service
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="2i2qwla"
            >
              Comprehensive {serviceKey.replace("-", " ")} solutions designed to
              drive exceptional results
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="jgvh37:"
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
                data-oid="di_lh1a"
              >
                <Card
                  className="glass-feature-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature relative overflow-hidden"
                  data-oid="nv.pka."
                >
                  <CardContent className="p-8 relative z-10" data-oid="jd34c5r">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} rounded-2xl flex items-center justify-center mb-6 glow-effect group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      data-oid="kvl5hpt"
                    >
                      <feature.icon
                        className="w-8 h-8 text-contrast-high icon-feature"
                        data-oid="2t2nqac"
                      />
                    </div>
                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="-2_v-x6"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="ztc5ui:"
                    >
                      {feature.description}
                    </p>

                    {/* Progress Indicator */}
                    <div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="iph0yk3"
                    >
                      <TrendingUp
                        className="w-5 h-5 text-accent-blue animate-pulse"
                        data-oid="n-3j3q7"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Process Section with Interactive Timeline */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="1utl69z"
        >
          <div className="text-center mb-16" data-oid="12x610:">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="d-_4n00"
            >
              <span className="block text-contrast-high" data-oid="wgr9pt0">
                Our
              </span>
              <span className="block gradient-text-vibrant" data-oid="-ubxut.">
                {badge.text} Process
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="u6hehzr"
            >
              Strategic approach to delivering exceptional{" "}
              {serviceKey.replace("-", " ")} results
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="njya_nr"
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
                data-oid="efdi-tf"
              >
                <Card
                  className="glass-feature-card h-full text-center border-white/15 hover:border-white/25 transition-all duration-300 card-interactive relative overflow-hidden"
                  data-oid="gyi7mbu"
                >
                  <CardContent className="p-8 relative z-10" data-oid="igluaeh">
                    <div className="relative mb-6" data-oid="06jgfvu">
                      <div
                        className="w-20 h-20 mx-auto glass-ultra rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        data-oid="bg3c1qj"
                      >
                        <step.icon
                          className="w-10 h-10 icon-accent icon-feature transition-all group-hover:scale-110"
                          data-oid="4vvqen:"
                        />
                      </div>
                      <div
                        className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} rounded-full flex items-center justify-center text-contrast-high text-caption glow-effect group-hover:scale-110 transition-transform duration-300`}
                        data-oid="j4w4lib"
                      >
                        {step.step}
                      </div>
                    </div>

                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="c-9v5yq"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-body-sm text-card-secondary mb-4 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="sh1uflm"
                    >
                      {step.description}
                    </p>
                    <div
                      className="text-caption text-card-muted group-hover:text-blue-200 transition-colors duration-300"
                      data-oid="tytpbdf"
                    >
                      <Clock
                        className="w-3 h-3 inline mr-1"
                        data-oid="p.3p8_4"
                      />
                      {step.duration}
                    </div>
                  </CardContent>

                  {/* Animated Progress Line */}
                  {index < process.length - 1 && (
                    <div
                      className={`hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} transform translate-x-full -translate-y-1/2 glow-effect`}
                      data-oid="xk09ef1"
                    >
                      <div
                        className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
                        data-oid="27fvagy"
                      ></div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Benefits Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="xmen-d5"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            data-oid="z-g.syw"
          >
            <div data-oid="gsw3a9u">
              <motion.h2
                className="heading-section mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                data-oid="9o2f.dl"
              >
                <span className="block text-contrast-high" data-oid="6kw4uvw">
                  Why Choose Our
                </span>
                <span
                  className="block gradient-text-vibrant"
                  data-oid="du97opu"
                >
                  {badge.text}?
                </span>
              </motion.h2>
              <p
                className="text-body-xl text-contrast-medium mb-8"
                data-oid="40a3ypa"
              >
                Our proven {serviceKey.replace("-", " ")} strategies help
                businesses achieve exceptional results and drive sustainable
                growth in today's competitive market.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="67u52m4"
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
                    data-oid="8xeyn8v"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-success flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      data-oid="z4w53b1"
                    />
                    <span
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="w:omifw"
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative" data-oid="5pnwukn">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                data-oid="bt_3r8m"
              >
                <Card
                  className="glass-card-enhanced p-8 border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect cursor-pointer relative overflow-hidden"
                  data-oid="nsx0eja"
                >
                  <div className="text-center relative z-10" data-oid="m7i2_0d">
                    <div
                      className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} rounded-3xl flex items-center justify-center glow-effect group-hover:scale-110 transition-transform duration-300`}
                      data-oid="aawzrij"
                    >
                      <ResultsIcon
                        className="w-12 h-12 text-contrast-high"
                        data-oid="yl:272e"
                      />
                    </div>
                    <h3
                      className="heading-card text-card-primary mb-4"
                      data-oid="8iha8wt"
                    >
                      Average Results
                    </h3>
                    <div className="space-y-4" data-oid="9_21u1u">
                      {resultsData.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-oid="jeaoau1"
                        >
                          <div
                            className="infographic-stat animate-stat-counter"
                            data-oid="bskso.z"
                          >
                            {result.value}
                          </div>
                          <p
                            className="text-body text-card-secondary"
                            data-oid="_gdoxf_"
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

        {/* Enhanced Pricing Packages with Selection State */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="le-0yvp"
        >
          <div className="text-center mb-16" data-oid="cfl9f3-">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="ivr1c8q"
            >
              <span className="block text-contrast-high" data-oid="3pr.5y9">
                {badge.text}
              </span>
              <span className="block gradient-text-vibrant" data-oid="use1c85">
                Packages
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="n05mo-w"
            >
              Choose the perfect {serviceKey.replace("-", " ")} package for your
              business needs
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="z1fv-x9"
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
                onClick={() =>
                  setSelectedPackage(selectedPackage === index ? null : index)
                }
                data-oid="3e03-n5"
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="h7nn0xa"
                  >
                    <Badge
                      className={`bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} text-contrast-high px-4 py-2 shadow-lg animate-pulse`}
                      data-oid="r:l8gdn"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="fj45.5a" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <Card
                  className={`glass-card-enhanced h-full transition-all duration-300 card-interactive relative overflow-hidden ${
                    pkg.popular
                      ? `border-${gradients.accent.split("-")[1]}-500/50`
                      : selectedPackage === index
                        ? "border-blue-400/70 ring-2 ring-blue-400/30"
                        : "border-white/15"
                  } hover:border-white/25`}
                  data-oid="6ce4.k6"
                >
                  <CardContent className="p-8 relative z-10" data-oid="qdkdc6z">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="vbhnfi5"
                    >
                      <h3
                        className="heading-card text-card-primary group-hover:text-blue-100 transition-colors duration-300"
                        data-oid="j6asc46"
                      >
                        {pkg.name}
                      </h3>
                      {selectedPackage === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                          data-oid="6pva22y"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-contrast-high"
                            data-oid="yjrtp8-"
                          />
                        </motion.div>
                      )}
                    </div>
                    <p
                      className="text-body text-card-secondary mb-6 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="5c9w514"
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-8" data-oid="gmbbm1r">
                      <span
                        className="text-4xl text-card-primary font-bold group-hover:scale-105 transition-transform duration-300 inline-block"
                        data-oid="bvroqo_"
                      >
                        {pkg.price}
                      </span>
                      <span className="text-card-muted" data-oid="7m:4hk-">
                        {" "}
                        {pkg.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8" data-oid="x-lhgzm">
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
                          data-oid="cw2gx3-"
                        >
                          <CheckCircle
                            className="w-5 h-5 text-success mr-3 flex-shrink-0"
                            data-oid="va64ua2"
                          />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      data-oid="w:6qwmj"
                    >
                      <Button
                        className={`w-full transition-all duration-300 font-semibold relative overflow-hidden group ${
                          pkg.popular
                            ? `btn-premium bg-gradient-to-r ${gradients.button} shadow-lg hover:shadow-xl text-contrast-high`
                            : selectedPackage === index
                              ? "bg-blue-600 hover:bg-blue-700 text-contrast-high"
                              : "glass-strong border-white/20 hover:bg-white/20 text-card-primary"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate("pricing");
                        }}
                        data-oid="jmvy2-q"
                      >
                        {selectedPackage === index
                          ? "Selected Plan"
                          : "Choose Plan"}
                        <ArrowUpRight
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          data-oid="_q0gsx6"
                        />
                      </Button>
                    </motion.div>
                  </CardContent>

                  {/* Selection Indicator */}
                  {selectedPackage === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"
                      data-oid="b0.153_"
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced CTA Section with Interactive Elements */}
        <motion.div
          className="text-center glass-card-enhanced rounded-3xl p-12 relative overflow-hidden cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.01 }}
          data-oid="x1kps-h"
        >
          <div className="relative z-10" data-oid="w_z-nn6">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
              data-oid="_99_rta"
            >
              <div className="relative" data-oid="pj21xtd">
                <CtaIcon
                  className="w-20 h-20 icon-accent glow-effect transition-all group-hover:scale-110 group-hover:rotate-6 duration-300"
                  data-oid="5cizkte"
                />
                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-pulse"
                  data-oid="6jqdkrc"
                >
                  <Zap
                    className="w-3 h-3 text-contrast-high"
                    data-oid="_20dafv"
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
              data-oid=":x0qk-y"
            >
              <span className="block text-contrast-high" data-oid="hp-h:9i">
                Ready to Transform Your
              </span>
              <span className="block gradient-text-vibrant" data-oid="nf7w9:a">
                {title.highlight}?
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium mb-10 max-w-3xl mx-auto group-hover:text-contrast-high transition-colors duration-300"
              data-oid="g8qi51v"
            >
              Let's create a {serviceKey.replace("-", " ")} strategy that drives
              real results for your business. Get your free consultation and
              custom strategy today.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="77fgnlv"
            >
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="u6i2_dw"
              >
                <Button
                  size="lg"
                  className={`btn-premium bg-gradient-to-r ${gradients.button} text-contrast-high px-12 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("pricing");
                  }}
                  data-oid="eiti.pr"
                >
                  <Calendar
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="8n2e9c9"
                  />
                  {ctaText}
                  <ArrowRight
                    className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                    data-oid="vkthauv"
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="ev9wfv:"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-12 py-6 font-semibold tracking-wide group"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("portfolio");
                  }}
                  data-oid="l0lgvpw"
                >
                  <BarChart3
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="rnv4ip."
                  />
                  View Results
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Animated Background Particles */}
          <div className="absolute inset-0 opacity-30" data-oid="dtnkd1k">
            <div
              className="absolute top-10 left-10 w-2 h-2 bg-accent-blue rounded-full animate-ping"
              data-oid="tjsmoh8"
            ></div>
            <div
              className="absolute top-20 right-20 w-1 h-1 bg-accent-purple rounded-full animate-pulse"
              data-oid="zfosywp"
            ></div>
            <div
              className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce"
              data-oid="-yak7-a"
            ></div>
            <div
              className="absolute bottom-20 right-10 w-1 h-1 bg-accent-rose rounded-full animate-ping"
              data-oid="7dj-0l8"
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
