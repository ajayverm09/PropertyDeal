import { motion } from 'framer-motion';

const PropertyCard = ({ property }) => {
  return (
    <motion.div
      whileHover={{ 
        y: -10,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className="bg-white rounded-lg overflow-hidden shadow-md"
    >
      <div className="relative">
        <img 
          src={property.image} 
          alt={property.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-sm font-medium">
          ${property.price.toLocaleString()}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-3">{property.location}</p>
        <div className="flex justify-between text-sm text-gray-500">
          <span>{property.bedrooms} Beds</span>
          <span>{property.bathrooms} Baths</span>
          <span>{property.area} sq ft</span>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;