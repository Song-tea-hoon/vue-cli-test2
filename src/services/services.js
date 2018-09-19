import firebase from 'firebase'
export default{
  login (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }
}
