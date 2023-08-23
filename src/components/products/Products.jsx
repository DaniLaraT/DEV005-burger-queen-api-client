import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const ListProducts = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token');
    
        fetch('http://localhost:8080/products', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            const filteredProducts = data.filter(product => product.type === props.productType);
            setProducts(filteredProducts);
        })
        .catch(error => {
            console.error('API error:', error);
        });
    }, [props.productType]);

    const handleEdit = (product) => {
        props.setSelectedProductEdit(product);
        props.setShowEditProductForm(true);
    }

    return (
       <table className="table-products">
            <thead>
                <tr>
                    <th colSpan="2" className="title-tables-admin">{props.productType[0].toUpperCase() + props.productType.substring(1)}</th>
                </tr> 
            </thead>   
            <tbody>   
            {products.map((product) => (
                <tr key={product.id} className="product-row">
                    <td className='cell-name'>{product.name}</td>
                    <td className='cell-edit'><button className="btns-tables-edit" onClick={() => handleEdit(product)}>Edit</button></td>
                </tr>   
            ))}       
            </tbody>                   
        </table>
    );
};

ListProducts.propTypes = {
    productType: PropTypes.string,
    setSelectedProductEdit: PropTypes.func,
    setShowEditProductForm: PropTypes.func,
};

export default ListProducts;
