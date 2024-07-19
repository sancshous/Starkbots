import React, { useEffect } from 'react';
import Header from './components/Header';
import BotCases from './components/BotCases';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FirstSection from './components/FirstSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Element } from 'react-scroll';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <FirstSection />
      <Element name="botcases">
        <BotCases />
      </Element>
      <Element name="cta">
        <CTA />
      </Element>
      <Footer />
      <a href="https://t.me/Sancshous" target="_blank" rel="noopener noreferrer" className="fixed-telegram">
        <img src="/../images/telegram.png" alt="Telegram" />
      </a>
    </div>
  );
}

export default App;
