import { useState, useEffect } from "react";
import ModalConfirm from "./ModalConfirm";
import PropTypes from 'prop-types';

const ListUsers = (props) => {

    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState('');
    const [showModalConfirm, setShowModalConfirm] = useState(false);

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
            const fetchUsers = data.filter(user => user.role === props.role);
            setUsers(fetchUsers);
        })
        .catch(error => {
            console.error('API error:', error);
        });
    }, [users]);

    // Al dar click en botón delete se abre modal y desde allí se le elimina usuario
    const handleDelete = (user) => {
        setSelectedUser(user);
        setShowModalConfirm(true);
    }

    // Al dar click en botón editar se abre formulario para editar usuario
    const handleEdit = (user) => {
        props.setSelectedUser(user);
        props.setShowFormEditUser(true);
    }

    return (
       <>
         {showModalConfirm && <ModalConfirm type={'users'} selectedItem={selectedUser} setShowModalConfirm={setShowModalConfirm} />}
         <table className="table-users">
            <thead>
                <tr>
                    <th colSpan="3" className="title-tables-admin">{props.role[0].toUpperCase() + props.role.substring(1)}s</th>
                </tr> 
            </thead>   
            <tbody>   
            {users.map((user) => (
                <tr key={user.id} className="users-row">
                    <td className='celd-email'>{user.email}</td>
                    <td className='celd-edit'><button className="btns-tables-edit" onClick={() => handleEdit(user)}>Edit</button></td>
                    <td className='celd-delete'><button className="btns-tables-delete" onClick={() => handleDelete(user)}>Delete</button></td>            
                </tr>   
                )) }       
            </tbody>                   
        </table>
       </>
    );
};

export default ListUsers;

ListUsers.propTypes = {
    role: PropTypes.string,
    setShowFormEditUser: PropTypes.func,
    setSelectedUser: PropTypes.func,
};
