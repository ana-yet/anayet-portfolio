"use client";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { experience } from "@/lib/data";

const Experience = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-gradient-to-b from-dark-bg to-dark-card overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My career path and experiences
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-primary via-secondary to-accent origin-top"
          />

          {/* Timeline Items */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {experience.map((exp, index) => (
              <motion.div key={exp.id} variants={item} className="relative">
                {/* Timeline Dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-${exp.color} rounded-full border-4 border-dark-bg z-10`}
                  style={{ backgroundColor: exp.color === "primary" ? "var(--color-primary)" : exp.color === "secondary" ? "var(--color-secondary)" : "#10b981" }}
                />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 ${index % 2 === 0
                    ? "md:mr-auto md:w-5/12 md:pr-12 md:text-right"
                    : "md:ml-auto md:w-5/12 md:pl-12 md:text-left"
                    }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass p-6 rounded-xl border border-white/5 hover:border-primary/30 transition-colors relative group"
                  >
                    {/* Arrow for desktop */}
                    <div
                      className={`hidden md:block absolute top-6 w-4 h-4 bg-dark-card border-t border-l border-white/10 rotate-45 ${index % 2 === 0 ? "-right-2 border-r-0 border-b-0" : "-left-2 border-t-0 border-l-0 border-r border-b"
                        }`}
                    />

                    <div className={`flex items-center mb-2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"} justify-between`}>
                      <span
                        className={`px-3 py-1 bg-white/5 text-sm rounded-full border border-white/10`}
                        style={{ color: exp.color === "primary" ? "var(--color-primary)" : "#10b981" }}
                      >
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-green-400 text-sm ml-2 animate-pulse">Current</span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-1 text-white">{exp.role}</h3>
                    <h4 className="text-lg mb-3 font-medium" style={{ color: exp.color === "primary" ? "var(--color-primary)" : "#10b981" }}>
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{exp.description}</p>

                    <ul className={`space-y-2 text-sm text-gray-300 ${index % 2 === 0 ? "md:items-end" : "md:items-start"} flex flex-col`}>
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? "md:flex-row-reverse md:text-right" : "text-left"}`}>
                          <FaCheckCircle className="text-green-400 mt-1 shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
