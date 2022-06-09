import React from 'react'
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Inscritos from './pages/inscritos';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='inscritos' element={<Inscritos />} />
            </Routes>
        </BrowserRouter>
    )
}