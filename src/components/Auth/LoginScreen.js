import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLoginEmailPassword } from '../../actions/auth'
import { useForm } from '../../hooks/useForm/useForm'

import './loginScreen.css';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { ui } = useSelector(state => state);
    const { loading } = ui;


    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();

        dispatch(startLoginEmailPassword(email, password))
    }


    return (
        <article className='auth'>
            <h1 className='auth__title'>Ficticia S.A - Registro de clientes</h1>

            <section className='auth__section'>
                <div>
                    <h2>Login</h2>
                    <form
                        onSubmit={handleLogin}
                        className='form'
                    >
                        <div className='form-group-login'>
                            <label>Correo Electronico</label>
                            <input
                                type='text'
                                placeholder='Enter your email'
                                name='email'
                                value={email}
                                className='auth__input'
                                onChange={handleInputChange}
                            />
                        </div>
        
                        <div className='form-group-login'>
                            <label>Contraseña</label>
                            <input
                                type='password'
                                placeholder='Enter your password'
                                name='password'
                                value={password}
                                className='auth__input'
                                onChange={handleInputChange}
                            />
                        </div>
        
                        <button className='btn btn-primary btn-block' disabled={loading} type='submit'>
                            Login
                        </button>
        
                    </form>
                </div>
            </section>
        </article>
    )
}
