// Banner.js
import React from 'react';
import { banner01 } from './assets'; // 

function Banner() {
  return (
    <>
      <div className='contain-banner'>
        <img
          src={banner01}
          className='banner'
          alt='Banner de cadena de comida Burguer Queen'
        />
      </div>
    </>
  );
}

export default Banner;
