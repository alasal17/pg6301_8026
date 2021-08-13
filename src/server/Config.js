import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var Config = {
    apiKey: "AIzaSyCbjW2dMJRvEnPJ1383StNsyAP_C0D7HDg",
    authDomain:"free-travel-a7378.firebaseapp.com",
    projectId:"free-travel-a7378",
    storageBucket:"free-travel-a7378.appspot.com",
    messagingSenderId:"918473356840",
    appId:"1:918473356840:web:6021c89b428b2d53da271d",
    measurementId:"G-YZPG6P5R31"
};
        // Initialize Firebase
firebase.initializeApp(Config);
firebase.firestore().settings({ timestampInSnapshots: true});

export default firebase;