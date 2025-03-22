import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
export default function Rabeb() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Nav/>}>
      <Route index element={<Home/>}/>
      <Route path='Contact' element={<Contact/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rabeb />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
