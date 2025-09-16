import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md h-full flex flex-col"
    >
      <Link to={`/blog/${blog.id}`}>
        <div className="relative overflow-hidden h-48">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute top-0 left-0 bg-blue-600 text-white px-3 py-1 rounded-br-lg text-sm font-medium">
            {blog.category}
          </div>
        </div>
      </Link>
      <div className="p-4 flex-grow flex flex-col">
        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-blue-600 transition-colors">{blog.title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-3 flex-grow">{blog.excerpt}</p>
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>{blog.date}</span>
          <Link 
            to={`/blog/${blog.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Read More
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;