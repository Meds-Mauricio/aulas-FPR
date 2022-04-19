import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Lojas from './pages/loja';
import Home from './pages/home';

function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/lojas' element={<Lojas />} />
        </Routes>
      </BrowserRouter>
    )
}
export default App;