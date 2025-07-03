import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-7 px-6 ml-20 font-apple bg-white dark:bg-[#0d0d0d] text-neutral-900 dark:text-neutral-100 transition-all"
>
      {/* Heading */}
<motion.h2
  className="text-4xl md:text-5xl font-extrabold mb-16 text-center bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 bg-clip-text text-transparent tracking-tight"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  About Me
</motion.h2>


      {/* Two-Column Layout */}
      <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        {/* Left: Photo + Personal Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Photo
          <div className="w-40 h-20 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg mx-auto md:mx-0 border-4 border-white dark:border-gray-700">
            <img
              src="../public/about.jpg" // replace with your actual path
              alt="Nireeksha"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div> */}

          {/* Intro Paragraph */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base md:text-lg">
            Hi, I’m Nireeksha — a developer with an eye for design, a heart for purpose, and a head full of <em>“what ifs.”</em>
            <br /><br />
            I’ve always been fascinated not just by what we build, but <strong>why</strong> we build it. What impact does it create? What story does it tell? That curiosity has followed me everywhere — from debugging logic in classrooms, to collaborating on real-world projects, to staying up at 2 a.m. refining a side project no one asked for but I <em>needed</em> to finish.
            <br /><br />
            Structured environments taught me discipline. But what fuels me is the freedom to think beyond the ticket — to question assumptions, explore multiple roles, and bring creativity into every sprint.
            <br /><br />
            I don’t just want to write code. I want to make things that <strong>mean</strong> something. Someday, I hope to build a product of my own — shaped by everything I’ve learned and unlearned. Until then, I’m here to learn, build, grow, and maybe even surprise myself.
          </p>
        </motion.div>

        {/* Right: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-10 border-l-2 border-gray-300 dark:border-gray-700 pl-6 relative">
            {[ /* Timeline Items */ 
              {
                title: 'B.E. in Computer Science',
                date: 'PES College of Engineering, 2019 – 2023',
                desc: 'Built strong foundations, explored MERN stack, and grew from student to developer.',
                color: 'bg-blue-500',
              },
              {
                title: 'Intern — Accolite Digital',
                date: 'Feb 2023 – June 2023',
                desc: 'Built a real-time seat booking app using Spring Boot + React. Hands-on exposure to agile dev.',
                color: 'bg-green-500',
              },
              {
                title: 'System Engineer — TCS (Mercedes-Benz)',
                date: 'Nov 2023 – Nov 2024',
                desc: 'Led UI for translation tool in MERN, scaled DynamoDB, delivered production-ready features.',
                color: 'bg-purple-500',
              },
              {
                title: 'PSM I Certified — Scrum.org',
                date: 'July 2024',
                desc: 'Learned agile principles, team velocity, sprint planning, and cross-functional delivery.',
                color: 'bg-yellow-400',
              },
              {
                title: 'Now — Building & Exploring',
                date: '2025',
                desc: 'Designing my future through this portfolio, startup prep, and global study plans.',
                color: 'bg-pink-500 animate-pulse',
              },
            ].map((item, i) => (
             <div key={i} className="relative group">
  <div
    className={`absolute -left-[35px] top-1 w-5 h-5 ${item.color} rounded-full shadow-lg ring-2 ring-white dark:ring-neutral-800 group-hover:scale-110 transition-transform`}
  ></div>
  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
  <p className="text-sm text-gray-600 dark:text-gray-400 italic">{item.date}</p>
  <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{item.desc}</p>
  
</div>

            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
