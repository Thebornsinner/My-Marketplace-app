// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCmOuiIXxFZTKZmaPQGY_NpoZr5Isv77-8",
	authDomain: "house-marketplace-6c7cf.firebaseapp.com",
	projectId: "house-marketplace-6c7cf",
	storageBucket: "house-marketplace-6c7cf.appspot.com",
	messagingSenderId: "468183803914",
	appId: "1:468183803914:web:597e2b67374bbc6c3157f3",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
