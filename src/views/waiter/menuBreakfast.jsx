import React, { useState } from 'react';
import './menuBreakfast.css';
import OptionsProductsMenu from '../../components/optionProductsMenu/OptionProductsMenu';
import ProductsOrder from '../../components/productsOrder/ProductsOrder';
import Header from '../../components/header/Header';
import ButtonViews from '../../components/Button/ButtonView/ButtonView';


const MenuBreakfast = () => {
  const [order, setOrder] = useState([]);
  const [selectedProductType, setSelectedProductType] = useState('Desayuno'); // Estado para el tipo de producto seleccionado

  const handleAddToOrder = (product) => {
    const existingProductIndex = order.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      // Si el producto ya existe en la orden, incrementa su cantidad
      const updatedOrder = [...order];
      updatedOrder[existingProductIndex].quantity += 1;
      setOrder(updatedOrder);
    } else {
      // Si el producto no existe en la orden, agrégalo con cantidad 1
      setOrder(prevOrder => [...prevOrder, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromOrder = (product) => {
    const existingProductIndex = order.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedOrder = [...order];
      if (updatedOrder[existingProductIndex].quantity > 1) {
        updatedOrder[existingProductIndex].quantity -= 1;
        setOrder(updatedOrder);
      }
    }
  };

  const handleDeleteFromOrder = (product) => {
    const updatedOrder = order.filter(item => item.id !== product.id);
    setOrder(updatedOrder);
  };

  return (
    <div className='body'>
      <Header title='MENU' />
      <div>
        {/* Actualiza el botón para que cambie el tipo de producto */}
        <ButtonViews
          Text1={'Desayuno'}
          Text2={'Almuerzo'}
          onClickButton1={() => setSelectedProductType('Desayuno')}
          onClickButton2={() => setSelectedProductType('Almuerzo')}
        />
      </div>
      <div className='container1'>
        <div className='extra1'>
          {/* Pasa el tipo de producto seleccionado al componente OptionsProductsMenu */}
          <OptionsProductsMenu
            onAddToOrder={handleAddToOrder}
            productType={selectedProductType}
          />
        </div>
        <div className='order'>
          <ProductsOrder 
          order={order} 
          onAddToOrder={handleAddToOrder} 
          onRemoveFromOrder={handleRemoveFromOrder} 
          onDeleteFromOrder={handleDeleteFromOrder}/>
        </div>
      </div>
    </div>
  );
};

export default MenuBreakfast;