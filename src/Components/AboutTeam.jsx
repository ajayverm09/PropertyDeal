import React from "react"
import { motion } from "framer-motion"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const teamMembers = [
  {
    name: "Jane Smith",
    position: "CEO",
    bio: "Leading with vision and passion for real estate excellence.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "John Doe",
    position: "Head of Marketing",
    bio: "Crafting strategies that connect people with properties.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Emily Davis",
    position: "Senior Agent",
    bio: "Helping clients find their dream homes with expertise and care.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    name: "Michael Brown",
    position: "Client Relations Manager",
    bio: "Dedicated to providing an exceptional customer experience.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    socials: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
]

const AboutTeam = () => {
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600">
              The passionate professionals behind EstatePro&apos;s success
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-md overflow-hidden text-center group relative"
              >
                {/* Image with overlay */}
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/70 flex items-start justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex gap-4 mt-6 transform -translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                      <a
                        href={member.socials.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-600 transition"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-sky-500 transition"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-white text-white hover:bg-white hover:text-blue-700 transition"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutTeam
