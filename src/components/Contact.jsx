import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import pic from '../assets/pic.jpg'

const EMOJIS = ['✨', '☕', '🐞', '💬', '🌐', '💻', '🚀', '🔧', '⚡', '📡', '🧠', '🎯', '📦']

function EmojiParticles() {
  const emojiRefs = useRef([])
  const positions = useRef([])
  const velocities = useRef([])

  useEffect(() => {
    const screenW = window.innerWidth
    const screenH = window.innerHeight

    // Init
    EMOJIS.forEach((_, i) => {
      positions.current[i] = {
        x: Math.random() * screenW,
        y: Math.random() * screenH,
      }
      velocities.current[i] = {
        dx: (Math.random() - 0.5) * 1.5,
        dy: (Math.random() - 0.5) * 1.5,
      }
    })

    const animate = () => {
      EMOJIS.forEach((_, i) => {
        let { x, y } = positions.current[i]
        let { dx, dy } = velocities.current[i]

        x += dx
        y += dy

        const size = 40 // approx emoji size
        if (x < 0 || x > screenW - size) dx *= -1
        if (y < 0 || y > screenH - size) dy *= -1

        positions.current[i] = { x, y }
        velocities.current[i] = { dx, dy }

        const el = emojiRefs.current[i]
        if (el) el.style.transform = `translate(${x}px, ${y}px)`
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {EMOJIS.map((emoji, i) => (
        <div
          key={i}
          ref={(el) => (emojiRefs.current[i] = el)}
          className="absolute text-3xl sm:text-4xl opacity-20 select-none"
          style={{ top: 0, left: 0, transform: 'translate(0px, 0px)' }}
        >
          {emoji}
        </div>
      ))}
    </div>
  )
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 ml-20 font-apple overflow-hidden"
    >
      {/* Radial Glow */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-pink-100 dark:bg-pink-900 opacity-20 blur-[120px] rounded-full"></div>
      </div>

      {/* Dotted Grid */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_#d1d5db_1px,_transparent_1px)] dark:bg-[radial-gradient(circle,_#374151_1px,_transparent_1px)] bg-[length:22px_22px] opacity-20 pointer-events-none"></div>

      {/* Floating Emojis */}
      <EmojiParticles />
<motion.img
  src={pic}
  alt="Nireeksha Jain"
className="w-24 h-24 rounded-full mx-auto mb-6 shadow-lg object-cover relative z-20"
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
/>
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Connect —
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 text-base md:text-lg relative z-10 text-center"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        Open to conversations, collaborations, or just a friendly hello. <br />
        Feel free to drop a message or explore more of my work:
      </motion.p>

      {/* Contact Icons */}
      <motion.div
        className="flex justify-center gap-6 text-gray-700 dark:text-gray-300 mb-12 relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <a
          href="mailto:ssnireekshajain071201@gmail.com"
          className="group hover:text-orange-500 transition"
        >
          <Mail className="w-6 h-6 mx-auto mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-sm">Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:text-blue-500 transition"
        >
          <Linkedin className="w-6 h-6 mx-auto mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-sm">LinkedIn</span>
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="group hover:text-purple-500 transition"
        >
          <Github className="w-6 h-6 mx-auto mb-1 group-hover:scale-110 transition-transform" />
          <span className="text-sm">GitHub</span>
        </a>
      </motion.div>

      {/* Footer Sarcasm Line */}
      <motion.p
        className="text-sm text-gray-500 dark:text-gray-400 italic relative z-10 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Crafted with love — powered by bugs & blind optimism ☕✨
      </motion.p>
    </section>
  )
}
