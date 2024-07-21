import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalComponent = ({ isOpen, closeModal }) => {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const message = `Имя: ${formData.name}\nНомер телефона: ${formData.phone}`;
    const telegramBotToken = '7383250713:AAHiWOrywH_gBQxfv4dTA1FF88jPmBM4mF8';
    const chatId = '881822879'; // Замените на ваш chat ID

    try {
      const response = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSuccessMessage('Заявка успешно отправлена.');
    } catch (error) {
      console.error('Ошибка при отправке данных:', error);
      setError('Ошибка при отправке данных. Пожалуйста, попробуйте еще раз.');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Оставить заявку"
      className="bg-white p-6 rounded-lg shadow-lg w-96"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
    >
      <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={closeModal}>
        ✖
      </button>
      <h2 className="text-2xl mb-4">Оставить заявку</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Имя:
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        </label>
        <label className="block mb-2">
          Номер телефона:
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded" />
        </label>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition mt-4">
          Отправить
        </button>
      </form>
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </Modal>
  );
}

export default ModalComponent;
