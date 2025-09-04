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
    <div className="pt-20 md:pt-24 pb-12 md:pb-20 relative" data-oid="rem.c.d">
      {/* Enhanced Background */}
      <div className="fixed inset-0 z-0" data-oid="whgp58y">
        <div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-float"
          data-oid="80zswhr"
        ></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/15 rounded-full filter blur-3xl animate-float-delayed"
          data-oid="cyd9gx8"
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-full filter blur-3xl"
          data-oid="ahx:f-w"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-oid="-5.-6j1"
      >
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          data-oid="414jtxv"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-oid="k4fo813"
          >
            <Badge
              className="mb-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 text-lg font-semibold"
              data-oid="t5add6b"
            >
              <Crown className="w-5 h-5 mr-2" data-oid="4ev:0-h" />
              Premium Digital Marketing Plans
            </Badge>
          </motion.div>

          <motion.h1
            className="heading-hero mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            data-oid="q_2nsur"
          >
            <span className="block text-white" data-oid="vemtfh.">
              Choose Your
            </span>
            <span className="block gradient-text-vibrant" data-oid="2gns9mb">
              Growth Strategy
            </span>
          </motion.h1>

          <motion.p
            className="text-body-xl mb-12 max-w-4xl mx-auto text-contrast-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-oid="90.h3s7"
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
            data-oid="c:5:z89"
          >
            <span
              className={`text-lg font-medium transition-colors duration-300 ${!isAnnual ? "text-white" : "text-gray-400"}`}
              data-oid="tusqke5"
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
              data-oid="janoj:-"
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
                animate={{ x: isAnnual ? 32 : 4 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                data-oid=":gvzoj3"
              />
            </motion.button>
            <span
              className={`text-lg font-medium transition-colors duration-300 ${isAnnual ? "text-white" : "text-gray-400"}`}
              data-oid="psq6mo3"
            >
              Annual
            </span>
            {isAnnual && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                data-oid="06.5_cw"
              >
                <Badge
                  className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 text-sm"
                  data-oid="e143rsg"
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
          data-oid="n_3ndes"
        >
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            data-oid="xmm3z-j"
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
                  data-oid="6p1h-s."
                >
                  {plan.popular && (
                    <div
                      className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10"
                      data-oid="5:0ap:q"
                    >
                      <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        data-oid="_5vn05d"
                      >
                        <Badge
                          className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 shadow-xl"
                          data-oid="pjs-zei"
                        >
                          <Star className="w-4 h-4 mr-2" data-oid="wyd1z98" />
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
                    data-oid="fby:cmu"
                  >
                    <CardContent
                      className="p-8 relative z-10"
                      data-oid="f95xvzv"
                    >
                      {/* Plan Header */}
                      <div className="text-center mb-8" data-oid="01xz1jd">
                        <motion.div
                          className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${plan.gradient} rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          whileHover={{ rotate: 5 }}
                          data-oid="e99uxfm"
                        >
                          <plan.icon
                            className="w-10 h-10 text-white"
                            data-oid="e5fa-cz"
                          />
                        </motion.div>

                        <h3
                          className="heading-card text-card-primary mb-3 group-hover:text-purple-100 transition-colors duration-300"
                          data-oid="x-y-16o"
                        >
                          {plan.name}
                        </h3>
                        <p
                          className="text-body text-card-secondary mb-6 group-hover:text-contrast-medium transition-colors duration-300"
                          data-oid="nxot4k5"
                        >
                          {plan.description}
                        </p>

                        {/* Pricing */}
                        <div className="mb-6" data-oid=".hu4a0:">
                          <div
                            className="flex items-center justify-center space-x-2 mb-2"
                            data-oid="3ac:.5j"
                          >
                            <span
                              className="text-sm text-gray-400 line-through"
                              data-oid=":e:eda1"
                            >
                              ${originalPrice}
                            </span>
                            <motion.span
                              className="text-4xl font-bold text-card-primary group-hover:scale-105 transition-transform duration-300"
                              whileHover={{ scale: 1.05 }}
                              data-oid="ae36xcf"
                            >
                              ${price}
                            </motion.span>
                          </div>
                          <span
                            className="text-card-muted text-sm"
                            data-oid="5g-69b8"
                          >
                            {billingPeriod}
                          </span>
                        </div>

                        {/* Highlights */}
                        <div className="mb-6 space-y-2" data-oid="lnm5_pl">
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
                              data-oid="ucy3d:9"
                            >
                              ✨ {highlight}
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Features List with Smaller, Cleaner Icons */}
                      <ul className="space-y-4 mb-8" data-oid="7_-42tv">
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
                            data-oid="9z-dxy-"
                          >
                            {feature.included ? (
                              <motion.div
                                className="flex-shrink-0 mr-3 w-4 h-4 text-green-400 group-hover/feature:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2 }}
                                data-oid="m0vap1y"
                              >
                                <CheckCircle
                                  className="w-4 h-4"
                                  strokeWidth={2}
                                  data-oid="v91lt3b"
                                />
                              </motion.div>
                            ) : (
                              <motion.div
                                className="flex-shrink-0 mr-3 w-4 h-4 text-gray-500 group-hover/feature:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.2 }}
                                data-oid="pjqu1.n"
                              >
                                <X
                                  className="w-4 h-4"
                                  strokeWidth={2}
                                  data-oid="p_mr-sq"
                                />
                              </motion.div>
                            )}
                            <span
                              className={`text-body text-sm font-medium transition-colors duration-300 ${
                                feature.included
                                  ? "text-white group-hover:text-green-100"
                                  : "text-gray-500 group-hover:text-gray-400"
                              }`}
                              data-oid=".t60nhv"
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
                        data-oid="_ov__m_"
                      >
                        <Button
                          className={`w-full transition-all duration-300 font-semibold text-sm md:text-base py-3 md:py-4 relative overflow-hidden btn-premium ${
                            plan.popular
                              ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                              : "glass-strong border-white/20 hover:bg-white/20 text-card-primary hover:text-white"
                          }`}
                          onClick={() => onNavigate("home")}
                          data-oid="0d3yukc"
                        >
                          {plan.popular ? (
                            <>
                              <Crown
                                className="mr-2 h-5 w-5"
                                data-oid="gh3l455"
                              />
                              Choose {plan.name}
                              <ArrowRight
                                className="ml-2 h-5 w-5"
                                data-oid="t124ezs"
                              />
                            </>
                          ) : (
                            <>
                              Get Started
                              <ArrowUpRight
                                className="ml-2 h-4 w-4"
                                data-oid="::nwwxz"
                              />
                            </>
                          )}
                        </Button>
                      </motion.div>
                    </CardContent>

                    {/* Background Effects */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      data-oid="h4pnlzg"
                    ></div>
                    {plan.popular && (
                      <div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10"
                        data-oid=".l5ln1."
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
          data-oid="gz16df4"
        >
          <div className="text-center mb-16" data-oid="wcs10du">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="o05i_jn"
            >
              <span className="block text-contrast-high" data-oid=".-_tudx">
                Detailed Plan
              </span>
              <span className="block gradient-text-vibrant" data-oid="hflfv97">
                Comparison
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium max-w-3xl mx-auto"
              data-oid="aozoir8"
            >
              Compare features across all our plans to find the perfect fit for
              your business needs
            </p>
          </div>

          <div className="overflow-x-auto" data-oid="1gq7-3k">
            <div className="min-w-full" data-oid="ks0-8_g">
              <Card
                className="glass-card-enhanced border-white/20"
                data-oid="f7kq9-y"
              >
                <CardContent className="p-0" data-oid="k.0u_pe">
                  <div className="overflow-hidden" data-oid="akepp43">
                    <table className="w-full" data-oid="-2jj1qq">
                      <thead data-oid="ad_8:y_">
                        <tr
                          className="border-b border-white/10"
                          data-oid="do2bzn2"
                        >
                          <th
                            className="text-left p-6 text-card-primary font-semibold"
                            data-oid="im6nk9k"
                          >
                            Features
                          </th>
                          <th
                            className="text-center p-6 text-card-primary font-semibold"
                            data-oid="b0mg805"
                          >
                            Startup
                          </th>
                          <th
                            className="text-center p-6 text-card-primary font-semibold bg-purple-500/10"
                            data-oid="32yq:e5"
                          >
                            Growth
                          </th>
                          <th
                            className="text-center p-6 text-card-primary font-semibold"
                            data-oid="hi0acsr"
                          >
                            Enterprise
                          </th>
                        </tr>
                      </thead>
                      <tbody data-oid="tc6d__w">
                        {comparisonFeatures.map((item, index) => (
                          <motion.tr
                            key={item.feature}
                            className="border-b border-white/5 hover:bg-white/5 transition-colors duration-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            data-oid="dujzgnf"
                          >
                            <td
                              className="p-6 text-card-secondary font-medium"
                              data-oid="_j8u30n"
                            >
                              {item.feature}
                            </td>
                            <td className="p-6 text-center" data-oid=":_jxahu">
                              {typeof item.startup === "boolean" ? (
                                item.startup ? (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-green-400"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="6gq:2pv"
                                  >
                                    <CheckCircle
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="5.rjmav"
                                    />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-gray-500"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="4e.17.w"
                                  >
                                    <X
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="dznl-ql"
                                    />
                                  </motion.div>
                                )
                              ) : (
                                <span
                                  className="text-card-secondary font-medium"
                                  data-oid="ti3.uu1"
                                >
                                  {item.startup}
                                </span>
                              )}
                            </td>
                            <td
                              className="p-6 text-center bg-purple-500/5"
                              data-oid="f0a9phs"
                            >
                              {typeof item.growth === "boolean" ? (
                                item.growth ? (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-green-400"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid=":ejy:p:"
                                  >
                                    <CheckCircle
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="fr8bgde"
                                    />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-gray-500"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="3dppjyw"
                                  >
                                    <X
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="xvt-kz7"
                                    />
                                  </motion.div>
                                )
                              ) : (
                                <span
                                  className="text-card-primary font-medium"
                                  data-oid="3g7qf:c"
                                >
                                  {item.growth}
                                </span>
                              )}
                            </td>
                            <td className="p-6 text-center" data-oid="bptknfq">
                              {typeof item.enterprise === "boolean" ? (
                                item.enterprise ? (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-green-400"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="sn4h6ho"
                                  >
                                    <CheckCircle
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="9--vdot"
                                    />
                                  </motion.div>
                                ) : (
                                  <motion.div
                                    className="inline-flex w-4 h-4 text-gray-500"
                                    whileHover={{ scale: 1.2 }}
                                    data-oid="k9y75bm"
                                  >
                                    <X
                                      className="w-4 h-4"
                                      strokeWidth={2}
                                      data-oid="4w4y8.y"
                                    />
                                  </motion.div>
                                )
                              ) : (
                                <span
                                  className="text-card-secondary font-medium"
                                  data-oid="qkwlzo:"
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
          data-oid="ri31e9l"
        >
          <div className="text-center mb-16" data-oid="ptrd-ys">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="601qt59"
            >
              <span className="block text-contrast-high" data-oid="4hgz6x.">
                Premium
              </span>
              <span className="block gradient-text-vibrant" data-oid="jy-ujnk">
                Add-on Services
              </span>
            </motion.h2>
            <p
              className="text-body-xl text-contrast-medium max-w-3xl mx-auto"
              data-oid="e_l22ak"
            >
              Enhance your plan with specialized services designed to accelerate
              your growth
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            data-oid="6:y23kh"
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
                data-oid="7vok.f-"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature text-center"
                  data-oid="r0r645l"
                >
                  <CardContent className="p-6" data-oid="548hjjd">
                    <motion.div
                      className={`w-14 h-14 mx-auto mb-4 bg-gradient-to-r ${addon.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                      data-oid="roth:6m"
                    >
                      <addon.icon
                        className="w-7 h-7 text-white"
                        data-oid="6f..k__"
                      />
                    </motion.div>
                    <h3
                      className="heading-card text-card-primary mb-3 group-hover:text-purple-100 transition-colors duration-300"
                      data-oid="madhedj"
                    >
                      {addon.name}
                    </h3>
                    <p
                      className="text-body-sm text-card-secondary mb-4 group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="d22bges"
                    >
                      {addon.description}
                    </p>
                    <div
                      className="text-2xl font-bold text-card-primary mb-4 group-hover:scale-105 transition-transform duration-300"
                      data-oid="jn7jj_o"
                    >
                      ${addon.price}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full glass-strong border-white/20 text-card-primary hover:bg-white/20 hover:text-white transition-all duration-300"
                      onClick={() => onNavigate("home")}
                      data-oid="q0wke9b"
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
          data-oid="l5hu8_h"
        >
          <div className="text-center mb-16" data-oid="fr18rkz">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="lm50ev5"
            >
              <span className="block text-contrast-high" data-oid="lvi9k.1">
                Real Results from
              </span>
              <span className="block gradient-text-vibrant" data-oid="n-k3.yt">
                Real Clients
              </span>
            </motion.h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            data-oid="wjx1e9s"
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
                data-oid="pyfmlfo"
              >
                <Card
                  className="glass-card h-full border-white/15 hover:border-white/25 transition-all duration-300 card-feature"
                  data-oid="tun1q4b"
                >
                  <CardContent className="p-6" data-oid="69yux3c">
                    <div className="flex items-center mb-4" data-oid="grzjmzl">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          data-oid="kgb7n9n"
                        />
                      ))}
                      <Badge
                        className="ml-auto bg-green-500/20 text-green-400 px-2 py-1 text-xs"
                        data-oid="4kin5pd"
                      >
                        {testimonial.results}
                      </Badge>
                    </div>

                    <blockquote
                      className="text-card-secondary mb-6 italic group-hover:text-contrast-medium transition-colors duration-300"
                      data-oid="sph90qf"
                    >
                      "{testimonial.text}"
                    </blockquote>

                    <div
                      className="flex items-center justify-between"
                      data-oid="bxzq6zs"
                    >
                      <div className="flex items-center" data-oid="3troiet">
                        <div
                          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-3"
                          data-oid="nh3k-cc"
                        >
                          {testimonial.avatar}
                        </div>
                        <div data-oid="9dbnv0-">
                          <div
                            className="font-bold text-card-primary group-hover:text-purple-100 transition-colors duration-300"
                            data-oid="4_b96f."
                          >
                            {testimonial.name}
                          </div>
                          <div
                            className="text-card-muted text-sm"
                            data-oid="22z277j"
                          >
                            {testimonial.company}
                          </div>
                        </div>
                      </div>
                      <div className="text-right" data-oid="nzpagi8">
                        <div
                          className="text-card-muted text-sm"
                          data-oid="y4maw78"
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
          data-oid="6uw.l6s"
        >
          <div className="text-center mb-16" data-oid="w:6lp-4">
            <motion.h2
              className="heading-section mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              data-oid="o8cx-5-"
            >
              <span className="block text-contrast-high" data-oid="dw5zmom">
                Frequently Asked
              </span>
              <span className="block gradient-text-vibrant" data-oid="2wdyh7_">
                Questions
              </span>
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6" data-oid="aobgtuf">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01 }}
                className="group cursor-pointer"
                data-oid="8uidis6"
              >
                <Card
                  className="glass-card border-white/15 hover:border-white/25 transition-all duration-300 card-interactive"
                  data-oid="zc1jd2b"
                >
                  <CardContent className="p-0" data-oid="00gfhzh">
                    <motion.button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                      whileHover={{ x: 2 }}
                      data-oid="lsbgzqi"
                    >
                      <h4
                        className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300 pr-4"
                        data-oid="ofn-fk3"
                      >
                        {faq.question}
                      </h4>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                        data-oid="t1tckqm"
                      >
                        {openFaq === index ? (
                          <Minus
                            className="w-5 h-5 text-blue-400"
                            data-oid="kvy096y"
                          />
                        ) : (
                          <Plus
                            className="w-5 h-5 text-blue-400"
                            data-oid="w9bfe-g"
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
                      data-oid="ystuuo-"
                    >
                      <div className="px-6 pb-6" data-oid="v8_-_2f">
                        <p
                          className="text-gray-300 leading-relaxed"
                          data-oid="-justs3"
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
          data-oid="7_.2wdg"
        >
          <motion.div
            className="text-center glass-card-enhanced rounded-3xl p-12 relative overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.01 }}
            data-oid="_b23k38"
          >
            <div className="relative z-10" data-oid="6hvzzmm">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-8"
                data-oid=".-:0_c7"
              >
                <div className="relative" data-oid="fjrbc_:">
                  <Sparkles
                    className="w-20 h-20 text-blue-400 glow-effect group-hover:text-blue-300 transition-colors duration-300"
                    data-oid="cpe-3za"
                  />
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    data-oid="7qe24ll"
                  >
                    <Star className="w-3 h-3 text-white" data-oid="pbtures" />
                  </motion.div>
                </div>
              </motion.div>

              <motion.h2
                className="heading-section mb-6 group-hover:text-blue-100 transition-colors duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                data-oid="78k4dsp"
              >
                <span className="block text-contrast-high" data-oid="u1vwk4f">
                  Ready to Start Your
                </span>
                <span
                  className="block gradient-text-vibrant"
                  data-oid="nogygik"
                >
                  Growth Journey?
                </span>
              </motion.h2>

              <p
                className="text-body-xl text-contrast-medium mb-10 max-w-3xl mx-auto group-hover:text-contrast-high transition-colors duration-300"
                data-oid="d_6xtnk"
              >
                Join hundreds of businesses that have transformed their digital
                presence with our proven strategies. Get started today with a
                free consultation and custom growth plan.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                data-oid="kd4fn:d"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="._fyvjj"
                >
                  <Button
                    size="lg"
                    className="btn-premium bg-gradient-to-r from-blue-500 to-purple-600 text-contrast-high px-12 py-6 font-bold tracking-wide shadow-2xl relative overflow-hidden group"
                    onClick={() => onNavigate("home")}
                    data-oid="tpbe2fk"
                  >
                    <Calendar
                      className="mr-3 h-6 w-6 group-hover:animate-bounce"
                      data-oid="1rayr.-"
                    />
                    Get Free Consultation
                    <ArrowRight
                      className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform"
                      data-oid="d4o2ut5"
                    />
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="i2eub1s"
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="glass-strong border-white/30 text-contrast-high hover:bg-white/20 px-12 py-6 font-semibold tracking-wide group"
                    onClick={() => onNavigate("portfolio")}
                    data-oid="i:kw1-g"
                  >
                    <BarChart3
                      className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform"
                      data-oid="d-uni80"
                    />
                    View Success Stories
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Background Effects */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500"
              data-oid=":7.8t8o"
            ></div>

            {/* Animated Particles */}
            <div
              className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-500"
              data-oid="-y4g4zb"
            >
              <motion.div
                className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full"
                animate={{ y: [0, -20, 0], opacity: [1, 0.5, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                data-oid="lvu_e:9"
              />

              <motion.div
                className="absolute top-20 right-20 w-1 h-1 bg-purple-400 rounded-full"
                animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                data-oid="r9oor:."
              />

              <motion.div
                className="absolute bottom-10 left-20 w-1.5 h-1.5 bg-cyan-400 rounded-full"
                animate={{ y: [0, -25, 0], opacity: [1, 0.3, 1] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                data-oid="2k.ielx"
              />
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
