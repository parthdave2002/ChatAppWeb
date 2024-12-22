import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from "react-redux";
import { configureStore } from "./Store";
import './index.css'
import "react-lazy-load-image-component/src/effects/blur.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={configureStore({})}>
        <App />
      </Provider>
  </React.StrictMode>
)