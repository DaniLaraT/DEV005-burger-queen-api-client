/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FetchUsers from './ApiOptionUsers';
import './OptionProductsMenu.css'
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';

const OptionUsersList = ({ onAddToOrder }) => { 
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


  const handleAddToOrder = (product) => {
    onAddToOrder(product); 
  };
  
  return (
    <div className='optionUsers'>
      {users.map(user => (
        <div key={user.id} className='constainer-user'>
          <h5> {user.email} </h5>
          <h5>{user.password}</h5>
          <h5>{user.role}</h5>
        </div>
      ))}
    </div>
  );
};

OptionUsersList.propTypes = {
  onAddToOrder: PropTypes.func.isRequired,
  productType: PropTypes.string.isRequired,
};

export default OptionUsersList;
