import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard';

const recentBlogs = [
  {
    id: 1,
    title: 'Top 10 Neighborhoods for Families in 2023',
    excerpt: 'Discover the best family-friendly neighborhoods with excellent schools, parks, and amenities.',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'May 15, 2023',
    category: 'Neighborhoods'
  },
  {
    id: 2,
    title: 'How to Increase Your Home Value Before Selling',
    excerpt: 'Learn simple and cost-effective ways to boost your property value before listing it on the market.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'April 28, 2023',
    category: 'Selling Tips'
  },
  {
    id: 3,
    title: 'The Future of Smart Homes',
    excerpt: 'Explore the latest technology trends that are transforming modern homes into smart living spaces.',
    image: 'https://images.unsplash.com/photo-1558002038-1055e2e8ecea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    date: 'April 10, 2023',
    category: 'Technology'
  }
];

const RecentBlogsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Latest from Our Blog
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Stay updated with the latest trends, tips, and insights in the real estate market
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recentBlogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <BlogCard blog={blog} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link to="/blogs">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View All Blogs
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RecentBlogsSection;