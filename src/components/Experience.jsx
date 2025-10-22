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
      className="py-20 px-6 bg-linear-to-b from-dark-bg to-dark-card"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-linear-to-b from-primary via-secondary to-accent" />

          {/* Timeline Items */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experience.map((exp, index) => (
              <motion.div key={exp.id} variants={item} className="relative">
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-6 h-6 bg-${exp.color} rounded-full border-4 border-dark-bg z-10`}
                />

                {/* Content */}
                <div
                  className={`ml-20 md:ml-0 ${
                    index % 2 === 0
                      ? "md:mr-auto md:w-5/12 md:pr-12"
                      : "md:ml-auto md:w-5/12 md:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`px-3 py-1 bg-${exp.color}/20 text-${exp.color} text-sm rounded-full`}
                      >
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="text-green-400 text-sm">Current</span>
                      )}
                    </div>

                    <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                    <h4 className={`text-lg text-${exp.color} mb-3`}>
                      {exp.company}
                    </h4>
                    <p className="text-gray-400 mb-4">{exp.description}</p>

                    <ul className="space-y-2 text-sm text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
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
