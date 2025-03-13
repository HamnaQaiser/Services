import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Slider from "react-slick";

// Import project images
import AluminiumFacade from "../assets/images/portfolio/IMG-20241230-WA0005.jpg";
import CabinetDesign from "../assets/images/portfolio/IMG-20241230-WA0006.jpg";
import TechnicalDesign from "../assets/images/portfolio/IMG-20241230-WA0007.jpg";
import AluminiumRailings from "../assets/images/portfolio/IMG-20241230-WA0008.jpg";
import PergolaDesign from "../assets/images/portfolio/IMG-20241230-WA0009.jpg";
import FramelessPartitions from "../assets/images/portfolio/IMG-20241230-WA0010.jpg";
import InteriorDesign from "../assets/images/portfolio/IMG-20241230-WA0011.jpg";
import KitchenCabinet from "../assets/images/portfolio/IMG-20241230-WA0012.jpg";

// ProjectDetails Component
const ProjectDetails = () => {
  const { id } = useParams(); // Get project ID from URL
  const navigate = useNavigate();

  // Project data
  const projects = [
    {
      id: 1,
      title: "Modern Aluminum Facade",
      description: "Sleek and lightweight facade design for a commercial building.",
      details:
        "This aluminum facade project combines aesthetic appeal with functionality. Designed to withstand weather conditions, it enhances the building's visual identity while providing efficient insulation.",
      images: [AluminiumFacade, AluminiumRailings],
    },
    {
      id: 2,
      title: "Custom Cabinet Design",
      description: "Elegant and functional cabinets tailored for a luxury kitchen.",
      details:
        "These custom cabinets are designed with a focus on elegance and utility. Perfectly suited for modern kitchens, they feature innovative storage solutions and premium finishes.",
      images: [CabinetDesign],
    },
    {
      id: 3,
      title: "Industrial Technical Design",
      description: "Precision engineering design for industrial machinery.",
      details:
        "Our industrial technical design offers high precision and durability. This project highlights cutting-edge engineering solutions for large-scale industrial applications.",
      images: [TechnicalDesign],
    },
    {
      id: 4,
      title: "Minimalist Aluminum Railings",
      description: "Modern aluminum railings for a residential project.",
      details:
        "These railings are a combination of minimalism and durability, designed to elevate the aesthetics of residential spaces.",
      images: [AluminiumRailings],
    },
    {
      id: 5,
      title: "Pergola Design",
      description: "Stylish and durable pergola structures for outdoor spaces.",
      details:
        "This pergola project showcases stylish outdoor designs that prioritize durability and weather resistance, ideal for creating serene garden retreats.",
      images: [PergolaDesign],
    },
    {
      id: 6,
      title: "Frameless Shower Partitions",
      description: "Elegant frameless glass partitions for modern bathrooms.",
      details:
        "These frameless partitions are designed for luxury bathrooms, providing a sleek, modern look with high-quality tempered glass.",
      images: [FramelessPartitions],
    },
    {
      id: 7,
      title: "3D Rendering for Interior Design",
      description: "High-quality 3D renders for interior spaces.",
      details:
        "This project involved photorealistic 3D rendering, helping clients visualize and plan their dream interiors before construction.",
      images: [InteriorDesign],
    },
    {
      id: 8,
      title: "Custom Kitchen Cabinet",
      description: "Functional and modern kitchen cabinet designs.",
      details:
        "Our custom kitchen cabinet design combines modern aesthetics with practicality, using top-tier materials to create stylish and functional spaces.",
      images: [KitchenCabinet],
    },
  ];

  // Find the project by ID
  const project = projects.find((proj) => proj.id === parseInt(id));

  // If project is not found, show an error message
  if (!project) {
    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-500">Project Not Found</h1>
        <button
          onClick={() => navigate("/portfolio")}
          className="mt-6 px-6 py-3 bg-blue-500 text-white font-bold rounded hover:bg-blue-600"
        >
          Back to Portfolio
        </button>
      </div>
    );
  }

  // Carousel settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Project Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-blue-900">{project.title}</h1>
        <p className="text-gray-600 text-lg mt-4">{project.description}</p>
      </div>

      {/* Image Carousel */}
      <div className="mb-12">
        <Slider {...sliderSettings}>
          {project.images.map((image, index) => (
            <div key={index} className="p-4">
              <img
                src={image}
                alt={`${project.title} - Slide ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Project Details */}
      <div className="mb-12 text-lg text-gray-700 leading-relaxed">
        <p>{project.details}</p>
      </div>

      {/* Related Projects */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Related Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter((relatedProject) => relatedProject.id !== parseInt(id)) // Exclude current project
            .map((relatedProject) => (
              <div
                key={relatedProject.id}
                className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <img
                  src={relatedProject.images[0]}
                  alt={relatedProject.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-blue-900">
                    {relatedProject.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{relatedProject.description}</p>
                  <button
                    onClick={() => navigate(`/portfolio/${relatedProject.id}`)}
                    className="text-blue-500 mt-4 font-bold hover:underline"
                  >
                    View Details →
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="mt-12 text-center">
        <button
          onClick={() => navigate("/portfolio")}
          className="px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-all"
        >
          Back to Portfolio
        </button>
      </div>
    </div>
  );
};

export default ProjectDetails;
