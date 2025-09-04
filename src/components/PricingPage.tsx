import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  CheckCircle,
  X,
  Star,
  ArrowRight,
  Crown,
  Calendar,
  ArrowUpRight,
  BarChart3,
  Eye,
  Sparkles,
  Plus,
  Minus,
} from "lucide-react";
import {
  pricingPlans,
  addOnServices,
  faqItems,
  testimonials,
  comparisonFeatures,
} from "./pricing/pricingConstants";

type Page = "home" | "portfolio" | "pricing" | "services" | "service-detail";

interface PricingPageProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 relative" data-oid="ykn39im">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0" data-oid="qia4g4u">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-float"
          data-oid="ke0rhz0"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="6ko13u6"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          data-oid="f21_d4u"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="6ewaxtr"
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="vala5f3"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-oid="xk344lt"
          >
            <Badge
              className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="tkt_f_."
            >
              <Crown className="w-5 h-5 mr-2" data-oid="popcrvh" />
              Premium Digital Marketing Plans
            </Badge>
          </motion.div>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="93or075"
          >
            <span className="block text-white" data-oid="15p5eyg">
              Choose Your
            </span>
            <span className="block gradient-text-vibrant" data-oid="jb_swek">
              Growth Strategy
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl mb-12 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="f:0bi5j"
          >
            Transform your business with our comprehensive digital marketing
            solutions. From startup acceleration to enterprise domination, we
            have the perfect plan to achieve your goals.
          </motion.p>

          {/* Enhanced Billing Toggle */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            data-oid="2kjye84"
          >
            <span
              className={`text-lg font-medium transition-colors duration-300 ${!isAnnual ? "text-white" : "text-gray-400"}`}
              data-oid="r-jut_b"
            >
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 ${
                isAnnual
                  ? "bg-gradient-to-r from-blue-500 to-purple-600"
                  : "bg-gray-600"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-oid="fnnzfi0"
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                data-oid="u7km39h"
              />
            </motion.button>
            <span
              className={`text-lg font-medium transition-colors duration-300 ${isAnnual ? "text-white" : "text-gray-400"}`}
              data-oid="q2ud96a"
            >
              Annual
            </span>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                data-oid="n0uxz__"
              >
                <Badge
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 text-sm"
                  data-oid="h8:pdpv"
                >
                  Save 25%
                </Badge>
              </motion.div>
            )}
          </motion.div>
        </motion.div>

        {/* Enhanced Pricing Cards with Smaller Icons */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-oid="d4rrf0i"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-oid="pct:27k"
          >
            {pricingPlans.map((plan, index) => {
              const price = isAnnual
                ? plan.pricing.annual
                : plan.pricing.monthly;
              const originalPrice = isAnnual
                ? plan.pricing.originalAnnual
                : plan.pricing.originalMonthly;
              const billingPeriod = isAnnual
                ? "/month (billed annually)"
                : "/month";

              return (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                  whileHover={{ filter: "brightness(1.05)" }}
                  className="relative group"
                  data-oid="-3aofy0"
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                      data-oid="61zm1oj"
                    >
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-oid="2bl4sg8"
                      >
                        <Badge
                          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 shadow-xl"
                          data-oid="spzk5lf"
                        >
                          <Star className="w-4 h-4 mr-2" data-oid=":z3mg23" />
                          Most Popular
                        </Badge>
                      </motion.div>
                    </div>
                  )}

                  <Card
                    className={`glass-card-enhanced h-full transition-all duration-500 relative overflow-hidden ${
                      plan.popular
                        ? "border-purple-500/50 hover:border-purple-400/70"
                        : "border-white/15 hover:border-white/25"
                    }`}
                    data-oid="uy9jk4."
                  >
                    <CardContent
                      className="p-8 relative z-10"
                      data-oid="s_6l1py"
                    >
                      {/* Plan Header */}
                      <div className="text-center mb-8" data-oid="--pdkak">
                        <motion.div
                          className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${plan.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                          data-oid="phkqy6f"
                        >
                          <plan.icon
                            className="w-10 h-10 text-white"
                            data-oid="lw-9ipx"
                          />
                        </motion.div>

                        <h3
                          className="heading-card text-card-primary mb-3 group-hover:text-purple-100 transition-colors duration-300"
                          data-oid="xd_dfv2"
                        >
                          {plan.name}
                        </h3>
                        <p
                          className="text-body text-card-secondary mb-6 group-hover:text-contrast-medium transition-colors duration-300"
                          data-oid="y865k0a"
                        >
                          {plan.description}
                        </p>

                        {/* Pricing */}
                        <div className="mb-6" data-oid="lc35kdr">
                          <div
                            className="flex items-center justify-center space-x-2 mb-2"
                            data-oid="-2pdv55"
                          >
                            <span
                              className="text-sm text-gray-400 line-through"
                              data-oid="zk-r9xd"
                            >
                              ${originalPrice}
                            </span>
                            <motion.span
                              className="text-4xl font-bold text-card-primary group-hover:scale-105 transition-transform duration-300"
                              whileHover={{ scale: 1.05 }}
                              data-oid="g_3xck6"
                            >
                              ${price}
                            </motion.span>
                          </div>
                          <span
                            className="text-card-muted text-sm"
                            data-oid="_-gt.ro"
                          >
                            {billingPeriod}
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6 space-y-2" data-oid="nzutiop">
                          {plan.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.8 + i * 0.1,
                              }}
                              className="text-sm text-blue-400 font-medium"
                              data-oid="8ax.4fn"
                            >
                              ✨ {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Features List with Smaller, Cleaner Icons */}
                      <ul className="space-y-4 mb-8" data-oid="ut6kv4n">
                        {plan.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center group/feature"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.0 + featureIndex * 0.05,
                            }}
                            data-oid="5xx:h8i"
                          >
                            {feature.included ? (
                              <motion.div
                                className="flex-shrink-0 mr-3 w-4 h-4 text-green-400 group-hover/feature:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2 }}
                                data-oid="zhou9di"
                              >
                                <CheckCircle
                                  className="w-4 h-4"
                                  strokeWidth={2}
                                  data-oid="71e1zcv"
                                />
                              </motion.div>
                            ) : (
                              <motion.div
                                className="flex-shrink-0 mr-3 w-4 h-4 text-gray-500 group-hover/feature:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2 }}
                                data-oid="wllkw08"
                              >
                                <X
                                  className="w-4 h-4"
                                  strokeWidth={2}
                                  data-oid="af:v-7l"
                                />
                              </motion.div>
                            )}
                            <span
                              className={`text-body text-sm font-medium transition-colors duration-300 ${
                                feature.included
                                  ? "text-white group-hover:text-green-100"
                                  : "text-gray-500 group-hover:text-gray-400"
                              }`}
                              data-oid="7u.ujtd"
                            >
                              {feature.name}
                            </span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <motion.div
                        whileHover={{ filter: "brightness(1.05)" }}
                        whileTap={{ scale: 0.98 }}
                        data-oid="qnh2a0t"
                      >
                        <Button
                          className={`w-full transition-all duration-300 font-semibold text-sm md:text-base py-3 md:py-4 relative overflow-hidden btn-premium ${
                            plan.popular
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                              : "glass-strong border-white/20 hover:bg-white/20 text-card-primary hover:text-white"
                          }`}
                          onClick={() => onNavigate("home")}
                          data-oid=":4fe926"
                        >
                          {plan.popular ? (
                            <>
                              <Crown
                                className="mr-2 h-5 w-5"
                                data-oid="d96lql0"
                              />
                              Choose {plan.name}
                              <ArrowRight
                                className="ml-2 h-5 w-5"
                                data-oid="mkiikq1"
                              />
                            </>
                          ) : (
                            <>
                              Get Started
                              <ArrowUpRight
                                className="ml-2 h-4 w-4"
                                data-oid="9l.7vft"
                              />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </CardContent>

                    {/* Background Effects */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      data-oid="wy8g12n"
                    ></div>
                    {plan.popular && (
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                        data-oid="ft:z7_h"
                      ></div>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* Enhanced Comparison Table with Smaller Icons */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="wl9jj1h"
        >
          <div className="text-center mb-16" data-oid="3udcorv">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="ghj9jyb"
            >
              <span className="block text-contrast-high" data-oid="oxxf4y7">
                Detailed Plan
              </span>
              <span className="block gradient-text-vibrant" data-oid="6pyqzc4">
                Comparison
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium max-w-3xl mx-auto"
              data-oid="ulybptx"
            >
              Compare features across all our plans to find the perfect fit for
              your business needs
            </p>
          </div>

          <div className="overflow-x-auto" data-oid="x:16tcy">
            <div className="min-w-full" data-oid="i0mw_dk">
              <Card
                className="glass-card-enhanced border-white/20"
                data-oid="6xef1:b"
              >
                <CardContent className="p-0" data-oid="qw7dhy8">
                  <div className="overflow-hidden" data-oid="c_yq673">
                    <table className="w-full" data-oid="l_zy073">
                      <thead data-oid="9b3h4n7">
                        <tr
                          className="border-b border-white/10"
                          data-oid="6twjjz0"
                        >
                          <th
                            className="text-left p-6 text-card-primary font-semibold"
                            data-oid="--sybwg"
                          >
                            Features
                          </th>
                          <th
                            className="text-center p-6 text-card-primary font-semibold"
                            data-oid="bo-oo4:"
                          >
                            Startup
                          </th>
                          <th
                            className="text-center p-6 text-card-primary font-semibold bg-purple-500/10"
                            data-oid="trfm.it"
                          >
                            Growth
                          </th>
                          <th
                            className="text-center p-6 text-card-primary font-semibold"
                            data-oid="pjeb_px"
                          >
                            Enterprise
                          </th>
                        </tr>
                      </thead>
                      <tbody data-oid="rgja.89">
                        {comparisonFeatures.map((item, index) => (
                          <motion.tr
                            key={item.feature}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            data-oid="yu5ws70"
                          >
                            <td
                              className="p-6 text-card-secondary font-medium"
                              data-oid="6b53kji"
                            >
                              {item.feature}
                            </td>
                            <td className="p-6 text-center" data-oid="rmqzqzq">
                              {typeof item.startup === "boolean" ? (
                                item.startup ? (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-green-400"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="9x9136p"
                                  >
                                    <CheckCircle
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="842f1wa"
                                    />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-gray-500"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="cmum_b5"
                                  >
                                    <X
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="o0sqnw1"
                                    />
                                  </motion.div>
                                )
                              ) : (
                                <span
                                  className="text-card-secondary font-medium"
                                  data-oid="ud8_rh9"
                                >
                                  {item.startup}
                                </span>
                              )}
                            </td>
                            <td
                              className="p-6 text-center bg-purple-500/5"
                              data-oid=":rt3d:0"
                            >
                              {typeof item.growth === "boolean" ? (
                                item.growth ? (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-green-400"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="fa.i:n."
                                  >
                                    <CheckCircle
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="w4--yb."
                                    />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-gray-500"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="dbx_mk_"
                                  >
                                    <X
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="r.dwel7"
                                    />
                                  </motion.div>
                                )
                              ) : (
                                <span
                                  className="text-card-primary font-medium"
                                  data-oid="24wvqad"
                                >
                                  {item.growth}
                                </span>
                              )}
                            </td>
                            <td className="p-6 text-center" data-oid="e91jcht">
                              {typeof item.enterprise === "boolean" ? (
                                item.enterprise ? (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-green-400"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid=":3d_bwq"
                                  >
                                    <CheckCircle
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="-vsxt3t"
                                    />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-gray-500"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="9kbf5cd"
                                  >
                                    <X
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="855r5sq"
                                    />
                                  </motion.div>
                                )
                              ) : (
                                <span
                                  className="text-card-secondary font-medium"
                                  data-oid=".ojq0qy"
                                >
                                  {item.enterprise}
                                </span>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.section>

        {/* Add-on Services */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="2hmp9xp"
        >
          <div className="text-center mb-16" data-oid="50i07qv">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="lds2w10"
            >
              <span className="block text-contrast-high" data-oid="x5285a3">
                Premium
              </span>
              <span className="block gradient-text-vibrant" data-oid="cz1jwax">
                Add-on Services
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium max-w-3xl mx-auto"
              data-oid="sga06rv"
            >
              Enhance your plan with specialized services designed to accelerate
              your growth
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="u6-s8i9"
          >
            {addOnServices.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group cursor-pointer"
                data-oid="r:7a03b"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature text-center"
                  data-oid="pu-9lea"
                >
                  <CardContent className="p-6" data-oid="nl_014a">
                    <motion.div
                      className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${addon.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="j-mm7so"
                    >
                      <addon.icon
                        className="w-7 h-7 text-white"
                        data-oid="-5mf3pe"
                      />
                    </motion.div>
                    <h3
                      className="heading-card text-card-primary mb-3 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="-0tlc8r"
                    >
                      {addon.name}
                    </h3>
                    <p
                      className="text-body-sm text-card-secondary mb-4 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="wtvzynp"
                    >
                      {addon.description}
                    </p>
                    <div
                      className="text-2xl font-bold text-card-primary mb-4 group-hover:scale-105 transition-transform duration-300"
                      data-oid="z6ds21o"
                    >
                      ${addon.price}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full glass-strong border-white/20 text-card-primary hover:bg-white/20 hover:text-white transition-all duration-300"
                      onClick={() => onNavigate("home")}
                      data-oid="21pzaj4"
                    >
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced Testimonials */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="jcbheqj"
        >
          <div className="text-center mb-16" data-oid="tkh_xa-">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="c265y0b"
            >
              <span className="block text-contrast-high" data-oid="ap3uxq3">
                Real Results from
              </span>
              <span className="block gradient-text-vibrant" data-oid="a00_pgx">
                Real Clients
              </span>
            </motion.h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="y.4td1l"
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
                data-oid="0c_lvhx"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature"
                  data-oid="9z8etl2"
                >
                  <CardContent className="p-6" data-oid="mdavwkd">
                    <div className="flex items-center mb-4" data-oid="6y825xj">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="2b-3d_y"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="eewavbz"
                      >
                        {testimonial.results}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-card-secondary mb-6 italic group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="px_.s3s"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div
                      className="flex items-center justify-between"
                      data-oid="a_8t:fm"
                    >
                      <div className="flex items-center" data-oid="::yej:y">
                        <div
                          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3"
                          data-oid="x3lo2.i"
                        >
                          {testimonial.avatar}
                        </div>
                        <div data-oid="j2zg-v0">
                          <div
                            className="font-bold text-card-primary group-hover:text-purple-100 transition-colors duration-300"
                            data-oid="wldq1p8"
                          >
                            {testimonial.name}
                          </div>
                          <div
                            className="text-card-muted text-sm"
                            data-oid="r6d413x"
                          >
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-right" data-oid="gx2-r16">
                        <div
                          className="text-card-muted text-sm"
                          data-oid="8lx8qol"
                        >
                          {testimonial.plan}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Enhanced FAQ Section */}
        <motion.section
          className="mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="z-lwyg-"
        >
          <div className="text-center mb-16" data-oid="xu_xcu.">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="8xjf67h"
            >
              <span className="block text-contrast-high" data-oid="xos_m9w">
                Frequently Asked
              </span>
              <span className="block gradient-text-vibrant" data-oid="37r841b">
                Questions
              </span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6" data-oid="3mnwsac">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="group cursor-pointer"
                data-oid=".gdajp4"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300 card-interactive"
                  data-oid="t30cn7l"
                >
                  <CardContent className="p-0" data-oid="imy5j3d">
                    <motion.button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                      whileHover={{ x: 2 }}
                      data-oid="r1:6teh"
                    >
                      <h4
                        className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300 pr-4"
                        data-oid="b4yyjqb"
                      >
                        {faq.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        data-oid="2g:-njk"
                      >
                        {openFaq === index ? (
                          <Minus
                            className="w-5 h-5 text-blue-400"
                            data-oid="bn9lehk"
                          />
                        ) : (
                          <Plus
                            className="w-5 h-5 text-blue-400"
                            data-oid="-pxyp-4"
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
                      data-oid="6-t5xg3"
                    >
                      <div className="px-6 pb-6" data-oid="d:jbohf">
                        <p
                          className="text-gray-300 leading-relaxed"
                          data-oid="mx_f8cg"
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
        </motion.section>

        {/* Enhanced CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          data-oid="h4:99ih"
        >
          <motion.div
            className="text-center glass-card-enhanced rounded-3xl p-12 relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.01 }}
            data-oid="4at:09z"
          >
            <div className="relative z-10" data-oid="s3y2b_n">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid="a0gzxdb"
              >
                <div className="relative" data-oid="deljh7g">
                  <Sparkles
                    className="w-20 h-20 text-blue-400 glow-effect group-hover:text-blue-300 transition-colors duration-300"
                    data-oid="0loqtj6"
                  />

                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-oid="jdw5rxq"
                  >
                    <Star className="w-3 h-3 text-white" data-oid="qsc8.y0" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h2
                className="heading-section mb-6 group-hover:text-blue-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                data-oid="6hvcdl4"
              >
                <span className="block text-contrast-high" data-oid="3qvct8:">
                  Ready to Start Your
                </span>
                <span
                  className="block gradient-text-vibrant"
                  data-oid="1kt6ptb"
                >
                  Growth Journey?
                </span>
              </motion.h2>

              <p
                className="text-body-xl text-contrast-medium mb-10 max-w-3xl mx-auto group-hover:text-contrast-high transition-colors duration-300"
                data-oid="5jkvk8y"
              >
                Join hundreds of businesses that have transformed their digital
                presence with our proven strategies. Get started today with a
                free consultation and custom growth plan.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="0mv0v4k"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="kmsc6jg"
                >
                  <Button
                    size="lg"
                    className="btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-contrast-high btn-responsive font-bold tracking-wide shadow-2xl relative overflow-hidden group"
                    onClick={() => onNavigate("home")}
                    data-oid="nlc31ax"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="o-7_tje"
                    />
                    Get Free Consultation
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="let9-1s"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="hrvkvm1"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 btn-responsive font-semibold tracking-wide group"
                    onClick={() => onNavigate("portfolio")}
                    data-oid="ov4y2eq"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="v32mg52"
                    />
                    View Success Stories
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Background Effects */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
              data-oid="lk8sdb."
            ></div>

            {/* Animated Particles */}
            <div
              className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              data-oid="6lnq8hk"
            >
              <motion.div
                className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full"
                animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                data-oid="j2nj5s6"
              />

              <motion.div
                className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full"
                animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                data-oid="qqp6yzc"
              />

              <motion.div
                className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ y: [0, -25, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                data-oid="ks97tor"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
