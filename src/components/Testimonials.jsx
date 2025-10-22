"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaStar,
  FaLinkedin,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { testimonials } from "@/lib/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-linear-to-b from-dark-bg to-dark-card"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Kind <span className="gradient-text">Words</span>
          </h2>
          <p className="text-gray-400 text-lg">
            What colleagues and clients say about my work
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="gradient-border p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="text-yellow-400 mb-3 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 italic mb-4">{testimonial.content}</p>

              <a
                href={testimonial.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm inline-flex items-center gap-1 hover:underline"
              >
                <FaLinkedin />
                View on LinkedIn
              </a>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="gradient-border p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>

              <div className="text-yellow-400 mb-3 flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-300 italic mb-4">
                {testimonials[currentIndex].content}
              </p>

              <a
                href={testimonials[currentIndex].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm inline-flex items-center gap-1 hover:underline"
              >
                <FaLinkedin />
                View on LinkedIn
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-dark-lighter transition-colors"
            >
              <FaChevronLeft />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-dark-lighter transition-colors"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
