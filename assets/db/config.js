const firebaseConfig = {
  apiKey: "AIzaSyBFJoyV9JL-0-1p3JwBN6586N-5v5KW1zA",
  authDomain: "yonikapi-2e014.firebaseapp.com",
  projectId: "yonikapi-2e014",
  storageBucket: "yonikapi-2e014.appspot.com",
  messagingSenderId: "362188361028",
  appId: "1:362188361028:web:4443b2f849e21dabe95b11",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const GoogleService = new firebase.auth.GoogleAuthProvider();
export { GoogleService, auth, db };
