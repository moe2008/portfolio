import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiMongodb,
  SiSanity,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const skills = [
  {
    name: "React",
    Icon: FaReact,
    description: "Frontend with React",
    category: "frontend",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    description: "Full-stack with Next.js",
    category: "frontend",
  },
  {
    name: "Node.js",
    Icon: SiNodedotjs,
    description: "Server-side with Node.js",
    category: "backend",
  },
  {
    name: "MongoDB",
    Icon: SiMongodb,
    description: "NoSQL database",
    category: "database",
  },
  {
    name: "Sanity.io",
    Icon: SiSanity,
    description: "Headless CMS",
    category: "backend",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    description: "Type-safe JS",
    category: "frontend",
  },
  {
    name: "Tailwind",
    Icon: SiTailwindcss,
    description: "Utility-first CSS",
    category: "frontend",
  },
];

const SkillSet = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills =
    selectedCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-black dark:text-white p-8 transition-colors duration-300 font-Technor">
      {/* Title */}
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-12">My Skillset</h1>

        {/* Navbar */}
        <div className="flex justify-center sm:justify-center gap-4 mb-12 overflow-x-auto px-4 sm:px-0">
          <div className="flex gap-4 w-full sm:w-auto pl-4 pr-4 sm:pl-0 sm:pr-0">
            {["all", "frontend", "backend", "database"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white"
                    : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:opacity-80"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-5xl">
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white dark:bg-gray-800 rounded-xl p-6 text-center transform transition-all duration-300 group hover:scale-105 shadow-md dark:shadow-lg"
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-3xl">
                    <skill.Icon />
                  </div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                {/* Hover Description */}
                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl p-6 flex items-center justify-center text-white"
                    >
                      <p className="text-center">{skill.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default SkillSet;
