// Función para obtener el token de localStorage
const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  };
  
  // Función para realizar la solicitud de obtención de usuarios
  const fetchUsers = () => {
    return new Promise((resolve, reject) => {
      const token = getAccessToken();
  
      if (token) {
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        };
  
        fetch('http://localhost:8080/users', {
          method: 'GET',
          headers: headers
        })
        .then(response => response.json())
        .then(data => {
          resolve(data); // Resuelve la promesa con los datos obtenidos
        })
        .catch(error => {
          reject(error); // Rechaza la promesa con el error
        });
      } else {
        reject(new Error('No token available'));
      }
    });
  };
  
  export default fetchUsers;
  

