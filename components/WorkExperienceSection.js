'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const workExperiences = [
  {
    role: "Agentic AI Engineer",
    company: "Prodigal AI",
    period: "Jan 2025 - present",
    location: "Delhi, India",
    description: "Co-developed modular agentic AI frameworks enabling automated multi-agent workflows, API integrations, and custom toolchains for scalable AI solutions including an Multi-speaker AI podcast generator. Designed cloud-native, scalable LLM inference pipelines using Docker and Python, achieving 3x latency reduction and 30% lower resource costs.",
    image: "prodigalLogo.png",
    imageAlt: "Prodigal AI Logo"
  },
  {
    role: "Financial Research Engineer",
    company: "Assetgro Fintech Pvt. Ltd. (StockGro)",
    period: "Aug 2022 - Dec 2022",
    location: "Delhi, India", 
    description: "Engineered a real-time data visualization system by integrating Python microservices (Flask and WebSocket APIs) to revamp live information feeds and sections, driving a 15% increase in subscription engagement and retention. Developed analytics pipeline leveraging Python web scraping and NSE API integration to fetch, process, and visualize real-time Nifty stock data.",
    image: "StockGro_Internship.jpg",
    imageAlt: "StockGro Internship Certificate"
  },
  {
    role: "Data Analytics Intern",
    company: "IBM SkillsBuild Summer Internship Program",
    period: "6-week program",
    location: "Remote",
    description: "Completed a comprehensive 6-week IBM SkillsBuild Summer Internship Program in Data Analytics with CSRBOX. Gained hands-on experience in data analysis, visualization, and machine learning techniques using IBM tools and technologies.",
    image: "IBM_Internship.jpg", 
    imageAlt: "IBM Internship Certificate"
  }
]

export default function WorkExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          💼 Work Experience
        </motion.h2>

        <div className="space-y-12">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className="flex-1 backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg">
                <h3 className="text-2xl font-bold text-purple-400 mb-2">
                  {experience.role}
                </h3>
                <h4 className="text-xl font-semibold text-gray-300 mb-1">
                  {experience.company}
                </h4>
                <p className="text-sm text-purple-300 mb-1">
                  {experience.period} | {experience.location}
                </p>
                <p className="text-gray-300 leading-relaxed">
                  {experience.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-48 h-48 lg:w-64 lg:h-64 rounded-xl overflow-hidden border-2 border-purple-500 shadow-2xl bg-white/10 flex items-center justify-center"
                >
                  {experience.image ? (
                    <Image
                      src={`/${experience.image}`}
                      alt={experience.imageAlt}
                      width={256}
                      height={256}
                      className="object-fill w-full h-full"
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🏢</div>
                      <p className="text-sm">Image: {experience.image}</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}