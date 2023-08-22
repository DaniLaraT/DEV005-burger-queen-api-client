// eslint-disable-next-line no-unused-vars
import React from 'react'
import AuthPost from '../../api_function/apiMock';
import FormLogin from '../../components/login/formLogin';
import Logo from '../../components/logo/logo';
import './login.css'
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (values) => {
    AuthPost(values.email, values.password)
      .then((response) => {
        const userRole = response.user.role;
  
        console.log(response);
        const accessToken = response.accessToken; // Obtén el token de la respuesta
      
      // Guarda el token en localStorage
      localStorage.setItem('accessToken', accessToken);
  
        // Verificar el rol y redirigir en consecuencia.
        const isAdmin = userRole === 'admin';
        const isWaiter = userRole === 'waiter';
        const isChef = userRole === 'chef'
        let route = '/Kitchen';
        if (isAdmin) {
          route ='/AdminProducts';
        } else if (isWaiter) {
          route ='/MenuBreakfast';
        }
        else if (isChef) {
          route ='/Kitchen';
        }
        navigate(route);
      })
      .catch((error) => {
        console.error(error); // Puedes imprimir el error en la consola para depuración
        Swal.fire({
          title: 'Error!',
          text: 'Datos incorrectos. Por favor, inténtalo nuevamente.',
          icon: 'error',
          confirmButtonText: 'OK',
          confirmButtonColor: '#760909'
          })
      })
  };




  return (
    <>
      <section className='loginTotal'>
        <div className='formLogin'>
          <FormLogin onFormSubmit={handleFormSubmit} />
        </div>
        <div className='logoLogin'>
          <Logo />
        </div>
      </section>
    </>
  );
};

export default Login;