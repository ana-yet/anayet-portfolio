"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "home" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0px";
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={false}
        // initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full top-0 z-50 px-6 py-4 transition-all duration-300 ${isScrolled ? "bg-dark-bg/95 backdrop-blur-lg shadow-lg" : ""
          }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-display font-bold gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            &lt;AM/&gt;
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navItems.length * 0.1 }}
            >
              <button
                onClick={() => handleNavClick("contact")}
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all"
              >
                Hire Me
              </button>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button aria-label="Open menu" title="Open menu"
            className="md:hidden text-2xl z-50 relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-dark-card/95 backdrop-blur-xl border-l border-white/10 shadow-2xl z-50 md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b border-white/5">
                <span className="text-2xl font-display font-bold gradient-text">
                  &lt;AM/&gt;
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/5 transition-colors"
                >
                  <FaTimes className="text-xl text-gray-400 hover:text-white" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block text-2xl font-medium text-gray-300 hover:text-white hover:pl-2 transition-all duration-300"
                      >
                        {item.label}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="p-6 border-t border-white/5">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
