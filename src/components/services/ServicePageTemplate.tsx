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
    <div className="pt-24 pb-20 relative" data-oid="9alo302">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0" data-oid="-gnj4.r">
        <div
          className={`absolute top-20 right-20 w-72 h-72 ${bgColors.primary} rounded-full filter blur-3xl animate-float`}
          data-oid=".v_qlg6"
        ></div>
        <div
          className={`absolute bottom-20 left-20 w-72 h-72 ${bgColors.secondary} rounded-full filter blur-3xl animate-float-delayed`}
          data-oid="8edddjf"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full filter blur-3xl"
          data-oid="z3acx_0"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="xwq18:2"
      >
        {/* Enhanced Header with Video Play Button */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-oid=".qc2l9:"
        >
          <Badge
            className={`mb-8 bg-gradient-to-r ${badge.colors} px-6 py-3 hover:scale-105 transition-transform duration-300 animate-shimmer`}
            data-oid="ev.x2us"
          >
            <badge.icon className="w-5 h-5 mr-2" data-oid="ryz3ip1" />
            {badge.text}
          </Badge>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            data-oid="lmo8:a:"
          >
            <span className="block text-contrast-high" data-oid="ipndbql">
              {title.main}
            </span>
            <span className="block gradient-text-vibrant" data-oid="vx5f:mb">
              {title.highlight}
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl mb-12 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="n4ybls-"
          >
            {description}
          </motion.p>

          {/* Enhanced Hero Images with Interactive Elements */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto"
            data-oid="xmjtei6"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                className="relative group cursor-pointer card-interactive"
                onClick={() => setPlayingVideo(!playingVideo)}
                data-oid="wo:cvpc"
              >
                <div
                  className="relative overflow-hidden rounded-2xl glass-card-enhanced"
                  data-oid="wk5k.3i"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    data-oid="nvl2.fi"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                    data-oid="l2ixpqx"
                  ></div>

                  {/* Interactive Play Button Overlay */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    data-oid="ekk9p8:"
                  >
                    <div
                      className="w-16 h-16 glass-ultra rounded-full flex items-center justify-center border border-white/30 animate-pulse"
                      data-oid="93b_6d4"
                    >
                      <Play
                        className="w-8 h-8 text-contrast-high ml-1"
                        data-oid="jmv_x.6"
                      />
                    </div>
                  </div>

                  <div
                    className="absolute bottom-4 left-4 text-contrast-high"
                    data-oid="m6g7ozk"
                  >
                    <h3 className="heading-card" data-oid="r7uh31l">
                      {image.title}
                    </h3>
                    <p
                      className="text-body-sm text-contrast-medium"
                      data-oid=".gd0ffy"
                    >
                      {image.subtitle}
                    </p>
                  </div>

                  {/* Interactive Badge */}
                  <div className="absolute top-4 right-4" data-oid="3-iknr9">
                    <Badge
                      className="glass-ultra border-white/20 text-contrast-high micro-bounce"
                      data-oid="tye86-4"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="-x.xb_8" />
                      Premium
                    </Badge>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            data-oid="i9jso42"
          >
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="kp.4d9i"
            >
              <Button
                size="lg"
                className={`btn-premium bg-gradient-to-r ${gradients.button} text-contrast-high px-10 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group`}
                onClick={() => onNavigate("pricing")}
                data-oid="dd4wu:h"
              >
                <Calendar
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="qspeel5"
                />

                {ctaText}
                <ArrowRight
                  className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                  data-oid="orhup:z"
                />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              data-oid="m8xb998"
            >
              <Button
                variant="outline"
                size="lg"
                className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-10 py-6 font-semibold tracking-wide group"
                onClick={() => onNavigate("portfolio")}
                data-oid="jwobins"
              >
                <Eye
                  className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                  data-oid="l0.9vg8"
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
          data-oid="e-91h.m"
        >
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            data-oid="4jao7l2"
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
                data-oid="5qn5j11"
              >
                <Card
                  className="glass-stat-card hover:bg-white/10 transition-all duration-300 card-stat cursor-pointer bg-black/40 border-white/15"
                  data-oid="52jci7c"
                >
                  <CardContent
                    className="p-6 text-center relative z-10"
                    data-oid="on95ul4"
                  >
                    <div
                      className="w-14 h-14 mx-auto mb-4 glass-ultra rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      data-oid="6vqft2."
                    >
                      <stat.icon
                        className="w-7 h-7 text-blue-400"
                        data-oid="9z6ggkb"
                      />
                    </div>
                    <div
                      className="infographic-stat mb-2 animate-stat-counter text-card-primary"
                      data-oid="e9w9:e9"
                    >
                      {stat.value}
                    </div>
                    <div
                      className="heading-card text-card-secondary"
                      data-oid="7w6-mlr"
                    >
                      {stat.label}
                    </div>

                    {/* Sparkle Effect */}
                    <div
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="65o3t3z"
                    >
                      <Sparkles
                        className="w-4 h-4 text-accent-blue animate-pulse"
                        data-oid="d3o_caz"
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
          data-oid="w0-0uv:"
        >
          <div className="text-center mb-16" data-oid="_43jh4x">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="ybql-hl"
            >
              <span className="block text-contrast-high" data-oid="1znz4y0">
                What's Included in Our
              </span>
              <span className="block gradient-text-vibrant" data-oid="5zynjtc">
                {badge.text} Service
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="t_gq8l_"
            >
              Comprehensive {serviceKey.replace("-", " ")} solutions designed to
              drive exceptional results
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            data-oid="b9w66r-"
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
                data-oid="af:46kl"
              >
                <Card
                  className="glass-feature-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature relative overflow-hidden bg-black/40"
                  data-oid="u-zrj0r"
                >
                  <CardContent className="p-8 relative z-10" data-oid="_-i1ixb">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} rounded-2xl flex items-center justify-center mb-6 glow-effect group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                      data-oid="n9e80kw"
                    >
                      <feature.icon
                        className="w-8 h-8 text-white"
                        data-oid="qjr_1sm"
                      />
                    </div>
                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="3czk39o"
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="rx9r19b"
                    >
                      {feature.description}
                    </p>

                    {/* Progress Indicator */}
                    <div
                      className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      data-oid="xh6jw0."
                    >
                      <TrendingUp
                        className="w-5 h-5 text-accent-blue animate-pulse"
                        data-oid="xi0d0k_"
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
          data-oid="6o9d4bp"
        >
          <div className="text-center mb-16" data-oid="5dsbv32">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="d.zs0lx"
            >
              <span className="block text-contrast-high" data-oid="o3jv.k8">
                Our
              </span>
              <span className="block gradient-text-vibrant" data-oid="bs6_ntt">
                {badge.text} Process
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="tvkhj4h"
            >
              Strategic approach to delivering exceptional{" "}
              {serviceKey.replace("-", " ")} results
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="a-olvb3"
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
                data-oid="i63fsng"
              >
                <Card
                  className="glass-feature-card h-full text-center border-white/15 hover:border-white/25 transition-all duration-300 card-interactive relative overflow-hidden bg-black/40"
                  data-oid="vk9001p"
                >
                  <CardContent className="p-8 relative z-10" data-oid="cjifpgq">
                    <div className="relative mb-6" data-oid="0k3yz14">
                      <div
                        className="w-20 h-20 mx-auto glass-ultra rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300"
                        data-oid="b5_ehii"
                      >
                        <step.icon
                          className="w-10 h-10 text-blue-400"
                          data-oid="j__-5ta"
                        />
                      </div>
                      <div
                        className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} rounded-full flex items-center justify-center text-contrast-high text-caption glow-effect group-hover:scale-110 transition-transform duration-300`}
                        data-oid="dxkkn8t"
                      >
                        {step.step}
                      </div>
                    </div>

                    <h3
                      className="heading-card text-card-primary mb-4 group-hover:text-blue-100 transition-colors duration-300"
                      data-oid="z6pcl08"
                    >
                      {step.title}
                    </h3>
                    <p
                      className="text-body-sm text-card-secondary mb-4 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="eqycsi7"
                    >
                      {step.description}
                    </p>
                    <div
                      className="text-caption text-card-muted group-hover:text-blue-200 transition-colors duration-300"
                      data-oid="w24n:fq"
                    >
                      <Clock
                        className="w-3 h-3 inline mr-1"
                        data-oid="anmz.:_"
                      />

                      {step.duration}
                    </div>
                  </CardContent>

                  {/* Animated Progress Line */}
                  {index < process.length - 1 && (
                    <div
                      className={`hidden lg:block absolute top-1/2 right-0 w-8 h-0.5 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} transform translate-x-full -translate-y-1/2 glow-effect`}
                      data-oid="ogjqjl9"
                    >
                      <div
                        className="w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer"
                        data-oid="z2prf9i"
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
          data-oid="djxi7j."
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            data-oid="p-q-n6e"
          >
            <div data-oid="wddr7a0">
              <motion.h2
                className="heading-section mb-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                data-oid="zxivc-e"
              >
                <span className="block text-contrast-high" data-oid="o5zaz6k">
                  Why Choose Our
                </span>
                <span
                  className="block gradient-text-vibrant"
                  data-oid=".30j08g"
                >
                  {badge.text}?
                </span>
              </motion.h2>
              <p
                className="text-body-xl text-contrast-medium mb-8"
                data-oid="k8n7r15"
              >
                Our proven {serviceKey.replace("-", " ")} strategies help
                businesses achieve exceptional results and drive sustainable
                growth in today's competitive market.
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                data-oid="c56msfg"
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
                    data-oid="rwp62oq"
                  >
                    <CheckCircle
                      className="w-5 h-5 text-green-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      data-oid="-2zk5l5"
                    />

                    <span
                      className="text-body text-card-secondary group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="e0mibq."
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative" data-oid="le:_d09">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                data-oid="2rmok8_"
              >
                <Card
                  className="glass-card-enhanced p-8 border-white/15 hover:border-white/25 transition-all duration-300 card-hover-effect cursor-pointer relative overflow-hidden bg-black/40"
                  data-oid="c3sdtlh"
                >
                  <div className="text-center relative z-10" data-oid="ewwsmx7">
                    <div
                      className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} rounded-3xl flex items-center justify-center glow-effect group-hover:scale-110 transition-transform duration-300`}
                      data-oid="3-gzs_u"
                    >
                      <ResultsIcon
                        className="w-12 h-12 text-white"
                        data-oid="6scirje"
                      />
                    </div>
                    <h3
                      className="heading-card text-card-primary mb-4"
                      data-oid=".-xxzdv"
                    >
                      Average Results
                    </h3>
                    <div className="space-y-4" data-oid="ngv--zc">
                      {resultsData.map((result, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          data-oid="2x6r1w5"
                        >
                          <div
                            className="infographic-stat animate-stat-counter"
                            data-oid="m14ixkz"
                          >
                            {result.value}
                          </div>
                          <p
                            className="text-body text-card-secondary"
                            data-oid="us7_azb"
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
          data-oid="rrmd:_7"
        >
          <div className="text-center mb-16" data-oid="h_dm.-p">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="uj071st"
            >
              <span className="block text-contrast-high" data-oid="gqy1hs0">
                {badge.text}
              </span>
              <span className="block gradient-text-vibrant" data-oid="u-4ufz.">
                Packages
              </span>
            </motion.h2>
            <p
              className="text-body-xl max-w-3xl mx-auto text-contrast-medium"
              data-oid="j3yihst"
            >
              Choose the perfect {serviceKey.replace("-", " ")} package for your
              business needs
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="izvv2cc"
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
                data-oid="t4u6d7l"
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    data-oid="gkozqhr"
                  >
                    <Badge
                      className={`bg-gradient-to-r ${gradients.button.split(" ")[0].replace("hover:from-blue-500", "from-blue-500")} text-contrast-high px-4 py-2 shadow-lg animate-pulse`}
                      data-oid="z9tvflf"
                    >
                      <Star className="w-3 h-3 mr-1" data-oid="c-gzrdx" />
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
                  data-oid="abb05j7"
                >
                  <CardContent className="p-8 relative z-10" data-oid="lafbjfn">
                    <div
                      className="flex items-center justify-between mb-4"
                      data-oid="vtzzsne"
                    >
                      <h3
                        className="heading-card text-card-primary group-hover:text-blue-100 transition-colors duration-300"
                        data-oid="6lm9-kh"
                      >
                        {pkg.name}
                      </h3>
                      {selectedPackage === index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                          data-oid="dvwek5u"
                        >
                          <CheckCircle
                            className="w-4 h-4 text-contrast-high"
                            data-oid="jyd9sxx"
                          />
                        </motion.div>
                      )}
                    </div>
                    <p
                      className="text-body text-card-secondary mb-6 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="-zson9g"
                    >
                      {pkg.description}
                    </p>

                    <div className="mb-8" data-oid="j81yg2j">
                      <span
                        className="text-4xl text-card-primary font-bold group-hover:scale-105 transition-transform duration-300 inline-block"
                        data-oid="i10atmd"
                      >
                        {pkg.price}
                      </span>
                      <span className="text-card-muted" data-oid="1g0z..a">
                        {" "}
                        {pkg.period}
                      </span>
                    </div>

                    <ul className="space-y-3 mb-8" data-oid="smjg-yt">
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
                          data-oid="pr_00_p"
                        >
                          <CheckCircle
                            className="w-5 h-5 text-success mr-3 flex-shrink-0"
                            data-oid="4k-w.9m"
                          />

                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      data-oid="698bmwd"
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
                        data-oid="x5j.mlp"
                      >
                        {selectedPackage === index
                          ? "Selected Plan"
                          : "Choose Plan"}
                        <ArrowUpRight
                          className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          data-oid="f-95j5s"
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
                      data-oid="jpzzwy9"
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
          data-oid="-_q4j1k"
        >
          <div className="relative z-10" data-oid="g1r2.-2">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
              data-oid="2rrbx50"
            >
              <div className="relative" data-oid="u4nb:p:">
                <CtaIcon
                  className="w-20 h-20 icon-accent glow-effect transition-all group-hover:scale-110 group-hover:rotate-6 duration-300"
                  data-oid="u2hgt_i"
                />

                <div
                  className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center animate-pulse"
                  data-oid="eds51_e"
                >
                  <Zap
                    className="w-3 h-3 text-contrast-high"
                    data-oid="wczlbw0"
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
              data-oid="_qqijl_"
            >
              <span className="block text-contrast-high" data-oid="tjovfpc">
                Ready to Transform Your
              </span>
              <span className="block gradient-text-vibrant" data-oid="ak_6av5">
                {title.highlight}?
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium mb-10 max-w-3xl mx-auto group-hover:text-contrast-high transition-colors duration-300"
              data-oid="ta-8c-9"
            >
              Let's create a {serviceKey.replace("-", " ")} strategy that drives
              real results for your business. Get your free consultation and
              custom strategy today.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-6 justify-center"
              data-oid="di7:zyy"
            >
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="_qr-qpb"
              >
                <Button
                  size="lg"
                  className={`btn-premium bg-gradient-to-r ${gradients.button} text-contrast-high btn-responsive font-bold tracking-wide shadow-2xl relative overflow-hidden group`}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("pricing");
                  }}
                  data-oid=":0-60q1"
                >
                  <Calendar
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="e-3-72e"
                  />

                  {ctaText}
                  <ArrowRight
                    className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1"
                    data-oid="yc2us95"
                  />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                data-oid="l1cxm1q"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 btn-responsive font-semibold tracking-wide group"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate("portfolio");
                  }}
                  data-oid="8szdjsh"
                >
                  <BarChart3
                    className="mr-3 h-6 w-6 transition-transform group-hover:scale-110"
                    data-oid="ps99b_o"
                  />
                  View Results
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Animated Background Particles */}
          <div className="absolute inset-0 opacity-30" data-oid="e7lze.w">
            <div
              className="absolute top-10 left-10 w-2 h-2 bg-accent-blue rounded-full animate-ping"
              data-oid="9zmyt_d"
            ></div>
            <div
              className="absolute top-20 right-20 w-1 h-1 bg-accent-purple rounded-full animate-pulse"
              data-oid="r-wxvup"
            ></div>
            <div
              className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-accent-cyan rounded-full animate-bounce"
              data-oid="o8xbhwl"
            ></div>
            <div
              className="absolute bottom-20 right-10 w-1 h-1 bg-accent-rose rounded-full animate-ping"
              data-oid="u67cpkz"
            ></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
