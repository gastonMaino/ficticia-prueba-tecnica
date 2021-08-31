import React from 'react'
import { useSelector } from 'react-redux';
import { FormEntry } from './FormEntry';

export const FormEntries = () => {
    
    const { forms } = useSelector(state => state.forms)

    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Dni</th>
                    <th>Edad</th>
                    <th>Genero</th>
                    <th>Estado</th>
                    <th>Licencia de conducir</th>
                    <th>Usa lentes</th>
                    <th>Es diabetico</th>
                    <th>Otras enfermedades</th>
                </tr>
            </thead>
            {
                forms.map((form) => <FormEntry key={form.id}  {...form} />)
            }
        </table>
    )
}
