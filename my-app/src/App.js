import React from 'react'
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/setorMasculino' element={<setorMasculino />} />
                <Route path='/setorFeminino' element={<setorFeminina />} />
                <Route path='/setorInfantil' element={<setorInfantil />} />
            </Routes>
        </BrowserRouter>
    )
}