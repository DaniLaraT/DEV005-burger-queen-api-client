const stringJSON = "application/json";
const http = "https://burger-queen-api-mock-production-7fa7.up.railway.app/";

/*------------------------------------- Petición para users --------------------------------------*/


/* Función para obtener información de usuarios */
export function getUsers() {
  return fetch(`${http}users`, {
    method: "GET",
    headers: {
      "Content-type": stringJSON,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para crear usuarios */
export function createUser(email, password, role) {
  return fetch(`${http}users`, {
    method: "POST",
    headers: {
      "Content-type": stringJSON,
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
    }),
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para eliminar usuarios */
export function deleteUser(id, token) {
  return fetch(`${http}users/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para editar usuarios */
export function editUser(token, uid, email, password, role) {
  return fetch(`${http}users/${uid}`, {
    method: "PATCH",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      email: email,
      password: password,
      role: role,
    }),
  })
    .then((res) => res) // Devuelve la respuesta
    .catch((err) => err); // Devuelve el error en caso de que ocurra
}

/*------------------------------------- Petición para products --------------------------------------*/

/* Función para obtener información de productos */
export function getProducts() {
  return fetch(`${http}products`, {
    method: "GET",
    headers: {
      "Content-type": stringJSON,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para eliminar productos */
export function deleteProduct(id, token) {
  return fetch(`${http}products/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}

/* Función para editar productos */
export function editProduct(token, uid, product, price, image, type) {
  return fetch(`${http}products/${uid}`, {
    method: "PATCH",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      product: product,
      price: price,
      image: image,
      type: type,
    }),
  })
    .then((res) => res) // Devuelve la respuesta
    .catch((err) => err); // Devuelve el error en caso de que ocurra
}

/* Función para crear productos */
export function createProduct(token, product, price, image, type) {
  return fetch(`${http}products`, {
    method: "POST",
    headers: {
      "Content-type": stringJSON,
      Authorization: token,
    },
    body: JSON.stringify({
      name: product,
      price: price,
      image: image,
      type: type,
    }),
  })
    .then((res) => res.json()) // Devuelve la respuesta JSON
    .catch((err) => {
      return err; // Devuelve el error en caso de que ocurra
    });
}
