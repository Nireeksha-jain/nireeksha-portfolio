import { useState, useEffect } from 'react'
import { motion, AnimatePresence, animate } from 'framer-motion'


// Project Data
const allProjects = [
  {
    title: "MERN Translation Tool",
    type: "Client",
    description:
      "Internal translation system for Mercedes-Benz (TCS). Enabled bulk uploads, filtering, and DynamoDB scaling using MERN.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "DynamoDB"],
  },
  {
    title: "Seat Management System",
    type: "Internship",
    description:
      "Spring Boot + React app at Accolite for real-time office seating. Role-based access and automated reporting included.",
    tech: ["Spring Boot", "React", "MySQL", "REST API"],
  },
  {
    title: "Artisan E-Commerce Platform",
    type: "Personal",
    description:
      "Full-stack site for artisans. Login, checkout, and product listings built using Spring Boot, React, and MySQL.",
    tech: ["Spring Boot", "React", "MySQL", "JWT"],
  },
  {
    title: "Portfolio v2",
    type: "Personal",
    description:
      "This very site! Made with React, Tailwind, and Framer Motion. Includes theme toggle, modals, and animation.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
  },
]

// Filter Tags
const tags = ["All", "Client", "Internship", "Personal"]

// Animated Counter Component
function AnimatedCounter({ label, target, color = "orange" }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 1.2,
      onUpdate: value => setCount(Math.floor(value)),
    })
    return () => controls.stop()
  }, [target])

  const colorMap = {
    orange: "from-orange-200 to-orange-500",
    purple: "from-purple-200 to-fuchsia-500",
    teal: "from-teal-200 to-cyan-500",
  }

  return (
    <motion.div
      className={`w-40 h-24 sm:h-28 sm:w-48 rounded-2xl shadow-md flex flex-col items-center justify-center text-white bg-gradient-to-tr ${colorMap[color]}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-3xl sm:text-4xl font-bold">{count}+</h3>
      <p className="text-xs sm:text-sm mt-1">{label}</p>
    </motion.div>
  )
}



export default function Projects() {
  const [active, setActive] = useState("All")
  const filtered = active === "All" ? allProjects : allProjects.filter(p => p.type === active)

  return (
    <section id="projects" className="py-20 px-6 ml-20 ">
      {/* Section Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-14 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Featured Projects
      </motion.h2>

      {/* Animated Counters */}
<div className="flex flex-wrap justify-center gap-12 mb-10">
  <AnimatedCounter label="Projects" target={4} color="orange" />
  <AnimatedCounter label="Industry Roles" target={2} color="purple" />
  <AnimatedCounter label="Live Products" target={1} color="teal" />
</div>


      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActive(tag)}
            className={`px-4 py-1.5 text-sm font-medium rounded-full border ${
              active === tag
                ? "bg-blue-600 text-white dark:bg-yellow-400 dark:text-black"
                : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            } transition`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <motion.div layout className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              layout
              key={project.title}
              className="bg-white dark:bg-[#1a1a1a] p-6 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:scale-[1.02] transition-all group"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <h3 className="text-lg md:text-xl font-semibold mb-3 group-hover:text-blue-600 dark:group-hover:text-yellow-400 transition">
                {project.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Client Logos */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-10 opacity-60 grayscale dark:invert">
        <img src="./assets/tcs.jpeg" alt="TCS" className="h-12" />
        <img src="./assets/mercedes.png" alt="Mercedes-Benz" className="h-20" />
        <img src="./assets/accolite.png" alt="Accolite" className="h-20" />
      </div>
      
    </section>
  )
}
