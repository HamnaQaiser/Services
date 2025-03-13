import React from "react";
import { Link } from "react-router-dom";
import AluminiumFacade from "../assets/images/portfolio/IMG-20241230-WA0005.jpg";
import CabinetDesign from "../assets/images/portfolio/IMG-20241230-WA0006.jpg";
import TechnicalDesign from "../assets/images/portfolio/IMG-20241230-WA0007.jpg";
import AluminiumRailings from "../assets/images/portfolio/IMG-20241230-WA0008.jpg";
import PergolaDesign from "../assets/images/portfolio/IMG-20241230-WA0009.jpg";
import FramelessPartitions from "../assets/images/portfolio/IMG-20241230-WA0010.jpg";
import InteriorDesign from "../assets/images/portfolio/IMG-20241230-WA0011.jpg";
import KitchenCabinet from "../assets/images/portfolio/IMG-20241230-WA0012.jpg";


const PortfolioPage = () => {
  const projects = [
    {
      id: 1,
      title: "Modern Aluminum Facade",
      description: "Sleek and lightweight facade design for a commercial building.",
      image: AluminiumFacade,
    },
    {
      id: 2,
      title: "Custom Cabinet Design",
      description: "Elegant and functional cabinets tailored for a luxury kitchen.",
      image: CabinetDesign,
    },
    {
      id: 3,
      title: "Industrial Technical Design",
      description: "Precision engineering design for industrial machinery.",
      image: TechnicalDesign,
    },
    {
      id: 4,
      title: "Minimalist Aluminum Railings",
      description: "Modern aluminum railings for a residential project.",
      image: AluminiumRailings,
    },
    {
      id: 5,
      title: "Pergola Design",
      description: "Stylish and durable pergola structures for outdoor spaces.",
      image: PergolaDesign,
    },
    {
      id: 6,
      title: "Frameless Shower Partitions",
      description: "Elegant frameless glass partitions for modern bathrooms.",
      image: FramelessPartitions,
    },
    {
      id: 7,
      title: "3D Rendering for Interior Design",
      description: "High-quality 3D renders for interior spaces.",
      image: InteriorDesign,
    },
    {
      id: 8,
      title: "Custom Kitchen Cabinet",
      description: "Functional and modern kitchen cabinet designs.",
      image: KitchenCabinet,
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-900 mb-4">
          Our Portfolio
        </h1>
        <p className="text-lg sm:text-xl text-gray-600">
          Explore some of our finest projects showcasing our expertise in design and craftsmanship.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden group transform hover:scale-105 transition-all"
          >
            {/* Image */}
            <div className="h-56 bg-gray-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="p-6">
              <h2 className="text-xl font-bold text-blue-900 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                to={`/portfolio/${project.id}`}
                className="text-yellow-400 font-bold hover:underline"
              >
                View Details →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
