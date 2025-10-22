"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBriefcase,
  FaProjectDiagram,
  FaUsers,
  FaCode,
  FaHeart,
  FaBook,
  FaHandshake,
  FaGithub,
  FaPencilAlt,
  FaCamera,
  FaGamepad,
  FaDownload,
  FaAward,
  FaGraduationCap,
  FaReact,
  FaAws,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { aboutMe } from "@/lib/data";

const About = () => {
  const [activeTab, setActiveTab] = useState("story");

  const iconMap = {
    FaBriefcase,
    FaProjectDiagram,
    FaUsers,
    FaCode,
    FaHeart,
    FaBook,
    FaHandshake,
    FaGithub,
    FaPencilAlt,
    FaCamera,
    FaGamepad,
    FaReact,
    FaAws,
    SiMongodb,
  };

  const getIcon = (iconName) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon /> : null;
  };

  const tabs = [
    { id: "story", label: "My Story", icon: FaBook },
    { id: "education", label: "Education", icon: FaGraduationCap },
    { id: "interests", label: "Interests", icon: FaLightbulb },
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
    <section
      id="about"
      className="py-20 px-6 bg-gradient-to-b from-dark-card to-dark-bg"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </motion.div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Image & Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="gradient-border overflow-hidden aspect-square max-w-md mx-auto">
                <div className="relative w-full h-full bg-dark-card">
                  <Image
                    src={aboutMe.image}
                    alt="Profile"
                    fill
                    className="object-cover rounded-lg"
                    priority
                  />
                  {/* Overlay decoration */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />

                  {/* Floating badge */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-4 right-4 glass px-4 py-2 rounded-full"
                  >
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-3 h-3 bg-green-500 rounded-full"
                      />
                      Available for work
                    </span>
                  </motion.div>
                </div>
              </div>

              {/* Decorative elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-secondary/30 rounded-full"
              />
            </div>

            {/* Quick Stats Grid */}
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {aboutMe.highlights.map((highlight, index) => {
                const Icon = iconMap[highlight.icon];
                return (
                  <motion.div
                    key={index}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="glass p-6 rounded-xl text-center cursor-pointer"
                  >
                    {Icon && (
                      <Icon className="text-4xl mx-auto mb-3 text-primary" />
                    )}
                    <h3 className="text-3xl font-bold gradient-text mb-1">
                      {highlight.metric}
                    </h3>
                    <p className="text-sm text-gray-400">{highlight.label}</p>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Download Resume Button */}
            <motion.a
              href={aboutMe.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">{aboutMe.title}</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                {aboutMe.description}
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 border-b border-gray-700 pb-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-t-lg transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }`}
                >
                  <tab.icon />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {/* Story Tab */}
              {activeTab === "story" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {aboutMe.story.map((paragraph, index) => (
                    <p key={index} className="text-gray-300 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}

                  {/* Current Focus */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaRocket className="text-primary" />
                      Currently Exploring
                    </h4>
                    <ul className="space-y-2">
                      {aboutMe.currentFocus.map((focus, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-3 text-gray-300"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {focus}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Education */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaGraduationCap className="text-primary" />
                      Education
                    </h4>
                    {aboutMe.education.map((edu, index) => (
                      <div key={index} className="glass p-6 rounded-xl">
                        <h5 className="text-lg font-bold text-primary">
                          {edu.degree}
                        </h5>
                        <p className="text-gray-400 mb-2">{edu.institution}</p>
                        <p className="text-sm text-gray-500 mb-3">{edu.year}</p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Certifications */}
                  <div>
                    <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <FaAward className="text-primary" />
                      Certifications
                    </h4>
                    <div className="space-y-3">
                      {aboutMe.certifications.map((cert, index) => {
                        const Icon = iconMap[cert.icon];
                        return (
                          <motion.div
                            key={index}
                            whileHover={{ x: 5 }}
                            className="glass p-4 rounded-lg flex items-center gap-4"
                          >
                            {Icon && (
                              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <Icon className="text-primary text-xl" />
                              </div>
                            )}
                            <div className="flex-1">
                              <h5 className="font-bold">{cert.name}</h5>
                              <p className="text-sm text-gray-400">
                                {cert.issuer}
                              </p>
                            </div>
                            <span className="text-sm text-gray-500">
                              {cert.year}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Interests Tab */}
              {activeTab === "interests" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {aboutMe.interests.map((interest, index) => {
                      const Icon = iconMap[interest.icon];
                      return (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="glass p-6 rounded-xl"
                        >
                          {Icon && (
                            <Icon className="text-3xl text-primary mb-3" />
                          )}
                          <h5 className="font-bold mb-2">{interest.name}</h5>
                          <p className="text-sm text-gray-400">
                            {interest.description}
                          </p>
                        </motion.div>
                      );
                    })}
                  </div>

                  {/* Fun Facts */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold mb-4">
                      Fun Facts About Me
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {aboutMe.funFacts.map((fact, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 10 }}
                          className="glass p-4 rounded-lg text-gray-300"
                        >
                          {fact}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>

        {/* Core Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            My Core <span className="gradient-text">Values</span>
          </h3>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {aboutMe.values.map((value, index) => {
              const Icon = iconMap[value.icon];
              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -10 }}
                  className="gradient-border p-6 text-center cursor-pointer group"
                >
                  {Icon && (
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="text-2xl text-white" />
                    </div>
                  )}
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass p-12 rounded-2xl"
        >
          <h3 className="text-3xl font-bold mb-4">Want to work together?</h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold hover:shadow-xl hover:shadow-primary/50 transition-all"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href={aboutMe.resumeUrl}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold hover:bg-dark-lighter transition-all flex items-center gap-2"
            >
              <FaDownload />
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
