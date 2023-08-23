/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchUsers from '../optionUsersList/ApiOptionUsers';
import ButtonAddElement from '../Button/ButtonAddElement/ButtonAddElement';
import EditButton from '../Button/Decrease-Increase/EditButton';
import DeleteButton from '../Button/Decrease-Increase/DeleteButton';
//IMPORTANT CSS

const OptionProductsAdm = ({ onAddToOrder }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    FetchUsers() // Llama a la función FetchUsers para obtener los usuarios
    .then(data => {
      setUsers(data); // Actualiza el estado con los usuarios obtenidos
    })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleAddUsers = () => {
    // Implementa la lógica para agregar usuarios
  };

  const handleEditUsers = (user) => {
    // Implementa la lógica para editar usuarios
  };
  const handleDeleteUsers = (user) => {
    // Implementa la lógica para eliminar usuarios
  };

  return (
<>
<div className='constent-admin-children'>
      <ButtonAddElement text={'+ AGREGAR PRODUCTO'}  onClick={handleAddUsers}/>
        </div>
    <div className="info-users">
      <p>Id</p>
      <p>Correo</p>
      <p>Rol</p>
      <p>Editar</p>
      <p>Eliminar</p>
  </div>
    <div className='info-user'>
      {users.map(user => (
        <div key={user.id} className='constainer-user'>
           <p> {user.id} </p>
          <p> {user.email} </p>
          <p>{user.role}</p>
          <div className='User-edit'>
          <EditButton onClick={handleEditUsers}/>
          </div>
          <div className='User-delete'>
          <DeleteButton onClick={handleDeleteUsers}/>
          </div>
          
          
        </div>
      ))}
      
    </div>
    </>
  );
};


export default OptionProductsAdm;