import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { startNewForm } from '../../actions/form';
import { FormEntries } from '../registered-form-screen/FormEntries';

import './formAppBar.css';

export const FormAppBar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    const handleAddEntry = () => {
        dispatch(startNewForm());
    }

    return (
        <header className='header'>
            <div>
                <button
                    onClick={handleAddEntry}
                    className='new-registered'
                >
                    <i className="fas fa-plus-circle"></i>
                    <span className='new-registered__registered'> Nuevo Registro</span>
                </button>



                <button onClick={handleLogout} className='btn-logout'>
                    <i className="fas fa-sign-out-alt"></i>
                    <span className='btn-logout__span'>Salir</span>
                </button>
            </div>
            <FormEntries />
        </header>
    )
}
