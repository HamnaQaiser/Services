import React from "react";
import aluminiumImage from '../../assets/images/aluminium.jpg';
const AluminumDesign = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">
        Aluminum Designs
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Our aluminum design solutions blend aesthetics and durability to create stunning, long-lasting results.
      </p>

      <img
        src= {aluminiumImage}
        alt="Aluminum Design Example"
        className="w-full h-auto max-h-[500px] md:max-h-[400px] object-cover rounded-lg mb-8 shadow-lg"
      />

      <h2 className="text-3xl font-bold text-blue-900 mb-4">Why Choose Us?</h2>
      <ul className="list-disc pl-6 text-lg text-gray-600 mb-8">
        <li>Customizable aluminum facades for modern architecture.</li>
        <li>Durable, lightweight, and eco-friendly materials.</li>
        <li>Innovative designs tailored to your needs.</li>
      </ul>

      <p className="text-lg text-gray-600 mb-8">
        Whether it’s for commercial buildings, residential spaces, or artistic installations, our team ensures precision and creativity in every aluminum design project.
      </p>

      <a
        href="/contact"
        className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
      >
        Get a Quote
      </a>
    </div>
  );
};

export default AluminumDesign;
