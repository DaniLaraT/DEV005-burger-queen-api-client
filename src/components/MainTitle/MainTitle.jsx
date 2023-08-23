/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ButtonViews from '../../components/Button/ButtonView/ButtonView';
import ButtonAddElement from '../../components/Button/ButtonAddElement/ButtonAddElement';
import './MainTitle.css'
const MainTitle = () => {
  const [users, setUsers] = useState([]); // Agrega el estado de usuarios
  // Agrega los estados y funciones necesarios aquí
  const [selectedProductType, setSelectedProductType] = useState('Users');

  //hACER CONDICION QUE CUANDO APRETE USUARIO = ADMINUSERS.JSX
  // CUANDO APRETE PRODUCTOS = ADMIN PRODUCTS


  return (
    <>
    <div className='content-admin'>
        <ButtonViews
          Text1={'USUARIOS'}
          Text2={'PRODUCTOS'}
          onClickButton1={() => setSelectedProductType('Users')}
          onClickButton2={() => setSelectedProductType('Products')}
        />
      </div>
    </>
  );
};
export default MainTitle;