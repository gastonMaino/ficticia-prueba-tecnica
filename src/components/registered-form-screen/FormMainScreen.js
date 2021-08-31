import React from 'react';
import { useSelector } from 'react-redux';
import { FormAppBar } from '../forms/FormAppBar';
import { FormScreen } from '../forms/FormScreen';
import { NothingSelected } from './NothingSelected';

import './formRegistered.css';

export const FormMainScreen = () => {

    const { active } = useSelector(state => state.forms)

    return (
        <div className='journal__main-content animate__animated animate__fadeIn animate__fast'>
                <FormAppBar />

            <main>
                {
                    (active)
                        ? <FormScreen />
                        : <NothingSelected />
                }
            </main>
        </div>
    )
}
