"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { personalInfo } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";

const Hero = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [particles, setParticles] = useState([]);

  const roles = [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Node.js Expert",
    "React Specialist",
  ];

  // Generate particles only on client side
  useEffect(() => {
    // Skip on server-side render to prevent hydration mismatch
    if (typeof window === "undefined") return;

    // Use requestAnimationFrame to defer state update
    const generateParticles = () => {
      const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        initialX: Math.floor(Math.random() * 1000),
        initialY: Math.floor(Math.random() * 600),
        animateY: Math.floor(Math.random() * 600),
        duration: Math.floor(Math.random() * 10) + 5,
      }));
      setParticles(generatedParticles);
    };

    // Defer particle generation to next animation frame
    requestAnimationFrame(generateParticles);
  }, []);

  // Effect for typing animation
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Particles Background - only render when particles are available */}
      {particles.length > 0 && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 bg-primary/50 rounded-full"
              initial={{
                x: particle.initialX,
                y: particle.initialY,
              }}
              animate={{
                y: [null, particle.animateY],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-card to-dark-bg opacity-90" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Hi, I&apos;m{" "}
            <span className="gradient-text">{personalInfo.name}</span>
            👋
          </h1>

          <div className="text-2xl md:text-4xl font-semibold mb-6 h-12">
            <span className="gradient-text">
              {text}
              <span className="border-r-2 border-primary animate-pulse">|</span>
            </span>
          </div>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              View My Work
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-dark-lighter transition-all"
            >
              Let&apos;s Talk
            </motion.button>
          </div>

          {/* Floating Code Snippets */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            {[
              {
                lang: "MongoDB",
                code: "db.users.find()",
                color: "text-green-400",
              },
              { lang: "React", code: "<App />", color: "text-blue-400" },
              {
                lang: "Node.js",
                code: "app.listen(3000)",
                color: "text-yellow-400",
              },
            ].map((snippet, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.2 }}
                className="glass p-4 rounded-lg font-mono text-sm text-left"
              >
                <div className={snippet.color}> {snippet.lang}</div>
                <div className="text-gray-300">{snippet.code}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("tech-stack")}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <FaChevronDown className="text-3xl text-primary" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
