import React from "react";
import technicalImage from '../../assets/images/Technical.jpg';

const TechnicalDesign = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">
        Technical Drawings
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Precision and accuracy are at the heart of our technical drawing services, designed to bring your project to life with clarity and detail.
      </p>

      <img
        src= {technicalImage}
        alt="Technical Drawing Example"
        className="w-full h-auto max-h-[500px] md:max-h-[400px] object-cover rounded-lg mb-8 shadow-lg"
      />

      <h2 className="text-3xl font-bold text-blue-900 mb-4">What We Offer</h2>
      <ul className="list-disc pl-6 text-lg text-gray-600 mb-8">
        <li>2D and 3D technical drawings for diverse industries.</li>
        <li>Accurate drafting and documentation for your projects.</li>
        <li>High-quality visualizations for construction, engineering, and design.</li>
      </ul>

      <p className="text-lg text-gray-600 mb-8">
        Our technical drawings ensure that every detail of your project is accurately captured, helping you achieve precision in execution and planning.
      </p>

      <a
        href="/contact"
        className="px-6 py-3 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
      >
        Request a Drawing
      </a>
    </div>
  );
}

export default TechnicalDesign;
