import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import { activeForm, startDeleting, startSaveForm } from '../../actions/form';

import { useForm } from '../../hooks/useForm/useForm';

import './formScreen.css';

export const FormScreen = () => {
    const dispatch = useDispatch();

    const { active } = useSelector(state => state.forms)
    const [values, handleInputChange, reset] = useForm(active);
    const { fullName, id, dni, age, gender, state, drivingLicense, wearGlasses, isDiabetic, otherDiseases } = values;
    const activeId = useRef(active.id);
    const [valid, setValid] = useState(false)

    useEffect(() => {
        if (active.id !== activeId.current) {
            reset(active);
            activeId.current = active.id
        }
    }, [active, reset])

    useEffect(() => {
        dispatch(activeForm(values.id, { ...values }));
    }, [values, dispatch])

    const handleDelete = () => {
        dispatch(startDeleting(id));
    }

    const handleSave = (e) => {
        e.preventDefault()
        if (isValid()) {
            dispatch(startSaveForm(active))
        }
    }

    const isValid = () => {
        if (fullName.length < 2 || fullName === '') {
            setValid(true);
            return valid;
        } else if (dni < 8) {
            setValid(true);
            return valid;
        } else if (age === '') {
            setValid(true);
            return valid;
        } else if (gender === '') {
            setValid(true);
            return valid;
        } else if (state === '') {
            setValid(true);
            return valid;
        }

        setValid(false)
        return true;
    }
    

    return (
        <article >
            <section className='registered-clients' >
                <h1 className='registered-clients__title'>Registro de clientes</h1>
                <p className='registered-clients__paragraph'><span className='registered-clients__span'>*</span> Campos obligatorios</p>
                <form>
                    <div className='form-group'>
                        <label htmlFor='name'>Nombre completo<span className='registered-clients__span'>*</span></label>
                        <input type='text' placeholder='Nombre completo' id='name' name='fullName' value={fullName} onChange={handleInputChange} className={`input-value ${valid && 'input-danger'}`} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='id'>Identificacion <span className='registered-clients__span'>*</span></label>
                        <input type='text' placeholder='Numero de identificacion' id='id' name='dni' value={dni} onChange={handleInputChange} className={`input-value ${valid && 'input-danger'}`} />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='age'>Edad <span className='registered-clients__span'>*</span></label>
                        <input type='number' placeholder='Nombre completo' id='age' name='age' value={age} onChange={handleInputChange} className={`input-value ${valid && 'input-danger'}`} />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='genders'>Genero <span className='registered-clients__span'>*</span></label>
                        <select id='genders' name='gender' value={gender} onChange={handleInputChange} className={`input-value ${valid && 'input-danger'}`}>
                            <option value=''>seleccione un genero</option>
                            <option value='activo'>Hombre</option>
                            <option value='no-activo'>Mujer</option>
                            <option value='no-activo'>otro</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='state'>Estado del cliente <span className='registered-clients__span'>*</span></label>
                        <select id='state' name='state' value={state}
                            onChange={handleInputChange} className={`input-value ${valid && 'input-danger'}`}>
                            <option value=''>seleccione un estado</option>
                            <option value='activo'>Activo</option>
                            <option value='no-activo'>No activo</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='driver'>¿Tiene carnet de conducir?</label>
                        <select name='drivingLicense' id='driver' value={drivingLicense} onChange={handleInputChange}>
                            <option value='' >seleccione una opcion</option>
                            <option value='si'>Si</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='glasses'>¿Usa lentes?</label>
                        <select id='glasses' name='wearGlasses' value={wearGlasses} onChange={handleInputChange}>
                            <option value='' >seleccione una opcion</option>
                            <option value='si'>Si</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='health'>¿Es diabetico?</label>
                        <select id='health' name='isDiabetic' value={isDiabetic} onChange={handleInputChange}>
                            <option value=''>seleccione una opcion</option>
                            <option value='si'>Si</option>
                            <option value='no'>No</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='' >¿Padece alguna otra enfermedad? ¿Cuál?</label>
                        <textarea placeholder='Escriba su enfermedad' name='otherDiseases' value={otherDiseases} onChange={handleInputChange} ></textarea>
                    </div>
                    <button
                        className='btn-save'
                        onClick={handleSave}
                    >
                        Guardar
                    </button>
                </form>
            </section>

            <button
                className='btn-danger'
                onClick={handleDelete}
            >
                <i className="far fa-trash-alt"></i>
                <span className='btn-danger__span'>delete</span>
            </button>
        </article>


    )
}
