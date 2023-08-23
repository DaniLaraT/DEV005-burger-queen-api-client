// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from '../../components/headerAdmin/HeaderAdmin';
import MainTitle from '../../components/mainTitle/MainTitle';
import './adminProducts.css';
import OptionUsersList from '../../components/optionUsersList/OptionUsersList';

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const bearerToken = localStorage.getItem('accessToken');

  const getUsers = async () => {
    try {
      const response = await fetch('https://api.example.com/users', {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
        },
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch users: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  };

  useEffect(() => {
    const getUsersData = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
    };
    getUsersData();
  }, [bearerToken]);

  const handleEditUsers = (user) => {
    // Implement logic for editing users
  };

  const handleDeleteUsers = (user) => {
    // Implement logic for deleting users
  };

  const handleAddUsers = () => {
    // Implement logic for adding users
  };

  return (
    <div className='body'>
      <HeaderAdmin title='ADMIN' />
      < MainTitle/> 
      < OptionUsersList/>
    </div>
  );
};

export default AdminUsers;
