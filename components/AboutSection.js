'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-24 pt-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          👋 About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
        >
          <p className="text-lg leading-relaxed text-gray-300">
            I&apos;m <span className="text-purple-400 font-semibold">Ankit Tayal</span>, an Agentic AI Engineer passionate about building scalable AI solutions and full-stack applications.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
             I graduated with a <span className="text-purple-400 font-semibold">B.Tech</span> in Industrial Internet of Things from <span className="text-purple-400 font-semibold">University School of Automation & Robotics</span>, GGSIPU (2021–2025) with a CGPA of <span className="text-purple-300 font-semibold">8/10</span>.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
             Currently working at <span className="text-purple-400 font-semibold">Prodigal AI</span>, I specialize in developing modular agentic AI frameworks, LLM inference pipelines, and cloud-native solutions using Docker, Python, and Kubernetes.
          </p>

          <p className="text-lg leading-relaxed text-gray-300 mt-4">
             I&apos;m a <span className="text-purple-400 font-semibold">AWS Certified Cloud Practitioner</span> and <span className="text-purple-400 font-semibold">GitHub Foundations certified</span> developer with expertise in DevOps, microservices, and full-stack development.
          </p>

        

          {/* <div className="mt-6 grid sm:grid-cols-2 gap-4 text-sm text-gray-400">
            <p>💡 I enjoy solving real-world problems through code.</p>
            <p>🎤 I&apos;m also a public speaker & anchor 🎙️</p>
            <p>💪 Gym lover — strength & frontend gains!</p>
            <p>📚 Always learning — currently exploring Next.js</p>
            <p>🍿 I unwind with comedy and rom-com movies & web series</p>
            <p>🛫 Travelling & street food hunting fuel my creativity</p>
            <p>🎨 I love designing beautiful and accessible frontend UIs</p>
            <p>🎭 Actively involved in cultural events</p>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
}
