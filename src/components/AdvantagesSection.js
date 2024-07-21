// src/components/AdvantagesSection.js
import React from 'react';
import '../AdvantagesSection.css'; // Подключаем стили

const advantages = [
  {
    icon: '24',
    title: 'Работают 24/7',
    description: 'Чат-боты работают без перерывов и выходных, в отличие от менеджеров они не нуждаются в отдыхе.',
  },
  {
    icon: 'automation',
    title: 'Автоматизируют рутинные задачи',
    description: 'Множество однотипных задач боты выполняют максимально эффективно и быстро.',
  },
  {
    icon: 'requests',
    title: 'Обрабатывают большое количество запросов',
    description: 'Чат-бот одномоментно способен давать информацию при сотнях обращений.',
  },
  {
    icon: 'increase',
    title: 'Повышают конверсию',
    description: 'Скорость, удобство, простота получения информации успешно работают на увеличение конверсии.',
  },
  {
    icon: 'reduce-costs',
    title: 'Снижают издержки',
    description: 'Чат-боты успешно решают до 80% всех вопросов без участия человека, что сокращает расходы на персонал и снижает зависимость от «человеческого фактора».',
  },
];

const AdvantagesSection = () => {
  return (
    <section className="advantages-section bg-lightblue-50">
      <h2 className="advantages-title">О проекте</h2>
      <p className="advantages-description">
       Звонки по телефону постепенно уходят в прошлое, мессенджеры стали каналом для заказов. Внедрение бота-помощника позволит увеличить продажи, решать ряд различных задач в автоматическом режиме, обеспечивая клиентам комфортный формат общения в виде текстовых сообщений. Чат-бот заменит менеджера или администратора, а клиент получит качественный сервис!
      </p>
      <div className="advantages-grid">
        {advantages.map((advantage, index) => (
          <div key={index} className="advantage-card">
            <div className={`advantage-icon icon-${advantage.icon}`} />
            <h3 className="advantage-title">{advantage.title}</h3>
            <p className="advantage-description">{advantage.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdvantagesSection;
