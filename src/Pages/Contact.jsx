import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AboutTeam from "../Components/AboutTeam";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would submit the form data to a server here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Our Location",
      details: "123 Real Estate Blvd, Suite 100<br />New York, NY 10001",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone Number",
      details: "(555) 123-4567<br />Mon-Fri 9am-6pm",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Address",
      details: "info@estatepro.com<br />support@estatepro.com",
    },
    {
      icon: <Clock size={24} />,
      title: "Office Hours",
      details: "Monday-Friday: 9am-6pm<br />Saturday: 10am-4pm",
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white py-20"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg')",
        }} // replace with your image path
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/90 to-blue-600/70"></div>

        <div className="container relative mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">
              We're here to help you find your dream property
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-[4px_0_10px_rgba(0,0,0,0.15)] text-center transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-blue-600 mb-4 flex justify-center text-3xl">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: info.details }}
                ></p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-1"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your message"
                      required
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="bg-white p-4 rounded-lg shadow-lg h-full">
                <h2 className="text-2xl font-bold mb-6">Our Location</h2>
                <div className="h-96 rounded-lg overflow-hidden">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.999751009076!2d-73.98513068459306!3d40.75889604233415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855d2367e27%3A0xb317e1e5f84e6e8a!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1632782162280!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <AboutTeam />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How do I get started with buying a home?",
                answer:
                  "Getting started is easy! Simply contact us through our website or give us a call. We'll schedule a consultation to discuss your needs, preferences, and budget. From there, we'll help you get pre-approved for a mortgage and begin the home search process.",
              },
              {
                question: "What areas do you serve?",
                answer:
                  "We primarily serve the New York metropolitan area, including Manhattan, Brooklyn, Queens, the Bronx, and Staten Island, as well as surrounding counties in New York, New Jersey, and Connecticut. However, our network extends nationwide, so we can assist with relocation to other areas as well.",
              },
              {
                question:
                  "How much does it cost to work with a real estate agent?",
                answer:
                  "For buyers, our services are typically free as the seller usually pays the commission. For sellers, commission rates vary but typically range from 5% to 6% of the sale price. We'll discuss all fees upfront during our initial consultation so there are no surprises.",
              },
              {
                question: "How long does the home buying process usually take?",
                answer:
                  "The home buying process typically takes between 30 to 60 days from the time you make an offer to closing. However, this timeline can vary depending on market conditions, financing, and other factors. We'll work to make the process as smooth and efficient as possible.",
              },
              {
                question: "Can you help with property management services?",
                answer:
                  "Yes, we offer comprehensive property management services for rental properties and investment properties. Our services include tenant screening, rent collection, maintenance coordination, financial reporting, and more. Contact us to learn more about our property management solutions.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md mb-6"
              >
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
