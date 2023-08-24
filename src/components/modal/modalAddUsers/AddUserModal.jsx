/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const AddUserModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar el formulario al servidor
  };

  return (
    <div className="modal fade" id="add-user-modal" tabIndex="-1" role="dialog" aria-labelledby="add-user-modal-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="add-user-modal-label">Agregar usuario</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Puesto o rol</label>
                <select
                  className="form-control"
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                >
                  <option value="admin">Administrador</option>
                  <option value="user">Usuario</option>
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Confirmar</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;