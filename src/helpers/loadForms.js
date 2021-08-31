import { db } from "../firebase/firebaseConfig"

export const loadForms = async (uid) => {
    const noteSnap = await db.collection(`ADMIN/ficticia/clientes`).get();
    const notes = [];

    noteSnap.forEach( (snapChildren) => {
        notes.push({
            id: snapChildren.id,
            ...snapChildren.data()
        })
    })

    return notes;
}