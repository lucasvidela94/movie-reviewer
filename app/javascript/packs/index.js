import React from 'react'
import ReactDOM from 'react-dom'
import {createRoot}  from 'react-dom/client';
import App from "../src/components/App"
import { BrowserRouter ,Routes , Route } from "react-router-dom"


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App/>} />
        </Routes>
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
