import React from 'react'
import { motion } from "framer-motion";

const AboutStory = () => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Our Office"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:pl-12"
            >
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2008, EstatePro began as a small real estate agency
                with a big vision: to transform the property buying and selling
                experience. Our founder, John Smith, recognized the need for a
                more personalized, transparent approach to real estate services.
              </p>
              <p className="text-gray-600 mb-4">
                Over the years, we've grown from a team of three passionate
                agents to a comprehensive real estate powerhouse with offices
                across the country. Despite our growth, we've never lost sight
                of our core values: integrity, expertise, and client
                satisfaction.
              </p>
              <p className="text-gray-600">
                Today, EstatePro is recognized as a leader in the real estate
                industry, known for our innovative approach, market expertise,
                and unwavering commitment to helping clients achieve their
                property goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutStory
