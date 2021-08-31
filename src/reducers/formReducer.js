import { types } from "../types/types";

const initialState = {
    forms: [],
    active: null
}


export const formReducer = ( state = initialState, action) => {

    switch (action.type) {
        case types.formActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        case types.formAddNew:
            return {
                ...state,
                forms: [action.payload, ...state.forms]
            }

        case types.formLoad:
            return {
                ...state,
                forms: [...action.payload]
            }

        case types.formUpdate:
            return {
                ...state,
                forms: state.forms.map(
                    (form) => form.id === action.payload.id ? action.payload.form : form
                )
            }

        case types.formDelete:
            return {
                ...state,
                active:null,
                notes: state.forms.filter((form) => form.id !== action.payload)
            }
        
        case types.formLogoutCleaning:
            return {
                ...state,
                forms: [],
                active: null
            }
        default:
            return state;
    }

}