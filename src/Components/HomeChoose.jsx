import { motion } from 'framer-motion';

const WhyChooseUsSection = () => {
  const features = [
    {
      title: 'Expert Agents',
      description: 'Our team consists of highly trained real estate professionals with deep market knowledge.'
    },
    {
      title: 'Personalized Service',
      description: 'We tailor our approach to meet your unique needs and preferences.'
    },
    {
      title: 'Extensive Network',
      description: 'Access to exclusive listings and a wide network of industry professionals.'
    },
    {
      title: 'Transparent Process',
      description: 'We believe in complete transparency throughout the buying or selling process.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:w-1/2 mb-10 md:mb-0"
          >
            <img 
              src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
              alt="Real Estate" 
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pr-12"
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose EstatePro</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4 mt-1">
                    <span className="text-blue-600">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;