import React from 'react'
import Header from '../../components/Header';

function Lojas() {
  return (
    <div>
        <Header />
        <h1>você esta na pagina das lojas</h1>
        <input onChange = {(e) => {
            window.location.href = `/?${e.target.value}`
        }}/>
    </div>
  )
}

export default Lojas;