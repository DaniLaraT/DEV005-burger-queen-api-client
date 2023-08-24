import React, { useState, useEffect } from 'react';

const DeleteUserModal = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Obtiene los datos del usuario
    const id = parseInt(window.location.pathname.split('/')[3]);
    fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar la solicitud de eliminación al servidor
    fetch(`/delete-user`, {
      method: 'post',
      body: JSON.stringify({
        id: user.id,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // El usuario se ha eliminado correctamente
          alert('Usuario eliminado correctamente');
          window.location.reload();
        } else {
          // Ha habido un error al eliminar el usuario
          alert(data.error);
        }
      });
  };

  return (
    <div className="modal fade" id="delete-user-modal" tabindex="-1" role="dialog" aria-labelledby="delete-user-modal-label" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="delete-user-modal-label">Eliminar usuario</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>¿Estás seguro de que deseas eliminar al siguiente usuario?</p>
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Correo electrónico</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Puesto o rol</th>
                  <td>{user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" onClick={handleSubmit}>Confirmar</button>
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;