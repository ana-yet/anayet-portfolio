"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { projects, personalInfo } from "@/lib/data";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.status === filter);

  // Show only first 3 projects
  const displayProjects = filteredProjects.slice(0, 3);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-dark-bg relative"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            A showcase of my recent work, featuring full-stack applications and
            complex system architectures.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {["all", "live", "in-progress"].map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  filter === filterType
                    ? "bg-primary/10 border-primary text-primary shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)]"
                    : "bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white"
                }`}
              >
                {filterType.charAt(0).toUpperCase() +
                  filterType.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="relative flex flex-col gap-8 pb-24">
          {displayProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              style={{
                top: `calc(4rem + ${index * 30}px)`,
                zIndex: index + 1,
              }}
              className="sticky bg-dark-card border border-white/10 p-6 md:p-10 rounded-3xl shadow-2xl overflow-hidden min-h-[60vh] flex flex-col justify-center group/card"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* Project Image (Browser Window Style) */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div className="relative rounded-xl bg-dark-bg border border-white/10 shadow-2xl overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-500">
                    {/* Browser Header */}
                    <div className="h-8 bg-dark-lighter border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                      <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                      <div className="ml-4 flex-1 h-4 bg-white/5 rounded-full max-w-[200px]" />
                    </div>

                    {/* Image Container */}
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-dark-bg/20 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Decorative Elements behind image */}
                  <div className="absolute -z-10 inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl opacity-20" />
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-primary font-mono text-sm tracking-wider">
                      0{index + 1}.
                    </span>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full border ${
                        project.status === "live"
                          ? "bg-green-500/10 border-green-500/20 text-green-400"
                          : "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {project.status === "live" ? "Live Project" : "In Development"}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white group-hover/card:gradient-text transition-all">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <FaCheckCircle className="text-primary mt-1 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">
                      Technology Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-primary/10 border border-primary/20 rounded-lg text-sm text-primary-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center gap-2"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-medium transition-all flex items-center gap-2"
                    >
                      <FaGithub className="text-xl" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-dark-card hover:bg-dark-lighter border border-white/10 hover:border-primary/50 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)] group"
          >
            <span>View Full Project Archive</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-primary" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
