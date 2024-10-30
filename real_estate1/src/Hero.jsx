import houseImage from './assets/images/apartmentBackground.jpg'; // Ensure the image path is correct

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Image */}
      <div
        className="bg-cover bg-center flex-1"
        style={{
          backgroundImage: `url(${houseImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      >
        {/* This div will hold the image and remain in place */}
      </div>

      {/* Right Side - Text and Form */}
      <div className="flex flex-col justify-center items-center md:items-start bg-gray-50 bg-opacity-90 p-6 sm:p-12 space-y-6 relative z-10">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-lora text-gray-800 text-center md:text-left">
          Your Dream Home Awaits
        </h1>

        {/* Subtext */}
        <p className="text-base sm:text-lg md:text-xl text-gray-600 font-karla text-center md:text-left">
          Explore the finest properties, rent or buy with just a few clicks. Start your journey today!
        </p>

        {/* Search Form */}
        <div className="flex w-full max-w-lg bg-white shadow-md rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter city, zip code, or neighborhood"
            className="flex-grow px-4 py-3 focus:outline-none text-gray-700"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3">
            Search
          </button>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full max-w-lg">
          <button className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md">
            Browse Listings
          </button>
          <button className="w-full sm:w-auto bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-3 rounded-md">
            Contact an Agent
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
