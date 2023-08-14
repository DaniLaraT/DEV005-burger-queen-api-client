/* eslint-disable no-unused-vars */
import React from 'react';
import './Page404.css';
import background from '/img/background.png';

const Page404 = () => (
  <div className="page-content">
    <h1 className="h1">Oops, ¡Esta página no existe!</h1>
    <img src={background} alt="Burger Error" className="burger-image" />
    <p className="error-message">Parece que has llegado a un territorio desconocido. La hamburguesa se comió esta página.</p>
    <a href="/" className="back-link">Volver al inicio</a>
  </div>
);

export default Page404;
