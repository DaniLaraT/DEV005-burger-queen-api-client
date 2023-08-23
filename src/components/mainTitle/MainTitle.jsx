/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import ButtonViews from '../../components/Button/ButtonView/ButtonView';
import ButtonAddElement from '../../components/Button/ButtonAddElement/ButtonAddElement';
import './MainTitle.css'

const MainTitle = () => {
  const [users, setUsers] = useState([]); // Agrega el estado de usuarios
  // Agrega los estados y funciones necesarios aquí
  const [selectedProductType, setSelectedProductType] = useState('Users');

  const handleEditUsers = (user) => {
    // Implementa la lógica para editar usuarios
  };

  const handleDeleteUsers = (user) => {
    // Implementa la lógica para eliminar usuarios
  };

  const handleAddUsers = () => {
    // Implementa la lógica para agregar usuarios
  };

  return (
    <>
    <div className='content-admin'>
        <ButtonViews
          Text1={'USUARIOS'}
          Text2={'PRODUCTOS'}
          onClickButton1={() => setSelectedProductType('Users')}
          onClickButton2={() => setSelectedProductType('Products')}
        />
      <div className='constent-admin-children'>
      <div className="container-employed">
      <ButtonAddElement text={'+ AGREGAR USUARIO'}  onClick={handleAddUsers}/>
  
        <div className="info-employe">
          <div className="title-name">
            <p>Correo</p>
          </div>
          <div className="title-role">
            <p>Contraseña</p>
          </div>
          <div className="title-option">
            <p>Rol</p>
          </div>
        </div>
        {users.map((user, index) => (
          <div className="container-users" key={index}>
            <p className="users-Name">{user.email}</p>
            <p className="role">{user.role}</p>
            <div className="button-option-users">
              <button
                className="button-edit-users"
                onClick={() => handleEditUsers(user)}
              >
                EDITAR
              </button>
              <button
                className="button-delete-users"
                onClick={() => handleDeleteUsers(user)}
              >
                ELIMINAR
              </button>
            </div>
          </div>
        ))}
        </div>
        </div>
      </div>
    </>
  
  );
};

export default MainTitle;
