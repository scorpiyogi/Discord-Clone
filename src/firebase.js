// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBNvFPInpILdONC5NfrM_akJMctIzITqCY",
  authDomain: "discord-1d17c.firebaseapp.com",
  projectId: "discord-1d17c",
  storageBucket: "discord-1d17c.appspot.com",
  messagingSenderId: "259498051329",
  appId: "1:259498051329:web:2cb0faec1f5b115f5fbd00",
  measurementId: "G-5T051JP001",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
