import React from "react";
import heroImage from '../assets/images/hero.jpg';
import aboutImage from '../assets/images/aboutus.jpg';



const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen text-white flex items-center justify-center px-6"
        style={{backgroundImage: `url(${heroImage})` }}
      >
        <div className="bg-black bg-opacity-60 w-full h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 animate-fade-in">
            Elevating Design. Empowering Precision.
          </h1>
          <p className="text-base sm:text-lg md:text-2xl mb-8 animate-slide-up">
            Your partner for stunning aluminum, cabinet, and technical designs.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <a
              href="/services"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all"
            >
              Explore Services
            </a>
            <a
              href="/portfolio"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold rounded-lg hover:bg-yellow-400 hover:text-blue-900 transform hover:scale-105 transition-all"
            >
              View Portfolio
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-gray-50 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-6">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-center mb-8">
            At Design & Tech Services, we combine innovation, craftsmanship, and
            technical expertise to deliver exceptional results. Whether it's
            modern aluminum designs, bespoke cabinetry, or complex technical
            projects, our team ensures precision and quality every step of the
            way.
          </p>
          <div className="flex justify-center">
            <img
              src= {aboutImage}
              alt="About us"
              className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-blue-900 via-gray-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-gray-100 text-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Aluminum Design
              </h3>
              <p>
                Innovative aluminum solutions crafted to meet architectural and
                interior design needs with precision and style.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-gray-100 text-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Cabinet Design
              </h3>
              <p>
                Custom cabinetry that blends functionality with modern
                aesthetics, tailored for your unique spaces.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-gray-100 text-blue-900 p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Technical Design
              </h3>
              <p>
                High-precision technical designs engineered for success in
                complex projects and industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                "The team at Design & Tech Services transformed our vision into
                reality with stunning aluminum designs. Highly recommend!"
              </p>
              <h4 className="font-bold">- Sarah M.</h4>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="italic mb-4">
                "Their attention to detail and creativity in cabinet design
                exceeded our expectations. Outstanding work!"
              </p>
              <h4 className="font-bold">- John D.</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-blue-900 text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            Contact us today to bring your design and technical ideas to life.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg shadow-lg hover:bg-yellow-500 transform hover:scale-105 transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
