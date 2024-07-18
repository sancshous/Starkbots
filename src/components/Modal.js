import React from 'react';
import '../Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <h2>Оставьте заявку</h2>
        <p>Мы свяжемся с Вами в рабочее время и ответим на все интересующие вопросы.</p>
        <form>
          <label>
            Ваше имя*
            <input type="text" required />
          </label>
          <label>
            Ваш номер телефона*
            <input type="tel" required />
          </label>
          <label className="checkbox-label">
            <input type="checkbox" />
            Не звоните мне, а лучше напишите в мессенджере
          </label>
          <button type="submit" className="btn-primary">Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
