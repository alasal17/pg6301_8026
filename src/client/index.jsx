import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import '../public/index.css';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from "./components/reducers/rootReducer";
import thunk from "redux-thunk";
import Config from "../server/Config";
import {getFirebase, reactReduxFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore} from "redux-firestore";



const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reactReduxFirebase(Config, {userProfile: 'users', useFirestoreForProfile: true,attachAuthIsReady: true}), // redux binding for firebase
        reduxFirestore(Config) // redux bindings for firestore
    )
);
store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
})