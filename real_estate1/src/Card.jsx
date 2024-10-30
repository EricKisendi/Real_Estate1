// Card.jsx
import PropTypes from "prop-types";

const Card = ({ title, address, priceRange, imageUrl }) => (
  <div className=" overflow-hidden transform rounded-[30px] bg-[#F8F7F4] 
                       shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] transition-all hover:scale-105 hover:shadow-xl">
    <div className="relative">
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-25 hover:bg-opacity-10 transition-all"></div>
    </div>
    <div className="p-6 flex flex-col space-y-3">
      <h2 className="text-2xl font-semibold font-lora text-gray-800">{title}</h2>
      <p className="text-gray-500">{address}</p>
      <p className="text-lg font-medium text-gray-800">{priceRange}</p>
      <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
        View Details
      </button>
    </div>
  </div>
);

Card.propTypes = {
    title: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    priceRange: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };

export default Card;
