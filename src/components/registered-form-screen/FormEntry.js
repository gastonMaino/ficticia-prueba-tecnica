import React from 'react'
import { useDispatch } from 'react-redux';
import { activeForm } from '../../actions/form';

export const FormEntry = ({ fullName, id, dni, age, gender, state, drivingLicense, wearGlasses, isDiabetic, otherDiseases }) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(activeForm(id, {
            fullName,
            dni,
            age,
            gender,
            state,
            drivingLicense,
            wearGlasses,
            isDiabetic,
            otherDiseases
        }))
    }

    return (
        <tbody>
            <tr className='table__body' onClick={handleClick}>
                <th>{fullName}</th>
                <th>{dni}</th>
                <th>{age}</th>
                <th>{gender}</th>
                <th>{state}</th>
                <th>{drivingLicense}</th>
                <th>{wearGlasses}</th>
                <th>{isDiabetic}</th>
                <th>{otherDiseases}</th>
            </tr>
        </tbody>
    )
}
