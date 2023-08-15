import React, { useState } from 'react';
import './menuBreakfast.css';
import OptionsProductsMenu from '../../components/optionProductsMenu/OptionProductsMenu';
import ProductsOrder from '../../components/productsOrder/ProductsOrder';
import Header from '../../components/header/Header';
import Button from '../../components/Button/ButtonView/ButtonView';

const MenuBreakfast = () => {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (product) => {
    setOrder(prevOrder => [...prevOrder, product]);
  };

  return (
    <div className='body'>
      <Header/>
      <h5>Aqui van nuestros bottones</h5>
      <div className='container1'>
        <div className='extra1'>
          <OptionsProductsMenu onAddToOrder={handleAddToOrder} />
        </div>
      <div className='order'>
        <ProductsOrder order={order} />
      </div>
      </div>
    </div>
  );
};

export default MenuBreakfast;