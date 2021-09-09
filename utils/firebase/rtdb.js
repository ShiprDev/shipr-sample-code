import { firebase } from 'utils/firebase'

const writeData = (ref, data) => {
    firebase.database().ref(ref).set(data)
}

const readData = (ref) => {
    return firebase
        .database()
        .ref(ref)
        .once('value')
        .then((snapshot) => {
            return snapshot.val()
        })
}

const deleteData = (ref) => {
    return firebase.database().ref(ref).remove()
}

const listenData = (ref) => {
    return firebase
        .database()
        .ref(ref)
        .on('value', (snapshot) => {
            return snapshot.val()
        })
}

const updateData = (ref, data) => {
    return firebase.database().ref(ref).update(data)
}

module.exports = { writeData, readData, deleteData, listenData, updateData }
