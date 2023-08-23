export const deleteUsers = async (usersId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await fetch(`https://burger-queen-api-mock-u59i-dev.fl0.io/users/${usersId}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al eliminar el usuario');
      }
  
      console.log('Usuario eliminado correctamente');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  