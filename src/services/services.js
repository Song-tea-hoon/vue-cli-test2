import firebase from 'firebase'

export default{
  login (email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  },
  signup (email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  },
  getTodoList () {
    return new Promise((resolve, reject) => {
      firebase.database().ref('todo').once('value', snapshot => {
        console.log('getTodoList', snapshot.val())
        resolve(snapshot.val())
      })
    })
  },
  addTodoList (item) {
    return new Promise((resolve, reject) => {
      let ref = firebase.database().ref('todo').push()
      ref.set(item)
      ref.once('value', snapshot => {
        console.log('addTodoList', snapshot.val())
        resolve(snapshot.val())
      })
    })
  }
}
