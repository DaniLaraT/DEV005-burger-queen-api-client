// eslint-disable-next-line no-unused-vars
import React from 'react'
import AuthPost from '../../api_function/apiMock';
import FormLogin from '../../components/login/formLogin';
import Logo from '../../components/logo/logo';
import './login.css'
import { useNavigate } from 'react-router';

const Login = () => {
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      const response = await AuthPost(values.email, values.password);
      // Aquí puedes hacer algo con la respuesta, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito.
      const userRole = response.user.role;

      console.log(response);

      // Verificar el rol y redirigir en consecuencia.
      if (userRole === 'admin') {
        navigate('/AdminProducts');
      } else if (userRole === 'waiter') {
          navigate('/MenuBreakfast');
      } else if (userRole === 'cheff') {
        navigate('/Kitchen');}
    } catch (error) {
      // Manejo de errores
      console.error(error.message);
    }
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