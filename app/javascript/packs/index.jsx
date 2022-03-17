import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ReactDOM from "react-dom"
import App from "./src/components/App";

document.addEventListener('DOMContentLoaded',() => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>,
    document.body.appendChild(document.createElement("div"))
  )
})