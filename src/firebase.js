import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAHJnXr1Y5pPUelOdcXd_g-PplBltQj7Qw',
  authDomain: 'si-care-auth.firebaseapp.com',
  projectId: 'si-care-auth',
  storageBucket: 'si-care-auth.appspot.com',
  messagingSenderId: '581268021151',
  appId: '1:581268021151:web:dbfea6388d810b11cd67aa',
}

const firebaseDB = firebase.initializeApp(firebaseConfig)

const db = firebaseDB.database().ref()
const auth = firebase.auth()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

export { auth, googleAuthProvider, facebookAuthProvider, db }
