

//SOLO PRUEBA
const AuthPost = (email, password) => {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })
    .then((response) => response.json())
    .catch((error) => {
        console.error(error);
        throw new Error('Error en la conexión con el servidor: ' + error.message);
    })
};/* 

const AuthPost = async (email, password) => {
    try {
        const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            return await response.json();
        } else {
            //error de codigo solicitud
            alert('Los datos ingresados son incorrectos')
            throw new Error('Error en la solicitud: ' + response.status);
        }
        //error de conexion
    } catch (error) {
        alert('error')
        throw new Error('Error en la conexión con el servidor: ' + error.message);
    }
}; */

export default AuthPost;