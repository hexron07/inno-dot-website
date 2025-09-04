import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "./ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  MousePointer,
  Share2,
  Mail,
  Palette,
  Code,
  Bot,
  Zap,
  Sparkles,
} from "lucide-react";

type Page =
  | "home"
  | "portfolio"
  | "pricing"
  | "services"
  | "service-detail"
  | "privacy";

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page, service?: string) => void;
}

export default function Navigation({
  currentPage,
  onNavigate,
}: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "SEO",
      icon: Search,
      description: "Search Engine Optimization",
      gradient: "from-blue-500 to-blue-600",
      iconColor: "text-blue-400",
    },
    {
      name: "PPC",
      icon: MousePointer,
      description: "Pay-Per-Click Advertising",
      gradient: "from-green-500 to-green-600",
      iconColor: "text-green-400",
    },
    {
      name: "Social Media Marketing",
      icon: Share2,
      description: "Social Media Management",
      gradient: "from-pink-500 to-pink-600",
      iconColor: "text-pink-400",
    },
    {
      name: "Content Marketing",
      icon: Mail,
      description: "Content Strategy & Creation",
      gradient: "from-purple-500 to-purple-600",
      iconColor: "text-purple-400",
    },
    {
      name: "Email Marketing",
      icon: Mail,
      description: "Email Campaign Management",
      gradient: "from-orange-500 to-orange-600",
      iconColor: "text-orange-400",
    },
    {
      name: "Web Design & Development",
      icon: Code,
      description: "Custom Website Solutions",
      gradient: "from-cyan-500 to-cyan-600",
      iconColor: "text-cyan-400",
    },
    {
      name: "Brand Strategy & Design",
      icon: Palette,
      description: "Brand Identity & Strategy",
      gradient: "from-indigo-500 to-indigo-600",
      iconColor: "text-indigo-400",
    },
    {
      name: "AI Automation",
      icon: Bot,
      description: "AI-Powered Business Automation",
      gradient: "from-violet-500 to-violet-600",
      iconColor: "text-violet-400",
      isNew: true,
    },
  ];

  const handleServiceClick = (serviceName: string) => {
    onNavigate("service-detail", serviceName);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-ultra border-b border-black/50" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        data-oid="abl7uyu"
      >
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-oid="i3zd:59"
        >
          <div
            className="flex items-center justify-between h-16 md:h-20"
            data-oid="ykwoa::"
          >
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center cursor-pointer group"
              onClick={() => onNavigate("home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-oid="d7c-9iw"
            >
              <div className="relative" data-oid="yf.x:bx">
                <motion.div
                  className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300"
                  whileHover={{ rotate: 5 }}
                  data-oid="6ca6ony"
                >
                  <Zap
                    className="w-5 h-5 md:w-6 md:h-6 text-white"
                    data-oid="abdcu51"
                  />
                </motion.div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  data-oid="ohz0jbh"
                >
                  <Sparkles
                    className="w-1.5 h-1.5 md:w-2 md:h-2 text-white"
                    data-oid="0822ei0"
                  />
                </motion.div>
              </div>
              <div className="ml-3 md:ml-4" data-oid="dhz-b0n">
                <div
                  className="text-lg md:text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                  data-oid="pels5q."
                >
                  Inno Dot
                </div>
                <div
                  className="text-xs md:text-sm text-blue-400 font-medium -mt-1"
                  data-oid="r7yv1l7"
                >
                  Digital Innovation
                </div>
              </div>
            </motion.div>

            {/* Desktop Navigation - Responsive Spacing */}
            <div
              className="hidden lg:flex items-center space-x-2 xl:space-x-3"
              data-oid="tcxjk5c"
            >
              <NavItem
                label="Home"
                active={currentPage === "home"}
                onClick={() => onNavigate("home")}
                data-oid="z5teyte"
              />

              {/* Enhanced Services Dropdown */}
              <div className="relative" data-oid="dgrp61:">
                <motion.button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    currentPage === "services" ||
                    currentPage === "service-detail"
                      ? "text-white bg-white/10 backdrop-blur-sm"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  data-oid="r3sw-bv"
                >
                  <span data-oid="qp946fd">Services</span>
                  <motion.div
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    data-oid="vh0h20f"
                  >
                    <ChevronDown className="w-4 h-4" data-oid="_qn_0e8" />
                  </motion.div>
                </motion.button>

                <AnimatePresence data-oid="05fbsxx">
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-2 w-80 xl:w-96 glass-ultra rounded-2xl border border-black/40 overflow-hidden shadow-2xl"
                      onMouseLeave={() => setIsServicesOpen(false)}
                      data-oid="dwwba.8"
                    >
                      <div className="p-3" data-oid="0mwcf:v">
                        <div
                          className="grid grid-cols-1 gap-1"
                          data-oid="3e44_24"
                        >
                          {services.map((service, index) => (
                            <motion.button
                              key={service.name}
                              onClick={() => handleServiceClick(service.name)}
                              className="flex items-center space-x-4 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 text-left group"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: index * 0.05,
                              }}
                              whileHover={{ x: 4 }}
                              data-oid="i1m9w73"
                            >
                              <motion.div
                                className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center relative`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.2 }}
                                data-oid="z07ksrv"
                              >
                                <service.icon
                                  className="w-5 h-5 text-white"
                                  data-oid="ic7bzo7"
                                />

                                {service.isNew && (
                                  <motion.div
                                    className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                                    animate={{ scale: [1, 1.2, 1] }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                    }}
                                    data-oid="8rgm3l:"
                                  />
                                )}
                              </motion.div>
                              <div
                                className="flex-1 min-w-0"
                                data-oid="jwhdh6e"
                              >
                                <div
                                  className="text-sm font-medium text-white group-hover:text-blue-100 transition-colors flex items-center"
                                  data-oid="rnkrx9t"
                                >
                                  {service.name}
                                  {service.isNew && (
                                    <motion.span
                                      className="ml-2 text-xs bg-gradient-to-r from-violet-500 to-purple-600 text-white px-2 py-1 rounded-full"
                                      animate={{ scale: [1, 1.05, 1] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                      }}
                                      data-oid="986jw86"
                                    >
                                      New ✨
                                    </motion.span>
                                  )}
                                </div>
                                <div
                                  className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors"
                                  data-oid="u9kayva"
                                >
                                  {service.description}
                                </div>
                              </div>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div
                        className="border-t border-black/30 p-3 bg-white/5"
                        data-oid=":7ecrwb"
                      >
                        <motion.button
                          onClick={() => {
                            onNavigate("services");
                            setIsServicesOpen(false);
                          }}
                          className="w-full text-center text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium py-2 rounded-lg hover:bg-white/5"
                          whileHover={{ scale: 1.02 }}
                          data-oid="i8.:i0e"
                        >
                          View All Services →
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavItem
                label="Portfolio"
                active={currentPage === "portfolio"}
                onClick={() => onNavigate("portfolio")}
                data-oid="l6mvp7f"
              />

              <NavItem
                label="Pricing"
                active={currentPage === "pricing"}
                onClick={() => onNavigate("pricing")}
                data-oid="h_kk.wr"
              />
            </div>

            {/* Enhanced CTA Button & Mobile Menu */}
            <div
              className="flex items-center space-x-2 md:space-x-4"
              data-oid="ubp9hx."
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:block lg:hidden xl:block"
                data-oid="k81ri9-"
              >
                <Button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 md:px-6 xl:px-8 py-2 md:py-3 text-sm md:text-base font-medium rounded-xl btn-premium"
                  onClick={() => onNavigate("pricing")}
                  data-oid="rxvzf4y"
                >
                  <Sparkles
                    className="w-3 h-3 md:w-4 md:h-4 mr-1 md:mr-2"
                    data-oid="km2-xjj"
                  />

                  <span className="hidden md:inline" data-oid="bg0gwvo">
                    Get Started
                  </span>
                  <span className="md:hidden" data-oid="t-e31km">
                    Start
                  </span>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-10 h-10 md:w-12 md:h-12 rounded-xl glass hover:bg-white/10 flex items-center justify-center transition-all duration-200 touch-target"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                data-oid="lb:0-h."
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                  data-oid="2um9rha"
                >
                  {isMenuOpen ? (
                    <X
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      data-oid="iea:8em"
                    />
                  ) : (
                    <Menu
                      className="w-5 h-5 md:w-6 md:h-6 text-white"
                      data-oid="ajo-892"
                    />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence data-oid="qwabk_-">
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden glass-ultra border-t border-black/30 overflow-hidden"
              data-oid="3rc4kqm"
            >
              <div className="px-4 py-6 space-y-4" data-oid="n5o5v1m">
                <MobileNavItem
                  label="Home"
                  active={currentPage === "home"}
                  onClick={() => {
                    onNavigate("home");
                    setIsMenuOpen(false);
                  }}
                  data-oid="_p-23r2"
                />

                <div className="space-y-3" data-oid="zc9fwgr">
                  <div
                    className="text-base font-medium text-gray-400 px-3"
                    data-oid="0u8fava"
                  >
                    Services
                  </div>
                  <div className="space-y-1" data-oid="g8yey2i">
                    {services.map((service, index) => (
                      <motion.button
                        key={service.name}
                        onClick={() => handleServiceClick(service.name)}
                        className="flex items-center space-x-3 w-full p-3 rounded-xl hover:bg-white/10 transition-all duration-200 text-left group"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        whileHover={{ x: 4 }}
                        data-oid="yvxcpfe"
                      >
                        <motion.div
                          className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-lg flex items-center justify-center relative`}
                          whileHover={{ scale: 1.1 }}
                          data-oid="muk-74z"
                        >
                          <service.icon
                            className="w-4 h-4 text-white"
                            data-oid="l8x57pq"
                          />

                          {service.isNew && (
                            <div
                              className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse"
                              data-oid="s6r-2ys"
                            />
                          )}
                        </motion.div>
                        <div className="flex-1" data-oid="gz6jwbj">
                          <div
                            className="text-base text-gray-300 group-hover:text-white transition-colors flex items-center"
                            data-oid="cxxq2_g"
                          >
                            {service.name}
                            {service.isNew && (
                              <span
                                className="ml-2 text-xs bg-gradient-to-r from-violet-500 to-purple-600 text-white px-1.5 py-0.5 rounded"
                                data-oid="iifg.11"
                              >
                                New
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <MobileNavItem
                  label="Portfolio"
                  active={currentPage === "portfolio"}
                  onClick={() => {
                    onNavigate("portfolio");
                    setIsMenuOpen(false);
                  }}
                  data-oid="dok89fh"
                />

                <MobileNavItem
                  label="Pricing"
                  active={currentPage === "pricing"}
                  onClick={() => {
                    onNavigate("pricing");
                    setIsMenuOpen(false);
                  }}
                  data-oid="ilxzal2"
                />

                <div
                  className="pt-4 border-t border-black/30"
                  data-oid="nhix9m:"
                >
                  <Button
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white btn-premium py-3"
                    onClick={() => {
                      onNavigate("pricing");
                      setIsMenuOpen(false);
                    }}
                    data-oid="m1qd66v"
                  >
                    <Sparkles className="w-4 h-4 mr-2" data-oid="hoeu9no" />
                    Get Started
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Click outside overlay */}
      {(isMenuOpen || isServicesOpen) && (
        <div
          className="fixed inset-0 z-40 bg-black/20"
          onClick={() => {
            setIsMenuOpen(false);
            setIsServicesOpen(false);
          }}
          data-oid="pwfvmnq"
        />
      )}
    </>
  );
}

function NavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`px-3 lg:px-4 xl:px-5 py-2 lg:py-3 rounded-xl text-sm lg:text-base font-medium transition-all duration-200 relative touch-target ${
        active
          ? "text-white bg-white/10 backdrop-blur-sm"
          : "text-gray-300 hover:text-white hover:bg-white/5"
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      data-oid="_t899zr"
    >
      {label}
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
          initial={false}
          transition={{ duration: 0.2 }}
          data-oid="7_qrz:6"
        />
      )}
    </motion.button>
  );
}

function MobileNavItem({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`w-full text-left px-3 py-4 rounded-xl text-base font-medium transition-all duration-200 touch-target ${
        active
          ? "text-white bg-white/10"
          : "text-gray-300 hover:text-white hover:bg-white/5"
      }`}
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      data-oid="mqrorbk"
    >
      {label}
    </motion.button>
  );
}
