import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqyHbKcjw8ltwLnjFi6QVk6Xx-d5oSqUI",
  authDomain: "chat-app-8de2c.firebaseapp.com",
  databaseURL: "https://chat-app-8de2c.firebaseio.com",
  projectId: "chat-app-8de2c",
  storageBucket: "chat-app-8de2c.appspot.com",
  messagingSenderId: "574863708868",
  appId: "1:574863708868:web:2748333a59119578972f91",
  measurementId: "G-JQRZTYG6PB"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()