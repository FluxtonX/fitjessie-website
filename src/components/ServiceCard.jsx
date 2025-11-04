const ServiceCard = ({ title, description, image, color }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      {/* Image Container */}
      <div
        className={`h-64 ${color} flex items-center justify-center overflow-hidden`}
      >
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-primary mb-3 font-display">
          {title}
        </h3>
        <p className="text-neutral-600 leading-relaxed">{description}</p>
      </div>

      {/* Hover Effect Border */}
      <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary rounded-2xl transition-all duration-300 pointer-events-none"></div>
    </div>
  );
};

export default ServiceCard;
