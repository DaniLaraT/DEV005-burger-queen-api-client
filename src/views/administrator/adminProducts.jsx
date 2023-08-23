/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import HeaderAdmin from '../../components/headerAdmin/HeaderAdmin';
import ButtonViews from '../../components/Button/ButtonView/ButtonView';
import ButtonAddElement from '../../components/Button/ButtonAddElement/ButtonAddElement';
import './adminProducts.css';

const AdminProducts = () => {
  const [list, setList] = useState([]);
  const [selectedUsersType, setSelectedUsersType] = useState('Desayuno'); // Estado para el tipo de producto seleccionado

  const handleAddToList = (users) => {
    const existingUsersIndex = list.findIndex(item => item.id === users.id);

    if (existingUsersIndex !== -1) {
      // Si el producto ya existe en la orden, incrementa su cantidad
      const updatedList = [...list];
      updatedList[existingUsersIndex].quantity += 1;
      setList(updatedList);
    } else {
      // Si el producto no existe en la orden, agrégalo con cantidad 1
      setList(prevList => [...prevList, { ...users, quantity: 1 }]);
    }
  };

  return (
    <div className='body'>
      <HeaderAdmin title='ADMIN' />
      <div>
        {/* Actualiza el botón para que cambie el tipo de producto */}
        <ButtonViews
          Text1={'USUARIOS'}
          Text2={'PRODUCTOS'}
          onClickButton1={() => setSelectedUsersType('Usuario')}
          onClickButton2={() => setSelectedUsersType('Productos')}
        />
      </div>
      <div><ButtonAddElement Text1={'+ USUARIOS'} /></div>

    </div>
  );
};

export default AdminProducts;

