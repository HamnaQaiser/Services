// src/components/ServiceCard.jsx
const ServiceCard = ({ title, description, icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex items-center space-x-4">
          <div className="text-3xl">{icon}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        <p className="mt-2">{description}</p>
      </div>
    );
  }
  
  export default ServiceCard;
  