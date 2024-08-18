import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store.js';
import App from 'components/App/App';



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <Provider store={store}>
    <BrowserRouter basename="/Camper-Advert-App">
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
