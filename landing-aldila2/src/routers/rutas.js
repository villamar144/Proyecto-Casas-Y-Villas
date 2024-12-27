import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
// rutas.js
import Header from '../components/Header';
import Hero from '../components/Hero';
import { Benefits } from '../components/Benefits';
import { Cta } from '../components/Cta';
import { Footer } from '../components/Footer';
import { Login } from '../Pages/Login';
import { Register } from '../Pages/Register';
//import { Error } from '../components/Error'
import '../index.css'

export const rutas = () => {
  return (
    <BrowserRouter>

       {/*Cargar los componentes*/}
       {/*Aqui se cargan los componentes que conciden con el path*/}
        <Routes>
            <Route path="/" element={<Header/>}/> 
            <Route path="/Benefits" element={<Benefits/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/Cta" element={<Cta/>}/>
        </Routes>

    </BrowserRouter>
  )
}