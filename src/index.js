import './style.css';
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import App from "./App";
import reducers from './store/reducers';

const store = createStore(reducers, applyMiddleware(ReduxThunk));

ReactDOM.render(
<Provider store={store}><App /></Provider>, 
document.getElementById("root"));
