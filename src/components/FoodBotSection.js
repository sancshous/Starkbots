import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const mockups = [
  '/path/to/your/food_bot_mockup1.png',
  '/path/to/your/food_bot_mockup2.png',
  // Добавьте остальные пути к вашим мокапам
];

const FoodBotSection = () => {
  return (
    <section className="py-10 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Бот для заказа и доставки еды</h2>
        <p className="text-lg mb-8">Наш бот для заказа и доставки еды позволяет легко и быстро сделать заказ прямо в Telegram. Система оплаты интегрирована, а заказы автоматически сохраняются в Google таблицах для удобного управления.</p>
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
        <motion.ul
          className="text-left text-lg mt-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.5,
                staggerChildren: 0.3
              }
            }
          }}
        >
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>🚀 Быстрая и удобная система заказа</motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>💳 Интеграция с платежными системами</motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>📊 Автоматическое сохранение заказов в Google таблицах</motion.li>
          <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>📱 Простота использования прямо в Telegram</motion.li>
        </motion.ul>
      </div>
    </section>
  );
}

export default FoodBotSection;
