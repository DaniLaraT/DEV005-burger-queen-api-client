/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import FetchProducts from './funcionGetProducts';
import './OptionProductsMenu.css'
import IncreaseButton from '../Button/Decrease-Increase/IncreaseButton';

const OptionsProductsMenu = ({ onAddToOrder }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    FetchProducts() // Llama a la función FetchProducts para obtener los productos
      .then(data => {
        setProducts(data); // Actualiza el estado con los productos obtenidos
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleAddToOrder = (product) => {
    onAddToOrder(product); 
  };
  
  return (
    <div className='optionProducts'>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <div className='ImgProducts'>
          <img src={product.image} alt={product.name} className="product-image" />
          </div>
          <div className='descriptionProducts'>
          <h5>{product.name}</h5>
          <h6>Precio: ${product.price}</h6>
          </div>
          <div className='buttonmas'>
          <IncreaseButton onClick={() => handleAddToOrder(product)} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default OptionsProductsMenu;

