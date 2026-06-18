"use client";
import { motion } from "framer-motion";
import {
  PaintBrushIcon,
  SparklesIcon,
  ArrowPathIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/solid";

// Container animation (controls stagger)
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function ServicesSection() {
  const highlight = {
    title: "Custom Tattoo Design",
    desc: "Tailored artwork that reflects your story, style, and symbolism.",
    icon: PaintBrushIcon,
  };

  const services = [
    {
      title: "Fine Line & Minimalist",
      desc: "Precision fine line tattoos crafted at Eden Tattoo Nepal – elegant and timeless.",
      icon: SparklesIcon,
    },
    {
      title: "Cover-Ups & Reworks",
      desc: "Transform old ink into fresh art at Eden Tattoo Nepal with expert layering and shading.",
      icon: ArrowPathIcon,
    },
    {
      title: "Piercing Services",
      desc: "Safe, sterile, and stylish—ear, nose, and body piercings available.",
      icon: ShieldCheckIcon,
    },
  ];

  return (
    <section id="services" className="py-16 bg-linear-to-tr from-neutral-50 via-white to-sky-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-playfair-display font-bold mb-12 text-center text-neutral-700">
         Services at Eden Tattoo Nepal 
        </h2>

        {/* Highlight card */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition text-center"
            variants={cardVariants}
          >
            <highlight.icon className="h-10 w-10 text-yellow-400 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold mb-3 text-neutral-700">
              {highlight.title}
            </h3>
            <p className="text-neutral-600 max-w-xl mx-auto">{highlight.desc}</p>
          </motion.div>
        </motion.div>

        {/* Grid of supporting services */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {services.map(({ title, desc, icon: Icon }, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
              variants={cardVariants}
            >
              <Icon className="h-8 w-8 text-yellow-400 mb-4" aria-label="Fine line tattoo icon" />
              <h3 className="text-xl font-semibold mb-2 text-neutral-700">
                {title}
              </h3>
              <p className="text-neutral-600">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}