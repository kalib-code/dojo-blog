import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAwjRC4DbtJwOYDZG89Zr7tYicxcY2E0yA",
    authDomain: "udemy-firebase-dd7db.firebaseapp.com",
    projectId: "udemy-firebase-dd7db",
    storageBucket: "udemy-firebase-dd7db.appspot.com",
    messagingSenderId: "330280532155",
    appId: "1:330280532155:web:40a47f48d43c85daf3919e",
    measurementId: "G-2CF4CQL2DV"
};
//init firebase
firebase.initializeApp(firebaseConfig)

//ini firestore service
const projectFirestore = firebase.firestore()

export { projectFirestore }