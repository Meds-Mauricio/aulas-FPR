import React from 'react'
import Home from './components/Home';
import  Esporte  from "./pages/esporte";
import Lojas from "./pages/lojas";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/esporte' element={<Esporte />} />
            <Route path='/lojas' element={<Lojas />} />
          </Routes>
        </BrowserRouter>
      )
}