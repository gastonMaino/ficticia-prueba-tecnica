import { types } from "../types/types";
import { firebase} from '../firebase/firebaseConfig';
import { removeLoading, startLoading } from "./ui";
import { formLogout } from './form';

export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLoading())

        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(login(user.uid))
                dispatch(removeLoading())
            })
            .catch(() => {
                dispatch(removeLoading())
            })
    }
}

export const login = (uid) => {
    return {
        type: types.login,
        payload: {
            uid
        }
    }

}

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut()

        dispatch(logout());
        dispatch(formLogout())
    }
}

export const logout = () => ({
    type: types.logout
})