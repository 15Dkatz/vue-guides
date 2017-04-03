import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCIi5MNGQByYZn1XnqTfoWdO104y0H9rDc",
  authDomain: "turnout-25be4.firebaseapp.com",
  databaseURL: "https://turnout-25be4.firebaseio.com",
  projectId: "turnout-25be4",
  storageBucket: "turnout-25be4.appspot.com",
  messagingSenderId: "356391668928"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
