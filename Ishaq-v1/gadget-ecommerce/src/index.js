import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import App from './App';
import "./assets/css/custom.scss";
import store from './redux/store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


