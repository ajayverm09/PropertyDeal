import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUsPreviewSection = () => {
  return (
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
              alt="Our Team" 
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
            <h2 className="text-3xl font-bold mb-4">About EstatePro</h2>
            <p className="text-gray-600 mb-4">
              With over 15 years of experience in the real estate industry, EstatePro has established itself as a trusted name in property services. Our team of dedicated professionals is committed to helping clients find their perfect homes or investment opportunities.
            </p>
            <p className="text-gray-600 mb-6">
              We pride ourselves on our personalized approach, market expertise, and unwavering commitment to client satisfaction. Whether you're buying, selling, or renting, we're here to guide you through every step of the process.
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPreviewSection;