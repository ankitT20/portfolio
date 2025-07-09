'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaDatabase,
  FaGitAlt, FaAws, FaJs, FaDocker, FaLinux
} from 'react-icons/fa'
import {
  SiMongodb, SiPostgresql, SiNextdotjs, SiTailwindcss, SiTypescript,
  SiFirebase, SiC, SiCplusplus, SiKubernetes, SiTerraform, SiJenkins,
  SiPrometheus, SiGrafana, SiSpringboot, SiRedis, SiElasticsearch,
  SiGooglecloud, SiTravisci, SiPostman, SiOracle, SiGithubactions
} from 'react-icons/si'

const skills = [
  // Programming Languages
  { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
  { name: 'Java', icon: <FaJava />, color: 'text-red-400' },
  { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-300' },
  { name: 'C++', icon: <SiCplusplus />, color: 'text-blue-300' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: <FaAws />, color: 'text-orange-300' },
  { name: 'GCP', icon: <SiGooglecloud />, color: 'text-blue-400' },
  { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
  { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-600' },
  { name: 'Terraform', icon: <SiTerraform />, color: 'text-purple-400' },
  { name: 'Jenkins', icon: <SiJenkins />, color: 'text-blue-300' },
  
  // Monitoring & Tools
  { name: 'Prometheus', icon: <SiPrometheus />, color: 'text-orange-500' },
  { name: 'Grafana', icon: <SiGrafana />, color: 'text-orange-400' },
  { name: 'ELK Stack', icon: <SiElasticsearch />, color: 'text-yellow-500' },
  { name: 'GitHub Actions', icon: <SiGithubactions />, color: 'text-gray-300' },
  { name: 'Travis CI', icon: <SiTravisci />, color: 'text-green-400' },
  
  // Frameworks & Databases
  { name: 'Spring Boot', icon: <SiSpringboot />, color: 'text-green-500' },
  { name: 'React', icon: <FaReact />, color: 'text-cyan-400' },
  { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-white' },
  { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
  { name: 'PostgreSQL', icon: <SiPostgresql />, color: 'text-blue-500' },
  { name: 'Redis', icon: <SiRedis />, color: 'text-red-500' },
  
  // System & Others
  { name: 'Linux', icon: <FaLinux />, color: 'text-yellow-600' },
  { name: 'Git', icon: <FaGitAlt />, color: 'text-red-400' },
  { name: 'Postman', icon: <SiPostman />, color: 'text-orange-500' },
]

export default function CleanSkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          🚀 My Skills
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-md bg-white/5 p-8 rounded-xl border border-white/10 shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Profile Image */}
            <div className="w-60 h-60 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
              <Image
                src="/skills2pic.jpeg"
                alt="Ankit Tayal"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
            </div>

            {/* Skill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow text-sm justify-center ${skill.color}`}
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
