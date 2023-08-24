import React, { useState, useEffect } from 'react';

const EditUserModal = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtiene los datos del usuario
    const id = parseInt(window.location.pathname.split('/')[3]);
    fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleRoleChange = (e) => {
    setUser({ ...user, role: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar el formulario al servidor
    fetch(`/edit-user`, {
      method: 'post',
      body: JSON.stringify({
        id: user.id,
        email: user.email,
        password: user.password,
        role: user.role,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // El usuario se ha actualizado correctamente
          alert('Usuario actualizado correctamente');
          window.location.reload();
        } else {
          // Ha habido un error al actualizar el usuario
          alert(data.error);
        }
      });
  };

  return (
    <div className="modal fade" id="edit-user-modal" tabindex="-1" role="dialog" aria-labelledby="edit-user-modal-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="edit-user-modal-label">Editar usuario</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <input type="hidden" id="id" name="id" value={user.id} />
              <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={user.email}
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
                  value={user.password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role">Puesto o rol</label>
                <select
                  className="form-control"
                  id="role"
                  name="role"
                  value={user.role}
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

export default EditUserModal;