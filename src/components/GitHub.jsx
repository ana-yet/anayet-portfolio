"use client";

import { motion } from "framer-motion";
import { FaGithub, FaCodeBranch, FaStar, FaCopy } from "react-icons/fa";
import { githubStats, codeSnippet } from "@/lib/data";
import { useState } from "react";

const GitHub = () => {
  const [copied, setCopied] = useState(false);

  const stats = [
    {
      label: "Contributions This Year",
      value: `${githubStats.contributions}+`,
      icon: FaGithub,
      color: "text-white",
    },
    {
      label: "Public Repositories",
      value: githubStats.repositories,
      icon: FaCodeBranch,
      color: "text-primary",
    },
    {
      label: "Total Stars Received",
      value: githubStats.stars,
      icon: FaStar,
      color: "text-yellow-400",
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="github" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">&lt;MyCode/&gt;</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My contributions and code statistics
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="gradient-border p-6 text-center cursor-pointer"
            >
              <stat.icon className={`text-6xl mb-4 mx-auto ${stat.color}`} />
              <h3 className="text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Code Snippet Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <FaGithub className="text-primary" />
            Clean Code I&apos;m Proud Of
          </h3>

          {/* Code Block */}
          <div className="bg-[#1e1e1e] rounded-lg p-6 overflow-x-auto">
            <pre className="font-mono text-sm">
              <code className="text-gray-300">{codeSnippet}</code>
            </pre>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="mt-4 px-4 py-2 bg-dark-lighter hover:bg-dark-bg rounded-lg transition-colors flex items-center gap-2"
          >
            <FaCopy />
            {copied ? "Copied!" : "Copy Code"}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
