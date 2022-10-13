// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqisq_iaGMY2gqwvHCbbsiLi9xAPS9RRk",
  authDomain: "vitrual-tekk.firebaseapp.com",
  projectId: "vitrual-tekk",
  storageBucket: "vitrual-tekk.appspot.com",
  messagingSenderId: "937354361746",
  appId: "1:937354361746:web:721c091e40061cba689f4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);


export async function getData(){
    const myCollection = collection(firestore,"Productos");
    let snapShotDB = await getDocs(myCollection);
    let dataDocs = snapShotDB.docs.map(documento =>{
        let docFormat = {...documento.data(), id: documento.id}
        return docFormat
    } )
    return dataDocs;

}

export async function getSingleData(idParams){
    const docRef = doc(firestore,"Productos", idParams);
    const docSnapShot = await getDoc(docRef);
    const docFormat = {...docSnapShot.data(), id: docSnapShot.id};
    return docFormat;

}

export async function getCatData(catParams){
    const collectionRef = collection(firestore,"Productos");
    const queryCategory = query(collectionRef, where("description","==",catParams));
    const respuesta = await getDocs(queryCategory);

    let dataDocs = respuesta.docs.map(documento =>{
        let docFormat = {...documento.data(), id: documento.id}
        return docFormat
    } )
    return dataDocs;

}

export default firestore;