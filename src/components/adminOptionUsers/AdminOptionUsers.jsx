/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import functionGetUsers from './functionGetUsers';
import './AdminOptionUsers.css';
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';

const AdminOptionUsers = ({ onAddToList, usersType }) => { 
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsersByType() {
      try {
        const usersData = await functionGetUsers();
        const filteredUsers = usersData.filter(user => user.type === usersType);
        setUsers(filteredUsers);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsersByType();
  }, [usersType]);

  const handleAddToList = (user) => {
    onAddToList(user); 
  };
  
  return (
    <div className='optionUsers'>
      {users.map(user => (
        <div key={user.id} className="user-item">
          <div className='ImgUsers'>
            <img src={user.image} alt={user.name} className="user-image" />
          </div>
          <div className='descriptionUsers'>
            <h5>{user.name}</h5>
            <h6>Tipo: {user.type}</h6>
          </div>
          <div className='buttonmas'>
            <IncreaseButton onClick={() => handleAddToList(user)} />
          </div>
        </div>
      ))}
    </div>
  );
};

AdminOptionUsers.propTypes = {
  onAddToList: PropTypes.func.isRequired,
  usersType: PropTypes.string.isRequired,
};

export default AdminOptionUsers;

