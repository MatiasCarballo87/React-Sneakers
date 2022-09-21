// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3oYeXPqCsMuFyCw2nh2XrdZSzr2BuQ58",
  authDomain: "react-sneaker-51ace.firebaseapp.com",
  projectId: "react-sneaker-51ace",
  storageBucket: "react-sneaker-51ace.appspot.com",
  messagingSenderId: "456262199245",
  appId: "1:456262199245:web:d255ea644ad3790b1fc684"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const firestorePromisetwo = async (id) => {
    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
    return {
        id: docSnap.id, 
        ...docSnap.data()};
    } else {
    console.log("No such document!");
    }
    
}


export const firestorePromise = async (Id) => {
    let q;

    if (Id) {
        q = query(collection(db, "products"), where('categoryId', '==', Id));
    }else{
        q = query(collection(db, "products")); 
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    return dataFromFirestore
}    
