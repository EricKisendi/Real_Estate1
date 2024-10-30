const About = () => {
    return (
      <section className="relative bg-[url('./assets/images/AboutBg.jpeg')] bg-cover bg-center text-white">
        {/* Overlay to darken the background */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
  
        {/* Content Wrapper */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 py-12 sm:py-20 md:py-24 text-center">
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-lora mb-4 sm:mb-6">
            Connecting Renters and Leasers
          </h1>
  
          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-3xl">
            We help renters find the perfect place to call home, while empowering property owners to lease their properties with ease.
          </p>
  
          {/* Grid Section */}
          <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-2 w-full">
            {/* For Renters Section */}
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold font-lora mb-2">For Renters</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Discover a wide range of verified properties and enjoy a seamless rental experience with advanced search and filters.
              </p>
            </div>
  
            {/* For Leasers Section */}
            <div className="p-6 bg-white bg-opacity-10 rounded-lg shadow-md">
              <h2 className="text-xl sm:text-2xl font-semibold font-lora mb-2">For Leasers</h2>
              <p className="text-gray-300 text-sm sm:text-base">
                List your property, connect with reliable tenants, and manage your leases effortlessly through our platform.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  