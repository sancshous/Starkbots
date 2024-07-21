import React from 'react';

const FirstSection = () => {
  return (
    <section className="bg-lightblue-50 py-16 fisrtsection">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 myh1">РАЗРАБОТКА TELEGRAM БОТОВ ДЛЯ БИЗНЕСА</h1>
          <p className="text-xl mb-8">Современные технологии для автоматизации и улучшения бизнес-процессов</p>
          <button className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition myBtn">
          <a href="https://t.me/Sancshous" target="_blank" rel="noopener noreferrer">
            Написать в телеграм
          </a>
          </button>
        </div>
        <div className="md:w-1/2">
          <img src='/../images/mockup.png' alt="Mockup" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default FirstSection;
