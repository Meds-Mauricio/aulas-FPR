import React from 'react'
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Cadastro from './pages/cadastro';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/cadastro' element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    )
}