// eslint-disable-next-line no-unused-vars
import React from 'react';
import './page404.css';
import Logo from '../../components/logo/logo';

const Page404 = () => (
  <div className="container">
    <h1 className="h1">Oops, ¡Esta página no existe!</h1>
    <div className='Logo404'>
      <Logo />
    </div>
    <p className="error-message">Parece que has llegado a un territorio desconocido. El dinosaurio se comió esta página.</p>
    <a href="/" className="back-link">Volver al inicio</a>
  </div>
);

export default Page404;
