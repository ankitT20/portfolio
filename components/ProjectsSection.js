'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: "Journal App – SpringBoot 📓",
    description: "Secure, production-grade journaling API with JWT/OAuth2 authentication, role-based access control, and sentiment-tagged entries using Spring Boot and MongoDB.",
    tech: "Java, Spring Boot, MongoDB, JWT, OAuth2, Kafka, Postman, SonarCloud",
    link: "https://github.com/ankitT20/journalApp"
  },
  {
    title: "Full Stack CI/CD App – AWS to GCP 🌐",
    description: "Containerized full-stack application with multi-stage Docker builds, CI/CD pipelines, and Kubernetes deployment on GKE with secure HTTPS routing.",
    tech: "React, Express, Redis, PostgreSQL, Docker, Travis CI, AWS EB, GKE, Helm",
    link: "https://github.com/ankitt20/k8sApp"
  },
  {
    title: "Unified Academic Services Platform 🎓",
    description: "Full-stack Learning Management System with multilingual support, third-party integrations, and scalable architecture deployed on AWS.",
    tech: "Python, Django, PostgreSQL, React.js, Node.js, AWS, Stripe, Celery, Redis",
    link: "https://github.com/ankitT20/UASP"
  },
  {
    title: "Signature Authentication 🔏",
    description: "Optimized signature datasets using advanced preprocessing with deep learning models (Shallow CNN, ResNet, Siamese) for BHSig260 & CEDAR datasets. Developed robust forgery detection system with 50% efficiency gain.",
    tech: "NumPy, OpenCV, TensorFlow, Keras, Python, Machine Learning",
    link: "https://github.com/ankitT20/SignatureAuth"
  }
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 text-white bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-12"
        >
          💼 My Projects
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="backdrop-blur-sm bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg text-left"
            >
              <h3 className="text-xl font-semibold mb-1 text-purple-400">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{project.description}</p>
              <p className="text-xs text-gray-400 mb-4">🔧 {project.tech}</p>
              <a href={project.link} target="_blank" className="text-purple-300 hover:underline text-sm">🌐 Visit Project</a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
