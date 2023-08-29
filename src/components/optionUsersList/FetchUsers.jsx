const getAccessToken = () => {
  return localStorage.getItem('accessToken');
};
const FetchUsers = async () => {
  try {
    const token = getAccessToken();
    if (token) {
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const data = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: headers
      });
      const json = await data.json();
      console.log(json)
      return json;
    } else {
      throw new Error('No token available');
    }
  } catch (error) {
    console.error(error);
  }
};
export default FetchUsers;