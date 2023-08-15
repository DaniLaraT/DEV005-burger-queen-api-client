import React, { useState } from 'react';
import './menuBreakfast.css';
import OptionsProductsMenu from '../../components/optionProductsMenu/OptionProductsMenu';
import ProductsOrder from '../../components/productsOrder/ProductsOrder';
import Header from '../../components/header/Header';

const MenuBreakfast = () => {
  const [order, setOrder] = useState([]);

  const handleAddToOrder = (product) => {
    setOrder(prevOrder => [...prevOrder, product]);
  };

  return (
    <div className='body'>
      <Header/>
      <span>aqui podras hacer la orden de desayuno</span>
      <div className='container1'>
        <div className='extra1'>
          <OptionsProductsMenu onAddToOrder={handleAddToOrder} />
        </div>
      </div>
      <div className='order'>
        <h1>HOLAAAAAA</h1>
        <ProductsOrder order={order} />
      </div>
    </div>
  );
};

export default MenuBreakfast;