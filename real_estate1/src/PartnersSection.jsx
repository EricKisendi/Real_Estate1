import partnersData from './partnersData'; // Import the partners data

const PartnersSection = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <h2 className="text-center text-4xl font-extrabold mb-10 text-gray-800">
        Our Trusted Partners
      </h2>

      {/* Grid layout with responsive behavior */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {partnersData.map((partner, index) => (
          <div
            key={index}
            className="p-6 flex flex-col items-center space-y-4 rounded-[30px] 
                       bg-[#F8F7F4] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff] 
                       transition-transform transform hover:scale-105"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-24 w-24 object-contain rounded-full"
            />
            <h3 className="text-xl font-bold text-gray-700">{partner.name}</h3>
            <p className="text-gray-600 text-center">{partner.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
