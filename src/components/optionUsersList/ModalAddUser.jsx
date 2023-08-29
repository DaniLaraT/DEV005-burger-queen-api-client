/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types'; 
import "./ModalAdd.css";
import Input from './input';

function ModalAddUser({ onClose }) {
  const [newUser, setNewUser] = useState("");
  const [newPass, setNewPass] = useState("");
  const listRole = [
    { role: "admin", title: "Administrador/a" },
    { role: "chef", title: "Cocinera/o" },
    { role: "waiter", title: "Mesera/o" },
  ];
  const [newRole, setNewRole] = useState(listRole[0].role);

  const saveUser = async () => {
    const response = await fetch('http://localhost:8080/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: newUser,
        password: newPass,
        role: newRole,
      }),
    });

    if (response.status === 200) {
      onClose();
    } else {
      console.log('Error creating user');
    }
  };

  return (
    <div className='modal' id="modalCreateUser">
      <div className='innerModal'>
        <form onSubmit={saveUser} className='viewAdmin'>
          <Input
            textLabel='Correo Electrónico'
            type='email'
            className='input'
            id='email'
            placeholder='example@example.com'
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <Input
            textLabel='Contraseña'
            type='password'
            className='input'
            id='password'
            placeholder='******'
            value={newPass}
            onChange={(e) => setNewPass(e.target.value)}
          />
          {listRole.map((e) => (
            <div className='containerRadio' key={e.role}>
              <label>
                <input
                  type='radio'
                  name='myRadio'
                  value={e.role}
                  checked={newRole === e.role}
                  onChange={() => {
                    setNewRole(e.role);
                  }}
                />
                {e.title}
              </label>
            </div>
          ))}
          <button type='submit'>Guardar Usuario</button>
        </form>
      </div>
    </div>
  );
}


ModalAddUser.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default ModalAddUser;

