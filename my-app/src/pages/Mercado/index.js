import React from 'react'
import Header from '../../components/Header';

function Mercado() {
  return (
    <div>
        <Header />
        <h1>você esta na pagina do mercado</h1>
        <input onChange = {(e) => {
            window.location.href = `/?${e.target.value}`
        }}/>
    </div>
  )
}

export default Mercado;