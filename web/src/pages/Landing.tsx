import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import logoImg from '../images/logo.svg';
import '../styles/pages/landing.css';

export default function Landing(): JSX.Element {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Logo face sorrindo" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <div className="content-wrapper__location">
          <strong>Florianópolis</strong>
          <span>Santa Catarina</span>
        </div>
        <Link to="/app" className="content-wrapper__enter-app">
          <FiArrowRight size={26} color="rgbaa(0,0,0,0.6)" />
        </Link>
      </div>
    </div>
  );
}
