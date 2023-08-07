/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import './formLogin.css'

const FormLogin = () => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
  })
 
  const [validations, setValidations] = React.useState({
    email: '',
    password: '',
  })
  
   const validateAll = () => {
    const { email, password } = values
    const validations = { email: '', password: '' }
    let isValid = true
    
    if (!email) {
      validations.email = 'Email is required'
      isValid = false
    }
    
    if (email && !/\S+@\S+\.\S+/.test(email)) {
      validations.email = 'Email format must be as example@mail.com'
      isValid = false
    }
    
    if (!password) {
      validations.password = 'Password is required'
      isValid = false
    }
    
    if (!isValid) {
      setValidations(validations)
    }
    
    return isValid
  } 

   const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''
    
    if (!value) {
      message = `${name} is required`
    }

    if (value && name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }
    
    setValidations({...validations, [name]: message })
  } 
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const isValid = validateAll()
    
    if (!isValid) {
      return false
    }
    console.log(JSON.stringify(values))
    return JSON.stringify(values);
   
  }
  
  const { email, password } = values

  const { 
    email: emailVal, 
    password: passwordVal, 
  } = validations
  
    return (
    <section className='sectionLogin'>
        <div className='nameLogin'>
            <h2>LOGIN</h2>
        </div>
        <div className='user'>
            <img src="/img/usuario.png" alt="" />
        </div>
         <form onSubmit={handleSubmit} className='formLogin' >
          <div>
              <input 
               type='text' 
                name='email'
                className='email' 
                placeholder='Email'
                value={email} 
                onChange={handleChange}
                onBlur={validateOne}
              />
            <div>{emailVal}</div>
          </div>
          
          <div>
              <input 
                type='password'
                name='password'
                className='password' 
                placeholder='Contraseña'
                value={password} 
                onChange={handleChange}
                onBlur={validateOne}
              />
            <div>{passwordVal}</div>
          </div>
          
          <button type="submit" className='buttonLogin'>Iniciar sesion</button>
        </form>
     </section>
    )
}


export default FormLogin;