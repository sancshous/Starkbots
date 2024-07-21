import React from 'react';
import { Link } from 'react-scroll';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Header = ({ openModal }) => {
  return (
    <header className="bg-gray-800 text-white py-6 mb-10 shadow-lg fixed w-full top-0 z-50 myheader">
      <div className="container mx-auto flex justify-between items-center myHeaderContainer">
        <div className="flex items-center">
          <img src="/../images/logo.jpeg" alt="Logo" className="h-12 mr-6" />
          <div className='header-column'>
            <div className='header-row'>
            <Link className="px-3 cursor-pointer myNav" to="main" smooth={true} duration={500}>
              Главная
            </Link>
            <Link className="px-3 cursor-pointer myNav" to="about" smooth={true} duration={500}>
              О проекте
            </Link>
            </div>
            <div className='header-row'>
            <Link className="px-3 cursor-pointer myNav" to="botcases" smooth={true} duration={500}>
              Кейсы
            </Link>
            <Link className="px-3 cursor-pointer myNav" to="cta" smooth={true} duration={500}>
              Контакты
            </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center secondrowHeader">
        <a href="tel:+79226838883" className="mr-6 phone">Тел: +7(922) 683-88-83</a>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition myBtn" onClick={openModal}>
            Оставить заявку
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
