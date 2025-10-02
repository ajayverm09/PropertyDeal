import React from "react";
import { motion } from "framer-motion";

const milestones = [
  {
    year: "2008",
    title: "Company Founded",
    description:
      "EstatePro was established with a mission to provide exceptional real estate services.",
  },
  {
    year: "2012",
    title: "Expanded to 5 Cities",
    description:
      "Our rapid growth led to expansion across major metropolitan areas.",
  },
  {
    year: "2016",
    title: "1000+ Properties Sold",
    description:
      "Reached a significant milestone of over 1000 successful property transactions.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Launched our innovative digital platform to enhance client experience.",
  },
  {
    year: "2023",
    title: "National Recognition",
    description:
      'Received the "Best Real Estate Agency" award at the National Property Awards.',
  },
  {
    year: "2025",
    title: "Next-Gen Expansion",
    description:
      "EstatePro sets its sights on international markets and launches AI-powered property solutions.",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          Our <span className="text-blue-600">Journey</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Key milestones in our growth and success
        </p>
      </div>

      <div className="relative w-full max-w-6xl mx-auto px-4 md:px-8">
        {/* Vertical Gradient Line (only on md+) */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600"></div>

        {milestones.map((event, index) => {
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-16 flex w-full items-center ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`relative w-full md:w-[45%] bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-500 hover:shadow-2xl hover:scale-105 transition-all duration-300
                  ${isLeft ? "md:text-right md:pr-8" : "md:text-left md:pl-8"} 
                  text-left`}
              >
                {/* Dot inside card for mobile */}
                <div className="absolute -top-3 -left-3 md:hidden w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </div>

                <span className="text-blue-600 font-bold text-lg tracking-wide">
                  {event.year}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold mt-2 text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-gray-600 mt-2 leading-relaxed text-sm md:text-base">
                  {event.description}
                </p>
              </div>

              {/* Dot in center for md+ */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full border-4 border-white shadow-lg shadow-blue-400 hover:scale-125 transition-transform duration-300 items-center justify-center text-white text-sm font-bold">
                {index + 1}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Timeline;
