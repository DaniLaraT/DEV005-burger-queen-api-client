// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import ButtonViews from '../../components/Button/ButtonView/ButtonView';
import HeaderAdmin from '../../components/headerAdmin/headerAdmin';
import OptionUsersList from '../../components/optionUsersList/optionUserList';
import './adminProducts.css';

const AdminUsers = () => {
  
  return (
    <div className='body'>
      <HeaderAdmin title='ADMIN' />
      <div>
        {/* Actualiza el botón para que cambie el tipo de producto */}
        <ButtonViews
          Text1={'USUARIO'}
          Text2={'PRODUCTO'}
          onClickButton1={() => setSelectedProductType('USUARIO')}
          onClickButton2={() => setSelectedProductType('PRODUCTO')}
        />
      </div>
      < OptionUsersList/>
    </div>
  );
};
export default AdminUsers;