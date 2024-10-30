// CardsGrid.jsx
import Card from './Card';
import CardData from './CardData.jsx';

const CardsGrid = () => (
  <section className="w-full bg-gray-200 py-10">
    <div className="container mx-auto px-4 sm:px-6">
      {/* Title */}
      <h1 className="text-3xl md:text-5xl font-bold font-lora text-center py-6">
        Available Projects
      </h1>

      {/* Grid Layout */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {CardData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            address={item.address}
            priceRange={item.priceRange}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-slate-500 hover:bg-blue-600 text-white py-3 px-8 sm:px-12 rounded-lg transition duration-300">
          View more projects
        </button>
      </div>
    </div>
  </section>
);

export default CardsGrid;
