import React from 'react';

const CTA = ({ openModal }) => {
  return (
    <section className="py-10 bg-gray-800 text-white" data-aos="fade-up">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Заинтересованы в создании своего бота?</h2>
        <p className="text-lg mb-8">Свяжитесь с мной или оставьте заявку и я помогу вам автоматизировать ваш бизнес!</p>
        <a href="https://t.me/Sancshous" target="_blank" rel="noopener noreferrer" className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition">
          Написать в телеграм
        </a>
        <button onClick={openModal} className="bg-white text-gray-800 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition modalBtn">
          Оставить заявку
        </button>
      </div>
    </section>
  );
}

export default CTA;
