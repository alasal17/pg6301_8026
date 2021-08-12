import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import '../public/index.css';
import {createStore, applyMiddleware} from "redux";
import rootReducer from "../server/reducers/rootReducer";
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
