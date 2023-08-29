import React, { useState, useEffect } from "react";
import ModalConfirm from "./ModalConfirm";
import PropTypes from 'prop-types';

const ProductList = (props) => {
    const [selectedProduct, setSelectedProduct] = useState('');
    const [products, setProducts] = useState([]);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

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
    }, [products]);

    const handleDelete = (product) => {
        setSelectedProduct(product);
        setShowConfirmModal(true);
    }

    const handleEdit = (product) => {
        props.setSelectedProductForEdit(product);
        props.setShowEditProductForm(true);
    }

    return (
        <>
            {showConfirmModal && <ModalConfirm type={'products'} selectedItem={selectedProduct} setShowModalConfirm={setShowConfirmModal} />}
            <table className="table-products">
                <thead>
                    <tr>
                        <th colSpan="3" className="title-tables-admin">{props.productType[0].toUpperCase() + props.productType.substring(1)}</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="product-row">
                            <td className='cell-name'>{product.name}</td>
                            <td className='cell-edit'><button className="btns-tables-edit" onClick={() => handleEdit(product)}>Edit</button></td>
                            <td className='cell-delete'><button className="btns-tables-delete" onClick={() => handleDelete(product)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default ProductList;

ProductList.propTypes = {
    productType: PropTypes.string,
    setSelectedProductForEdit: PropTypes.func,
    setShowEditProductForm: PropTypes.func,
};
