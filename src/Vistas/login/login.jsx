// eslint-disable-next-line no-unused-vars
import React from 'react'
import AuthPost from '../../api_function/apiMock';
import FormLogin from '../../components/login/formLogin';
import Logo from '../../components/logo/logo';
import './login.css'

const Login = () => {
  const handleFormSubmit = async (values) => {
    try {
      const response = await AuthPost(values.email, values.password);
      // Aquí puedes hacer algo con la respuesta, por ejemplo, redirigir al usuario o mostrar un mensaje de éxito.
      console.log(response);
    } catch (error) {
      // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario.
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