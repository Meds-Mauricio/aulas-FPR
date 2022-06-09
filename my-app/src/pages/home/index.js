import React, { useState, useEffect } from 'react'
import axios from 'axios'
function Home() {
    const [entrada, setEntrada] = useState()
    const entrar = () => {
        localStorage.setItem('entrada', entrada);
    }
    return (
        <>
            <section>
                <form className='cabecalho'>
                    <h1>Login</h1>
                    <label>entrada</label>
                    <input onChange={(e) => setEntrada(e.target.value)} />
:                    <button onClick={() => entrar()}>Entrar</button>
                    <a href='/inscritos'>Inscritos</a>
                </form>
            </section>
        </>
    )
}
export default Home;