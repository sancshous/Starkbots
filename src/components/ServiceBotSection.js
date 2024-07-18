import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const mockups = [
  {
    image: '/../images/service/Group1.png',
    advantages: [
      { icon: '📅', text: 'Легкость бронирования времени' },
      { icon: '🔔', text: 'Уведомления о предстоящих событиях' },
      { icon: '📆', text: 'Автоматическое сохранение в Google Календарь' },
      { icon: '📱', text: 'Удобство использования прямо в Telegram' },
    ],
  },
  {
    image: '/../images/service/Group2.png',
    advantages: [
      { icon: '🚀', text: 'Быстрая настройка' },
      { icon: '💬', text: 'Интеграция с CRM' },
      { icon: '📊', text: 'Аналитика и отчеты' },
      { icon: '🔒', text: 'Безопасность данных' },
    ],
  },
  {
    image: '/../images/service/Group3.png',
    advantages: [
      { icon: '📅', text: 'Легкость бронирования времени' },
      { icon: '🔔', text: 'Уведомления о предстоящих событиях' },
      { icon: '📆', text: 'Автоматическое сохранение в Google Календарь' },
      { icon: '📱', text: 'Удобство использования прямо в Telegram' },
    ],
  },
  {
    image: '/../images/service/Group4.png',
    advantages: [
      { icon: '🚀', text: 'Быстрая настройка' },
      { icon: '💬', text: 'Интеграция с CRM' },
      { icon: '📊', text: 'Аналитика и отчеты' },
      { icon: '🔒', text: 'Безопасность данных' },
    ],
  },{
    image: '/../images/service/Group5.png',
    advantages: [
      { icon: '📅', text: 'Легкость бронирования времени' },
      { icon: '🔔', text: 'Уведомления о предстоящих событиях' },
      { icon: '📆', text: 'Автоматическое сохранение в Google Календарь' },
      { icon: '📱', text: 'Удобство использования прямо в Telegram' },
    ],
  },
  {
    image: '/../images/service/Group6.png',
    advantages: [
      { icon: '🚀', text: 'Быстрая настройка' },
      { icon: '💬', text: 'Интеграция с CRM' },
      { icon: '📊', text: 'Аналитика и отчеты' },
      { icon: '🔒', text: 'Безопасность данных' },
    ],
  },{
    image: '/../images/service/Group7.png',
    advantages: [
      { icon: '📅', text: 'Легкость бронирования времени' },
      { icon: '🔔', text: 'Уведомления о предстоящих событиях' },
      { icon: '📆', text: 'Автоматическое сохранение в Google Календарь' },
      { icon: '📱', text: 'Удобство использования прямо в Telegram' },
    ],
  },
  {
    image: '/../images/service/Group8.png',
    advantages: [
      { icon: '🚀', text: 'Быстрая настройка' },
      { icon: '💬', text: 'Интеграция с CRM' },
      { icon: '📊', text: 'Аналитика и отчеты' },
      { icon: '🔒', text: 'Безопасность данных' },
    ],
  },
];

const ServiceBotSection = () => {
  return (
    <section className="py-10 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Бот для записи на услугу</h2>
        <p className="text-lg mb-8">Наш бот для записи на услугу позволяет легко забронировать время прямо в Telegram. Записи автоматически сохраняются в Google Календаре, что упрощает управление вашими делами.</p>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {mockups.map((mockup, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center">
                <div className="w-1/3 p-4">
                  {mockup.advantages.map((advantage, i) => (
                    <motion.div
                      key={i}
                      className="bg-white p-4 mb-4 shadow-lg rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <span className="text-3xl">{advantage.icon}</span>
                      <p className="text-lg">{advantage.text}</p>
                    </motion.div>
                  ))}
                </div>
                <img src={mockup.image} alt={`Mockup ${index + 1}`} className="mx-auto w-1/3" />
                <div className="w-1/3 p-4">
                  {mockup.advantages.map((advantage, i) => (
                    <motion.div
                      key={i}
                      className="bg-white p-4 mb-4 shadow-lg rounded-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <span className="text-3xl">{advantage.icon}</span>
                      <p className="text-lg">{advantage.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ServiceBotSection;
