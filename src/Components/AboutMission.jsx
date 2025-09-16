import React from "react"
import { motion } from "framer-motion"
import {
  FaShieldAlt,
  FaStar,
  FaLightbulb,
  FaUserTie,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa"

const AboutMission = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
              <p className="text-gray-600">
                The principles that guide everything we do
              </p>
            </motion.div>

            {/* Mission, Vision, +2 More */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To provide exceptional real estate services that exceed client
                  expectations through market expertise, innovative solutions,
                  and unwavering integrity. We strive to make every property
                  transaction a seamless, rewarding experience for our clients.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To be the most trusted and innovative real estate agency,
                  recognized for transforming the property experience through
                  technology, expertise, and personalized service that puts
                  clients first.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Our Commitment
                </h3>
                <p className="text-gray-600">
                  We are committed to building long-term relationships by
                  putting our clients’ needs first and delivering reliable,
                  transparent, and ethical services at every stage.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-semibold mb-3 text-blue-600">
                  Sustainability
                </h3>
                <p className="text-gray-600">
                  We believe in promoting sustainable practices within the real
                  estate industry, ensuring our growth positively impacts
                  communities and the environment.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { name: "Integrity", icon: <FaShieldAlt className="text-xl" /> },
                  { name: "Excellence", icon: <FaStar className="text-xl" /> },
                  { name: "Innovation", icon: <FaLightbulb className="text-xl" /> },
                  { name: "Client Focus", icon: <FaUserTie className="text-xl" /> },
                  { name: "Teamwork", icon: <FaUsers className="text-xl" /> },
                  { name: "Community", icon: <FaHandHoldingHeart className="text-xl" /> },
                ].map((value, index) => (
                  <motion.div
                    key={value.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="bg-white p-5 rounded-lg shadow-md text-center"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-blue-600">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold">{value.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutMission