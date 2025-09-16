import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Property Buying", path: "/services/buying" },
    { name: "Property Selling", path: "/services/selling" },
    { name: "Property Rental", path: "/services/rental" },
    { name: "Property Management", path: "/services/management" },
  ];

  const contactInfo = [
    {
      icon: <MapPin size={18} />,
      text: "123 Real Estate Blvd, New York, NY 10001",
    },
    { icon: <Phone size={18} />, text: "(555) 123-4567" },
    { icon: <Mail size={18} />, text: "info@estatepro.com" },
    { icon: <Clock size={18} />, text: "Mon-Fri: 9am-6pm, Sat: 10am-4pm" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook size={20} />, url: "#" },
    { name: "Twitter", icon: <Twitter size={20} />, url: "#" },
    { name: "Instagram", icon: <Instagram size={20} />, url: "#" },
    { name: "LinkedIn", icon: <Linkedin size={20} />, url: "#" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-blue-900 text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold mb-4 flex items-center"
            >
              <span className="bg-yellow-500 text-blue-900 w-10 h-10 rounded-full flex items-center justify-center mr-2">
                E
              </span>
              EstatePro
            </motion.div>
            <p className="text-blue-200 mb-6">
              Your trusted partner in finding the perfect property. With over 15
              years of experience, we help clients achieve their real estate
              goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li key={link.name} whileHover={{ x: 5 }}>
                  <Link
                    to={link.path}
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <motion.li key={service.name} whileHover={{ x: 5 }}>
                  <Link
                    to={service.path}
                    className="text-blue-200 hover:text-white transition-colors flex items-center"
                  >
                    <span className="mr-2">›</span> {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 mb-6">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <span className="text-yellow-400 mr-3 mt-1">{info.icon}</span>
                  <span className="text-blue-200">{info.text}</span>
                </motion.li>
              ))}
            </ul>

            <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
            <p className="text-blue-200 mb-3">
              Subscribe for updates and real estate tips
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg w-full text-white  outline-2 outline-white focus:outline-yellow-400 transition-all duration-300"
                required
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-4 py-2 rounded-r-lg transition-colors"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-blue-800 pt-6 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-blue-300 text-sm mb-4 md:mb-0">
            &copy; {currentYear} EstatePro. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="/privacy"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
