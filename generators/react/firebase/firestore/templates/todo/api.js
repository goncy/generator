import firebase from "../firebase";

export default {
  add: (user, todo) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .add(todo),
  remove: (user, id) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .doc(id)
      .delete(),
  onChange: (user, callback) =>
    firebase.database
      .collection("users")
      .doc(user)
      .collection("todos")
      .onSnapshot(snapshot => callback(snapshot.docs.map(doc => ({id: doc.id, ...doc.data()})))),
};
