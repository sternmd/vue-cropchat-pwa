import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyDsfAjin-CEEob7TTqmzlVqhxVnLVW8vtg",
  authDomain: "vue-cropchat-pwa.firebaseapp.com",
  databaseURL: "https://vue-cropchat-pwa.firebaseio.com",
  projectId: "vue-cropchat-pwa",
  storageBucket: "vue-cropchat-pwa.appspot.com",
  messagingSenderId: "432714052909"
};

firebase.initializeApp(config)

export default {
 database: firebase.database()
}
