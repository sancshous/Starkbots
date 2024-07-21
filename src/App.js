// src/App.js

import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import BotCases from './components/BotCases';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FirstSection from './components/FirstSection';
import AdvantagesSection from './components/AdvantagesSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Element } from 'react-scroll';
import ModalComponent from './components/ModalComponent';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header openModal={openModal} />
      <Element name="main">
        <FirstSection />
      </Element>
      <Element name="about">
        <AdvantagesSection />
      </Element>
      <Element name="botcases">
        <BotCases />
      </Element>
      <Element name="cta">
        <CTA openModal={openModal} />
      </Element>
      <Footer />
      <a href="https://t.me/Sancshous" target="_blank" rel="noopener noreferrer" className="fixed-telegram">
        <img src="/../images/telegram.png" alt="Telegram" />
      </a>
      <ModalComponent isOpen={showModal} closeModal={closeModal} />
    </div>
  );
}

export default App;
