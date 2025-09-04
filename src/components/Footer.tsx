import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Sparkles,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ExternalLink,
} from "lucide-react";
import { Button } from "./ui/button";

type Page =
  | "home"
  | "portfolio"
  | "pricing"
  | "services"
  | "service-detail"
  | "privacy";

interface FooterProps {
  onNavigate: (page: Page, service?: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative mt-24 glass-dark border-t border-white/10"
      data-oid="iy3i.ui"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" data-oid="ynx265p">
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          data-oid="6t_4_4c"
        ></div>
        <div
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
          data-oid="onvsklf"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        data-oid="za3yso0"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          data-oid="mxl_vv1"
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-oid=":dl270i"
          >
            <div
              className="flex items-center space-x-3 mb-6"
              data-oid="hsabxxh"
            >
              <motion.div
                className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center glow-effect"
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                data-oid="v06afvt"
              >
                <Sparkles className="w-6 h-6 text-white" data-oid="2o.ii75" />
              </motion.div>
              <div data-oid="h--dbl9">
                <h3
                  className="text-xl heading-tertiary bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  data-oid="m.sectw"
                >
                  Inno Dot
                </h3>
                <p className="text-xs text-blue-400 -mt-1" data-oid="02w9rjo">
                  Digital Innovation
                </p>
              </div>
            </div>
            <p
              className="text-gray-300 mb-6 leading-relaxed"
              data-oid="jjtc.-6"
            >
              Transforming businesses through innovative digital marketing
              strategies. We help brands connect, engage, and grow in the
              digital world.
            </p>
            <div className="flex space-x-4" data-oid="78:hoe-">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 glass-card rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 interactive-card"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-oid="17qskvz"
                >
                  <social.icon className="w-5 h-5" data-oid="7uszr7g" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            data-oid="ebxxuoq"
          >
            <h4 className="heading-tertiary mb-6" data-oid="6_:_f19">
              Quick Links
            </h4>
            <ul className="space-y-4" data-oid="bl5p7hk">
              {[
                { name: "Home", page: "home" as Page },
                { name: "About Us", page: "home" as Page },
                { name: "Services", page: "services" as Page },
                { name: "Portfolio", page: "portfolio" as Page },
                { name: "Pricing", page: "pricing" as Page },
                { name: "Contact", page: "home" as Page },
              ].map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  data-oid="99123dt"
                >
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    data-oid="whsufgd"
                  >
                    <span data-oid="tbha9gg">{link.name}</span>
                    <ArrowRight
                      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      data-oid="50oq3o8"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            data-oid="y-ui.2x"
          >
            <h4 className="heading-tertiary mb-6" data-oid="_5mt44g">
              Services
            </h4>
            <ul className="space-y-4" data-oid="7i.sihg">
              {[
                { name: "SEO Optimization", slug: "SEO" },
                { name: "PPC Advertising", slug: "PPC" },
                {
                  name: "Social Media Marketing",
                  slug: "Social Media Marketing",
                },
                { name: "Content Marketing", slug: "Content Marketing" },
                { name: "Email Marketing", slug: "Email Marketing" },
                { name: "Web Design", slug: "Web Design & Development" },
              ].map((service, index) => (
                <motion.li
                  key={service.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  data-oid="mxbham0"
                >
                  <button
                    onClick={() => onNavigate("service-detail", service.slug)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    data-oid="2k8g7.t"
                  >
                    <span data-oid="a9niaot">{service.name}</span>
                    <ArrowRight
                      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      data-oid="wyooymd"
                    />
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            data-oid=".62ytof"
          >
            <h4 className="heading-tertiary mb-6" data-oid="68qy6lu">
              Contact Info
            </h4>
            <div className="space-y-4" data-oid="yr7ygc3">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                data-oid="0o44sp6"
              >
                <MapPin
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  data-oid="-.:0arn"
                />

                <div data-oid=":qgnye0">
                  <p className="text-gray-300" data-oid="egycnot">
                    Morgan Hill, California
                  </p>
                  <p className="text-gray-300" data-oid="_zof2-w">
                    95037
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                data-oid="bj:zwq7"
              >
                <Phone
                  className="w-5 h-5 text-blue-400 flex-shrink-0"
                  data-oid="yooxorl"
                />

                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  data-oid="p5w9bcr"
                >
                  +1 (555) 123-4567
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                data-oid="txvwabn"
              >
                <Mail
                  className="w-5 h-5 text-blue-400 flex-shrink-0"
                  data-oid="osxdgjh"
                />

                <a
                  href="mailto:hello@innodot.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  data-oid="i0jkqbv"
                >
                  hello@innodot.com
                </a>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8" data-oid="ik:4m70">
              <h5 className="text-sm heading-tertiary mb-4" data-oid="jgy2wkz">
                Stay Updated
              </h5>
              <div className="flex space-x-2" data-oid="1..ag59">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 glass-card border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 rounded-lg"
                  data-oid="mib-_:."
                />

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white button-glow"
                  data-oid="n5g23dq"
                >
                  <ArrowRight className="w-4 h-4" data-oid="3yksrpe" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          data-oid="4:zibrh"
        >
          <div
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6"
            data-oid="fn3a75l"
          >
            <p className="text-gray-400 text-sm" data-oid="f-0:_80">
              © {currentYear} Inno Dot. All rights reserved.
            </p>
            <div className="flex space-x-6" data-oid="awfz8n6">
              <button
                onClick={() => onNavigate("privacy")}
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                data-oid="o4-tmlb"
              >
                Privacy Policy
              </button>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                data-oid="xojr5ut"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                data-oid="bgcn6-n"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <motion.div
            className="mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            data-oid="l_0tc-p"
          >
            <p
              className="text-gray-400 text-sm flex items-center"
              data-oid="7.-nwb8"
            >
              Made with{" "}
              <span className="text-red-400 mx-1" data-oid="-v9bm4x">
                ♥
              </span>{" "}
              by Inno Dot Team
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
