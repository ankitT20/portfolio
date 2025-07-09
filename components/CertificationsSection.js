'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner (CLF-C02)",
    description: "Comprehensive understanding of AWS Cloud concepts, security, pricing, and support. Validated knowledge of cloud computing fundamentals and AWS services across compute, storage, networking, and database domains.",
    image: "AWS_Certified_Cloud_Practitioner_certificate.jpg",
    imageAlt: "AWS Certified Cloud Practitioner Certificate",
    badgeColor: "text-orange-400"
  },
  {
    title: "GitHub Foundations", 
    description: "Demonstrated proficiency in Git version control, GitHub workflow, collaboration features, and open source contribution practices. Essential skills for modern software development and team collaboration.",
    image: "GitHubFoundations.jpg",
    imageAlt: "GitHub Foundations Certificate",
    badgeColor: "text-teal-300"
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    description: "Foundational knowledge of Oracle Cloud Infrastructure services, architecture, security, and pricing models. Understanding of cloud concepts and OCI core services including compute, storage, and networking.",
    image: "OCI_eCertificate.jpg", 
    imageAlt: "Oracle Cloud Infrastructure Foundations Certificate",
    badgeColor: "text-red-400"
  },
  {
    title: "OCI 2025 Certified AI Foundations Associate",
    description: "Specialized knowledge in Oracle Cloud AI services, machine learning capabilities, and AI/ML workflows on OCI. Understanding of AI service integration and implementation strategies in cloud environments.",
    image: "OCI_AI_associate.jpg",
    imageAlt: "Oracle Cloud Infrastructure AI Foundations Certificate", 
    badgeColor: "text-blue-400"
  }
]

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          🏆 My Certifications
        </motion.h2>

        <div className="space-y-12">
          {certifications.map((cert, index) => (
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
                <h3 className={`text-2xl font-bold mb-4 ${cert.badgeColor}`}>
                  {cert.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Image */}
              <div className="flex-shrink-0">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-48 h-48 lg:w-80 lg:h-62 rounded-xl overflow-hidden border-2 border-purple-500 shadow-2xl bg-white/10 flex items-center justify-center"
                >
                  {cert.image ? (
                    <Image
                      src={`/${cert.image}`}
                      alt={cert.imageAlt}
                      width={256}
                      height={256}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">🏆</div>
                      <p className="text-sm">Image: {cert.image}</p>
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