import { firebase } from 'utils/firebase'

const signUpWithEmailAndPassword = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
}

const signInWithEmailAndPassword = (email, password) => {
    //Login with email and password on firebase
    return firebase.auth().signInWithEmailAndPassword(email, password)
}

const signInWithGoogle = () => {
    //Login with google on firebase
    return firebase
        .auth()
        .signInWithPopup(firebase.auth.GoogleAuthProvider.PROVIDER_ID)
}

const signInWithTwitter = () => {
    //Login with twitter on firebase
    return firebase
        .auth()
        .signInWithPopup(firebase.auth.TwitterAuthProvider.PROVIDER_ID)
}

const signInWithMicrosoft = () => {
    //Login with microsoft on firebase
    return firebase
        .auth()
        .signInWithPopup(firebase.auth.MicrosoftAuthProvider.PROVIDER_ID)
}

const signInWithFacebook = () => {
    //Login with facebook on firebase
    return firebase
        .auth()
        .signInWithPopup(firebase.auth.FacebookAuthProvider.PROVIDER_ID)
}

const signInWithApple = () => {
    //Login with apple on firebase
    return firebase
        .auth()
        .signInWithPopup(firebase.auth.AppleAuthProvider.PROVIDER_ID)
}

const signInAnonymously = () => {
    //Login with anonymous on firebase
    return firebase.auth().signInAnonymously()
}

const signOut = () => {
    //Logout from firebase
    return firebase.auth().signOut()
}

const updateUserProfile = (profile) => {
    //Update user profile on firebase
    return firebase.auth().currentUser.updateProfile(profile)
}

const updateUseEmail = (email) => {
    //Update user email on firebase
    return firebase.auth().currentUser.updateEmail(email)
}

const updateUserPassword = (password) => {
    //Update user password on firebase
    return firebase.auth().currentUser.updatePassword(password)
}

const sendEmailVerification = () => {
    //Send email verification on firebase
    return firebase.auth().currentUser.sendEmailVerification()
}

const sendPasswordResetEmail = (email) => {
    //Send password reset email on firebase
    return firebase.auth().currentUser.sendPasswordResetEmail(email)
}

module.exports = {
    signUpWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithGoogle,
    signInWithTwitter,
    signInWithMicrosoft,
    signInWithFacebook,
    signInWithApple,
    signInAnonymously,
    signOut,
    updateUserProfile,
    updateUseEmail,
    updateUserPassword,
    sendEmailVerification,
    sendPasswordResetEmail,
}
