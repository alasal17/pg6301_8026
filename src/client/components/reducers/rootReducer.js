import authReducer from './authReducer'
import { combineReducers } from 'redux'
import dataReducer from "./dataReducer";
import {firestoreReducer} from "redux-firestore";
import {firebaseReducer} from "react-redux-firebase";

const rootReducer = combineReducers({
    auth: authReducer,
    trip: dataReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer