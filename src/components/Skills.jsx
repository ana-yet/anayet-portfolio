"use client";

import { motion } from "framer-motion";
import { FaPalette, FaServer, FaTools, FaReact, FaNodeJs, FaGitAlt, FaRobot } from "react-icons/fa";
import { SiExpress, SiFirebase, SiHtml5, SiJavascript, SiJsonwebtokens, SiMongodb, SiNetlify, SiNextdotjs, SiPostman, SiSocketdotio, SiTailwindcss, SiTypescript, SiVercel } from "react-icons/si";
import { TbApi } from "react-icons/tb";

import { skills } from "@/lib/data";

const iconMap = {
  FaReact,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiHtml5,
  SiNextdotjs,
  FaNodeJs,
  SiExpress,
  SiMongodb,
  TbApi,
  SiSocketdotio,
  SiJsonwebtokens,
  FaGitAlt,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiFirebase,
  FaRobot,
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: FaPalette,
      gradient: "from-blue-500 to-cyan-500",
      skills: skills.frontend,
    },
    {
      title: "Backend",
      icon: FaServer,
      gradient: "from-green-500 to-emerald-500",
      skills: skills.backend,
    },
    {
      title: "Tools & DevOps",
      icon: FaTools,
      gradient: "from-orange-500 to-red-500",
      skills: skills.tools,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Comprehensive skill set across the development stack
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="glass p-8 rounded-2xl"
            >
              <div className="text-center mb-6">
                <div
                  className={`w-16 h-16 bg-linear-to-br ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <category.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>

              <ul className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = iconMap[skill.icon];
                  return (
                    <motion.li
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: skillIndex * 0.1 }}
                      className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      {Icon && <Icon className="text-3xl mb-2 text-gray-300" />}
                      <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
