// Nireeksha Jain — Premium Portfolio v2 (React + Tailwind + Framer Motion)
// This version includes Vertical Navbar with Icons, Branded Hero, Animated Transitions, and Typing Animation

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Moon, Sun, Download, Home, Folder, User, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import profileImage from '../public/profile.jpg'
import { TypeAnimation } from 'react-type-animation'
import Projects from './components/Project'
import Contact from './components/Contact'
import About from './components/About'

function Navbar({ dark, toggleTheme }) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-20 bg-white dark:bg-[#0a0a0a] shadow-lg flex flex-col items-center justify-between py-6 z-50">
      <div className="flex flex-col gap-6 items-center text-gray-700 dark:text-gray-300">
        <Link to="/" title="Home" className="hover:text-blue-500">
          <Home className="w-6 h-6" />
        </Link>
        <a href="projects" title="Projects" className="hover:text-blue-500">
          <Folder className="w-6 h-6" />
        </a>
        <a href="about" title="About" className="hover:text-blue-500">
          <User className="w-6 h-6" />
        </a>
        <a href="contact" title="Contact" className="hover:text-blue-500">
          <Mail className="w-6 h-6" />
        </a>
      </div>
      <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-800">
        {dark ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
      </button>
    </nav>
  )
}

function Hero() {
  const [showAbout, setShowAbout] = useState(false)
  const [viewedStory, setViewedStory] = useState(false)

  const handleClick = () => {
    setShowAbout(true)
    setViewedStory(true)
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 ml-20">
      {/* Profile Ring Wrapper */}
      <motion.div
        onClick={handleClick}
        className={`cursor-pointer rounded-full p-1 transition-all duration-300 ${
          viewedStory
            ? 'border-2 border-gray-300 dark:border-gray-600' // viewed = neutral border
            : 'bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-500' // unviewed = colorful ring
        }`}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profileImage}
          alt="Nireeksha Jain"
          className="w-40 h-40 md:w-52 md:h-52 object-cover rounded-full bg-white dark:bg-[#0a0a0a] p-[2px]"
        />
      </motion.div>

      {/* Typing Heading */}
      <TypeAnimation
        sequence={["Hey, I'm Nireeksha.", 2000]}
        wrapper="h1"
        cursor={true}
        className="text-5xl md:text-6xl font-semibold tracking-tight mb-4 mt-6 text-[#1d1d1f] dark:text-[#f5f5f7]"
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
        repeat={Infinity}
      />

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
      >
        I design and engineer digital systems that feel as good as they function. Currently building an AI tool that detects scam messages based on tone and urgency.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div className="flex flex-col sm:flex-row gap-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <a
          href="/Nireeksha_Jain_Resume.pdf"
          download
          className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full font-medium shadow-md hover:scale-105 transition"
        >
          <Download className="inline mr-2 w-4 h-4" /> Resume
        </a>
        <a
          href="projects"
          className="border border-gray-500 px-6 py-3 rounded-full font-medium hover:scale-105 transition"
        >
          View Work
        </a>
      </motion.div>

      {/* About Me Modal */}
     {showAbout && (
  <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center px-4">
    <motion.div
      className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl max-w-xl w-full text-left text-[#1d1d1f] dark:text-[#f5f5f7] shadow-xl relative overflow-hidden"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={() => setShowAbout(false)}
        className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl"
      >
        ✕
      </button>

      {/* Top Profile Row */}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={profileImage}
          alt="Nireeksha"
          className="w-14 h-14 rounded-full object-cover border border-gray-300 dark:border-gray-600"
        />
        <div>
          <h2 className="text-xl font-semibold">Nireeksha Jain</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">PSM I Certified • Full Stack Developer • AI Enthusiast</p>
        </div>
      </div>

      {/* Body Text */}
      <div className="space-y-4 text-sm leading-relaxed md:text-base">
        <blockquote className="italic text-gray-500 dark:text-gray-400 border-l-4 pl-3 border-gray-300 dark:border-gray-600 mt-4">
          “Design is the silent ambassador of your brand.” — Paul Rand
        </blockquote>
        <p>
          I'm a <span className="text-blue-600 dark:text-yellow-400 font-medium">full-stack engineer</span> with a designer's heart — blending logic with elegance.
        </p>
        <p>
          Currently building an <span className="italic">AI-driven tool</span> to detect scam messages based on tone, urgency, and sentiment analysis.
        </p>
        <p>
          When I’m not coding or sketching wireframes, I’m usually journaling, reading about human behavior, or trying to reverse-engineer good UX from everyday things — like elevators, apps, or conversations.
        </p>
        
      </div>
      
    </motion.div>
  </div>
)}

    </section>
  )
}



function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <Router>
      <div className="bg-[#f5f5f7] dark:bg-[#0a0a0a] min-h-screen text-[#1d1d1f] dark:text-[#f5f5f7] transition-all font-sans">
        <Navbar dark={dark} toggleTheme={() => setDark(!dark)} />
        <Routes>
          <Route path="/" element={<Hero />} />
           <Route path="/projects" element={<Projects />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
           
        </Routes>
      </div>
    </Router>
  )
}

export default App
