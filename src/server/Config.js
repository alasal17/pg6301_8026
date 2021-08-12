import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

var Config = {
    apiKey: "AIzaSyB_V-wGfUj74LykWLRT41_Nb1cgl3ryPHo",
    authDomain: "free-travel-e6d99.firebaseapp.com",
    projectId: "free-travel-e6d99",
    storageBucket: "free-travel-e6d99.appspot.com",
    messagingSenderId: "556150306153",
    appId: "1:556150306153:web:60b94cdf509e828e0879f8"
};
        // Initialize Firebase
firebase.initializeApp(Config);
firebase.firestore().settings({ timestampInSnapshots: true});

export default Config;