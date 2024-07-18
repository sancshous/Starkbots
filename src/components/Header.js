import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-gray-800 text-white py-6 mb-10 shadow-lg myheader">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/../images/logo.jpeg" alt="Logo" className="h-12 mr-6" />
          <div>
            <Link className="px-3 cursor-pointer myNav" to="foodbot" smooth={true} duration={500}>
              Бот для еды
            </Link>
            <Link className="px-3 cursor-pointer myNav" to="servicebot" smooth={true} duration={500}>
              Бот для услуги
            </Link>
            <Link className="px-3 cursor-pointer myNav" to="cta" smooth={true} duration={500}>
              Контакты
            </Link>
          </div>
        </div>
        <div className="flex items-center">
          <p className="mr-6">Тел: +7(922) 683-88-83</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition myBtn" onClick={() => setShowModal(true)}>Оставить заявку</button>
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </header>
  );
}

const Modal = ({ setShowModal }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
        <h2 className="text-2xl mb-4">Оставить заявку</h2>
        <form>
          <label className="block mb-2">
            Имя:
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </label>
          <label className="block mb-2">
            Номер телефона:
            <input type="text" className="w-full p-2 border border-gray-300 rounded" />
          </label>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition mt-4">Отправить</button>
        </form>
        <button className="absolute top-4 right-4 text-gray-600 hover:text-gray-900" onClick={() => setShowModal(false)}>✖</button>
      </div>
    </div>
  );
}

export default Header;
