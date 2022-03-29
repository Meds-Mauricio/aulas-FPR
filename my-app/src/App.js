import React from 'react'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shoopping from "../src/pages/Shooping";
import Mercado from './pages/Mercado';
import Lojas from './pages/Lojas';
import Cinema from './pages/Cinema';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Shoopping />} />
        <Route path='/cinema' element={<Cinema />} />
        <Route path='/lojas' element={<Lojas />} />
        <Route path='/mercado' element={<Mercado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;