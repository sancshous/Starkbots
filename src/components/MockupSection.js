import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const mockups = [
  'path/to/your/food_bot_mockup1.png',
  'path/to/your/food_bot_mockup2.png',
  'path/to/your/service_bot_mockup1.png',
  // Добавьте остальные пути к вашим мокапам
];

const MockupSection = () => {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Демонстрация наших ботов</h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {mockups.map((mockup, index) => (
          <SwiperSlide key={index}>
            <img src={mockup} alt={`Mockup ${index + 1}`} className="mx-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default MockupSection;
