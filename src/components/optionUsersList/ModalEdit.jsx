/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from 'prop-types'; // Importa PropTypes
import "./Input.css";
import { editUser } from "./apiFunctions";
import Input from "./input";


function ModalEdit({ onClose, userData, token }) {
  const [user, setUser] = useState(userData.email); // Cambio de 'employee' a 'user'
  const [pass, setPass] = useState("");
  const [role, setRole] = useState(userData.role);

  const listRole = [
    { role: "admin", title: "Administrador/a" },
    { role: "chef", title: "Cocinera/o" },
    { role: "waiter", title: "Mesera/o" },
  ];

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleConfirm = async () => {
    try {
      await editUser(token, userData.id, user, pass, role); // Cambio de 'employee' a 'user'
      onClose();
    } catch (error) {
      console.error("Error editing user:", error.message);
    }
  };

  return (
    <div className="modal" id="modalEdit">
      <div className="innerModal">
        <form className="viewAdmin">
          <label>
            <Input
              textLabel="Correo Electrónico"
              type="email"
              className="input"
              placeholder="example@example.com"
              value={user} // Cambio de 'employee' a 'user'
              onChange={(e) => setUser(e.target.value)} // Cambio de 'setEmployee' a 'setUser'
            />
          </label>
          <label>
            <Input
              textLabel="Contraseña"
              type="password"
              className="input"
              placeholder="******"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </label>
          <div className="containerRadio">
            {listRole.map((e) => (
              <label key={e.role}>
                <input
                  type="radio"
                  name="myRadio"
                  value={e.role}
                  checked={role === e.role}
                  onChange={handleRoleChange}
                />
                {e.title}
              </label>
            ))}
          </div>
          <button type="button" onClick={handleConfirm}>
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}

// Agrega la validación PropTypes para las propiedades
ModalEdit.propTypes = {
  onClose: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
  }).isRequired,
  token: PropTypes.string.isRequired,
};

export default ModalEdit;
