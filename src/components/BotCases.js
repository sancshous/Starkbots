import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';

const mockups = [
  {
    name: 'WEBAPP ДЛЯ ЗАПИСИ НА УСЛУГУ',
    description: 'Этот кейс представялет шаблон для записи на услуги вашего бизнеса',
    url: 'https://t.me/Stark_Booking_bot',
    photos: [
      '/../images/service/Group7.png',
      '/../images/service/Group1.png',
      '/../images/service/Group3.png',
      '/../images/service/Group4.png',
    ],
    advantages: [
      { icon: '📅', text: 'Легкость бронирования времени' },
      { icon: '🔔', text: 'Уведомления о предстоящих событиях' },
      { icon: '📆', text: 'Автоматическое сохранение в Google Calendar' },
      { icon: '📱', text: 'Удобство использования прямо в Telegram' },
    ],
  },
  {
    name: 'WEBAPP ДЛЯ ЗАКАЗА ЕДЫ',
    description: 'Данный бот позволит в считанные секунды оформить заказ и оплатить прямо внутри Telegram',
    url: 'https://t.me/ShaurmaStarkTest_bot',
    photos: [
      '/../images/service/Group2.png',
      '/../images/service/Group5.png',
      '/../images/service/Group6.png',
      '/../images/service/Group8.png',
    ],
    advantages: [
      { icon: '🍔', text: 'Быстрое оформление заказа' },
      { icon: '💵', text: 'Интеграция с платежной системой' },
      { icon: '📊', text: 'Архивация заказов в Google Tables' },
      { icon: '😎', text: 'Автоматизация будущих заказов' },
    ],
  },
];

const BotCases = () => {
  return (
    <section className="py-10 bg-gray-100" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 myH">КЕЙСЫ</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {mockups.map((mockup, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center case-section">
                <div className="w-1/3 mockup">
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                  >
                    {mockup.photos.map((photo, photoIndex) => (
                      <SwiperSlide key={photoIndex}>
                        <img src={photo} alt={`${photoIndex + 1}`} className="mx-auto" />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="w-1/3 p-4 case-container">
                  <h3 className="myH">{mockup.name}</h3>
                  <div className="myP"><p>{mockup.description}</p></div>
                  <a href={mockup.url} target="_blank" rel="noopener noreferrer" className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full transition myExample">
                    ИНТЕРАКТИВНЫЙ ПРИМЕР
                  </a>
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

export default BotCases;
