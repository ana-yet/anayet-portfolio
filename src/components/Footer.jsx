"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaHeart, FaArrowUp } from "react-icons/fa";
import { personalInfo } from "@/lib/data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 px-6 bg-dark-card/50 border-t border-gray-800 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-gray-400 text-sm text-center md:text-left">
          <p>
            © {currentYear} <span className="text-primary font-medium">{personalInfo.name}</span>. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-gray-500 flex items-center justify-center md:justify-start gap-1">
            Built with <FaHeart className="text-red-500 animate-pulse" /> using Next.js
          </p>
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {[
            { icon: FaGithub, url: personalInfo.social.github, label: "GitHub" },
            { icon: FaLinkedin, url: personalInfo.social.linkedin, label: "LinkedIn" },
            { icon: FaTwitter, url: personalInfo.social.twitter, label: "Twitter" },
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all border border-transparent hover:border-primary/30"
              aria-label={social.label}
            >
              <social.icon className="text-lg" />
            </motion.a>
          ))}
        </div>

        {/* Back to Top */}
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 rounded-lg bg-white/5 hover:bg-primary/20 text-gray-400 hover:text-primary transition-all border border-transparent hover:border-primary/30 group"
          aria-label="Back to Top"
        >
          <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
