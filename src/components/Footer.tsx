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
      data-oid=":opgrxq"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" data-oid="twkzww_">
        <div
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"
          data-oid="5pn:7j_"
        ></div>
        <div
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl"
          data-oid="w32h-xi"
        ></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        data-oid="lukq1j3"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          data-oid="jsxd:1b"
        >
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-oid="te:-x:-"
          >
            <div
              className="flex items-center space-x-3 mb-6"
              data-oid="8i7.468"
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
                data-oid="utwm_v6"
              >
                <Sparkles className="w-6 h-6 text-white" data-oid="hep81tc" />
              </motion.div>
              <div data-oid="sn7mifx">
                <h3
                  className="text-xl heading-tertiary bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  data-oid="1q0h-bh"
                >
                  Inno Dot
                </h3>
                <p className="text-xs text-blue-400 -mt-1" data-oid="sgjv4vr">
                  Digital Innovation
                </p>
              </div>
            </div>
            <p
              className="text-gray-300 mb-6 leading-relaxed"
              data-oid="er0kx59"
            >
              Transforming businesses through innovative digital marketing
              strategies. We help brands connect, engage, and grow in the
              digital world.
            </p>
            <div className="flex space-x-4" data-oid="rtmlppp">
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
                  data-oid="fea5v7l"
                >
                  <social.icon className="w-5 h-5" data-oid="97ost2r" />
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
            data-oid="dk8fmtm"
          >
            <h4 className="heading-tertiary mb-6" data-oid="iru36_g">
              Quick Links
            </h4>
            <ul className="space-y-4" data-oid="tuy3f8u">
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
                  data-oid="_6hn216"
                >
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    data-oid="rlvkkde"
                  >
                    <span data-oid="55pl3iv">{link.name}</span>
                    <ArrowRight
                      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      data-oid="wrzcz-u"
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
            data-oid="vud-7rj"
          >
            <h4 className="heading-tertiary mb-6" data-oid="pa.dewj">
              Services
            </h4>
            <ul className="space-y-4" data-oid="da.0.-a">
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
                  data-oid="e:-7foh"
                >
                  <button
                    onClick={() => onNavigate("service-detail", service.slug)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                    data-oid="bnd.m22"
                  >
                    <span data-oid="j6b6uny">{service.name}</span>
                    <ArrowRight
                      className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                      data-oid=":nwr_j3"
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
            data-oid="exhsf9r"
          >
            <h4 className="heading-tertiary mb-6" data-oid="j-ksiko">
              Contact Info
            </h4>
            <div className="space-y-4" data-oid="1dgqcz-">
              <motion.div
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                data-oid="4ya732z"
              >
                <MapPin
                  className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0"
                  data-oid="ey0hvvx"
                />
                <div data-oid="c.7t6v.">
                  <p className="text-gray-300" data-oid="ne_kho1">
                    123 Innovation Drive
                  </p>
                  <p className="text-gray-300" data-oid="qi:h2uz">
                    Digital City, DC 12345
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                data-oid=":9wvyiq"
              >
                <Phone
                  className="w-5 h-5 text-blue-400 flex-shrink-0"
                  data-oid="bgm3c-t"
                />
                <a
                  href="tel:+15551234567"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  data-oid="npiph2e"
                >
                  +1 (555) 123-4567
                </a>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                data-oid="tz2luiq"
              >
                <Mail
                  className="w-5 h-5 text-blue-400 flex-shrink-0"
                  data-oid="p9ey_e_"
                />
                <a
                  href="mailto:hello@innodot.com"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  data-oid="br2x.8a"
                >
                  hello@innodot.com
                </a>
              </motion.div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8" data-oid="3_gop89">
              <h5 className="text-sm heading-tertiary mb-4" data-oid="cgrhex4">
                Stay Updated
              </h5>
              <div className="flex space-x-2" data-oid="bf3dz.d">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 glass-card border border-white/20 text-white placeholder:text-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-200 rounded-lg"
                  data-oid="4:ddbkp"
                />

                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white button-glow"
                  data-oid="zltm9a."
                >
                  <ArrowRight className="w-4 h-4" data-oid="e:maa7y" />
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
          data-oid="qos5ef8"
        >
          <div
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6"
            data-oid="7nvni5z"
          >
            <p className="text-gray-400 text-sm" data-oid="i_ezq3o">
              © {currentYear} Inno Dot. All rights reserved.
            </p>
            <div className="flex space-x-6" data-oid="erl30bz">
              <button
                onClick={() => onNavigate("privacy")}
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                data-oid="nmchu:z"
              >
                Privacy Policy
              </button>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                data-oid="tnrby::"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300"
                data-oid="ft6xsy3"
              >
                Cookie Policy
              </a>
            </div>
          </div>

          <motion.div
            className="mt-4 md:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            data-oid="si6wov4"
          >
            <p
              className="text-gray-400 text-sm flex items-center"
              data-oid="82cj0mj"
            >
              Made with{" "}
              <span className="text-red-400 mx-1" data-oid="hma7btb">
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
