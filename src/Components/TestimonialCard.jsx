import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.03 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-semibold">{testimonial.name}</h4>
          <div className="flex text-yellow-400">
            {'★'.repeat(testimonial.rating)}
            {'☆'.repeat(5 - testimonial.rating)}
          </div>
        </div>
      </div>
      <p className="text-gray-600 italic">"{testimonial.content}"</p>
    </motion.div>
  );
};

export default TestimonialCard;