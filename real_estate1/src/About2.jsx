import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const About2 = () => {
  return (
    <section className="bg-gray-100 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">
        Connecting Renters with Leasers
      </h1>
      <div className="relative max-w-4xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="rounded-lg shadow-md"
        >
          <SwiperSlide>
            <div className="bg-blue-500 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">For Renters</h2>
              <p className="text-lg">
                Search thousands of verified properties and find your dream home with ease.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-green-500 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-2">For Leasers</h2>
              <p className="text-lg">
                List your property, find reliable tenants, and manage everything through our user-friendly platform.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default About2;
