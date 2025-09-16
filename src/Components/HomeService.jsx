import { motion } from 'framer-motion';

const ServicesSection = () => {
  const services = [
    {
      title: 'Property Buying',
      description: 'Find your dream home with our extensive property listings.',
      icon: '🏠'
    },
    {
      title: 'Property Selling',
      description: 'Sell your property at the best price with our expert agents.',
      icon: '💰'
    },
    {
      title: 'Property Rental',
      description: 'Discover rental properties that fit your lifestyle and budget.',
      icon: '🔑'
    },
    {
      title: 'Property Management',
      description: 'Professional management services for your property investments.',
      icon: '📊'
    },
    {
      title: 'Property Investment',
      description: 'Strategic investment opportunities to grow your real estate portfolio.',
      icon: '📈'
    },
    {
      title: 'Home Valuation',
      description: 'Accurate property appraisal to determine market value.',
      icon: '📋'
    },
    {
      title: 'Relocation Assistance',
      description: 'Comprehensive support for moving to a new area or country.',
      icon: '🚚'
    },
    {
      title: 'Legal Consultation',
      description: 'Expert legal guidance for all your real estate transactions.',
      icon: '⚖️'
    }
  ];

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50 w-full overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Comprehensive real estate solutions tailored to meet your specific needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col items-center text-center group"
            >
              <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 text-base md:text-lg flex-grow">
                {service.description}
              </p>
              <div className="mt-4 w-12 h-1 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;