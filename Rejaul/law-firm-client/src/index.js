import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from "./redux/store"
// import "./Assets/css/animate.min.css";
// import "./Assets/css/bootstrap.css";
import "./Assets/css/style.css";
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

