import { db } from "../firebase/firebaseConfig";
import { loadForms } from "../helpers/loadForms";
import { types } from "../types/types";

export const startNewForm = () => {
    return async (dispatch) => {
        const newForm = {
            fullName: '',
            dni: '',
            age: '', 
            gender: '', 
            state: '', 
            drivingLicense: '', 
            wearGlasses: '',
            isDiabetic: '', 
            otherDiseases: ''
        }

        const doc = await db.collection(`ADMIN/ficticia/clientes`).add(newForm);

        dispatch(activeForm(doc.id, newForm));
        dispatch(formAdd(doc.id, newForm));
    }
}

export const activeForm = (id, form) => ({
    type: types.formActive,
    payload: {
        id,
        ...form
    }
})

export const formAdd = (id, form) => ({
    type: types.formAddNew,
    payload: {
        id,
        ...form
    }
})

export const startLoadingForm = () => {
    return async (dispatch) => {
        const form = await loadForms();

        dispatch(setForm(form));
    }
}

export const setForm = (form) => ({
    type: types.formLoad,
    payload: form
})

export const startSaveForm = (form) => {
    return async (dispatch) => {
        const formFirestore = { ...form };
        delete formFirestore.id

        db.doc(`ADMIN/ficticia/clientes/${form.id}`).update(formFirestore);

        dispatch(refreshForm(form.id, formFirestore));
    }
}



export const refreshForm = (id, form) => ({
    type: types.formUpdate,
    payload: {
        id,
        form: {
            id,
            ...form
        }
    }
})

export const startDeleting = (id) => {
    return async (dispatch) => {

        db.doc(`ADMIN/ficticia/clientes/${id}`).delete();

        dispatch(deleteForm(id));
    }
}

export const deleteForm = (id) => ({
    type: types.formDelete,
    payload: id
})

export const formLogout = () => ({
    type: types.formLogoutCleaning
})