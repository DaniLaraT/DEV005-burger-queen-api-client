/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const ListUsers = (props) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Llamar al token almacenado
        const token = localStorage.getItem('token');
        // Solicitud a la API para traer los usuarios
        fetch('http://localhost:8080/users', {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
        })
        .then(response => response.json())
        .then(data => {
            // Filtramos los usuarios por su role
            const fetchEmployees = data.filter(user => user.role === props.role);
            setUsers(fetchEmployees);
        })
        .catch(error => {
            console.error('API error:', error);
        });
    }, [props.role]);

    // Al dar click en botón editar se abre formulario para editar usuario
    const handleEdit = (user) => {
        props.setSelectedUser(user);
        props.setShowFormEditUser(true);
    }

    return (
        <table className="table-employees">
            <thead>
                <tr>
                    <th colSpan="2" className="title-tables-admin">{props.role[0].toUpperCase() + props.role.substring(1)}s</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id} className="users-row">
                        <td className='celd-email'>{user.email}</td>
                        <td className='celd-edit'><button className="btns-tables-edit" onClick={() => handleEdit(user)}>Edit</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

ListUsers.propTypes = {
    role: PropTypes.string,
    setShowFormEditUser: PropTypes.func,
    setSelectedUser: PropTypes.func,
};

export default ListUsers;
