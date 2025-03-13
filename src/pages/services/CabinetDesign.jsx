import React from "react";
import cabinetImage from '../../assets/images/cabinet.jpg';
const CabinetDesign = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-6">
        Cabinet Designs
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 mb-8">
        Elevate your interiors with our modern, sleek, and durable cabinet designs tailored to suit your style and functionality.
      </p>

      <img
        src= {cabinetImage}
        alt="Cabinet Design Example"
        className="w-full h-auto max-h-[500px] md:max-h-[400px] object-cover rounded-lg mb-8 shadow-lg"
      />

      <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Expertise</h2>
      <ul className="list-disc pl-6 text-lg text-gray-600 mb-8">
        <li>Custom-made cabinets for kitchens, offices, and more.</li>
        <li>Premium materials ensuring durability and elegance.</li>
        <li>Stylish designs that enhance your space’s appeal.</li>
      </ul>

      <p className="text-lg text-gray-600 mb-8">
        Whether you need a contemporary or classic look, our cabinet designs are crafted with precision and attention to detail. Let us create the perfect cabinets for your space.
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

export default CabinetDesign;
