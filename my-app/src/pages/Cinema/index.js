import React from 'react'
import Header from '../../components/Header';

function Cinema() {
  return (
    <div>
        <Header />
        <h1>você esta na pagina do cinema</h1>
        <input onChange = {(e) => {
            window.location.href = `/?${e.target.value}`
        }}/>
    </div>
  )
}

export default Cinema;