import React from 'react'
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <div>
      <section className="relative text-white py-20 bg-[url('https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg')] bg-cover bg-center bg-no-repeat">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-600/80"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About EstatePro
            </h1>
            <p className="text-xl">
              Your trusted partner in finding the perfect property
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutHero
