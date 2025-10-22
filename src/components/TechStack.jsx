"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaServer, FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiDocker,
  SiAmazonaws,
} from "react-icons/si";
import { techStack } from "@/lib/data";

const TechStack = () => {
  const mainTechs = [
    { name: "MongoDB", icon: SiMongodb, color: "#47A248", size: "large" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF", size: "small" },
    { name: "React.js", icon: FaReact, color: "#61DAFB", size: "large" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933", size: "large" },
  ];

  const additionalTools = [
    { name: "Git", icon: "fab fa-git-alt", color: "text-orange-500" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "AWS", icon: SiAmazonaws, color: "#FF9900" },
    { name: "Redux", color: "text-purple-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="tech-stack" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Technologies I <span className="gradient-text">Master</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Building modern applications with cutting-edge tools
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {/* MongoDB */}
          <motion.div
            variants={item}
            className="gradient-border p-6 cursor-pointer group"
          >
            <div className="text-center">
              <SiMongodb
                className="text-6xl mb-4 mx-auto transition-transform group-hover:scale-110"
                style={{ color: "#47A248" }}
              />
              <h3 className="text-xl font-bold mb-2">MongoDB</h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="bg-linear-to-r from-green-400 to-green-600 h-2 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">90% Proficiency</p>
            </div>
          </motion.div>

          {/* Express */}
          <motion.div
            variants={item}
            className="gradient-border p-6 cursor-pointer group"
          >
            <div className="text-center">
              <SiExpress className="text-6xl mb-4 mx-auto text-white transition-transform group-hover:scale-110" />
              <h3 className="text-xl font-bold mb-2">Express.js</h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "85%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="bg-linear-to-r from-gray-400 to-gray-600 h-2 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">85% Proficiency</p>
            </div>
          </motion.div>

          {/* React - Spans 2 columns on mobile, stays same on desktop */}
          <motion.div
            variants={item}
            className="gradient-border p-6 cursor-pointer md:col-span-2 group"
          >
            <div className="text-center">
              <FaReact
                className="text-8xl mb-4 mx-auto transition-transform group-hover:scale-110 group-hover:rotate-180 duration-500"
                style={{ color: "#61DAFB" }}
              />
              <h3 className="text-2xl font-bold mb-2">React.js</h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4 max-w-md mx-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="bg-linear-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">95% Proficiency</p>
            </div>
          </motion.div>

          {/* Node.js - Spans 2 columns */}
          <motion.div
            variants={item}
            className="gradient-border p-6 cursor-pointer md:col-span-2 group"
          >
            <div className="text-center">
              <FaNodeJs
                className="text-8xl mb-4 mx-auto transition-transform group-hover:scale-110"
                style={{ color: "#339933" }}
              />
              <h3 className="text-2xl font-bold mb-2">Node.js</h3>
              <div className="w-full bg-gray-700 rounded-full h-2 mt-4 max-w-md mx-auto">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "92%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="bg-linear-to-r from-green-400 to-green-600 h-2 rounded-full"
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">92% Proficiency</p>
            </div>
          </motion.div>

          {/* Additional Tools */}
          <motion.div
            variants={item}
            className="gradient-border p-6 cursor-pointer md:col-span-2"
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Plus More Tools</h3>
              <div className="flex flex-wrap gap-3 justify-center">
                {additionalTools.map((tool, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 bg-dark-lighter rounded-full text-sm border border-primary/30 flex items-center gap-2"
                  >
                    {tool.icon && typeof tool.icon === "function" && (
                      <tool.icon style={{ color: tool.color }} />
                    )}
                    {tool.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
