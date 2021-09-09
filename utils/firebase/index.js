import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/performance'
import 'firebase/database'

const firebaseConfig = {}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

module.exports = { firebase }
