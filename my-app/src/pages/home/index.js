import React, { useState } from 'react'

function Home() {
    const nome = () => {
        localStorage.setItem('entrada', 'mauricio');
    }

    const [numero, setNumero] = useState()
    const multipicar = () => {
        sessionStorage.setItem('numero', numero)
    }
    return (
        <>
            <section>
                <div className='cabecalho'>
                    <button onClick={() => nome()}><a href='/inscritos'>entrar</a></button>
                </div>
                <div>
                    <input onChange={(e) => setNumero(e.target.value)} />
                    <button onClick={() => multipicar()}><a href='/resultados'>Resultado</a></button>
                </div>
            </section>
        </>
    )
}
export default Home;