"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "home" },
    { label: "Projects", href: "projects" },
    { label: "Skills", href: "skills" },
    { label: "Experience", href: "experience" },
    { label: "Contact", href: "contact" },
  ];

  const services = [
    "Web Development",
    "API Development",
    "Database Design",
    "Code Review",
    "Technical Consulting",
  ];

  return (
    <footer className="py-12 px-6 bg-dark-card border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-bold gradient-text mb-4">
              &lt;JD/&gt;
            </h3>
            <p className="text-gray-400 mb-4">
              Building exceptional digital experiences with modern web
              technologies.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaGithub, url: personalInfo.social.github },
                { icon: FaLinkedin, url: personalInfo.social.linkedin },
                { icon: FaTwitter, url: personalInfo.social.twitter },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <social.icon className="text-xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              {services.map((service, index) => (
                <li key={index} className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary text-sm" />
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            Built with <FaHeart className="inline text-red-500" /> using Next.js
            & Tailwind CSS
          </p>
          <p className="text-gray-500 mt-2">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
