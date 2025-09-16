import React, { useState } from 'react';
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const AboutStats = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  const stats = [
    { number: 15, suffix: "+", label: "Years in Business" },
    { number: 5000, suffix: "+", label: "Properties Sold" },
    { number: 50, suffix: "+", label: "Expert Agents" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
  ];

  return (
    <div>
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                viewport={{ once: true }}
                onViewportEnter={() => setStartAnimation(true)}
              >
                <div className="text-4xl font-bold mb-2">
                  {startAnimation && (
                    <CountUp
                      start={0}
                      end={stat.number}
                      duration={2.5}
                      suffix={stat.suffix}
                    />
                  )}
                </div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutStats;