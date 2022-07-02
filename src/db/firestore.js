import "@/firebase"

import { getFirestore, doc, setDoc, addDoc, deleteDoc, getDocs, collection, getDoc } from "firebase/firestore"


const db = getFirestore()


export const addFav = async(meal) => { 
    await setDoc(doc(db, "favorites", meal.idMeal), meal) 
    // como setDoc devuelve una promesa vacía, consultamos la BBDD
    // para ver si el documento se ha creado correctamente
    const res = await getDoc(doc(db, "favorites", meal.idMeal))
    if (res.exists()) {
        return res.data();
      } else {
        return null;
      }
}     

export const getAllFavs = async() => {
    const queryResponse = await getDocs(collection(db, "favorites")) 
    return queryResponse
}

export const removeFav = async(id) => { 
    await deleteDoc(doc(db, "favorites", id))
}


 

export default db