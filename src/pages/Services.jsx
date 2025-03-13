import React from "react";
import { motion } from "framer-motion";
import aluminiumImage from '../assets/images/aluminium.jpg';
import cabinetImage from '../assets/images/cabinet.jpg';
import technicalImage from '../assets/images/Technical.jpg';



const ServicesPage = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Expertise in Design & Precision
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          We specialize in creating custom aluminum, cabinetry, and technical designs tailored to your needs.
        </motion.p>
      </section>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Aluminum Design Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <img
            src= {aluminiumImage}
            alt="Aluminum Design"
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Aluminum Design</h3>
          <p className="text-gray-600 mb-4">
            High-end, durable aluminum designs for modern architecture and interiors.
          </p>
          <motion.a
            href="/aluminum-designs"
            className="text-yellow-400 font-bold hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Cabinet Design Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <img
            src= {cabinetImage}
            alt="Cabinet Design"
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Cabinet Design</h3>
          <p className="text-gray-600 mb-4">
            Custom cabinetry solutions to enhance your home or office space.
          </p>
          <motion.a
            href="/cabinet-designs"
            className="text-yellow-400 font-bold hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Technical Design Card */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <img
            src= {technicalImage}
            alt="Technical Design"
            className="h-48 w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-2xl font-semibold text-blue-900 mb-2">Technical Design</h3>
          <p className="text-gray-600 mb-4">
            Precision technical designs for construction, engineering, and manufacturing.
          </p>
          <motion.a
            href="/technical-drawings"
            className="text-yellow-400 font-bold hover:underline"
            whileHover={{ scale: 1.1 }}
          >
            Learn More
          </motion.a>
        </motion.div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-12">
        <motion.h2
          className="text-3xl font-extrabold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Let's Work Together
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          Ready to start your project? Reach out to us and bring your ideas to life.
        </motion.p>
        <motion.a
          href="/contact"
          className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Contact Us
        </motion.a>
      </div>
    </div>
  );
};

export default ServicesPage;
