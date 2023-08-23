// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './adminProducts.css';
import MainTitle from '../../components/MainTitle/MainTitle';
import HeaderAdmin from '../../components/headerAdmin/headerAdmin';
import OptionUsersList from '../../components/optionUsersList/optionUserList';

const AdminUsers = () => {
  
  return (
    <div className='body'>
      <HeaderAdmin title='ADMIN' />
      < MainTitle/>
      < OptionUsersList/>
    </div>
  );
};
export default AdminUsers;